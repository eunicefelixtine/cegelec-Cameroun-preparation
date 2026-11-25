// QCM : l'index `a` désigne la bonne réponse dans `o`.
export const QUIZ_THEMES = [
  { id: 'entreprise', label: 'Cegelec & VINCI', icon: '🏢' },
  { id: 'hse', label: 'HSE', icon: '🦺' },
  { id: 'technique', label: 'Technique E&I', icon: '⚡' },
  { id: 'entretien', label: 'Savoir-être', icon: '💬' },
]

export const QUIZ = [
  // Entreprise
  { id: 'qe1', t: 'entreprise', q: 'En quelle année Cegelec a-t-elle démarré ses activités au Cameroun ?', o: ['1965', '1979', '1994', '2010'], a: 1, x: "Cegelec Cameroun est présente depuis 1979, initialement auprès du secteur pétrolier." },
  { id: 'qe2', t: 'entreprise', q: 'De quel groupe Cegelec Cameroun est-elle une filiale ?', o: ['Bouygues', 'Schneider Electric', 'VINCI Energies (groupe VINCI)', 'Engie'], a: 2, x: 'Cegelec fait partie de VINCI Energies, pôle énergies du groupe VINCI.' },
  { id: 'qe3', t: 'entreprise', q: "Quel secteur Cegelec a-t-elle d'abord accompagné au Cameroun ?", o: ['Le secteur pétrolier', 'Le tourisme', 'Les télécoms uniquement', "L'agroalimentaire"], a: 0, x: "L'entreprise a apporté au secteur pétrolier ses compétences en instrumentation et installations électriques." },
  { id: 'qe4', t: 'entreprise', q: 'Quelle marque de VINCI Energies est dédiée à l’industrie ?', o: ['Omexom', 'Actemium', 'Axians', 'VINCI Facilities'], a: 1, x: 'Actemium est la marque industrie ; Omexom est celle du Power & Grid.' },
  { id: 'qe5', t: 'entreprise', q: 'Quelle marque est spécialisée dans les réseaux d’énergie (Power & Grid) ?', o: ['Actemium', 'Axians', 'Omexom', 'Citéos'], a: 2, x: 'Omexom accompagne producteurs d’électricité et gestionnaires de réseaux.' },
  { id: 'qe6', t: 'entreprise', q: 'En quelle année Cegelec a-t-elle rejoint VINCI ?', o: ['2000', '2005', '2010', '2018'], a: 2, x: 'Cegelec a rejoint VINCI en avril 2010.' },
  { id: 'qe7', t: 'entreprise', q: 'Dans quelle ville se situe le lieu de travail des offres Cegelec Cameroun ?', o: ['Yaoundé', 'Douala', 'Garoua', 'Bafoussam'], a: 1, x: 'Les offres publiées indiquent un lieu de travail à Douala (Littoral).' },
  { id: 'qe8', t: 'entreprise', q: 'Que doit faire un candidat si on lui demande de payer pour obtenir un emploi ?', o: ['Payer pour accélérer', 'Refuser : aucun frais n’est demandé lors du recrutement', 'Payer la moitié', 'Négocier le montant'], a: 1, x: "Les offres précisent qu'aucun frais n'est à débourser : c'est une arnaque." },

  // HSE
  { id: 'qh1', t: 'hse', q: 'HSE signifie :', o: ['Hygiène – Sécurité – Environnement', 'Haute Sécurité Électrique', 'Hygiène – Service – Équipement', 'Habilitation Sécurité Énergie'], a: 0, x: 'HSE = Hygiène, Sécurité, Environnement.' },
  { id: 'qh2', t: 'hse', q: 'Quelle norme concerne le management de la santé et de la sécurité au travail ?', o: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 27001'], a: 2, x: 'ISO 45001 : santé-sécurité. ISO 14001 : environnement. ISO 9001 : qualité.' },
  { id: 'qh3', t: 'hse', q: 'Quelle norme concerne le management environnemental ?', o: ['ISO 14001', 'ISO 45001', 'ISO 22000', 'ISO 50001'], a: 0, x: 'ISO 14001 est la norme de management environnemental.' },
  { id: 'qh4', t: 'hse', q: 'Quel est l’ordre correct de la consignation électrique ?', o: ['Vérifier – Séparer – Identifier – Condamner', 'Séparer – Condamner – Identifier – Vérifier l’absence de tension', 'Condamner – Travailler – Séparer', 'Identifier – Travailler – Vérifier'], a: 1, x: "On sépare, condamne, identifie, puis on vérifie l'absence de tension (VAT) avant de travailler." },
  { id: 'qh5', t: 'hse', q: 'Les EPI sont :', o: ['La première mesure de prévention', 'Le dernier rempart après les protections collectives', 'Facultatifs sur chantier', 'Réservés aux visiteurs'], a: 1, x: "On supprime ou réduit d'abord le risque ; l'EPI protège quand le risque subsiste." },
  { id: 'qh6', t: 'hse', q: 'Vous constatez un câble dénudé sous tension sur le chantier. Votre réaction ?', o: ['Je continue et j’avertis en fin de journée', 'Je le répare moi-même sans consigner', 'Je balise la zone, arrête et alerte mon responsable', 'Je prends une photo et je pars'], a: 2, x: "Sécuriser sans se mettre en danger, arrêter, alerter immédiatement." },
  { id: 'qh7', t: 'hse', q: 'Que signifie ATEX ?', o: ['Attestation Technique Extérieure', 'Atmosphères Explosives', 'Autorisation de Travaux Exceptionnels', 'Appareil de Test Électrique'], a: 1, x: "ATEX = ATmosphères EXplosives, très présentes dans le pétrole et le gaz." },

  // Technique
  { id: 'qt1', t: 'technique', q: 'La loi d’Ohm s’écrit :', o: ['U = R × I', 'P = U / I', 'I = U × R', 'R = U × I'], a: 0, x: 'U (V) = R (Ω) × I (A).' },
  { id: 'qt2', t: 'technique', q: 'Un signal 4-20 mA à 12 mA correspond à quel pourcentage de l’échelle ?', o: ['0 %', '25 %', '50 %', '60 %'], a: 2, x: '(12 − 4) / (20 − 4) = 8/16 = 50 %.' },
  { id: 'qt3', t: 'technique', q: 'Quelle est la limite supérieure de la basse tension en courant alternatif ?', o: ['230 V', '500 V', '1000 V', '50 kV'], a: 2, x: 'BT AC : jusqu’à 1000 V ; HTA : de 1 à 50 kV.' },
  { id: 'qt4', t: 'technique', q: 'P&ID signifie :', o: ['Power & Intensity Diagram', 'Piping and Instrumentation Diagram', 'Protection and Isolation Document', 'Process & Installation Drawing'], a: 1, x: 'Schéma de tuyauterie et d’instrumentation.' },
  { id: 'qt5', t: 'technique', q: 'Quel appareil protège un moteur contre les surcharges prolongées ?', o: ['Le contacteur', 'Le relais thermique', 'Le bouton poussoir', 'Le transformateur'], a: 1, x: 'Le relais thermique surveille le courant et déclenche en cas de surcharge.' },
  { id: 'qt6', t: 'technique', q: 'Pourquoi le signal 4-20 mA démarre-t-il à 4 mA et non à 0 ?', o: ['Pour économiser du courant', 'Pour détecter une coupure de boucle (0 mA = défaut)', 'Par tradition uniquement', 'Pour mesurer deux grandeurs'], a: 1, x: 'Un courant nul signale une rupture de câble ou une panne de transmetteur.' },
  { id: 'qt7', t: 'technique', q: 'La puissance active en monophasé (résistive) se calcule par :', o: ['P = U × I', 'P = U / I', 'P = R / I', 'P = U + I'], a: 0, x: 'En régime résistif : P = U × I (en W).' },

  // Savoir-être
  { id: 'qs1', t: 'entretien', q: 'La méthode STAR sert à structurer une réponse. STAR signifie :', o: ['Situation – Tâche – Action – Résultat', 'Stratégie – Temps – Analyse – Réussite', 'Savoir – Technique – Attitude – Résultat', 'Sérieux – Travail – Autonomie – Rigueur'], a: 0, x: 'Situation, Tâche, Action, Résultat.' },
  { id: 'qs2', t: 'entretien', q: 'Combien de temps doit durer votre présentation personnelle ?', o: ['10 secondes', '60 à 90 secondes', '5 minutes', '15 minutes'], a: 1, x: 'Assez long pour convaincre, assez court pour rester dynamique.' },
  { id: 'qs3', t: 'entretien', q: 'À quel moment faut-il arriver à l’entretien ?', o: ['À l’heure pile', '10 à 15 minutes avant', '30 minutes en retard max', 'Quand on peut'], a: 1, x: 'Les candidats conseillent la ponctualité ; arriver 10-15 min avant permet de se poser.' },
  { id: 'qs4', t: 'entretien', q: 'On vous demande votre principal défaut. Que faites-vous ?', o: ['Je dis que je n’en ai pas', 'Je cite un défaut sans importance pour le poste et ma façon de le corriger', 'Je cite un défaut grave', 'Je change de sujet'], a: 1, x: 'Authenticité + plan de progrès.' },
  { id: 'qs5', t: 'entretien', q: 'Un bon moyen de terminer l’entretien est de :', o: ['Partir sans rien dire', 'Poser 2-3 questions pertinentes et remercier', 'Parler de salaire uniquement', 'Demander un résultat immédiat'], a: 1, x: 'Cela montre votre intérêt réel. Envoyez aussi un mail de remerciement sous 24 h.' },
]
