export const CHECKLIST = [
  {
    id: 'avant',
    title: 'Une semaine avant',
    icon: '📅',
    items: [
      { id: 'c1', t: 'Relire l’offre d’emploi et surligner les compétences demandées' },
      { id: 'c2', t: 'Parcourir la page « Découvrir Cegelec » de cette application' },
      { id: 'c3', t: 'Consulter vinci-energies.com pour les actualités récentes' },
      { id: 'c4', t: 'Réviser les bases HSE : ISO 45001, ISO 14001, EPI, consignation' },
      { id: 'c5', t: 'Préparer mon pitch de présentation de 60-90 secondes' },
      { id: 'c6', t: 'Préparer 3 exemples en méthode STAR' },
      { id: 'c7', t: 'Faire au moins 2 simulations d’entretien' },
      { id: 'c8', t: 'Préparer 3 questions à poser au recruteur' },
    ],
  },
  {
    id: 'veille',
    title: 'La veille',
    icon: '🌙',
    items: [
      { id: 'v1', t: 'Préparer CV (copies papier), pièces d’identité, diplômes, attestations' },
      { id: 'v2', t: 'Choisir une tenue sobre et professionnelle' },
      { id: 'v3', t: 'Vérifier l’itinéraire et le temps de trajet (Douala : prévoir la circulation)' },
      { id: 'v4', t: 'Charger mon téléphone et prévoir de quoi noter' },
      { id: 'v5', t: 'Dormir suffisamment' },
    ],
  },
  {
    id: 'jourj',
    title: 'Le jour J',
    icon: '🎯',
    items: [
      { id: 'j1', t: 'Arriver 10 à 15 minutes avant l’heure' },
      { id: 'j2', t: 'Téléphone en silencieux' },
      { id: 'j3', t: 'Saluer chaleureusement, regard et poignée de main assurés' },
      { id: 'j4', t: 'Écouter la question en entier avant de répondre' },
      { id: 'j5', t: 'Illustrer chaque réponse par un exemple concret' },
      { id: 'j6', t: 'Remercier en fin d’entretien et demander les prochaines étapes' },
    ],
  },
  {
    id: 'apres',
    title: 'Après l’entretien',
    icon: '📨',
    items: [
      { id: 'a1', t: 'Envoyer un mail de remerciement sous 24 h' },
      { id: 'a2', t: 'Noter ce qui a bien fonctionné et ce qui est à améliorer' },
      { id: 'a3', t: 'Relancer poliment après une semaine sans nouvelles' },
      { id: 'a4', t: 'Ne jamais payer de frais pour obtenir un poste' },
    ],
  },
]

export const TOTAL_ITEMS = CHECKLIST.reduce((n, g) => n + g.items.length, 0)
