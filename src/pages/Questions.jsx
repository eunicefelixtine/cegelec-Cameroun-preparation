import { useMemo, useState } from 'react'
import { PageHeader, Bar } from '../components/ui.jsx'
import { QUESTIONS, CATEGORIES } from '../data/questions.js'
import { JOB_FILTERS } from '../data/jobs.js'
import { useStore } from '../lib/store.jsx'
import { speak, shuffle } from '../lib/hooks.js'

const LEVELS = ['', 'Facile', 'Moyen', 'Avancé']

export default function Questions({ params }) {
  const { state, toggleIn, addXp } = useStore()
  const [cat, setCat] = useState('all')
  const [job, setJob] = useState(params.job || 'all')
  const [onlyFav, setOnlyFav] = useState(false)
  const [hideDone, setHideDone] = useState(false)
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(null)
  const [cards, setCards] = useState(null) // mode flashcards
  const [idx, setIdx] = useState(0)
  const [flip, setFlip] = useState(false)

  const list = useMemo(() => {
    const s = search.trim().toLowerCase()
    return QUESTIONS.filter(
      (q) =>
        (cat === 'all' || q.cat === cat) &&
        (job === 'all' || q.jobs.includes('all') || q.jobs.includes(job)) &&
        (!onlyFav || state.favorites.includes(q.id)) &&
        (!hideDone || !state.mastered.includes(q.id)) &&
        (!s || (q.q + q.tip + q.answer).toLowerCase().includes(s)),
    )
  }, [cat, job, onlyFav, hideDone, search, state.favorites, state.mastered])

  const toggleMaster = (id) => {
    if (!state.mastered.includes(id)) addXp(10)
    toggleIn('mastered', id)
  }

  const startCards = () => {
    setCards(shuffle(list))
    setIdx(0)
    setFlip(false)
  }

  if (cards) {
    const q = cards[idx]
    return (
      <>
        <PageHeader eyebrow="Mode révision" title="Flashcards" text={`Carte ${idx + 1} sur ${cards.length}`} />
        <Bar value={idx + 1} max={cards.length} />
        <div className={`flashcard-big ${flip ? 'flipped' : ''}`} onClick={() => setFlip(!flip)}>
          <div className="face front">
            <span className="eyebrow">{CATEGORIES.find((c) => c.id === q.cat).label}</span>
            <h2>{q.q}</h2>
            <small>Touchez pour retourner</small>
          </div>
          <div className="face back">
            <p className="tip">💡 {q.tip}</p>
            <p>{q.answer}</p>
          </div>
        </div>
        <div className="row center gap">
          <button className="btn btn-ghost-red" disabled={idx === 0} onClick={() => { setIdx(idx - 1); setFlip(false) }}>← Précédente</button>
          <button className="btn btn-ghost-red" onClick={() => speak(q.q)}>🔊 Lire</button>
          <button className="btn btn-ghost-red" onClick={() => toggleMaster(q.id)}>
            {state.mastered.includes(q.id) ? '✅ Maîtrisée' : 'Je maîtrise'}
          </button>
          <button className="btn btn-red" disabled={idx === cards.length - 1} onClick={() => { setIdx(idx + 1); setFlip(false) }}>Suivante →</button>
        </div>
        <div className="row center"><button className="link-btn" onClick={() => setCards(null)}>← Retour à la liste</button></div>
      </>
    )
  }

  return (
    <>
      <PageHeader
        eyebrow="Banque de questions"
        title="Questions d'entretien"
        text={`${QUESTIONS.length} questions classées par thème et par poste, avec conseils et pistes de réponse à personnaliser.`}
      >
        <div className="progress-line">
          <Bar value={state.mastered.length} max={QUESTIONS.length} />
          <span>{state.mastered.length} / {QUESTIONS.length} maîtrisées</span>
        </div>
      </PageHeader>

      <div className="toolbar">
        <input className="search" placeholder="🔍 Rechercher un mot-clé (HSE, ATEX, motivation…)" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select value={job} onChange={(e) => setJob(e.target.value)}>
          {JOB_FILTERS.map((j) => <option key={j.id} value={j.id}>{j.title}</option>)}
        </select>
        <button className="btn btn-red" onClick={startCards} disabled={!list.length}>🃏 Flashcards</button>
      </div>

      <div className="chips scroll">
        <button className={`chip btn-chip ${cat === 'all' ? 'on' : ''}`} onClick={() => setCat('all')}>Tout</button>
        {CATEGORIES.map((c) => (
          <button key={c.id} className={`chip btn-chip ${cat === c.id ? 'on' : ''}`} onClick={() => setCat(c.id)}>
            {c.icon} {c.label}
          </button>
        ))}
      </div>
      <div className="row gap small">
        <label><input type="checkbox" checked={onlyFav} onChange={(e) => setOnlyFav(e.target.checked)} /> Favoris uniquement</label>
        <label><input type="checkbox" checked={hideDone} onChange={(e) => setHideDone(e.target.checked)} /> Masquer les maîtrisées</label>
        <span className="muted">{list.length} résultat{list.length > 1 ? 's' : ''}</span>
      </div>

      <div className="qlist">
        {list.map((q) => {
          const c = CATEGORIES.find((x) => x.id === q.cat)
          const isOpen = open === q.id
          const done = state.mastered.includes(q.id)
          return (
            <article key={q.id} className={`qcard ${isOpen ? 'open' : ''} ${done ? 'done' : ''}`}>
              <button className="qhead" onClick={() => setOpen(isOpen ? null : q.id)}>
                <span className="qcat">{c.icon}</span>
                <span className="qtext">
                  {q.q}
                  <small>{c.label} · {LEVELS[q.level]}</small>
                </span>
                <span className="chev">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div className="qbody">
                  <p className="tip">💡 <b>Conseil :</b> {q.tip}</p>
                  <p className="answer"><b>Piste de réponse :</b> {q.answer}</p>
                  <div className="row gap">
                    <button className={`btn btn-sm ${state.favorites.includes(q.id) ? 'btn-red' : 'btn-ghost-red'}`} onClick={() => toggleIn('favorites', q.id)}>
                      {state.favorites.includes(q.id) ? '⭐ Favori' : '☆ Favori'}
                    </button>
                    <button className={`btn btn-sm ${done ? 'btn-red' : 'btn-ghost-red'}`} onClick={() => toggleMaster(q.id)}>
                      {done ? '✅ Maîtrisée' : 'Je maîtrise'}
                    </button>
                    <button className="btn btn-sm btn-ghost-red" onClick={() => speak(q.q)}>🔊 Écouter</button>
                  </div>
                </div>
              )}
            </article>
          )
        })}
        {!list.length && <div className="empty">Aucune question ne correspond à ces filtres.</div>}
      </div>
    </>
  )
}
