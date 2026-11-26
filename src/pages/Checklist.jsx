import { PageHeader, Ring } from '../components/ui.jsx'
import { CHECKLIST, TOTAL_ITEMS } from '../data/checklist.js'
import { useStore } from '../lib/store.jsx'

export default function Checklist() {
  const { state, update } = useStore()
  const done = Object.values(state.checklist).filter(Boolean).length
  const toggle = (id) => update((st) => ({ checklist: { ...st.checklist, [id]: !st.checklist[id] } }))

  return (
    <>
      <PageHeader eyebrow="Organisation" title="Checklist de préparation" text="Cochez au fur et à mesure : tout est sauvegardé sur votre appareil." />
      <div className="card pad check-summary reveal">
        <Ring value={(done / TOTAL_ITEMS) * 100} size={110} stroke={10} label={`${done}/${TOTAL_ITEMS}`} />
        <div>
          <h3>{done === TOTAL_ITEMS ? 'Tout est prêt, bonne chance ! 🍀' : 'Continuez, vous y êtes presque'}</h3>
          <p className="muted">{TOTAL_ITEMS - done} étape{TOTAL_ITEMS - done > 1 ? 's' : ''} restante{TOTAL_ITEMS - done > 1 ? 's' : ''}.</p>
          <button className="link-btn" onClick={() => update({ checklist: {} })}>Tout décocher</button>
        </div>
      </div>
      <div className="grid g2">
        {CHECKLIST.map((g) => {
          const n = g.items.filter((i) => state.checklist[i.id]).length
          return (
            <div className="card pad reveal" key={g.id}>
              <h3>{g.icon} {g.title} <small className="muted">{n}/{g.items.length}</small></h3>
              <ul className="checks">
                {g.items.map((i) => (
                  <li key={i.id}>
                    <label className={state.checklist[i.id] ? 'done' : ''}>
                      <input type="checkbox" checked={!!state.checklist[i.id]} onChange={() => toggle(i.id)} />
                      <span className="box" />
                      {i.t}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </>
  )
}
