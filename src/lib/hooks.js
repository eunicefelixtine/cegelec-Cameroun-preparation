import { useEffect, useRef, useState } from 'react'

/** Lit le hash (#/page?cle=valeur) et réagit aux changements. */
export function useRoute() {
  const parse = () => {
    const raw = window.location.hash.replace(/^#\/?/, '')
    const [path, query = ''] = raw.split('?')
    return { path: path || 'accueil', params: Object.fromEntries(new URLSearchParams(query)) }
  }
  const [route, setRoute] = useState(parse)
  useEffect(() => {
    const on = () => {
      setRoute(parse())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return route
}

export const go = (path) => {
  window.location.hash = `#/${path}`
}

/** Fait apparaître les éléments au scroll. */
export function useReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

/** Compteur animé. */
export function useCountUp(target, duration = 1200) {
  const [n, setN] = useState(0)
  useEffect(() => {
    let raf
    const start = performance.now()
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration)
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])
  return n
}

/** Compte à rebours en secondes, avec contrôle. */
export function useCountdown(seconds, active, onEnd) {
  const [left, setLeft] = useState(seconds)
  const endRef = useRef(onEnd)
  endRef.current = onEnd
  useEffect(() => setLeft(seconds), [seconds, active])
  useEffect(() => {
    if (!active) return
    const id = setInterval(() => {
      setLeft((l) => {
        if (l <= 1) {
          clearInterval(id)
          setTimeout(() => endRef.current && endRef.current(), 0)
          return 0
        }
        return l - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [active, seconds])
  return left
}

export const shuffle = (arr) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export const speak = (text) => {
  if (!('speechSynthesis' in window)) return false
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = 'fr-FR'
  u.rate = 0.98
  window.speechSynthesis.speak(u)
  return true
}

export const stopSpeak = () => {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel()
}
