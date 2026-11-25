import { useEffect, useState } from 'react'

export function Ring({ value, size = 120, stroke = 10, label, sub }) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const [v, setV] = useState(0)
  useEffect(() => {
    const id = requestAnimationFrame(() => setV(value))
    return () => cancelAnimationFrame(id)
  }, [value])
  return (
    <div className="ring" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={r} className="ring-bg" strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          className="ring-fg"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - Math.min(100, v) / 100)}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="ring-label">
        <strong>{label ?? `${Math.round(value)}%`}</strong>
        {sub && <small>{sub}</small>}
      </div>
    </div>
  )
}

export function Bar({ value, max = 100 }) {
  return (
    <div className="bar">
      <span style={{ width: `${Math.min(100, (value / max) * 100)}%` }} />
    </div>
  )
}

export function PageHeader({ eyebrow, title, text, children }) {
  return (
    <header className="page-head reveal">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
      {text && <p>{text}</p>}
      {children}
    </header>
  )
}

export function Confetti() {
  const pieces = Array.from({ length: 36 }, (_, i) => i)
  return (
    <div className="confetti" aria-hidden>
      {pieces.map((i) => (
        <i
          key={i}
          style={{
            left: `${(i * 97) % 100}%`,
            animationDelay: `${(i % 12) * 0.08}s`,
            background: ['#d71920', '#ff5a5f', '#ffd166', '#fff', '#9b0f14'][i % 5],
          }}
        />
      ))}
    </div>
  )
}
