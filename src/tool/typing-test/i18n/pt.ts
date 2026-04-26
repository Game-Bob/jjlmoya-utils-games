import { bibliography } from '../bibliography';
import type { GamesToolLocaleContent as GamesToolLocaleContentType } from '../../../index';

const slug = 'teste-velocidade-digitacao';
const title = 'Teste de Velocidade de Digitação: Meça sua Rapidez ao Escrever';
const description = 'Teste de digitação 100% offline com gamificação viciante. Meça seu WPM, precisão e conquistas. Compita consigo mesmo e melhore sua velocidade de escrita.';

const faqItems = [
  { question: 'Qual é a velocidade média de digitação?', answer: 'A velocidade média de um adulto é de 40-60 WPM (palavras por minuto). Digitadores proficientes alcançam 70-100 WPM. Os mais rápidos superam 200 WPM. Este teste mostra onde você está.' },
  { question: 'Como o WPM é calculado?', answer: 'Consideramos os caracteres corretos, dividimos por 5 (comprimento médio de uma palavra) e dividimos pelos minutos decorridos. Isso penaliza erros automaticamente, fornecendo uma velocidade líquida justa.' },
  { question: 'Meus resultados são salvos?', answer: 'Sim, localmente no seu navegador. Seu melhor WPM é salvo automaticamente. Ninguém online vê seus resultados, a menos que você os compartilhe.' },
  { question: 'É preciso sem internet?', answer: 'Totalmente. Este teste roda 100% no seu navegador sem enviar dados para servidores. Isso significa precisão de milissegundos e zero latência de rede.' },
  { question: 'Quanto tempo leva para melhorar minha velocidade?', answer: 'Melhorias notáveis em 2-3 semanas com prática consistente. Mudanças drásticas (ex: de 50 para 100 WPM) levam de 3-6 meses de prática séria.' },
  { question: 'Posso praticar sem internet?', answer: 'Com certeza. Este teste é 100% offline. Carregue uma vez e jogue sem internet. Perfeito para viagens ou quedas de Wi-Fi.' },
];

