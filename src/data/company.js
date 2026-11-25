// Informations issues de sources publiques (VINCI Energies, rapports d'activité, annonces de
// recrutement de Cegelec Cameroun, presse économique). À vérifier sur vinci-energies.com avant l'entretien.

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=70',
  grid: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=70',
  industry: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=70',
  team: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=70',
  oil: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=70',
  interview: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=70',
}

export const keyFigures = [
  { value: 1979, label: 'Début des activités au Cameroun', suffix: '' },
  { value: 40, label: "Plus de 40 ans de présence", suffix: '+' },
  { value: 2200, label: 'Entités de VINCI Energies dans le monde', suffix: '+' },
  { value: 2, label: 'Grandes marques : Actemium & Omexom', suffix: '' },
]

export const timeline = [
  {
    year: '1979',
    title: 'Arrivée au Cameroun',
    text: "Cegelec Cameroun démarre ses activités en apportant au secteur pétrolier ses compétences en instrumentation et en installations électriques.",
  },
  {
    year: '2010',
    title: 'Cegelec rejoint VINCI',
    text: "En avril 2010, Cegelec intègre le groupe VINCI, premier groupe mondial de concessions et de construction, au sein du pôle Energies.",
  },
  {
    year: '2012',
    title: 'Naissance de VINCI Energies',
    text: "Le pôle issu du rapprochement VINCI Energies / Cegelec prend le nom de VINCI Energies. Cegelec reste une marque de dimension internationale.",
  },
  {
    year: 'Aujourd’hui',
    title: 'Deux marques phares',
    text: "Sous VINCI Energies, l'activité est portée par Actemium (industrie) et Omexom (Power & Grid), pour des solutions énergétiques à haute valeur ajoutée.",
  },
  {
    year: '2025',
    title: 'Nouvelle direction',
    text: "La presse économique camerounaise a annoncé en février 2025 la nomination de Jean-Philippe Gadene à la tête de Cegelec Cameroun, succédant à Arnaud Allix.",
  },
]

export const domains = [
  { icon: '⚡', title: 'Installations électriques', text: "Moyenne et basse tension, distribution, éclairage, mise en service d'installations industrielles et d'infrastructures." },
  { icon: '🎛️', title: 'Instrumentation & automatisme', text: "Systèmes de conduite et de régulation, instrumentation de process, automatismes pour sites industriels." },
  { icon: '🛢️', title: 'Oil & Gas', text: "Historiquement au cœur de l'activité au Cameroun : accompagnement des clients pétroliers sur tout le cycle de vie de leurs projets." },
  { icon: '📐', title: 'Études & ingénierie', text: "Conception, études électriques et instrumentation (E&I), dessin et projection, documentation technique." },
  { icon: '🏗️', title: 'Construction & installation', text: "Réalisation et encadrement de chantiers, montage, câblage, essais et mises en service." },
  { icon: '🔧', title: 'Maintenance & exploitation', text: "Maintenance préventive et corrective, services technologiques pour les entreprises et les collectivités." },
]

export const brands = [
  { name: 'Actemium', tag: 'Industrie', text: "Marque de VINCI Energies dédiée à l'industrie : process, automatisme, maintenance, transformation digitale des sites industriels." },
  { name: 'Omexom', tag: 'Power & Grid', text: "Spécialiste des réseaux d'énergie : producteurs d'électricité, gestionnaires de réseaux de transport et de distribution." },
]

export const values = [
  { icon: '🦺', title: 'Sécurité avant tout', text: "La santé-sécurité (référentiel ISO 45001) est une priorité absolue sur chantier comme au bureau." },
  { icon: '🌍', title: 'Environnement', text: "Respect de l'environnement (ISO 14001) et participation aux transitions énergétique, environnementale et digitale." },
  { icon: '🤝', title: 'Entreprise citoyenne', text: "Présente depuis plus de 40 ans au Cameroun, avec un environnement de travail multiculturel d'envergure internationale." },
  { icon: '♀️', title: 'Diversité', text: "Les candidatures féminines sont fortement encouragées dans les offres publiées par l'entreprise." },
]

export const recruitment = {
  location: 'Douala, région du Littoral',
  steps: [
    { icon: '📄', title: 'Candidature', text: "CV et lettre de motivation, via les offres publiées (site VINCI Energies, annonces officielles) ou candidature spontanée." },
    { icon: '🔍', title: 'Présélection', text: "Étude du dossier : adéquation formation / expérience / poste." },
    { icon: '💬', title: 'Entretien RH', text: "Parcours, motivation, connaissance de l'entreprise, disponibilité, prétentions." },
    { icon: '🛠️', title: 'Entretien technique', text: "Échange avec un responsable métier : questions techniques et mises en situation (E&I, chantier, HSE…)." },
    { icon: '✅', title: 'Décision', text: "Vérifications, éventuelle visite médicale, puis proposition d'embauche." },
  ],
  note: "Étapes indicatives : le processus peut varier selon le poste. D'après les retours de candidats, le processus dure en général environ une semaine et le niveau de difficulté est jugé plutôt facile.",
  scam: "Aucun frais n'est à débourser dans le cadre des processus de recrutement de l'entreprise. Ne donnez jamais d'argent pour obtenir un emploi.",
}

export const flashFacts = [
  { q: 'En quelle année Cegelec a-t-elle démarré ses activités au Cameroun ?', a: '1979' },
  { q: 'De quel groupe Cegelec Cameroun est-elle une filiale ?', a: 'VINCI Energies, du groupe VINCI.' },
  { q: "Quel secteur Cegelec a-t-elle d'abord accompagné au Cameroun ?", a: "Le secteur pétrolier (instrumentation, installations électriques)." },
  { q: 'Quelles sont les deux marques de VINCI Energies portées par Cegelec ?', a: 'Actemium (industrie) et Omexom (Power & Grid).' },
  { q: 'Où se situent les bureaux et la plupart des postes ?', a: 'Douala (Littoral).' },
  { q: 'Quand Cegelec a-t-elle rejoint VINCI ?', a: 'En avril 2010.' },
  { q: 'Quelles normes sont à connaître pour la santé-sécurité et l’environnement ?', a: 'ISO 45001 (santé-sécurité) et ISO 14001 (environnement).' },
]
