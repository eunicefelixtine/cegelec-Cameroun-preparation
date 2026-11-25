import { QUESTIONS } from '../data/questions.js'
import { TOTAL_ITEMS } from '../data/checklist.js'

export const BADGES = [
  { id: 'start', icon: '🚀', title: 'Premier pas', desc: 'Visiter 3 sections', test: (s) => s.visited.length >= 3 },
  { id: 'q10', icon: '📚', title: 'Studieux', desc: 'Maîtriser 10 questions', test: (s) => s.mastered.length >= 10 },
  { id: 'q25', icon: '🧠', title: 'Encyclopédie', desc: 'Maîtriser 25 questions', test: (s) => s.mastered.length >= 25 },
  { id: 'quiz', icon: '🎯', title: 'Bon score', desc: 'Obtenir 80 % à un quiz', test: (s) => s.quizHistory.some((h) => h.score / h.total >= 0.8) },
  { id: 'perfect', icon: '🏆', title: 'Sans faute', desc: '100 % à un quiz', test: (s) => s.quizHistory.some((h) => h.score === h.total) },
  { id: 'sim', icon: '🎤', title: 'À l’aise à l’oral', desc: 'Terminer une simulation', test: (s) => s.simHistory.length >= 1 },
  { id: 'sim3', icon: '🎬', title: 'Habitué', desc: 'Terminer 3 simulations', test: (s) => s.simHistory.length >= 3 },
  { id: 'check', icon: '✅', title: 'Bien organisé', desc: 'Compléter la checklist', test: (s) => Object.values(s.checklist).filter(Boolean).length >= TOTAL_ITEMS },
  { id: 'fav', icon: '⭐', title: 'Curieux', desc: 'Mettre 5 questions en favori', test: (s) => s.favorites.length >= 5 },
  { id: 'streak', icon: '🔥', title: 'Régulier', desc: 'S’entraîner 3 jours', test: (s) => s.days.length >= 3 },
]

export const earned = (s) => BADGES.filter((b) => b.test(s))

/** Score de préparation global sur 100. */
export function readiness(s) {
  const q = Math.min(1, s.mastered.length / QUESTIONS.length) * 35
  const bestQuiz = s.quizHistory.length ? Math.max(...s.quizHistory.map((h) => h.score / h.total)) : 0
  const quiz = bestQuiz * 25
  const sim = Math.min(1, s.simHistory.length / 3) * 20
  const checked = Object.values(s.checklist).filter(Boolean).length
  const chk = Math.min(1, checked / TOTAL_ITEMS) * 20
  return Math.round(q + quiz + sim + chk)
}
