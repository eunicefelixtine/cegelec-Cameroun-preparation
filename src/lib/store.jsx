import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const KEY = 'cegelec-prep-v1'

export const initialState = {
  mastered: [],
  favorites: [],
  quizHistory: [],
  simHistory: [],
  checklist: {},
  interviewDate: '',
  pitch: {},
  star: {},
  dark: false,
  visited: [],
  xp: 0,
  days: [],
}

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return initialState
    return { ...initialState, ...JSON.parse(raw) }
  } catch {
    return initialState
  }
}

const Ctx = createContext(null)

export function StoreProvider({ children }) {
  const [state, setState] = useState(load)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state))
    } catch {
      /* stockage indisponible : on ignore */
    }
    document.documentElement.dataset.theme = state.dark ? 'dark' : 'light'
  }, [state])

  // série de jours d'entraînement
  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10)
    setState((s) => (s.days.includes(today) ? s : { ...s, days: [...s.days, today].slice(-60) }))
  }, [])

  const update = useCallback((patch) => {
    setState((s) => ({ ...s, ...(typeof patch === 'function' ? patch(s) : patch) }))
  }, [])

  const toggleIn = useCallback((key, id) => {
    setState((s) => {
      const list = s[key]
      return { ...s, [key]: list.includes(id) ? list.filter((x) => x !== id) : [...list, id] }
    })
  }, [])

  const addXp = useCallback((n) => setState((s) => ({ ...s, xp: s.xp + n })), [])
  const reset = useCallback(() => setState({ ...initialState, dark: state.dark }), [state.dark])

  const value = useMemo(
    () => ({ state, update, toggleIn, addXp, reset }),
    [state, update, toggleIn, addXp, reset],
  )
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useStore = () => useContext(Ctx)
