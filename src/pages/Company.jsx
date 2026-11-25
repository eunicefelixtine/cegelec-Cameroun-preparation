import { useState } from 'react'
import SmartImage from '../components/SmartImage.jsx'
import { PageHeader } from '../components/ui.jsx'
import { IMAGES, timeline, domains, brands, values, recruitment, keyFigures } from '../data/company.js'

const TABS = [
  { id: 'apercu', label: 'Aperçu' },
  { id: 'histoire', label: 'Histoire' },
  { id: 'metiers', label: 'Activités' },
  { id: 'valeurs', label: 'Valeurs' },
  { id: 'recrutement', label: 'Recrutement' },
]

export default function Company() {
  const [tab, setTab] = useState('apercu')
  return (
    <>
      <PageHeader
        eyebrow="Connaître l'entreprise"
        title="Cegelec Cameroun en un coup d'œil"
        text="Le recruteur vérifiera toujours si vous connaissez l'entreprise. Voici l'essentiel à retenir."
      />

      <div className="tabs reveal">
        {TABS.map((t) => (
          <button key={t.id} className={tab === t.id ? 'on' : ''} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'apercu' && (
        <div className="fade-in">
          <div className="split">
            <div className="card pad">
              <h2>Qui est Cegelec Cameroun ?</h2>
              <p>
                Cegelec Cameroun est une filiale de <b>VINCI Energies</b>, du groupe <b>VINCI</b>. Elle a démarré ses activités au Cameroun en
                <b> 1979</b>, en apportant au secteur pétrolier ses compétences en instrumentation et en installations électriques.
              </p>
              <p>
                Aujourd'hui, l'activité s'appuie sur deux marques de VINCI Energies : <b>Actemium</b> pour l'industrie et <b>Omexom</b> pour le
                Power &amp; Grid. L'entreprise se présente comme une entreprise citoyenne, présente depuis plus de 40 ans, avec un environnement de
                travail multiculturel d'envergure internationale. Les postes proposés sont basés à <b>Douala</b>.
              </p>
              <div className="chips">
                <span className="chip">Filiale VINCI Energies</span>
                <span className="chip">Depuis 1979</span>
                <span className="chip">Douala</span>
                <span className="chip">Énergie · Industrie · Oil &amp; Gas</span>
              </div>
            </div>
            <SmartImage src={IMAGES.industry} alt="Site industriel" scene="rig" className="side-img" />
          </div>

          <h3 className="section-sub">Chiffres à retenir</h3>
          <div className="stats flat">
            {keyFigures.map((k) => (
              <div className="stat" key={k.label}>
                <strong>{k.value === 1979 ? k.value : k.value.toLocaleString('fr-FR')}{k.suffix}</strong>
                <span>{k.label}</span>
              </div>
            ))}
          </div>

          <h3 className="section-sub">Les deux marques</h3>
          <div className="grid g2">
            {brands.map((b) => (
              <div className="card pad brand-card" key={b.name}>
                <span className="eyebrow">{b.tag}</span>
                <h3>{b.name}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'histoire' && (
        <div className="timeline fade-in">
          {timeline.map((t, i) => (
            <div className={`tl-item ${i % 2 ? 'right' : ''}`} key={t.year}>
              <div className="tl-dot" />
              <div className="card pad">
                <span className="tl-year">{t.year}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'metiers' && (
        <div className="fade-in">
          <div className="grid g3">
            {domains.map((d) => (
              <div className="card pad hover-lift" key={d.title}>
                <span className="feature-icon">{d.icon}</span>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
          <div className="photo-row">
            <SmartImage src={IMAGES.grid} alt="Lignes électriques" scene="pylon" />
            <SmartImage src={IMAGES.oil} alt="Industrie pétrolière" scene="rig" />
            <SmartImage src={IMAGES.team} alt="Techniciens" scene="team" />
          </div>
        </div>
      )}

      {tab === 'valeurs' && (
        <div className="fade-in grid g2">
          {values.map((v) => (
            <div className="card pad value-card hover-lift" key={v.title}>
              <span className="feature-icon">{v.icon}</span>
              <div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </div>
          ))}
          <div className="card pad callout span2">
            <h3>💡 À retenir pour l'entretien</h3>
            <p>
              Des candidats ayant passé l'entretien conseillent de bien connaître les normes <b>ISO 45001</b> et <b>ISO 14001</b>, de rester
              sérieux et d'être ponctuel.
            </p>
          </div>
        </div>
      )}

      {tab === 'recrutement' && (
        <div className="fade-in">
          <div className="steps">
            {recruitment.steps.map((s, i) => (
              <div className="step card pad" key={s.title}>
                <span className="step-n">{i + 1}</span>
                <span className="feature-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="notice">{recruitment.note}</div>
          <div className="notice danger">🚨 {recruitment.scam}</div>
        </div>
      )}
    </>
  )
}
