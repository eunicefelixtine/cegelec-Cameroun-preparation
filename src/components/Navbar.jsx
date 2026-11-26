import { useState } from 'react'
import { useStore } from '../lib/store.jsx'

export const NAV = [
  { path: 'accueil', label: 'Accueil', icon: '🏠' },
  { path: 'entreprise', label: 'Cegelec', icon: '🏢' },
  { path: 'metiers', label: 'Métiers', icon: '🛠️' },
  { path: 'questions', label: 'Questions', icon: '❓' },
  { path: 'quiz', label: 'Quiz', icon: '🎯' },
  { path: 'simulateur', label: 'Simulateur', icon: '🎤' },
  { path: 'conseils', label: 'Conseils', icon: '💡' },
  { path: 'checklist', label: 'Checklist', icon: '✅' },
  { path: 'progression', label: 'Progression', icon: '📈' },
]

export default function Navbar({ current }) {
  const { state, update } = useStore()
  const [open, setOpen] = useState(false)
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#/accueil" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <svg viewBox="0 0 64 64" width="26" height="26"><path d="M36 8 16 36h13l-3 20 22-30H34z" fill="#fff" /></svg>
          </span>
          <span className="brand-text">
            <b>Cegelec</b> <em>Prep</em>
          </span>
        </a>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {NAV.map((n) => (
            <a
              key={n.path}
              href={`#/${n.path}`}
              className={current === n.path ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              <span className="ico">{n.icon}</span>
              {n.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={() => update((s) => ({ dark: !s.dark }))}
            aria-label="Changer de thème"
            title="Thème clair / sombre"
          >
            {state.dark ? '☀️' : '🌙'}
          </button>
          <button className="icon-btn burger" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  )
}
