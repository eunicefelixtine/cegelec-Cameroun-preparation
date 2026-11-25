import SmartImage from '../components/SmartImage.jsx'
import { Ring } from '../components/ui.jsx'
import { IMAGES, keyFigures, flashFacts } from '../data/company.js'
import { QUESTIONS, CATEGORIES } from '../data/questions.js'
import { useStore } from '../lib/store.jsx'
import { readiness, earned, BADGES } from '../lib/badges.js'
import { useCountUp } from '../lib/hooks.js'
import { useState } from 'react'

const FEATURES = [
  { path: 'entreprise', icon: '🏢', title: 'Découvrir Cegelec', text: 'Histoire, métiers, marques, valeurs et déroulé du recrutement.' },
  { path: 'metiers', icon: '🛠️', title: 'Fiches métiers', text: 'Missions, compétences et questions propres à chaque poste.' },
  { path: 'questions', icon: '❓', title: 'Banque de questions', text: `${QUESTIONS.length} questions avec pistes de réponse, favoris et flashcards.` },
  { path: 'quiz', icon: '🎯', title: 'Quiz interactifs', text: 'Testez vos connaissances : entreprise, HSE, technique.' },
  { path: 'simulateur', icon: '🎤', title: 'Simulateur d’entretien', text: 'Questions lues à voix haute, chronomètre et auto-évaluation.' },
  { path: 'conseils', icon: '💡', title: 'Pitch & méthode STAR', text: 'Construisez votre présentation et vos réponses.' },
]

function Stat({ value, suffix, label }) {
  const n = useCountUp(value)
  return (
    <div className="stat">
      <strong>
        {value === 1979 ? n : n.toLocaleString('fr-FR')}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  )
}

export default function Home() {
  const { state, update } = useStore()
  const score = readiness(state)
  const day = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 864e5)
  const daily = QUESTIONS[day % QUESTIONS.length]
  const cat = CATEGORIES.find((c) => c.id === daily.cat)
  const [showA, setShowA] = useState(false)
  const [fact, setFact] = useState(day % flashFacts.length)
  const [flip, setFlip] = useState(false)

  const days = state.interviewDate
    ? Math.ceil((new Date(state.interviewDate + 'T00:00:00') - new Date().setHours(0, 0, 0, 0)) / 864e5)
    : null

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow light">🇨🇲 Cegelec Cameroun · VINCI Energies</span>
          <h1>
            Décrochez votre entretien <span className="hl">chez Cegelec</span>.
          </h1>
          <p>
            Tout ce qu'il faut savoir sur l'entreprise, des centaines de réponses possibles, des quiz et un simulateur d'entretien pour arriver
            confiant le jour J.
          </p>
          <div className="hero-cta">
            <a className="btn btn-white" href="#/simulateur">🎤 Lancer une simulation</a>
            <a className="btn btn-ghost" href="#/entreprise">Découvrir l'entreprise →</a>
          </div>
          <div className="hero-countdown">
            {days === null ? (
              <label>
                📅 Date de votre entretien :
                <input type="date" onChange={(e) => update({ interviewDate: e.target.value })} />
              </label>
            ) : (
              <div className="countdown">
                <div>
                  <strong>{days > 0 ? `J-${days}` : days === 0 ? "C'est aujourd'hui !" : 'Terminé'}</strong>
                  <span>{days > 0 ? 'avant votre entretien' : days === 0 ? 'Bonne chance 🍀' : 'Bravo pour votre parcours'}</span>
                </div>
                <button className="link-btn" onClick={() => update({ interviewDate: '' })}>Modifier</button>
              </div>
            )}
          </div>
        </div>
        <div className="hero-visual">
          <SmartImage src={IMAGES.hero} alt="Ingénieur sur un site industriel" scene="pylon" className="hero-img" />
          <div className="float-card fc1">
            <Ring value={score} size={78} stroke={8} />
            <div>
              <b>Votre préparation</b>
              <small>{score < 30 ? 'On démarre !' : score < 70 ? 'Bonne progression' : 'Presque prêt !'}</small>
            </div>
          </div>
          <div className="float-card fc2">
            <span className="big">🦺</span>
            <div>
              <b>Sécurité d'abord</b>
              <small>ISO 45001 · ISO 14001</small>
            </div>
          </div>
        </div>
      </section>

      <section className="stats reveal">
        {keyFigures.map((k) => (
          <Stat key={k.label} {...k} />
        ))}
      </section>

      <section className="section">
        <h2 className="section-title reveal">Tout pour réussir, au même endroit</h2>
        <div className="grid g3">
          {FEATURES.map((f, i) => (
            <a key={f.path} href={`#/${f.path}`} className="card feature reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
              <span className="arrow">Ouvrir →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section two">
        <div className="card daily reveal">
          <span className="eyebrow">Question du jour · {cat.icon} {cat.label}</span>
          <h3>{daily.q}</h3>
          {showA ? (
            <>
              <p className="tip">💡 {daily.tip}</p>
              <p className="answer">{daily.answer}</p>
            </>
          ) : (
            <button className="btn btn-red" onClick={() => setShowA(true)}>Voir la piste de réponse</button>
          )}
        </div>

        <div className="card flash reveal">
          <span className="eyebrow">Flash connaissance</span>
          <div className={`flipcard ${flip ? 'flipped' : ''}`} onClick={() => setFlip(!flip)}>
            <div className="face front"><p>{flashFacts[fact].q}</p><small>Touchez pour la réponse</small></div>
            <div className="face back"><p>{flashFacts[fact].a}</p></div>
          </div>
          <button
            className="btn btn-ghost-red"
            onClick={() => {
              setFlip(false)
              setFact((fact + 1) % flashFacts.length)
            }}
          >
            Fait suivant →
          </button>
        </div>
      </section>

      <section className="section reveal">
        <div className="card badges-strip">
          <div>
            <h3>🏅 Vos badges</h3>
            <p className="muted">{earned(state).length} / {BADGES.length} débloqués</p>
          </div>
          <div className="badge-row">
            {BADGES.map((b) => (
              <span key={b.id} className={`badge-pill ${b.test(state) ? 'on' : ''}`} title={`${b.title} — ${b.desc}`}>
                {b.icon}
              </span>
            ))}
          </div>
          <a className="btn btn-ghost-red" href="#/progression">Voir ma progression</a>
        </div>
      </section>
    </>
  )
}
