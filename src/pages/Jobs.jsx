import { useState } from 'react'
import SmartImage from '../components/SmartImage.jsx'
import { PageHeader } from '../components/ui.jsx'
import { JOBS } from '../data/jobs.js'
import { IMAGES } from '../data/company.js'
import { QUESTIONS } from '../data/questions.js'

export default function Jobs() {
  const [sel, setSel] = useState(null)
  const job = JOBS.find((j) => j.id === sel)
  const count = (id) => QUESTIONS.filter((q) => q.jobs.includes('all') || q.jobs.includes(id)).length

  return (
    <>
      <PageHeader
        eyebrow="Profils recherchés"
        title="Fiches métiers"
        text="Choisissez le poste visé pour voir les missions, les compétences attendues et vous entraîner avec les bonnes questions."
      />
      <div className="grid g3">
        {JOBS.map((j, i) => (
          <button
            key={j.id}
            className="card job reveal"
            style={{ transitionDelay: `${i * 50}ms` }}
            onClick={() => setSel(j.id)}
          >
            <SmartImage src={IMAGES[j.image]} alt={j.title} scene={j.scene} className="job-img" />
            <div className="job-body">
              <span className="job-emoji">{j.emoji}</span>
              <h3>{j.title}</h3>
              <p>{j.summary}</p>
              <span className="arrow">{count(j.id)} questions →</span>
            </div>
          </button>
        ))}
      </div>

      {job && (
        <div className="modal-back" onClick={() => setSel(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-x" onClick={() => setSel(null)} aria-label="Fermer">✕</button>
            <SmartImage src={IMAGES[job.image]} alt={job.title} scene={job.scene} className="modal-img" />
            <div className="modal-body">
              <h2>{job.emoji} {job.title}</h2>
              <p className="muted">{job.summary}</p>
              <div className="two-col">
                <div>
                  <h4>Missions</h4>
                  <ul className="ticks">{job.missions.map((m) => <li key={m}>{m}</li>)}</ul>
                </div>
                <div>
                  <h4>Compétences clés</h4>
                  <div className="chips">{job.skills.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
                </div>
              </div>
              <div className="modal-cta">
                <a className="btn btn-red" href={`#/questions?job=${job.id}`} onClick={() => setSel(null)}>Réviser les questions</a>
                <a className="btn btn-ghost-red" href={`#/simulateur?job=${job.id}`} onClick={() => setSel(null)}>Simuler l'entretien</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
