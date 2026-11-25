import { useEffect, useMemo, useState } from 'react'
import { PageHeader, Ring, Bar, Confetti } from '../components/ui.jsx'
import { QUESTIONS, CATEGORIES } from '../data/questions.js'
import { JOB_FILTERS } from '../data/jobs.js'
import { useStore } from '../lib/store.jsx'
import { shuffle, speak, stopSpeak, useCountdown } from '../lib/hooks.js'

const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

export default function Simulator({ params }) {
  const { update, addXp } = useStore()
  const [cfg, setCfg] = useState({ job: params.job || 'all', count: 6, secs: 90, voice: true, cats: CATEGORIES.map((c) => c.id).filter((c) => c !== 'anglais') })
  const [run, setRun] = useState(null) // { qs, i, answers, phase: 'answer' | 'review', ratings }
  const [text, setText] = useState('')

  const pool = useMemo(
    () => QUESTIONS.filter((q) => cfg.cats.includes(q.cat) && (cfg.job === 'all' || q.jobs.includes('all') || q.jobs.includes(cfg.job))),
    [cfg.cats, cfg.job],
  )

  const active = run && run.phase === 'answer'
  const left = useCountdown(cfg.secs, active, () => run && setRun((r) => (r && r.phase === 'answer' ? { ...r, phase: 'review' } : r)))

  // Lecture vocale de la question
  useEffect(() => {
    if (active && cfg.voice) speak(run.qs[run.i].q)
    return () => stopSpeak()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run && run.i, run && run.phase === 'answer'])

  const start = () => {
    setText('')
    setRun({ qs: shuffle(pool).slice(0, cfg.count), i: 0, phase: 'answer', answers: [], ratings: [] })
  }

  const toReview = () => setRun({ ...run, phase: 'review' })

  const rate = (n) => {
    const answers = [...run.answers, text]
    const ratings = [...run.ratings, n]
    setText('')
    if (run.i + 1 < run.qs.length) return setRun({ ...run, i: run.i + 1, phase: 'answer', answers, ratings })
    const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length
    update((s) => ({ simHistory: [...s.simHistory, { date: new Date().toISOString(), avg, n: ratings.length }].slice(-30) }))
    addXp(20 + ratings.length * 5)
    setRun({ ...run, answers, ratings, phase: 'done' })
  }

  if (!run) {
    return (
      <>
        <PageHeader eyebrow="Entraînement réel" title="Simulateur d'entretien" text="Les questions sont lues à voix haute, un chronomètre tourne, puis vous comparez votre réponse avec les conseils et vous vous auto-évaluez." />
        <div className="card pad sim-setup reveal">
          <div className="form-grid">
            <label>Poste visé
              <select value={cfg.job} onChange={(e) => setCfg({ ...cfg, job: e.target.value })}>
                {JOB_FILTERS.map((j) => <option key={j.id} value={j.id}>{j.title}</option>)}
              </select>
            </label>
            <label>Nombre de questions
              <select value={cfg.count} onChange={(e) => setCfg({ ...cfg, count: +e.target.value })}>
                {[4, 6, 8, 10].map((n) => <option key={n} value={n}>{n} questions</option>)}
              </select>
            </label>
            <label>Temps par question
              <select value={cfg.secs} onChange={(e) => setCfg({ ...cfg, secs: +e.target.value })}>
                {[60, 90, 120, 180].map((n) => <option key={n} value={n}>{n} secondes</option>)}
              </select>
            </label>
            <label className="check"><input type="checkbox" checked={cfg.voice} onChange={(e) => setCfg({ ...cfg, voice: e.target.checked })} /> 🔊 Lire les questions à voix haute</label>
          </div>
          <h4>Thèmes inclus</h4>
          <div className="chips">
            {CATEGORIES.map((c) => {
              const on = cfg.cats.includes(c.id)
              return (
                <button key={c.id} className={`chip btn-chip ${on ? 'on' : ''}`} onClick={() => setCfg({ ...cfg, cats: on ? cfg.cats.filter((x) => x !== c.id) : [...cfg.cats, c.id] })}>
                  {c.icon} {c.label}
                </button>
              )
            })}
          </div>
          <div className="row gap center-v">
            <button className="btn btn-red btn-lg" disabled={!pool.length} onClick={start}>🎬 Démarrer l'entretien</button>
            <span className="muted">{pool.length} questions disponibles avec ces réglages</span>
          </div>
        </div>
      </>
    )
  }

  if (run.phase === 'done') {
    const avg = run.ratings.reduce((a, b) => a + b, 0) / run.ratings.length
    const pct = Math.round((avg / 5) * 100)
    return (
      <>
        {pct >= 70 && <Confetti />}
        <PageHeader eyebrow="Bilan" title="Entretien terminé 🎤" />
        <div className="card pad result">
          <Ring value={pct} size={160} stroke={14} label={`${avg.toFixed(1)}/5`} sub="auto-évaluation" />
          <div>
            <p>
              {pct >= 75 ? 'Très bonne maîtrise : vous êtes prêt à convaincre.' : pct >= 50 ? 'Bonne base. Retravaillez les réponses notées en dessous de 3.' : "Continuez à vous entraîner : relisez les conseils et refaites une simulation."}
            </p>
            <div className="row gap">
              <button className="btn btn-red" onClick={start}>Nouvelle simulation</button>
              <button className="btn btn-ghost-red" onClick={() => setRun(null)}>Réglages</button>
            </div>
          </div>
        </div>
        <h3 className="section-sub">Récapitulatif</h3>
        <div className="qlist">
          {run.qs.map((q, i) => (
            <div className="qcard open" key={q.id}>
              <div className="qbody">
                <b>{q.q}</b>
                <p className="muted">Votre note : {'★'.repeat(run.ratings[i])}{'☆'.repeat(5 - run.ratings[i])}</p>
                {run.ratings[i] <= 3 && <p className="tip">💡 {q.tip}</p>}
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }

  const q = run.qs[run.i]
  const cat = CATEGORIES.find((c) => c.id === q.cat)
  const danger = left <= 10 && run.phase === 'answer'
  return (
    <>
      <div className="sim-top">
        <span className="eyebrow">Question {run.i + 1} / {run.qs.length} · {cat.icon} {cat.label}</span>
        <button className="link-btn" onClick={() => { stopSpeak(); setRun(null) }}>Quitter</button>
      </div>
      <Bar value={run.i} max={run.qs.length} />
      <div className="sim-stage">
        <div className="recruiter">
          <div className="avatar">👔</div>
          <div className="bubble">
            <p>{q.q}</p>
            <button className="link-btn" onClick={() => speak(q.q)}>🔊 Réécouter</button>
          </div>
        </div>

        {run.phase === 'answer' ? (
          <>
            <div className={`timer ${danger ? 'danger' : ''}`}>
              <Ring value={(left / cfg.secs) * 100} size={96} stroke={9} label={fmt(left)} />
            </div>
            <textarea
              className="answer-box"
              placeholder="Formulez votre réponse ici (ou répondez à voix haute puis notez les points clés)…"
              value={text}
              onChange={(e) => setText(e.target.value)}
              autoFocus
            />
            <div className="row center"><button className="btn btn-red btn-lg" onClick={toReview}>J'ai terminé ma réponse</button></div>
          </>
        ) : (
          <div className="review fade-in">
            {text && <div className="my-answer"><b>Votre réponse</b><p>{text}</p></div>}
            <p className="tip">💡 <b>Ce qu'attend le recruteur :</b> {q.tip}</p>
            <p className="answer"><b>Piste de réponse :</b> {q.answer}</p>
            <h4 className="center-t">Comment évaluez-vous votre réponse ?</h4>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} onClick={() => rate(n)} title={`${n}/5`}>
                  <span>★</span>
                  <small>{n}</small>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
