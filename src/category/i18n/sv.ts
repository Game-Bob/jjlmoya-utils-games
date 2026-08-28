import type { CategoryLocaleContent } from '../../types';

const slug = 'spel';
const title = 'Virala Utmaningar och Spel: Typtest och Beroendeframkallande Hastighetstester';
const description = 'Spelifierade utmaningar och virala spel för att testa dina färdigheter. Typtester, hastighetsutmaningar och beroendeframkallande spel 100% offline.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Varför Spelifierade Utmaningar Fungerar så Bra', level: 2 },
    { type: 'paragraph', html: 'Spelifierade utmaningar förbättrar kognitiva färdigheter genom hälsosam konkurrens. Hjärnan frisätter dopamin, vilket skapar tillfredsställande och minnesvärda upplevelser.' },
    { type: 'title', text: 'Skrivhastighet i den Digitala Tidsåldern', level: 2 },
    { type: 'paragraph', html: 'Skrivhastighet är grundläggande. En förbättring med 10 WPM sparar timmar. Väldesignade tester mäter både hastighet och noggrannhet.' },
    { type: 'title', text: 'Hur Utmaningar Fungerar', level: 2 },
    { type: 'list', items: ['Omedelbar feedback på framsteg', 'Tydliga, kvantifierbara regler', 'Skalbara svårighetsgrader', 'Tävling mot dina egna rekord'] },
    { type: 'title', text: 'Bevisade Fördelar', level: 2 },
    { type: 'paragraph', html: '<strong>Förbättra dig 20-30% på 4-6 veckor</strong> med regelbunden övning av typtest.' },
    { type: 'tip', html: 'Rätt kroppshållning: rak rygg, 90° armbågar, neutrala handleder, fingrarna på hemraden. Form först, hastighet senare.' },
  ],
};
