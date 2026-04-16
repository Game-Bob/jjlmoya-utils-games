import type { CategoryLocaleContent } from '../../types';

const slug = 'gry';
const title = 'Wirusowe Wyzwania i Gry: Test Pisania i Wciągające Wyzwania Prędkości';
const description = 'Grywalizacja i wirusowe gry do testowania Twoich umiejętności. Testy pisania, wyzwania prędkości i wciągające gry 100% offline.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Dlaczego Grywalizacja Działa tak Dobrze', level: 2 },
    { type: 'paragraph', html: 'Wyzwania oparte na grywalizacji poprawiają umiejętności poznawcze poprzez zdrową rywalizację. Mózg uwalnia dopaminę, tworząc satysfakcjonujące i niezapomniane doświadczenia.' },
    { type: 'title', text: 'Pisanie w Erze Cyfrowej', level: 2 },
    { type: 'paragraph', html: 'Szybkość pisania jest fundamentalna. Poprawa o 10 WPM oszczędza godziny. Dobrze zaprojektowane testy mierzą zarówno prędkość, jak i dokładność.' },
    { type: 'title', text: 'Jak Działają Wyzwania', level: 2 },
    { type: 'list', items: ['Natychmiastowa informacja zwrotna o postępach', 'Jasne, mierzalne zasady', 'Skalowalne poziomy trudności', 'Rywalizacja z własnymi rekordami'] },
    { type: 'title', text: 'Udowodnione Korzyści', level: 2 },
    { type: 'paragraph', html: '<strong>Popraw się o 20-30% w 4-6 tygodni</strong> regularnej praktyki testu pisania.' },
    { type: 'tip', html: 'Prawidłowa postawa: proste plecy, łokcie pod kątem 90°, neutralne nadgarstki, palce na rzędzie podstawowym. Najpierw forma, potem szybkość.' },
  ],
};
