import { useMemo, useState } from 'react'
import { PageHeader, Bar, Ring, Confetti } from '../components/ui.jsx'
import { QUIZ, QUIZ_THEMES } from '../data/quiz.js'
import { useStore } from '../lib/store.jsx'
import { shuffle } from '../lib/hooks.js'

export default function Quiz() {
  const { state, update, addXp } = useStore()
  const [themes, setThemes] = useState(QUIZ_THEMES.map((t) => t.id))
  const [run, setRun] = useState(null) // { qs, i, picked, score, wrong }

  const pool = useMemo(() => QUIZ.filter((q) => themes.includes(q.t)), [themes])
  const best = state.quizHistory.length ? Math.max(...state.quizHistory.map((h) => Math.round((h.score / h.total) * 100))) : null

  const start = () => setRun({ qs: shuffle(pool).slice(0, 10), i: 0, picked: null, score: 0, wrong: [], done: false })

  const pick = (k) => {
    if (run.picked !== null) return
    const q = run.qs[run.i]
    const ok = k === q.a
    setRun({ ...run, picked: k, score: run.score + (ok ? 1 : 0), wrong: ok ? run.wrong : [...run.wrong, { q, k }] })
  }

  const next = () => {
    if (run.i + 1 < run.qs.length) return setRun({ ...run, i: run.i + 1, picked: null })
    update((s) => ({ quizHistory: [...s.quizHistory, { date: new Date().toISOString(), score: run.score, total: run.qs.length }].slice(-30) }))
    addXp(run.score * 5)
    setRun({ ...run, done: true })
  }

  if (!run) {
    return (
      <>
        <PageHeader eyebrow="Testez-vous" title="Quiz de préparation" text="10 questions tirées au hasard dans les thèmes choisis, avec explication après chaque réponse." />
        <div className="card pad quiz-setup reveal">
          <h3>Choisissez vos thèmes</h3>
          <div className="theme-grid">
            {QUIZ_THEMES.map((t) => {
              const on = themes.includes(t.id)
              return (
                <button key={t.id} className={`theme ${on ? 'on' : ''}`} onClick={() => setThemes((prev) => (on ? prev.filter((x) => x !== t.id) : [...prev, t.id]))}>
                  <span>{t.icon}</span>
                  <b>{t.label}</b>
                  <small>{QUIZ.filter((q) => q.t === t.id).length} questions</small>
                </button>
              )
            })}
          </div>
          <div className="row gap center-v">
            <button className="btn btn-red btn-lg" disabled={!pool.length} onClick={start}>Commencer le quiz →</button>
            {best !== null && <span className="muted">Meilleur score : <b>{best}%</b> · {state.quizHistory.length} quiz joués</span>}
          </div>
        </div>
      </>
    )
  }

  if (run.done) {
    const pct = Math.round((run.score / run.qs.length) * 100)
    return (
      <>
        {pct >= 80 && <Confetti />}
        <PageHeader eyebrow="Résultat" title={pct >= 80 ? 'Excellent travail ! 🎉' : pct >= 50 ? 'Bien joué, continuez ! 💪' : 'Pas de panique, révisez et réessayez 📚'} />
        <div className="card pad result">
          <Ring value={pct} size={160} stroke={14} label={`${run.score}/${run.qs.length}`} sub={`${pct}%`} />
          <div>
            <p>
              {pct >= 80
                ? "Vos connaissances sont solides. Passez au simulateur pour travailler l'oral."
                : "Relisez la page « Découvrir Cegelec » et la section HSE de la banque de questions."}
            </p>
            <div className="row gap">
              <button className="btn btn-red" onClick={start}>Rejouer</button>
              <button className="btn btn-ghost-red" onClick={() => setRun(null)}>Changer de thèmes</button>
              <a className="btn btn-ghost-red" href="#/simulateur">Simulateur →</a>
            </div>
          </div>
        </div>
        {run.wrong.length > 0 && (
          <>
            <h3 className="section-sub">À revoir ({run.wrong.length})</h3>
            <div className="qlist">
              {run.wrong.map(({ q, k }) => (
                <div className="qcard open" key={q.id}>
                  <div className="qbody">
                    <b>{q.q}</b>
                    <p className="bad">Votre réponse : {q.o[k]}</p>
                    <p className="good">Bonne réponse : {q.o[q.a]}</p>
                    <p className="muted">{q.x}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </>
    )
  }

  const q = run.qs[run.i]
  return (
    <>
      <PageHeader eyebrow={`Question ${run.i + 1} / ${run.qs.length}`} title="Quiz en cours" />
      <Bar value={run.i + (run.picked !== null ? 1 : 0)} max={run.qs.length} />
      <div className="card pad quiz-q" key={q.id}>
        <span className="eyebrow">{QUIZ_THEMES.find((t) => t.id === q.t).icon} {QUIZ_THEMES.find((t) => t.id === q.t).label}</span>
        <h2>{q.q}</h2>
        <div className="options">
          {q.o.map((opt, k) => {
            let cls = ''
            if (run.picked !== null) cls = k === q.a ? 'right' : k === run.picked ? 'wrong' : 'dim'
            return (
              <button key={k} className={`option ${cls}`} onClick={() => pick(k)}>
                <span className="letter">{String.fromCharCode(65 + k)}</span>
                {opt}
              </button>
            )
          })}
        </div>
        {run.picked !== null && (
          <div className={`feedback ${run.picked === q.a ? 'ok' : 'ko'}`}>
            <b>{run.picked === q.a ? '✅ Correct !' : '❌ Pas tout à fait.'}</b> {q.x}
            <button className="btn btn-red" onClick={next}>{run.i + 1 < run.qs.length ? 'Question suivante →' : 'Voir le résultat'}</button>
          </div>
        )}
      </div>
      <p className="muted center-t">Score actuel : {run.score}</p>
    </>
  )
}