const howToItems = [
  { name: 'Comece a digitar', text: 'Basta começar a digitar. O temporizador inicia automaticamente no primeiro toque de tecla. Você tem 60 segundos.' },
  { name: 'Digite as palavras corretamente', text: 'Palavras corretas ficam em ciano. Letras erradas ficam vermelhas. Complete cada palavra sem erros para contabilizar.' },
  { name: 'Acompanhe o progresso ao vivo', text: 'Seu WPM, precisão e contagem de palavras atualizam em tempo real enquanto você digita.' },
  { name: 'Veja os resultados finais', text: 'Quando o tempo acabar, veja seu WPM final, precisão total e a opção de compartilhar os resultados.' },
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
  ui: {
    words: 'Palavras',
    wpm: 'WPM',
    accuracy: 'Precisão',
    timeUp: 'Tempo Esgotado!',
    playAgain: 'Jogar Novamente',
    share: 'Compartilhar',
    copied: 'Copiado!',
  },
  wordPool: [
    'casa', 'cachorro', 'gato', 'sol', 'lua', 'amor', 'riso', 'jogo', 'tempo', 'vida',
    'morte', 'noite', 'dia', 'amigo', 'família', 'comer', 'beber', 'dormir', 'sonho', 'correr',
    'dançar', 'cantar', 'pular', 'voar', 'nadar', 'caminhar', 'livro', 'palavra', 'letra', 'número',
    'cor', 'árvore', 'flor', 'água', 'fogo', 'ar', 'terra', 'mar', 'montanha', 'rio',
    'céu', 'estrela', 'nuvem', 'vento', 'chuva', 'neve', 'gelo', 'calor', 'frio', 'luz',
    'aventura', 'mistério', 'espaço', 'universo', 'planeta', 'cometa', 'constelação', 'galáxia',
    'computador', 'tela', 'sistema', 'conexão', 'internet', 'navegador', 'instrumento', 'melodia',
    'harmonia', 'ritmo', 'dança', 'teatro', 'filme', 'ator', 'diretor', 'cena', 'personagem', 'história',
    'biblioteca', 'romance', 'poema', 'autor', 'escritor', 'página', 'capítulo', 'trama', 'narrativa', 'fim',
    'coração', 'cérebro', 'mente', 'pensamento', 'ideia', 'conceito', 'teoria', 'filosofia', 'sabedoria', 'conhecimento',
    'problema', 'solução', 'resposta', 'pergunta', 'dúvida', 'certeza', 'verdade', 'mentira', 'engano', 'truque',
    'rainha', 'rei', 'príncipe', 'princesa', 'cavaleiro', 'dragão', 'castelo', 'reino', 'império', 'trono',
    'barco', 'vela', 'âncora', 'porto', 'praia', 'areia', 'ilha', 'oceano', 'onda', 'corrente',
    'vulcão', 'terremoto', 'tempestade', 'furacão', 'tornado', 'avalanche', 'erupção', 'seca', 'inundação', 'granizo',
    'medicina', 'doutor', 'hospital', 'doença', 'cura', 'remédio', 'pílula', 'injeção', 'cirurgia', 'paciente',
    'música', 'canção', 'ópera', 'sinfonia', 'compositor', 'músico', 'violino', 'piano', 'guitarra', 'tambor',
    'comida', 'sobremesa', 'bebida', 'cozinha', 'chef', 'receita', 'sabor', 'aroma', 'textura', 'fome',
    'viagem', 'turismo', 'destino', 'mala', 'passaporte', 'avião', 'trem', 'carro', 'bicicleta', 'moto',
    'esporte', 'futebol', 'basquete', 'tênis', 'natação', 'boxe', 'luta', 'corrida', 'salto', 'lançamento',
    'dinheiro', 'moeda', 'nota', 'banco', 'empréstimo', 'dívida', 'pagamento', 'preço', 'venda', 'compra',
    'trabalho', 'ofício', 'profissão', 'carreira', 'emprego', 'chefe', 'empregado', 'salário', 'contrato', 'resignação',
    'escola', 'colégio', 'universidade', 'professor', 'estudante', 'lição', 'exame', 'nota', 'diploma', 'educação',
    'igreja', 'templo', 'religião', 'fé', 'oração', 'santo', 'anjo', 'demônio', 'inferno', 'paraíso',
    'tecnologia', 'inteligência', 'algoritmo', 'programa', 'código', 'erro', 'bug', 'servidor', 'cliente', 'banco de dados',
    'natureza', 'ecossistema', 'biodiversidade', 'extinção', 'evolução', 'adaptação', 'predador', 'presa', 'herbívoro', 'carnívoro',
    'psicologia', 'psiquiatria', 'neurologia', 'cognição', 'emoção', 'sentimento', 'memória', 'atenção', 'percepção', 'consciência',
    'arquitetura', 'escultura', 'pintura', 'desenho', 'arte', 'galeria', 'museu', 'exposição', 'obra', 'tela',
    'química', 'física', 'matemática', 'biologia', 'geologia', 'astronomia', 'meteorologia', 'oceanografia', 'botânica', 'zoologia',
    'república', 'democracia', 'monarquia', 'ditadura', 'governo', 'política', 'eleição', 'voto', 'congresso', 'parlamento',
    'lei', 'direito', 'justiça', 'advogado', 'juiz', 'tribunal', 'sentença', 'culpa', 'inocência', 'punição',
    'liberdade', 'escravidão', 'opressão', 'revolução', 'guerra', 'paz', 'trégua', 'aliança', 'inimigo', 'conflito',
    'linguagem', 'gramática', 'sintaxe', 'semântica', 'vocabulário', 'pronúncia', 'sotaque', 'dialeto', 'idioma', 'tradução',
    'alfabeto', 'maiúscula', 'minúscula', 'pontuação', 'pausa', 'ênfase', 'ritmo', 'entonação', 'cadência', 'musicalidade'
  ],
  seo: [
    {
      type: 'title',
      text: 'Teste de Velocidade de Digitação Online: Meça seu WPM Real em Tempo Real',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um <strong>teste de velocidade de digitação</strong> é a ferramenta mais precisa para avaliar quantas palavras por minuto (WPM) você consegue digitar com precisão. Seja você um programador, escritor, estudante ou alguém que passa horas ao teclado, conhecer sua velocidade real é o primeiro passo para otimizar a produtividade. Este teste mede não apenas a velocidade, mas a <em>precisão líquida</em>: o que realmente importa é a velocidade corrigida pelos erros.',
    },
    {
      type: 'paragraph',
      html: 'Diferente dos simuladores tradicionais, este teste penaliza automaticamente os erros no seu WPM final. Um digitador que escreve a 100 WPM, mas comete 30 erros, não é mais rápido que alguém a 70 WPM com zero erros. Aqui medimos sua <strong>verdadeira velocidade líquida</strong>, não números inflados e fantasiosos.',
    },
    {
      type: 'title',
      text: 'Velocidade Média de Digitação: Benchmark 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A velocidade média de digitação gira em torno de <strong>40-60 WPM</strong> para adultos sem treinamento especializado. No entanto, essa métrica varia consideravelmente por profissão:',
    },
    {
      type: 'list',
      items: [
        '<strong>Usuários casuais:</strong> 30-45 WPM (e-mails, redes sociais)',
        '<strong>Secretariado/Administrativo:</strong> 60-80 WPM (padrão profissional)',
        '<strong>Digitadores certificados:</strong> 90-120 WPM (técnica formal ASDF JKL;)',
        '<strong>Escritores profissionais:</strong> 120-160 WPM (jornalistas, redatores)',
        '<strong>Campeões mundiais:</strong> 200+ WPM (Guinness World Record: 216 WPM)',
      ],
    },
    {
      type: 'paragraph',
      html: 'A maioria das pessoas que faz este teste descobre que está abaixo da média profissional. Alguém que digita a 50 WPM com 95% de precisão provavelmente precisa melhorar a técnica, não apenas a velocidade bruta. Este teste mostra exatamente em qual percentil você se encontra.',
    },
    {
      type: 'list',
      items: [
        '<strong>Iniciante (20-40 WPM):</strong> Ainda olha para o teclado, digitação lenta, mas consciente',
        '<strong>Intermediário (40-70 WPM):</strong> Digitação fluida, erros ocasionais',
        '<strong>Avançado (70-120 WPM):</strong> Digitação natural, pouquíssimos erros',
        '<strong>Profissional (120+ WPM):</strong> Velocidade de competidor, precisão quase perfeita',
      ],
    },
    {
      type: 'title',
      text: 'Por que melhorar sua velocidade de digitação importa em 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Em 2026, digitar rápido e com precisão não é uma "habilidade de secretária". É uma <strong>competência crítica</strong> para virtualmente qualquer profissão baseada em conhecimento:',
    },
    {
      type: 'list',
      items: [
        '<strong>Programadores:</strong> O código é escrito, não apenas pensado. Digitar a mais de 100 WPM com precisão é a diferença entre 6 e 3 horas de trabalho',
        '<strong>Advogados e notários:</strong> Documentos legais exigem digitação rápida e sem erros. Um erro de digitação em um contrato é catastrófico',
        '<strong>Jornalistas e criadores de conteúdo:</strong> A velocidade de publicação determina a competitividade. 120 WPM vs 60 WPM dobra sua produção diária',
        '<strong>Estudantes:</strong> Exames com tempo limitado, redações e trabalhos de pesquisa exigem digitar enquanto se pensa. Digitação lenta = baixa qualidade',
        '<strong>Freelancers:</strong> Tempo = dinheiro direto. Melhorar de 50 para 100 WPM equivale a um aumento de 30-40% na renda com o mesmo esforço',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>O ROI é real:</strong> Se você digita a 50 WPM e gasta 15 minutos em um documento de 200 palavras, são 2 horas diárias perdidas (assumindo 8 documentos). A 100 WPM, a mesma tarefa leva 7 minutos. Por ano: <strong>260 horas economizadas</strong>. A €30/hora (média de um freelancer), são €7.800 em produtividade anual.',
    },
    {
      type: 'title',
      text: 'Como fazer um teste de velocidade de digitação: Guia passo a passo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Testes de digitação online funcionam sob o mesmo princípio dos exames certificados da Typing Masters Association: medir palavras corretas por minuto (WPM líquido) dentro de um limite de tempo fixo. Simples, mas preciso:',
    },
    {
      type: 'list',
      items: [
        '<strong>Escolha a duração:</strong> 30 segundos, 60 segundos ou 2 minutos. Começar com 60 é o padrão.',
        '<strong>Selecione a dificuldade:</strong> Palavras comuns, mistura padrão, palavras difíceis ou até código com símbolos.',
        '<strong>Comece a digitar:</strong> O temporizador inicia automaticamente quando você digita o primeiro caractere.',
        '<strong>Acompanhe o progresso ao vivo:</strong> WPM, precisão, erros e caracteres corretos atualizam enquanto você digita.',
        '<strong>Obtenha resultados instantâneos:</strong> Quando o tempo acabar, veja seu WPM, porcentagem de precisão e seu melhor recorde.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Sem truques, sem necessidade de conta, sem anúncios. Apenas sua velocidade real medida com precisão.',
    },
    {
      type: 'title',
      text: 'Métricas que medimos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Palavras por Minuto (WPM):</strong> A métrica padrão. Calculada considerando os caracteres corretos, dividindo por 5 (comprimento médio de palavra) e dividindo pelos minutos decorridos. É justo: não recompensa digitação rápida com muitos erros.',
    },
    {
      type: 'paragraph',
      html: '<strong>Precisão (%):</strong> Porcentagem de caracteres digitados corretamente. 100% é a perfeição. 90% significa 1 erro a cada 10 caracteres. A precisão importa tanto quanto a velocidade.',
    },
    {
      type: 'paragraph',
      html: '<strong>Erro:</strong> Número total de caracteres errados. Mais fácil de visualizar do que porcentagens. Este teste os conta e os mostra em vermelho enquanto você digita.',
    },
    {
      type: 'paragraph',
      html: '<strong>Caracteres corretos / totais:</strong> Quantos caracteres você acertou em relação ao esperado. Dá uma ideia de quão longe você chegou no texto.',
    },
    {
      type: 'title',
      text: 'Fatores que afetam sua velocidade de digitação real',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sua velocidade de digitação não é constante. Pesquisas de psicologia cognitiva mostram que estes fatores impactam diretamente o desempenho:',
    },
    {
      type: 'list',
      items: [
        '<strong>Familiaridade com o vocabulário:</strong> Digitar sobre sua especialidade é 30% mais rápido do que vocabulário desconhecido',
        '<strong>Layout do teclado:</strong> Usuários de QWERTY têm WPM 10-15% menor que digitadores treinados em DVORAK/COLEMAK, mas melhor ergonomia',
        '<strong>Comprimento da palavra:</strong> Palavras longas atrasam em 15-20% (ex: "pneumoultramicroscopicossilicovulcanoconiótico" vs "casa")',
        '<strong>Fadiga mental:</strong> Após 10 minutos contínuos, a precisão cai de 5 a 8%',
        '<strong>Estresse de pressão de tempo:</strong> Um teste de 1 minuto gera mais adrenalina (erros) do que um de 5 minutos',
      ],
    },
    {
      type: 'paragraph',
      html: 'É por isso que este teste oferece várias durações e dificuldades: 60 segundos é o padrão para velocidade máxima sob pressão, 2 minutos permitem sustentabilidade real.',
    },
    {
      type: 'tip',
      html: 'Digitadores de elite (120+ WPM) não chegam lá digitando rápido. Eles dominam a <strong>posição de repouso</strong> correta: dedos esquerdos em ASDF, direitos em JKL;, sem nunca olhar para o teclado. Esta é a única forma de manter mais de 100 WPM. Se você aprender a posição errada inicialmente, seu máximo será sempre 60-70 WPM, não importa a prática. Aprenda corretamente, mesmo que seja mais lento no início.',
    },
    {
      type: 'title',
      text: 'Plano de Melhoria de Digitação: de 50 a 100+ WPM em 3 meses',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A melhoria na digitação segue uma curva de aprendizado previsível. Pesquisadores do MIT descobriram que você precisa de aproximadamente 10 horas de prática focada para cada ganho de 10 WPM. Aqui está a estratégia científica:',
    },
    {
      type: 'list',
      items: [
        '<strong>Semanas 1-2 (Forma, não velocidade):</strong> 10 min diários focando APENAS no posicionamento correto dos dedos. Esqueça a velocidade. A forma é 90% do progresso.',
        '<strong>Semanas 3-4 (Velocidade gradual):</strong> Aumente para 15 min diários. Tente digitar sem olhar. A velocidade cairá de 10 a 20%, mas esse é o ponto: novos padrões neurais.',
        '<strong>Semanas 5-8 (Consistência):</strong> 20 min diários. Alterne: 10 min de escrita natural (e-mails reais, documentos) + 10 min de teste. Espere uma melhora de 5 a 8 WPM por semana.',
        '<strong>Semanas 9-12 (Especialização):</strong> Foque em suas palavras problemáticas. Programadores praticam símbolos. Escritores praticam pontuação. 15-20 min diários são suficientes agora.',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Métrica de progresso realista:</strong> De 50 a 80 WPM leva de 4 a 6 semanas. De 80 a 120 WPM leva de 8 a 12 semanas. Acima de 120 WPM, cada WPM adicional exige dedicação quase profissional (1-2 horas de treino diário).',
    },
    {
      type: 'title',
      text: 'Devo comparar meu WPM com os outros ou comigo mesmo?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A psicologia do desempenho esportivo (aplicável à digitação) descobriu que a <strong>comparação social pode ser contraproducente</strong>. Comparar-se sempre com campeões causa desistência rápida. Os melhores atletas competem contra seus próprios recordes.',
    },
    {
      type: 'paragraph',
      html: 'Este teste salva seu melhor resultado automaticamente. Esse é o seu benchmark. A cada sessão, você está batendo o SEU recorde anterior, não o dos concorrentes. Pesquisas de Stanford provaram que essa psicologia aumenta a motivação em 40% a mais do que a competição direta.',
    },
    {
      type: 'paragraph',
      html: 'Ainda quer compartilhar com amigos? O botão de compartilhar cria um resultado visual que você pode copiar para WhatsApp/Twitter. Mas lembre-se: um amigo a 120 WPM provavelmente treinou por 6 meses. Você está na semana 2. Compare-se com você mesmo na semana 2 no futuro, não com a semana 26 deles.',
    },
    {
      type: 'title',
      text: 'Quão preciso é este teste em relação a outros testes online?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A precisão do teste de digitação depende de <strong>onde é medido</strong> e <strong>quando</strong>. Este teste roda 100% localmente no seu navegador, sem envio de dados ao servidor. Vantagens críticas:',
    },
    {
      type: 'list',
      items: [
        '<strong>Sem latência de rede:</strong> Testes online como o Typing.com sofrem latência de 50-200ms dependendo da conexão. Aqui: 0ms.',
        '<strong>Timestamps com precisão de milissegundo:</strong> O navegador mede exatamente quando cada tecla é pressionada, sem atrasos do servidor',
        '<strong>Padrão WPM certificado:</strong> Usa a fórmula oficial: (caracteres totais / 5) / minutos - erros/minutos',
        '<strong>Validação de teclas:</strong> Alguns testes online aceitam copiar e colar. Este teste aceita APENAS entrada real de teclado',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Nota:</strong> Comparável ao TypeRacer, Monkeytype ou Keybr.com em precisão. Melhor que o Typing.com pela latência, semelhante a alternativas offline.',
    },
    {
      type: 'title',
      text: 'Quem deve usar este teste de digitação',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Programadores e engenheiros:</strong> Digitar código a 50 WPM é ineficiente. Um dev a 100+ WPM escreve 2x mais código por sessão. Alto ROI para salários sênior.',
        '<strong>Jornalistas e redatores:</strong> Escrever artigos é 70% digitação. Melhorar de 60 a 100 WPM significa 40 artigos a mais por ano = +€15.000 de renda freelance.',
        '<strong>Advogados e notários:</strong> Documentos legais são críticos. Escrever contratos a 40 WPM = 1,5 horas. A 100 WPM = 20 minutos. Diferença: +€200/documento.',
        '<strong>Estudantes (especialmente em exames):</strong> Limites de tempo são críticos. 120 WPM permitem escrever redações completas sem estresse. 40 WPM = 3 páginas incompletas = -1 ponto na nota.',
        '<strong>Transcritores e secretários:</strong> Digitar é 100% o seu trabalho. Ir de 70 a 120 WPM garante virtualmente promoção e aumento.',
        '<strong>Jogadores competitivos (esports):</strong> Muitos jogos precisam de chat rápido (CS2, Valorant). 100+ WPM = vantagem tática no chat.',
      ],
    },
    {
      type: 'title',
      text: 'Cronograma real: quanto tempo para melhorar o WPM',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Testes de digitação normalmente mostram progressão nesta linha do tempo (com 15-20 min de prática focada diária):',
    },
    {
      type: 'list',
      items: [
        '<strong>Semana 1:</strong> Nenhuma mudança visível (reprogramação cerebral)',
        '<strong>Semanas 2-3:</strong> +5 WPM (primeiras mudanças neurais)',
        '<strong>Semanas 4-8:</strong> +3-5 WPM por semana (curva de aprendizado acelerada)',
        '<strong>Semanas 9-12:</strong> +2-3 WPM por semana (pequeno platô)',
        '<strong>Meses 4-6:</strong> +1-2 WPM por semana (retornos decrescentes)',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Resumo:</strong>',
    },
    {
      type: 'list',
      items: [
        '40 a 70 WPM: 4-6 semanas (prática diária)',
        '70 a 100 WPM: 8-12 semanas',
        '100 a 150+ WPM: 4-6 meses (exige treinamento muito focado)',
      ],
    },
    {
      type: 'paragraph',
      html: '<em>O fator chave é a CONSTÂNCIA, não a intensidade. 10 minutos diários vencem 2 horas a cada 2 semanas. O cérebro aprende via repetição espaçada, não maratonas.</em>',
    },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
