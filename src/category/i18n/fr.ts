import type { CategoryLocaleContent } from '../../types';

const slug = 'defis-jeux';
const title = 'Défis Viraux & Jeux | Test de Dactylographie & Défis de Vitesse';
const description = 'Défis gamifiés et jeux viraux pour tester vos compétences. Tests de dactylographie, défis de vitesse et jeux addictifs 100% hors ligne.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Pourquoi les Défis Gamifiés Fonctionnent', level: 2 },
    { type: 'paragraph', html: 'Les défis gamifiés améliorent les compétences cognitives par la compétition saine. Le cerveau libère de la dopamine, créant des expériences satisfaisantes.' },
    { type: 'title', text: 'Dactylographie à l\'Ère Numérique', level: 2 },
    { type: 'paragraph', html: 'La vitesse de dactylographie est fondamentale. Une amélioration de 10 PPM économise des heures. Les tests bien conçus mesurent vitesse et précision.' },
    { type: 'title', text: 'Comment Fonctionnent les Défis', level: 2 },
    { type: 'list', items: ['Retour immédiat sur les progrès', 'Règles claires et mesurables', 'Niveaux de difficulté évolutifs', 'Compétition avec vos propres records'] },
    { type: 'title', text: 'Bénéfices Prouvés', level: 2 },
    { type: 'paragraph', html: '<strong>Améliorez-vous de 20-30% en 4-6 semaines</strong> de pratique régulière du test de dactylographie.' },
    { type: 'tip', html: 'Posture correcte: dos droit, coudes 90°, poignets neutres, doigts sur la rangée d\'accueil. Forme d\'abord, vitesse après.' },
  ],
};
