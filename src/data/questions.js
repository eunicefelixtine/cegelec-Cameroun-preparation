// Banque de questions d'entretien. `jobs: ['all']` = valable pour tous les postes.
// Les réponses sont des pistes à adapter à votre propre parcours, pas des réponses à réciter.

export const CATEGORIES = [
  { id: 'presentation', label: 'Présentation', icon: '🙋' },
  { id: 'motivation', label: 'Motivation', icon: '🔥' },
  { id: 'entreprise', label: 'Connaissance de Cegelec', icon: '🏢' },
  { id: 'technique', label: 'Technique E&I', icon: '⚡' },
  { id: 'hse', label: 'HSE & Sécurité', icon: '🦺' },
  { id: 'comportement', label: 'Comportemental', icon: '🧠' },
  { id: 'rh', label: 'Conditions & projet', icon: '📋' },
  { id: 'anglais', label: 'English', icon: '🇬🇧' },
]

const A = ['all']

export const QUESTIONS = [
  // ---------- Présentation ----------
  {
    id: 'p1', cat: 'presentation', jobs: A, level: 1,
    q: 'Pouvez-vous vous présenter en quelques minutes ?',
    tip: "Structure « présent – passé – futur » : qui vous êtes aujourd'hui, ce qui vous a mené ici, ce que vous cherchez. 60 à 90 secondes maximum.",
    answer: "Je m'appelle … , titulaire d'un … en …. J'ai travaillé / effectué mon stage chez … où j'ai notamment … . Mes points forts sont … . Aujourd'hui je souhaite rejoindre Cegelec Cameroun pour mettre ces compétences au service de projets industriels exigeants.",
  },
  {
    id: 'p2', cat: 'presentation', jobs: A, level: 1,
    q: 'Quelles sont vos trois principales qualités ?',
    tip: 'Choisissez des qualités utiles au poste (rigueur, esprit d’équipe, sens de la sécurité) et prouvez-les chacune par un mini-exemple.',
    answer: "La rigueur : lors de mon stage, j'ai vérifié chaque schéma avant diffusion, ce qui a évité une erreur de câblage. L'esprit d'équipe : … La fiabilité : je tiens mes délais et je préviens dès qu'un risque apparaît.",
  },
  {
    id: 'p3', cat: 'presentation', jobs: A, level: 1,
    q: 'Quel est votre principal défaut ?',
    tip: "Citez un vrai défaut, non rédhibitoire, et montrez ce que vous faites pour le corriger. Évitez « je suis perfectionniste » sans nuance.",
    answer: "J'ai parfois du mal à déléguer par souci de qualité. Pour progresser, je définis des critères clairs avec mon équipe puis je vérifie les résultats plutôt que le détail de chaque tâche.",
  },
  {
    id: 'p4', cat: 'presentation', jobs: A, level: 2,
    q: 'Parlez-moi de votre parcours professionnel ou de votre dernier stage.',
    tip: 'Mettez en avant 2 ou 3 réalisations concrètes, chiffrées si possible, en lien avec les métiers de l’énergie et de l’industrie.',
    answer: "Lors de mon dernier stage chez …, j'ai participé à … (contexte). Ma mission était … . J'ai réalisé … et le résultat a été … (gain de temps, zéro incident, conformité…).",
  },

  // ---------- Motivation ----------
  {
    id: 'm1', cat: 'motivation', jobs: A, level: 1,
    q: 'Pourquoi voulez-vous travailler chez Cegelec Cameroun ?',
    tip: "Reliez trois éléments : l'ancienneté et le sérieux de l'entreprise (au Cameroun depuis 1979), son appartenance à VINCI Energies, et la nature des projets (industrie, énergie, oil & gas).",
    answer: "Cegelec est présente au Cameroun depuis plus de 40 ans et appartient à VINCI Energies : c'est un cadre stable, international et exigeant en sécurité. Les projets en énergie et en industrie correspondent exactement à ma formation et à ce que je veux apprendre.",
  },
  {
    id: 'm2', cat: 'motivation', jobs: A, level: 1,
    q: 'Pourquoi avez-vous choisi ce métier ?',
    tip: "Racontez une vraie histoire : déclic, formation, premier chantier. L'authenticité vaut mieux qu'un discours parfait.",
    answer: "Depuis le lycée, j'aime comprendre comment l'énergie arrive jusqu'aux installations. Mon stage m'a confirmé que j'aime autant l'analyse que le terrain.",
  },
  {
    id: 'm3', cat: 'motivation', jobs: A, level: 2,
    q: 'Pourquoi devrions-nous vous recruter vous plutôt qu’un autre candidat ?',
    tip: 'Reprenez les exigences du poste et montrez point par point que vous y répondez. Restez humble mais affirmé.',
    answer: "Votre offre demande … : j'ai … . Vous recherchez quelqu'un de rigoureux et attentif à la sécurité : c'est ma façon de travailler, par exemple … . Je suis immédiatement opérationnel et motivé pour apprendre vos méthodes.",
  },
  {
    id: 'm4', cat: 'motivation', jobs: A, level: 2,
    q: 'Où vous voyez-vous dans cinq ans ?',
    tip: "Montrez de l'ambition réaliste liée à l'entreprise : monter en compétences, prendre des responsabilités, se former.",
    answer: "Dans cinq ans, je me vois maîtriser pleinement mon métier chez Cegelec, avoir pris en charge des projets de plus en plus importants et, pourquoi pas, encadrer une équipe.",
  },

  // ---------- Entreprise ----------
  {
    id: 'e1', cat: 'entreprise', jobs: A, level: 1,
    q: 'Que savez-vous de Cegelec Cameroun ?',
    tip: "À connaître : filiale de VINCI Energies (groupe VINCI), au Cameroun depuis 1979, métiers de l'instrumentation et de l'électricité, secteur pétrolier historique, basée à Douala, marques Actemium et Omexom.",
    answer: "Cegelec Cameroun est une filiale de VINCI Energies, du groupe VINCI. Elle est présente au Cameroun depuis 1979, d'abord auprès du secteur pétrolier avec l'instrumentation et les installations électriques. Elle opère depuis Douala et s'appuie sur les marques Actemium pour l'industrie et Omexom pour les réseaux d'énergie.",
  },
  {
    id: 'e2', cat: 'entreprise', jobs: A, level: 1,
    q: 'Quel est le lien entre Cegelec, VINCI Energies et VINCI ?',
    tip: 'Cegelec a rejoint VINCI en avril 2010. VINCI Energies est le pôle énergies du groupe VINCI.',
    answer: "VINCI est un groupe mondial de concessions et de construction. Sa branche énergies, VINCI Energies, regroupe de nombreuses entités dont Cegelec, entrée dans le groupe en 2010.",
  },
  {
    id: 'e3', cat: 'entreprise', jobs: A, level: 2,
    q: 'Connaissez-vous les marques Actemium et Omexom ?',
    tip: 'Actemium : industrie. Omexom : Power & Grid (réseaux électriques). Montrez que vous avez consulté le site de VINCI Energies.',
    answer: "Actemium accompagne les industriels dans leurs process, automatismes et maintenance. Omexom intervient pour les producteurs d'électricité et les gestionnaires de réseaux de transport et de distribution.",
  },
  {
    id: 'e4', cat: 'entreprise', jobs: A, level: 2,
    q: 'Quels sont, selon vous, les enjeux du secteur de l’énergie au Cameroun ?',
    tip: "Pensez : accès à l'électricité, fiabilité des réseaux, transition énergétique, développement industriel, exigences de sécurité. Restez factuel.",
    answer: "Le Cameroun a besoin d'infrastructures électriques fiables pour soutenir son industrialisation, tout en intégrant davantage d'énergies renouvelables. Les entreprises comme Cegelec ont un rôle clé : installer, maintenir et sécuriser ces infrastructures.",
  },
  {
    id: 'e5', cat: 'entreprise', jobs: A, level: 3,
    q: "Qu’est-ce qui distingue Cegelec de ses concurrents, d’après vous ?",
    tip: "Appui d'un grand groupe, ancienneté locale, savoir-faire pétrolier et industriel, culture sécurité, environnement multiculturel.",
    answer: "Cegelec combine un ancrage local de plus de 40 ans et l'appui d'un groupe mondial, avec une culture sécurité forte et une expertise éprouvée en milieu industriel et pétrolier.",
  },

  // ---------- Technique ----------
  {
    id: 't1', cat: 'technique', jobs: ['ingenieur', 'technicien', 'dessinateur', 'projeteur'], level: 1,
    q: "Quelle est la différence entre moyenne tension (HTA) et basse tension (BT) ?",
    tip: "Rappel des domaines de tension en alternatif : BT jusqu'à 1000 V, HTA (MT) de 1 kV à 50 kV. Citez des exemples d'usage.",
    answer: "En courant alternatif, la basse tension va jusqu'à 1000 V et alimente les équipements courants ; la moyenne tension (HTA), de 1 à 50 kV, sert à la distribution et aux gros consommateurs industriels, via des postes de transformation.",
  },
  {
    id: 't2', cat: 'technique', jobs: ['ingenieur', 'technicien', 'dessinateur', 'projeteur'], level: 2,
    q: "Qu’est-ce qu’un signal 4-20 mA et pourquoi est-il très utilisé en instrumentation ?",
    tip: "Boucle de courant standard. 4 mA = bas de l'échelle (0 %), 20 mA = haut (100 %). Le « 4 » permet de détecter une coupure de câble (0 mA).",
    answer: "C'est un signal analogique en courant : 4 mA représente 0 % de la mesure, 20 mA 100 %. Il est peu sensible aux perturbations et à la longueur du câble, et un courant nul signale une rupture de boucle.",
  },
  {
    id: 't3', cat: 'technique', jobs: ['ingenieur', 'technicien', 'dessinateur', 'projeteur'], level: 2,
    q: "Que signifient les sigles P&ID et schéma unifilaire ?",
    tip: "P&ID : Piping and Instrumentation Diagram (tuyauterie et instrumentation). Unifilaire : représentation simplifiée d'une installation électrique par un seul trait pour l'ensemble des conducteurs.",
    answer: "Le P&ID décrit les équipements, la tuyauterie et les instruments d'un procédé. Le schéma unifilaire représente l'architecture d'une distribution électrique : sources, protections, transformateurs, départs.",
  },
  {
    id: 't4', cat: 'technique', jobs: ['ingenieur', 'technicien'], level: 2,
    q: "À quoi servent un disjoncteur, un contacteur et un relais thermique ?",
    tip: "Disjoncteur : protection contre surcharges et courts-circuits. Contacteur : commutation de puissance commandée. Relais thermique : protection du moteur contre les surcharges.",
    answer: "Le disjoncteur protège la ligne, le contacteur commande la puissance d'un récepteur à distance, et le relais thermique protège le moteur contre les surcharges prolongées.",
  },
  {
    id: 't5', cat: 'technique', jobs: ['ingenieur', 'technicien', 'chantier'], level: 3,
    q: 'Que savez-vous des zones ATEX et pourquoi sont-elles importantes dans le pétrole et le gaz ?',
    tip: "ATEX = atmosphères explosives. Les installations pétrolières peuvent contenir gaz/vapeurs inflammables : matériel certifié, zonage (0/1/2 pour les gaz), permis de travail obligatoires.",
    answer: "Les zones ATEX sont des zones où une atmosphère explosive peut se former. Dans le pétrole et le gaz, le matériel électrique doit y être certifié, les travaux encadrés par des permis, et le zonage respecté pour éviter toute source d'inflammation.",
  },
  {
    id: 't6', cat: 'technique', jobs: ['technicien', 'ingenieur', 'chantier'], level: 1,
    q: "Rappelez la loi d’Ohm et donnez un exemple d’application.",
    tip: 'U = R × I. Exemple : calculer le courant dans une résistance de 50 Ω sous 230 V (I ≈ 4,6 A).',
    answer: "La loi d'Ohm lie la tension U (V), la résistance R (Ω) et le courant I (A) : U = R × I. Sous 230 V, une résistance de 50 Ω est traversée par environ 4,6 A.",
  },
  {
    id: 't7', cat: 'technique', jobs: ['dessinateur', 'projeteur'], level: 2,
    q: 'Quels logiciels de DAO / CAO maîtrisez-vous et comment garantissez-vous la qualité de vos plans ?',
    tip: "Citez vos outils (AutoCAD, EPLAN, etc.) avec votre niveau réel, puis votre méthode de vérification (check-list, relecture croisée, gabarits).",
    answer: "Je travaille avec … au quotidien. Avant diffusion, je vérifie la codification, la cohérence avec les notes de calcul et le cartouche, puis je fais relire mon plan par un collègue.",
  },
  {
    id: 't8', cat: 'technique', jobs: ['chantier', 'technicien'], level: 2,
    q: 'Comment organisez-vous un chantier de câblage de A à Z ?',
    tip: "Étapes : préparation (plans, matériel, analyse de risques), accueil sécurité, exécution par lots, contrôles, essais, dossier de fin de travaux.",
    answer: "Je prépare d'abord les plans, le matériel et l'analyse de risques. Je réalise un briefing sécurité, répartis les tâches, contrôle l'avancement chaque jour, puis je supervise les essais et constitue le dossier de fin de travaux.",
  },

  // ---------- HSE ----------
  {
    id: 'h1', cat: 'hse', jobs: A, level: 1,
    q: "Que signifie HSE et pourquoi est-ce une priorité sur nos chantiers ?",
    tip: "HSE : Hygiène – Sécurité – Environnement. Les retours de candidats conseillent de connaître les normes ISO 45001 et ISO 14001.",
    answer: "HSE signifie Hygiène, Sécurité, Environnement. C'est une priorité car chaque intervention comporte des risques (électriques, chute, ATEX…). Les référentiels ISO 45001 (santé-sécurité) et ISO 14001 (environnement) structurent ces démarches.",
  },
  {
    id: 'h2', cat: 'hse', jobs: A, level: 1,
    q: 'Quels équipements de protection individuelle (EPI) utilisez-vous sur un chantier électrique ?',
    tip: "Casque, lunettes, gants (isolants si besoin), chaussures de sécurité, vêtements adaptés, protections auditives. Précisez que l'EPI est le dernier rempart, après la prévention.",
    answer: "Casque, chaussures de sécurité, lunettes, gants adaptés (isolants pour le risque électrique), vêtements de travail adaptés et protections auditives selon le bruit. Je les contrôle avant chaque utilisation.",
  },
  {
    id: 'h3', cat: 'hse', jobs: A, level: 2,
    q: "Qu’est-ce que la consignation (LOTO) et quelles sont ses étapes ?",
    tip: "Séparer – Condamner – Identifier – Vérifier l'absence de tension (VAT) – puis mise à la terre/court-circuit si nécessaire. Le tout avant toute intervention.",
    answer: "La consignation met une installation hors énergie en sécurité : séparer de toute source, condamner en position ouverte, identifier, vérifier l'absence de tension, puis mettre à la terre si nécessaire. Seul le personnel habilité intervient.",
  },
  {
    id: 'h4', cat: 'hse', jobs: A, level: 2,
    q: 'Que faites-vous si vous constatez une situation dangereuse sur un chantier ?',
    tip: "Arrêter le travail si nécessaire, sécuriser la zone, alerter le responsable, déclarer la situation. Insistez sur le droit/devoir d'alerte.",
    answer: "J'arrête l'activité concernée, sécurise la zone si je peux le faire sans risque, préviens immédiatement mon responsable et le HSE, puis je participe à l'analyse pour éviter que cela se reproduise.",
  },
  {
    id: 'h5', cat: 'hse', jobs: ['hse', 'chantier', 'ingenieur'], level: 3,
    q: "Comment réalise-t-on une analyse de risques avant une intervention ?",
    tip: "Identifier les dangers, évaluer (gravité × probabilité), définir les mesures de prévention, informer les équipes, suivre l'application.",
    answer: "On décrit la tâche, identifie les dangers, évalue chaque risque (gravité × probabilité), définit les mesures de maîtrise (suppression, protection collective puis EPI), puis on partage l'analyse avec l'équipe lors du briefing.",
  },
  {
    id: 'h6', cat: 'hse', jobs: ['hse'], level: 3,
    q: 'Comment animer une causerie sécurité efficace ?',
    tip: "Court (10-15 min), concret, basé sur un cas réel du chantier, interactif, avec une action à retenir.",
    answer: "Je choisis un sujet lié à l'activité du jour, je pars d'un exemple concret, je fais participer l'équipe et termine par une règle simple à appliquer immédiatement.",
  },

  // ---------- Comportemental ----------
  {
    id: 'c1', cat: 'comportement', jobs: A, level: 2,
    q: 'Parlez-moi d’une situation où vous avez dû résoudre un problème difficile.',
    tip: "Méthode STAR : Situation – Tâche – Action – Résultat. Détaillez surtout VOS actions et le résultat obtenu.",
    answer: "Situation : … Tâche : on m'a demandé de … Action : j'ai … Résultat : … . J'en ai retenu que …",
  },
  {
    id: 'c2', cat: 'comportement', jobs: A, level: 2,
    q: "Comment réagissez-vous face à un désaccord avec un collègue ou un supérieur ?",
    tip: "Écoute, faits plutôt qu'émotions, recherche d'un compromis, escalade respectueuse si besoin. La sécurité ne se négocie jamais.",
    answer: "J'écoute d'abord son point de vue, j'expose le mien avec des faits, puis nous cherchons une solution commune. Si un désaccord persiste, je demande l'avis de notre responsable. Sur la sécurité, je ne transige pas.",
  },
  {
    id: 'c3', cat: 'comportement', jobs: A, level: 2,
    q: 'Comment gérez-vous la pression et les délais serrés ?',
    tip: "Priorisation, communication proactive, rigueur maintenue. Évitez de dire que vous sacrifiez la qualité ou la sécurité.",
    answer: "Je priorise, découpe les tâches et préviens tôt en cas de risque de retard. Sous pression, je garde mes contrôles sécurité et qualité : un gain de temps qui crée un incident n'en est pas un.",
  },
  {
    id: 'c4', cat: 'comportement', jobs: A, level: 2,
    q: "Êtes-vous à l’aise pour travailler en équipe multiculturelle et dans des environnements internationaux ?",
    tip: "L'entreprise met en avant un environnement multiculturel d'envergure internationale. Citez des expériences d'équipes mixtes, de langues, d'adaptation.",
    answer: "Oui, j'aime travailler avec des profils variés : cela enrichit les solutions. J'adapte ma communication, je clarifie les attentes et je m'appuie sur le respect mutuel.",
  },
  {
    id: 'c5', cat: 'comportement', jobs: A, level: 3,
    q: 'Racontez une erreur que vous avez commise et ce que vous en avez appris.',
    tip: "Choisissez une erreur réelle de gravité modérée, assumez-la, montrez la correction et l'apprentissage.",
    answer: "Lors de …, j'ai oublié de … ce qui a causé … . J'ai immédiatement prévenu mon responsable, corrigé le problème et mis en place … pour que cela ne se reproduise plus.",
  },
  {
    id: 'c6', cat: 'comportement', jobs: ['chantier', 'hse', 'projeteur', 'ingenieur'], level: 3,
    q: 'Comment motivez-vous une équipe qui est en retard ou démotivée ?',
    tip: "Écoute, objectifs clairs, reconnaissance, appui concret, exemplarité.",
    answer: "Je rencontre l'équipe pour comprendre les blocages, redéfinis des objectifs réalistes, enlève les obstacles que je peux lever et valorise les progrès. J'essaie d'être exemplaire dans mon engagement.",
  },

  // ---------- RH ----------
  {
    id: 'r1', cat: 'rh', jobs: A, level: 1,
    q: 'Êtes-vous disponible immédiatement et mobile (déplacements, chantiers hors de Douala) ?',
    tip: "Soyez honnête sur vos contraintes. Les métiers de chantier impliquent des déplacements, des horaires parfois décalés et des sites industriels.",
    answer: "Je suis disponible à partir du … et prêt à me déplacer sur les sites, y compris hors de Douala, avec une préparation adaptée aux règles de sécurité.",
  },
  {
    id: 'r2', cat: 'rh', jobs: A, level: 2,
    q: 'Quelles sont vos prétentions salariales ?',
    tip: "Renseignez-vous sur les grilles du marché pour le poste. Donnez une fourchette réaliste en soulignant votre ouverture à la discussion et à l'ensemble des avantages.",
    answer: "Compte tenu de mon profil et du marché pour ce poste, je vise une rémunération entre … et … , mais je reste ouvert à la discussion selon le périmètre du poste et l'ensemble des avantages.",
  },
  {
    id: 'r3', cat: 'rh', jobs: A, level: 1,
    q: "Avez-vous des questions à nous poser ?",
    tip: "Préparez 2-3 questions : intégration, formation, équipe, projets à venir, prochaines étapes. Ne parlez pas uniquement du salaire.",
    answer: "Oui : comment se passe l'intégration d'un nouveau collaborateur ? Quels projets seront prioritaires dans les prochains mois ? Quelles formations sont prévues, notamment en sécurité ? Quelles sont les prochaines étapes du processus ?",
  },
  {
    id: 'r4', cat: 'rh', jobs: A, level: 2,
    q: 'Comment vous formez-vous et vous tenez-vous à jour dans votre domaine ?',
    tip: "Formations, certifications, veille, lecture de normes, échanges avec des collègues.",
    answer: "Je me forme via des formations, la lecture de normes et de documentations techniques, et en échangeant avec des collègues plus expérimentés. Je souhaite aussi passer les habilitations et certifications utiles au poste.",
  },

  // ---------- Anglais ----------
  {
    id: 'a1', cat: 'anglais', jobs: A, level: 1,
    q: 'Tell me about yourself. (Présentez-vous en anglais.)',
    tip: "Quelques phrases simples et claires : name, education, experience, why this job. Prononcez lentement.",
    answer: "My name is … I hold a … in electrical engineering. I did an internship at … where I … I am motivated to join Cegelec Cameroon because I want to work on industrial and energy projects in an international environment.",
  },
  {
    id: 'a2', cat: 'anglais', jobs: A, level: 2,
    q: 'Why do you want to work for Cegelec Cameroon?',
    tip: "Réutilisez les arguments de la question française en anglais : international group, safety culture, interesting projects.",
    answer: "Cegelec is part of VINCI Energies, an international group, and has been present in Cameroon for over 40 years. I appreciate its strong safety culture and the opportunity to work on industrial and oil and gas projects.",
  },
  {
    id: 'a3', cat: 'anglais', jobs: A, level: 2,
    q: 'What would you do if you noticed an unsafe situation on site?',
    tip: "Stop the work, secure the area, report immediately. Vocabulaire : hazard, risk, stop work authority, report.",
    answer: "I would stop the work immediately, make the area safe if possible, and report the hazard to my supervisor and the HSE team. Then I would help to find the root cause and prevent recurrence.",
  },
  {
    id: 'a4', cat: 'anglais', jobs: A, level: 3,
    q: 'Describe a technical project you are proud of. (Décrivez un projet technique dont vous êtes fier.)',
    tip: "Contexte → your role → actions → result. Utilisez le passé simple : I designed, I tested, we delivered.",
    answer: "During my final-year project, I designed a motor control panel. I drew the schematics, selected the protection devices and tested the prototype. The result was a working system delivered on time and without any safety incident.",
  },
]

export const questionsByCat = (id) => QUESTIONS.filter((q) => q.cat === id)
