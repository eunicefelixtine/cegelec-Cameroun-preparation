# Cegelec Prep — préparation à l'entretien chez Cegelec Cameroun

Application web (thème rouge) pour préparer un entretien d'embauche chez Cegelec Cameroun
(filiale de VINCI Energies) : informations sur l'entreprise, fiches métiers, banque de questions,
quiz, simulateur d'entretien, constructeur de pitch, checklist et suivi de progression.

## Technologies

- **React 18** (composants + hooks) et **Vite 5** (serveur de dev et build)
- **CSS pur** avec variables (thème rouge, mode sombre, animations, responsive)
- **localStorage** pour sauvegarder la progression (aucun serveur ni compte requis)
- **Web Speech API** (synthèse vocale du navigateur) pour lire les questions à voix haute
- Photos Unsplash avec **illustrations SVG de secours** hors-ligne

## Lancer le projet

Prérequis : [Node.js](https://nodejs.org) 18 ou plus récent.

```bash
cd cegelec-prep
npm install
npm run dev        # ouvre http://localhost:5173
```

Autres commandes :

```bash
npm run build      # génère le dossier dist/ (version de production)
npm run preview    # prévisualise la version de production
```

## Fonctionnalités

| Section | Contenu |
| --- | --- |
| Accueil | Compte à rebours jusqu'à l'entretien, score de préparation, question du jour, flash connaissances, badges |
| Cegelec | Aperçu, histoire (frise), activités, valeurs, déroulé du recrutement, alerte anti-arnaque |
| Métiers | 6 fiches (dessinateur E&I, projeteur, ingénieur, chef de chantier, HSE, technicien) avec missions et compétences |
| Questions | 40 questions, 8 thèmes, filtre par poste, recherche, favoris, « maîtrisée », mode flashcards, lecture vocale |
| Quiz | QCM de 10 questions sur 4 thèmes, correction expliquée, historique et meilleur score |
| Simulateur | Questions lues à voix haute, chronomètre, zone de réponse, conseils, auto-évaluation, bilan |
| Conseils | Constructeur de pitch (mots / durée estimée), méthode STAR, à faire / à éviter |
| Checklist | Préparation avant, veille, jour J, après l'entretien |
| Progression | Score global, niveaux (XP), 10 badges, historique des quiz et simulations |

## Personnaliser le contenu

Tout le contenu est dans `src/data/` :

- `company.js` : informations entreprise, frise, recrutement, images
- `questions.js` : banque de questions (ajoutez des objets au tableau `QUESTIONS`)
- `quiz.js` : QCM (`a` = index de la bonne réponse)
- `jobs.js` : fiches métiers
- `checklist.js` : étapes de la checklist

## Sources et avertissement

Les informations sur l'entreprise proviennent de sources publiques (VINCI Energies, rapports d'activité,
annonces de recrutement de Cegelec Cameroun, presse économique). Vérifiez-les sur
[vinci-energies.com](https://www.vinci-energies.com) avant votre entretien. Les réponses proposées sont des
pistes à adapter à votre parcours. Application indépendante, non affiliée à Cegelec ni à VINCI Energies.
Aucun frais n'est jamais exigé pour un recrutement : méfiez-vous des arnaques.
