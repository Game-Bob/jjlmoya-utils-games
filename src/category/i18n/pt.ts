import type { CategoryLocaleContent } from '../../types';

const slug = 'jogos';
const title = 'Desafios Virais e Jogos: Teste de Digitação e Desafios de Velocidade';
const description = 'Desafios gamificados e jogos virais para testar suas habilidades. Testes de digitação, desafios de velocidade e jogos viciantes 100% offline.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Por que os Desafios Gamificados Funcionam tão Bem', level: 2 },
    { type: 'paragraph', html: 'Desafios gamificados melhoram as habilidades cognitivas por meio de uma competição saudável. O cérebro libera dopamina, criando experiências satisfatórias e memoráveis.' },
    { type: 'title', text: 'A Digitação na Era Digital', level: 2 },
    { type: 'paragraph', html: 'A velocidade de escrita é fundamental. Uma melhoria de 10 WPM economiza horas. Testes bem projetados medem tanto a velocidade quanto a precisão.' },
    { type: 'title', text: 'Como Funcionam os Desafios', level: 2 },
    { type: 'list', items: ['Feedback imediato sobre o progresso', 'Regras claras e quantificáveis', 'Níveis de dificuldade escaláveis', 'Competição contra seus próprios recordes'] },
    { type: 'title', text: 'Benefícios Comprovados', level: 2 },
    { type: 'paragraph', html: '<strong>Melhore 20-30% em 4-6 semanas</strong> de prática regular de teste de digitação.' },
    { type: 'tip', html: 'Postura correta: costas retas, cotovelos a 90°, pulsos neutros, dedos na linha base. Forma primeiro, velocidade depois.' },
  ],
};
