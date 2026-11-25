import { useState } from 'react'
import SmartImage from '../components/SmartImage.jsx'
import { PageHeader } from '../components/ui.jsx'
import { IMAGES } from '../data/company.js'
import { useStore } from '../lib/store.jsx'

const DOS = [
  'Arriver 10 à 15 minutes en avance',
  'Connaître Cegelec, VINCI Energies et le poste visé',
  'Mettre la sécurité au cœur de vos exemples',
  'Répondre avec des faits et des exemples chiffrés',
  'Poser des questions sur l’équipe et les projets',
  'Remercier et envoyer un mail sous 24 h',
]
const DONTS = [
  'Critiquer un ancien employeur',
  'Minimiser les règles de sécurité',
  'Réciter une réponse apprise par cœur',
  'Parler uniquement de salaire',
  'Mentir sur un diplôme ou une compétence',
  'Payer quelqu’un pour obtenir le poste',
]

const wordsOf = (t) => t.trim().split(/\s+/).filter(Boolean).length

export default function Tips() {
  const { state, update } = useStore()
  const p = state.pitch
  const st = state.star
  const setP = (k, v) => update({ pitch: { ...p, [k]: v } })
  const setS = (k, v) => update({ star: { ...st, [k]: v } })
  const [copied, setCopied] = useState('')

  const pitch = [
    p.name && `Bonjour, je m'appelle ${p.name}${p.degree ? `, titulaire d'un ${p.degree}` : ''}.`,
    p.exp && `J'ai ${p.exp}.`,
    p.strength && `Mon principal atout est ${p.strength}.`,
    p.why && `Je souhaite rejoindre Cegelec Cameroun car ${p.why}.`,
    p.goal && `À terme, mon objectif est ${p.goal}.`,
  ].filter(Boolean).join(' ')
  const nWords = wordsOf(pitch)
  const secs = Math.round((nWords / 150) * 60)

  const star = [
    st.s && `Situation : ${st.s}`,
    st.t && `Tâche : ${st.t}`,
    st.a && `Action : ${st.a}`,
    st.r && `Résultat : ${st.r}`,
  ].filter(Boolean).join('\n')

  const copy = (id, text) => {
    navigator.clipboard?.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(''), 1500)
  }

  return (
    <>
      <PageHeader eyebrow="Méthode" title="Conseils, pitch et méthode STAR" text="Construisez vos réponses clés. Vos saisies sont enregistrées automatiquement sur votre appareil." />

      <div className="split">
        <div className="card pad">
          <h2>🙋 Constructeur de pitch</h2>
          <p className="muted">Complétez les champs : votre présentation de 60-90 secondes se génère en direct.</p>
          <div className="form-stack">
            <input placeholder="Votre prénom et nom" value={p.name || ''} onChange={(e) => setP('name', e.target.value)} />
            <input placeholder="Votre diplôme (ex. BTS électrotechnique)" value={p.degree || ''} onChange={(e) => setP('degree', e.target.value)} />
            <input placeholder="Votre expérience (ex. effectué un stage de 3 mois chez … sur des armoires BT)" value={p.exp || ''} onChange={(e) => setP('exp', e.target.value)} />
            <input placeholder="Votre atout principal (ex. la rigueur et le sens de la sécurité)" value={p.strength || ''} onChange={(e) => setP('strength', e.target.value)} />
            <input placeholder="Pourquoi Cegelec ? (ex. sa présence depuis 1979 et son appartenance à VINCI Energies)" value={p.why || ''} onChange={(e) => setP('why', e.target.value)} />
            <input placeholder="Votre objectif (ex. évoluer vers la gestion de projets)" value={p.goal || ''} onChange={(e) => setP('goal', e.target.value)} />
          </div>
        </div>
        <div className="card pad output">
          <h3>Votre pitch</h3>
          <p className="pitch-out">{pitch || 'Remplissez les champs pour voir votre pitch apparaître…'}</p>
          <div className="row gap center-v">
            <span className={`chip ${secs > 100 ? 'warn' : 'on'}`}>{nWords} mots · ~{secs}s</span>
            <button className="btn btn-sm btn-red" disabled={!pitch} onClick={() => copy('pitch', pitch)}>{copied === 'pitch' ? 'Copié ✓' : 'Copier'}</button>
          </div>
          <small className="muted">Reformulez à l'oral avec vos propres mots : le texte est une base, pas un script.</small>
        </div>
      </div>

      <div className="split">
        <div className="card pad">
          <h2>⭐ Méthode STAR</h2>
          <p className="muted">Préparez un exemple pour « Parlez-moi d'une difficulté résolue » ou « Citez une réussite ».</p>
          <div className="form-stack">
            <textarea rows="2" placeholder="Situation : contexte, lieu, équipe…" value={st.s || ''} onChange={(e) => setS('s', e.target.value)} />
            <textarea rows="2" placeholder="Tâche : votre objectif ou responsabilité" value={st.t || ''} onChange={(e) => setS('t', e.target.value)} />
            <textarea rows="3" placeholder="Action : ce que VOUS avez fait, étape par étape" value={st.a || ''} onChange={(e) => setS('a', e.target.value)} />
            <textarea rows="2" placeholder="Résultat : chiffres, retour du client, apprentissage" value={st.r || ''} onChange={(e) => setS('r', e.target.value)} />
          </div>
          <button className="btn btn-sm btn-red" disabled={!star} onClick={() => copy('star', star)}>{copied === 'star' ? 'Copié ✓' : 'Copier mon exemple'}</button>
        </div>
        <SmartImage src={IMAGES.interview} alt="Entretien d'embauche" scene="team" className="side-img tall" />
      </div>

      <div className="grid g2">
        <div className="card pad dos"><h3>✅ À faire</h3><ul className="ticks">{DOS.map((d) => <li key={d}>{d}</li>)}</ul></div>
        <div className="card pad donts"><h3>🚫 À éviter</h3><ul className="crosses">{DONTS.map((d) => <li key={d}>{d}</li>)}</ul></div>
      </div>
    </>
  )
}
