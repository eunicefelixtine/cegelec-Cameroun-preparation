import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import { useRoute, useReveal } from './lib/hooks.js'
import { useStore } from './lib/store.jsx'
import Home from './pages/Home.jsx'
import Company from './pages/Company.jsx'
import Jobs from './pages/Jobs.jsx'
import Questions from './pages/Questions.jsx'
import Quiz from './pages/Quiz.jsx'
import Simulator from './pages/Simulator.jsx'
import Tips from './pages/Tips.jsx'
import Checklist from './pages/Checklist.jsx'
import Progress from './pages/Progress.jsx'

const PAGES = {
  accueil: Home,
  entreprise: Company,
  metiers: Jobs,
  questions: Questions,
  quiz: Quiz,
  simulateur: Simulator,
  conseils: Tips,
  checklist: Checklist,
  progression: Progress,
}

export default function App() {
  const { path, params } = useRoute()
  const { update } = useStore()
  const Page = PAGES[path] || Home
  const key = PAGES[path] ? path : 'accueil'

  useEffect(() => {
    update((s) => (s.visited.includes(key) ? {} : { visited: [...s.visited, key] }))
  }, [key, update])

  useReveal([key])

  return (
    <>
      <Navbar current={key} />
      <main key={key} className="page">
        <Page params={params} />
      </main>
      <footer className="footer">
        <div>
          <strong>Cegelec Prep</strong> — application d'entraînement indépendante, non affiliée à Cegelec ni à VINCI Energies.
        </div>
        <div className="muted">
          Informations issues de sources publiques : vérifiez-les sur{' '}
          <a href="https://www.vinci-energies.com" target="_blank" rel="noreferrer">vinci-energies.com</a>. Aucun frais n'est jamais exigé pour un recrutement.
        </div>
      </footer>
    </>
  )
}
