import { PageHeader, Ring, Bar } from '../components/ui.jsx'
import { useStore } from '../lib/store.jsx'
import { BADGES, readiness } from '../lib/badges.js'
import { QUESTIONS, CATEGORIES } from '../data/questions.js'

const dt = (iso) => new Date(iso).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })

export default function Progress() {
  const { state, reset } = useStore()
  const score = readiness(state)
  const level = Math.floor(state.xp / 100) + 1
  const lastQuiz = state.quizHistory.slice(-8)

  return (
    <>
      <PageHeader eyebrow="Tableau de bord" title="Votre progression" text="Un aperçu de votre niveau de préparation et de vos points à renforcer." />

      <div className="grid g3 reveal">
        <div className="card pad center-t">
          <Ring value={score} size={140} stroke={12} sub="préparation" />
          <p className="muted">Score global calculé sur vos révisions, quiz, simulations et checklist.</p>
        </div>
        <div className="card pad">
          <h3>🎮 Niveau {level}</h3>
          <Bar value={state.xp % 100} max={100} />
          <p className="muted">{state.xp} XP · {100 - (state.xp % 100)} XP avant le niveau suivant</p>
          <div className="mini-stats">
            <div><b>{state.mastered.length}</b><span>questions maîtrisées</span></div>
            <div><b>{state.quizHistory.length}</b><span>quiz</span></div>
            <div><b>{state.simHistory.length}</b><span>simulations</span></div>
            <div><b>{state.days.length}</b><span>jours actifs</span></div>
          </div>
        </div>
        <div className="card pad">
          <h3>📊 Questions par thème</h3>
          {CATEGORIES.map((c) => {
            const all = QUESTIONS.filter((q) => q.cat === c.id)
            const ok = all.filter((q) => state.mastered.includes(q.id)).length
            return (
              <div className="cat-row" key={c.id}>
                <span>{c.icon} {c.label}</span>
                <Bar value={ok} max={all.length} />
                <small>{ok}/{all.length}</small>
              </div>
            )
          })}
        </div>
      </div>

      <h3 className="section-sub">🏅 Badges</h3>
      <div className="grid g5">
        {BADGES.map((b) => {
          const on = b.test(state)
          return (
            <div className={`card badge ${on ? 'on' : ''}`} key={b.id}>
              <span className="badge-ico">{on ? b.icon : '🔒'}</span>
              <b>{b.title}</b>
              <small>{b.desc}</small>
            </div>
          )
        })}
      </div>

      <div className="grid g2">
        <div className="card pad">
          <h3>🎯 Derniers quiz</h3>
          {lastQuiz.length ? (
            <div className="spark">
              {lastQuiz.map((h, i) => {
                const pct = Math.round((h.score / h.total) * 100)
                return (
                  <div key={i} className="spark-col" title={`${pct}%`}>
                    <span style={{ height: `${Math.max(6, pct)}%` }} />
                    <small>{dt(h.date)}</small>
                  </div>
                )
              })}
            </div>
          ) : <p className="muted">Aucun quiz joué pour l'instant.</p>}
        </div>
        <div className="card pad">
          <h3>🎤 Dernières simulations</h3>
          {state.simHistory.length ? (
            <ul className="hist">
              {state.simHistory.slice(-6).reverse().map((h, i) => (
                <li key={i}><span>{dt(h.date)}</span><span>{h.n} questions</span><b>{h.avg.toFixed(1)}/5</b></li>
              ))}
            </ul>
          ) : <p className="muted">Aucune simulation terminée pour l'instant.</p>}
        </div>
      </div>

      <div className="row center">
        <button
          className="link-btn danger-link"
          onClick={() => window.confirm('Effacer toute votre progression ?') && reset()}
        >
          Réinitialiser ma progression
        </button>
      </div>
    </>
  )
}
