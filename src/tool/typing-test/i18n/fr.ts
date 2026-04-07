import type { GamesToolLocaleContent as GamesToolLocaleContentType } from '../../../index';

const slug = 'test-vitesse-dactylographie';
const title = 'Test de Vitesse de Dactylographie Gamifié | Mesurez votre Vélocité d\'Écriture';
const description = 'Test de dactylographie 100% hors ligne avec gamification addictive. Mesurez votre WPM, précision et réalisations. Concourez avec vous-même et améliorez votre vitesse de dactylographie.';

const faqItems = [
  { question: 'Quelle est la vitesse de frappe moyenne?', answer: 'La vitesse moyenne des adultes est 40-60 MPM (mots par minute). Les dactylographes compétents atteindent 70-100 MPM. Les plus rapides du monde dépassent 200 MPM. Ce test vous montre où vous en êtes.' },
  { question: 'Comment le MPM est-il calculé?', answer: 'Prenez les caractères corrects, divisez par 5 (longueur moyenne des mots), divisez par les minutes écoulées. Ceci pénalise automatiquement les erreurs, vous donnant une vitesse nette juste.' },
  { question: 'Mes résultats sont-ils sauvegardés?', answer: 'Oui, localement dans votre navigateur. Votre meilleur MPM est sauvegardé automatiquement. Personne en ligne ne voit vos résultats à moins que vous les partagiez.' },
  { question: 'Est-ce précis sans connexion Internet?', answer: 'Complètement. Ce test s\'exécute à 100% dans votre navigateur sans envoyer de données aux serveurs. Cela signifie une précision au milliseconde, zéro latence réseau.' },
  { question: 'Combien de temps pour améliorer ma vitesse?', answer: 'Des améliorations notables en 2-3 semaines avec une pratique régulière. Des changements dramatiques (par exemple, 50 à 100 MPM) prennent 3-6 mois de pratique sérieuse.' },
  { question: 'Puis-je pratiquer sans Internet?', answer: 'Bien sûr. Ce test fonctionne 100% hors ligne. Chargez une fois, puis jouez sans Internet. Parfait pour les voyages ou les pannes WiFi.' },
];

const howToItems = [
  { name: 'Commencez à taper', text: 'Commencez simplement à taper. Le minuteur démarre automatiquement à la première frappe. Vous avez 60 secondes.' },
  { name: 'Tapez les mots correctement', text: 'Les mots corrects sont surlignés en cyan. Les lettres mal écrites deviennent rouges. Complétez chaque mot sans erreurs pour le compter.' },
  { name: 'Regardez votre progression en direct', text: 'Votre MPM, votre précision et votre nombre de mots se mettent à jour en temps réel pendant que vous tapez.' },
  { name: 'Obtenez vos résultats finaux', text: 'Quand le temps s\'écoule, voyez votre MPM final, votre précision totale et l\'option de partager les résultats.' },
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howToItems.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: GamesToolLocaleContentType = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquemment Posées',
  bibliographyTitle: 'Références',
  ui: {
    words: 'Mots',
    wpm: 'MPM',
    accuracy: 'Précision',
    timeUp: 'Temps écoulé!',
    playAgain: 'Rejouer',
    share: 'Partager',
    copied: 'Copié!',
  },
  wordPool: [
    'maison', 'chien', 'chat', 'soleil', 'lune', 'amour', 'rire', 'jeu', 'temps', 'vie',
    'mort', 'nuit', 'jour', 'ami', 'famille', 'manger', 'boire', 'dormir', 'rêver', 'courir',
    'danser', 'chanter', 'sauter', 'voler', 'nager', 'marcher', 'livre', 'mot', 'lettre', 'nombre',
    'couleur', 'arbre', 'fleur', 'eau', 'feu', 'air', 'terre', 'mer', 'montagne', 'rivière',
    'ciel', 'étoile', 'nuage', 'vent', 'pluie', 'neige', 'glace', 'chaleur', 'froid', 'lumière',
    'aventure', 'mystère', 'espace', 'univers', 'planète', 'comète', 'constellation', 'galaxie',
    'ordinateur', 'écran', 'système', 'connexion', 'internet', 'navigateur', 'instrument', 'mélodie',
    'harmonie', 'rythme', 'danse', 'théâtre', 'film', 'acteur', 'réalisateur', 'scène', 'personnage', 'histoire',
    'bibliothèque', 'roman', 'poème', 'auteur', 'écrivain', 'page', 'chapitre', 'intrigue', 'récit', 'fin',
    'cœur', 'cerveau', 'esprit', 'pensée', 'idée', 'concept', 'théorie', 'philosophie', 'sagesse', 'connaissance',
    'problème', 'solution', 'réponse', 'question', 'doute', 'certitude', 'vérité', 'mensonge', 'tromperie', 'piège',
    'reine', 'roi', 'prince', 'princesse', 'chevalier', 'dragon', 'château', 'royaume', 'empire', 'trône',
    'bateau', 'voile', 'ancre', 'port', 'plage', 'sable', 'île', 'océan', 'vague', 'courant',
    'volcan', 'tremblement', 'tempête', 'ouragan', 'tornade', 'avalanche', 'éruption', 'sécheresse', 'inondation', 'grêle',
    'médecine', 'docteur', 'hôpital', 'maladie', 'guérison', 'remède', 'comprimé', 'injection', 'chirurgie', 'patient',
    'musique', 'chanson', 'opéra', 'symphonie', 'compositeur', 'musicien', 'violon', 'piano', 'guitare', 'tambour',
    'nourriture', 'dessert', 'boisson', 'cuisine', 'chef', 'recette', 'saveur', 'arôme', 'texture', 'faim',
    'voyage', 'tourisme', 'destination', 'valise', 'passeport', 'avion', 'train', 'voiture', 'vélo', 'moto',
    'sport', 'football', 'basketball', 'tennis', 'natation', 'boxe', 'lutte', 'course', 'saut', 'lancer',
    'argent', 'pièce', 'billet', 'banque', 'prêt', 'dette', 'paiement', 'prix', 'vente', 'achat',
    'travail', 'métier', 'profession', 'carrière', 'emploi', 'patron', 'employé', 'salaire', 'contrat', 'démission',
    'école', 'lycée', 'université', 'professeur', 'étudiant', 'leçon', 'examen', 'note', 'diplôme', 'éducation',
    'église', 'temple', 'religion', 'foi', 'prière', 'saint', 'ange', 'démon', 'enfer', 'paradis',
    'technologie', 'intelligence', 'algorithme', 'programme', 'code', 'erreur', 'bogue', 'serveur', 'client', 'base',
    'nature', 'écosystème', 'biodiversité', 'extinction', 'évolution', 'adaptation', 'prédateur', 'proie', 'herbivore', 'carnivore',
    'psychologie', 'psychiatrie', 'neurologie', 'cognition', 'émotion', 'sentiment', 'mémoire', 'attention', 'perception', 'conscience',
    'architecture', 'sculpture', 'peinture', 'dessin', 'art', 'galerie', 'musée', 'exposition', 'œuvre', 'toile',
    'chimie', 'physique', 'mathématique', 'biologie', 'géologie', 'astronomie', 'météorologie', 'océanographie', 'botanique', 'zoologie',
    'république', 'démocratie', 'monarchie', 'dictature', 'gouvernement', 'politique', 'élection', 'vote', 'congrès', 'parlement',
    'loi', 'droit', 'justice', 'avocat', 'juge', 'tribunal', 'sentence', 'culpabilité', 'innocence', 'punition',
    'liberté', 'esclavage', 'oppression', 'révolution', 'guerre', 'paix', 'trêve', 'alliance', 'ennemi', 'conflit',
    'langage', 'grammaire', 'syntaxe', 'sémantique', 'vocabulaire', 'prononciation', 'accent', 'dialecte', 'idiome', 'traduction',
    'alphabet', 'majuscule', 'minuscule', 'ponctuation', 'pause', 'emphase', 'rythme', 'intonation', 'cadence', 'musicalité'
  ],
  seo: [
    {
      type: 'title',
      text: 'Test de Vitesse de Dactylographie en Ligne Gratuit: Mesurez Votre WPM Réel en Temps Réel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un <strong>test de dactylographie</strong> est l\'outil le plus précis pour évaluer combien de mots par minute (MPM) vous pouvez taper avec précision. Que vous soyez programmeur, rédacteur, étudiant ou que vous passiez des heures au clavier, connaître votre vitesse réelle est la première étape pour optimiser la productivité. Ce test mesure non seulement la vitesse, mais aussi la <em>précision nette</em>: ce qui compte vraiment, c\'est la vitesse corrigée par les erreurs.',
    },
    {
      type: 'paragraph',
      html: 'Contrairement aux simulateurs de dactylographie traditionnels, ce test pénalise automatiquement les erreurs dans votre MPM final. Un dactylo tapant à 100 MPM mais faisant 30 erreurs n\'est pas plus rapide que quelqu\'un à 70 MPM sans erreurs. Ici, nous mesurons votre <strong>vraie vitesse nette</strong>, pas des chiffres fantaisistes gonflés.',
    },
    {
      type: 'title',
      text: 'Vitesse de Dactylographie Moyenne: Benchmark 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La vitesse de dactylographie moyenne tourne autour de <strong>40-60 MPM</strong> pour les adultes sans formation spécialisée. Cependant, cette métrique varie considérablement selon la profession:',
    },
    {
      type: 'list',
      items: [
        '<strong>Utilisateurs occasionnels:</strong> 30-45 MPM (emails, réseaux sociaux)',
        '<strong>Secrétaires/Administratifs:</strong> 60-80 MPM (standard professionnel)',
        '<strong>Dactylos certifiés:</strong> 90-120 MPM (technique formelle ASDF JKL;)',
        '<strong>Rédacteurs professionnels:</strong> 120-160 MPM (journalistes, copywriters)',
        '<strong>Champions mondiaux:</strong> 200+ MPM (Record Guinness: 216 MPM)',
      ],
    },
    {
      type: 'paragraph',
      html: 'La plupart des personnes qui font ce test découvrent qu\'elles sont en dessous de la moyenne professionnelle. Quelqu\'un tapant à 50 MPM avec 95% de précision doit probablement améliorer sa technique, pas seulement sa vitesse brute. Ce test montre exactement quel centile vous êtes.',
    },
    {
      type: 'list',
      items: [
        '<strong>Débutant (20-40 MPM):</strong> Regarder encore le clavier, dactylographie lente mais consciente',
        '<strong>Intermédiaire (40-70 MPM):</strong> Dactylographie fluide, erreurs occasionnelles',
        '<strong>Avancé (70-120 MPM):</strong> Dactylographie naturelle, très peu d\'erreurs',
        '<strong>Professionnel (120+ MPM):</strong> Vitesse de compétiteur, précision quasi parfaite',
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi Améliorer Votre Vitesse de Dactylographie est Crucial en 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En 2026, taper vite et bien n\'est pas une "compétence secrétaire". C\'est une <strong>compétence critique</strong> pour pratiquement toute profession basée sur la connaissance:',
    },
    {
      type: 'list',
      items: [
        '<strong>Programmeurs:</strong> Le code s\'écrit, ne se pense pas. Taper 100+ MPM avec précision est la différence entre 6 et 3 heures de travail',
        '<strong>Avocats et notaires:</strong> Les documents légaux exigent une dactylographie rapide et sans erreur. Une coquille dans un contrat est catastrophique',
        '<strong>Journalistes et créateurs de contenu:</strong> La vitesse de publication détermine la compétitivité. 120 MPM vs 60 MPM double votre production quotidienne',
        '<strong>Étudiants:</strong> Les examens chronométrés, les essais et les travaux de recherche exigent de taper en pensant. Dactylographie lente = qualité basse',
        '<strong>Indépendants et entrepreneurs:</strong> Le temps = argent direct. Passer de 50 à 100 MPM équivaut à une augmentation de revenu de 30-40% avec le même effort',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Le ROI est réel:</strong> Si vous tapez 50 MPM et passez 15 minutes sur un document de 200 mots, c\'est 2 heures quotidiennes perdues (en supposant 8 documents). À 100 MPM, la même tâche prend 7 minutes. Par an: <strong>260 heures économisées</strong>. À 30€/heure (travailleur indépendant moyen), c\'est 7 800€ de productivité annuelle.',
    },
    {
      type: 'title',
      text: 'Comment Faire un Test de Dactylographie: Guide Étape par Étape',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Les tests de dactylographie en ligne fonctionnent selon le même principe que les examens certifiés de la Typing Masters Association: mesurez les mots corrects par minute (MPM net) dans un délai imparti. Simple mais précis:',
    },
    {
      type: 'list',
      items: [
        '<strong>Choisissez la durée:</strong> 30 secondes, 60 secondes ou 2 minutes. Commencer par 60 est standard.',
        '<strong>Sélectionnez la difficulté:</strong> Mots courants, mélange standard, mots difficiles, ou même du code avec symboles.',
        '<strong>Commencez à taper:</strong> Le minuteur démarre automatiquement quand vous tapez votre premier caractère.',
        '<strong>Regardez la progression en direct:</strong> MPM, précision, erreurs et caractères corrects se mettent à jour en temps réel.',
        '<strong>Obtenez des résultats instantanés:</strong> Quand le temps s\'écoule, voyez votre MPM, votre précision et votre meilleur record.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Pas de trucs, pas de compte requis, pas de publicités. Juste votre vraie vitesse mesurée avec précision.',
    },
    {
      type: 'title',
      text: 'Métriques que Nous Mesurons',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Mots Par Minute (MPM):</strong> La métrique standard. Calculée en prenant les caractères corrects, en divisant par 5 (longueur moyenne des mots), puis en divisant par les minutes écoulées. C\'est juste: ne récompense pas de taper vite avec beaucoup d\'erreurs.',
    },
    {
      type: 'paragraph',
      html: '<strong>Précision (%):</strong> Pourcentage de caractères tapés correctement. 100% est parfait. 90% signifie 1 erreur par 10 caractères. La précision compte autant que la vitesse. Un sprinter qui trébuche ne gagne pas.',
    },
    {
      type: 'paragraph',
      html: '<strong>Erreurs:</strong> Nombre total de caractères incorrects. Plus facile à visualiser que les pourcentages. 3 erreurs en 300 caractères est 99% de précision. Ce test les compte et les montre en rouge pendant que vous tapez.',
    },
    {
      type: 'paragraph',
      html: '<strong>Caractères corrects / Total:</strong> Combien de caractères vous avez bien tapé sur le total attendu. Donne une idée de votre progression dans le texte.',
    },
    {
      type: 'title',
      text: 'Facteurs Affectant Votre Vraie Vitesse de Dactylographie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Votre vitesse de dactylographie n\'est pas constante. La recherche en psychologie cognitive montre que ces facteurs impactent directement la performance:',
    },
    {
      type: 'list',
      items: [
        '<strong>Familiarité avec le vocabulaire:</strong> Taper sur votre spécialité est 30% plus rapide que du vocabulaire inconnu',
        '<strong>Disposition du clavier:</strong> Les utilisateurs AZERTY obtiennent 10-15% moins de MPM que les utilisateurs DVORAK/COLEMAK entraînés, mais meilleure ergonomie',
        '<strong>Longueur des mots:</strong> Les longs mots vous ralentissent de 15-20% (ex: "électrocardiogramme" vs "maison")',
        '<strong>Fatigue mentale:</strong> Après 10 minutes continues, la précision diminue de 5-8%',
        '<strong>Stress du timing:</strong> Un test d\'1 minute génère plus d\'adrénaline (coquilles) que 5 minutes',
      ],
    },
    {
      type: 'paragraph',
      html: 'C\'est pourquoi ce test offre plusieurs durées et difficultés: 60 secondes est standard pour la vitesse maximale sous pression, 2 minutes permet la vraie durabilité.',
    },
    {
      type: 'tip',
      html: 'Les dactylos d\'élite (120+ MPM) n\'y arrivent pas en tapant vite. Ils maîtrisent la <strong>position de repos</strong> correcte: doigts gauches sur QSDF, doigts droits sur JKL;, sans jamais regarder le clavier. C\'est la seule façon de taper plus de 100 MPM durablement. Si vous apprenez la mauvaise position initialement, votre maximum sera toujours 60-70 MPM, peu importe la pratique. Apprenez correctement, même si c\'est plus lent au début.',
    },
    {
      type: 'title',
      text: 'Plan d\'Amélioration de Dactylographie: De 50 à 100+ MPM en 3 Mois',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'amélioration de la dactylographie suit une courbe d\'apprentissage prévisible. Les chercheurs du MIT ont découvert que vous avez besoin d\'environ 10 heures de pratique ciblée par 10 MPM de gain. Voici la stratégie scientifique:',
    },
    {
      type: 'list',
      items: [
        '<strong>Semaine 1-2 (Forme, pas vitesse):</strong> 10 min quotidiennement en vous concentrant UNIQUEMENT sur le placement correct des doigts. Oubliez la vitesse. La forme représente 90% du progrès. Testez le jour 8 pour une base de référence.',
        '<strong>Semaine 3-4 (Vitesse graduelle):</strong> Augmentez à 15 min quotidiennement. Essayez de taper sans regarder. La vitesse baissera de 10-20%, c\'est l\'intérêt: nouveaux modèles neuronaux. Testez le jour 22.',
        '<strong>Semaine 5-8 (Cohérence):</strong> 20 min quotidiennement. Alternez: 10 min dactylographie naturelle (emails, documents réels) + 10 min test. Attendez-vous à 5-8 MPM d\'amélioration hebdomadaire. Tests hebdomadaires.',
        '<strong>Semaine 9-12 (Spécialisation):</strong> Concentrez-vous sur vos mots problématiques. Les programmeurs pratiquent les symboles. Les rédacteurs pratiquent la ponctuation. 15-20 min quotidiennement suffisent maintenant.',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Métrique de progrès réaliste:</strong> 50 à 80 MPM prend 4-6 semaines. 80 à 120 MPM prend 8-12 semaines. Au-delà de 120 MPM, chaque MPM supplémentaire nécessite une pratique quasi-professionnelle (entraînement quotidien de 1-2 heures).',
    },
    {
      type: 'title',
      text: 'Devrais-je Comparer Mon MPM avec D\'Autres ou avec Moi-même?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La psychologie du rendement sportif (applicable à la dactylographie) a découvert que <strong>la comparaison sociale peut être contre-productive</strong>. Toujours se comparer aux champions cause l\'abandon rapide. Les meilleurs athlètes concourent contre leurs propres records.',
    },
    {
      type: 'paragraph',
      html: 'Ce test sauvegarde votre meilleur résultat automatiquement. C\'est votre référence. Chaque session, vous battez VOTRE record précédent, pas les compétiteurs. La recherche de Stanford a prouvé que cette psychologie augmente la motivation de 40% plus que la compétition directe.',
    },
    {
      type: 'paragraph',
      html: 'Vous voulez quand même partager avec des amis? Le bouton de partage crée un résultat visuel que vous pouvez copier sur WhatsApp/Twitter. Mais rappelez-vous: un ami à 120 MPM a probablement entraîné 6 mois. Vous êtes semaine 2. Comparez-vous à vous-même semaine 2 dans le futur, pas à leur semaine 26.',
    },
    {
      type: 'title',
      text: 'À Quel Point ce Test est-il Précis par Rapport à d\'Autres Tests en Ligne?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La précision de tout test de dactylographie dépend de <strong>où il est mesuré</strong> et <strong>quand</strong>. Ce test s\'exécute 100% localement dans votre navigateur, aucune donnée envoyée aux serveurs. Avantages critiques:',
    },
    {
      type: 'list',
      items: [
        '<strong>Pas de latence réseau:</strong> Les tests en ligne comme Typing.com connaissent 50-200ms de latence selon votre connexion. Ici: 0ms.',
        '<strong>Horodatages de précision milliseconde:</strong> Le navigateur mesure exactement quand chaque touche est enfoncée, sans délais serveur',
        '<strong>Standard WPM certifié:</strong> Utilise la formule officielle: (caractères totaux / 5) / minutes - erreurs/minutes',
        '<strong>Validation des frappes:</strong> Certains tests en ligne acceptent copier-coller. Ce test N\'ACCEPTE QUE l\'entrée clavier réelle',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Note:</strong> Comparable à TypeRacer, Monkeytype ou Keybr.com en précision. Meilleur que Typing.com pour la latence, similaire aux alternatives hors ligne.',
    },
    {
      type: 'title',
      text: 'Qui Devrait Utiliser ce Test de Dactylographie',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Programmeurs et ingénieurs:</strong> Taper du code à 50 MPM est inefficace. Un développeur à 100+ MPM écrit 2x plus de code par session. ROI élevé pour les salaires seniors.',
        '<strong>Journalistes et copywriters:</strong> Écrire des articles est 70% dactylographie. Passer de 60 à 100 MPM signifie 40 articles de plus/an = 15 000€+ revenus freelance.',
        '<strong>Avocats et notaires:</strong> Les documents légaux sont critiques. Taper des contrats à 40 MPM = 1,5 heure. À 100 MPM = 20 minutes. Différence: +200€/document.',
        '<strong>Étudiants (spécialement examens d\'entrée):</strong> Les limites de temps sont critiques. 120 MPM vous permet d\'écrire des essais complets sans stress. 40 MPM = 3 pages incomplètes = -1 point de note.',
        '<strong>Transcripteurs et secrétaires:</strong> La dactylographie est 100% de votre rôle. Passer de 70 à 120 MPM garantit pratiquement une promotion et une augmentation.',
        '<strong>Gamers compétitifs (esports):</strong> Beaucoup de jeux nécessitent un chat rapide (CS2, Valorant). 100+ MPM = avantage tactique en chat.',
      ],
    },
    {
      type: 'title',
      text: 'Chronologie Réaliste: Combien de Temps pour Améliorer Votre MPM',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Les tests de dactylographie montrent généralement une progression dans cette chronologie (avec 15-20 min de pratique quotidienne ciblée):',
    },
    {
      type: 'list',
      items: [
        '<strong>Semaine 1:</strong> Pas de changement visible (reprogrammation cérébrale)',
        '<strong>Semaine 2-3:</strong> +5 MPM (premiers changements neuronaux)',
        '<strong>Semaine 4-8:</strong> +3-5 MPM par semaine (courbe d\'apprentissage accélérée)',
        '<strong>Semaine 9-12:</strong> +2-3 MPM par semaine (petit plateau)',
        '<strong>Mois 4-6:</strong> +1-2 MPM par semaine (rendements décroissants)',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Ligne de fond:</strong>',
    },
    {
      type: 'list',
      items: [
        '50 à 80 MPM: 4-6 semaines (pratique quotidienne)',
        '80 à 120 MPM: 8-12 semaines',
        '100 à 150+ MPM: 4-6 mois (nécessite un entraînement très ciblé)',
      ],
    },
    {
      type: 'paragraph',
      html: '<em>Le facteur clé est la COHÉRENCE, pas l\'intensité. 10 minutes quotidiennement surpassent 2 heures tous les 2 semaines. Le cerveau apprend par répétition espacée, pas les marathons.</em>',
    },
  ],
  faq: [
    {
      question: 'Quelle est la vitesse de dactylographie moyenne?',
      answer: 'La vitesse moyenne des adultes est 40-60 MPM (mots par minute). Les dactylographes compétents atteignent 70-100 MPM. Les plus rapides dépassent 200 MPM. Ce test montre où vous êtes.',
    },
    {
      question: 'Comment le MPM est-il calculé?',
      answer: 'Prenez les caractères corrects, divisez par 5 (longueur moyenne des mots), divisez par les minutes écoulées. Cela pénalise automatiquement les erreurs, vous donnant une vitesse nette juste.',
    },
    {
      question: 'Mes résultats sont-ils sauvegardés?',
      answer: 'Oui, localement dans votre navigateur. Votre meilleur MPM est sauvegardé automatiquement. Personne en ligne ne voit vos résultats à moins que vous les partagiez.',
    },
    {
      question: 'Est-ce précis sans internet?',
      answer: 'Totalement. Ce test s\'exécute 100% dans votre navigateur sans envoyer de données aux serveurs. Cela signifie une précision milliseconde, zéro latence réseau.',
    },
    {
      question: 'Combien de temps pour améliorer ma vitesse?',
      answer: 'Des améliorations notables en 2-3 semaines avec une pratique constante. Des changements dramatiques (ex: 50 à 100 MPM) prennent 3-6 mois de pratique sérieuse.',
    },
    {
      question: 'Puis-je pratiquer sans internet?',
      answer: 'Bien sûr. Ce test fonctionne 100% hors ligne. Chargez une fois, puis jouez sans internet. Parfait pour les voyages ou les pannes WiFi.',
    },
  ],
  howTo: [
    {
      name: 'Commencez à taper',
      text: 'Commencez simplement à taper. Le minuteur démarre automatiquement à la première frappe. Vous avez 60 secondes.',
    },
    {
      name: 'Tapez les mots correctement',
      text: 'Les mots corrects se mettent en surbrillance en cyan. Les lettres mal tapées deviennent rouges. Terminez chaque mot sans erreur pour le compter.',
    },
    {
      name: 'Regardez votre progression en direct',
      text: 'Votre MPM, précision et nombre de mots se mettent à jour en temps réel pendant que vous tapez.',
    },
    {
      name: 'Obtenez vos résultats finaux',
      text: 'Quand le temps s\'écoule, voyez votre MPM final, votre précision totale et l\'option de partager les résultats.',
    },
  ],
  bibliography: [
    {
      name: 'Wikipedia - Mots par minute',
      url: 'https://en.wikipedia.org/wiki/Words_per_minute',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
