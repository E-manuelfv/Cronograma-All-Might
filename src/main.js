/* ========== 1) CONFIGURAÇÃO SUPABASE ========== */
const CONFIG = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL || "",
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
};
const HAS_SB = !!(
  CONFIG.supabaseUrl &&
  CONFIG.supabaseAnonKey &&
  window.supabase
);
const sb = HAS_SB
  ? window.supabase.createClient(
      CONFIG.supabaseUrl,
      CONFIG.supabaseAnonKey,
    )
  : null;

/* ========== 2) SEED (dados iniciais) ========== */
const SEED_COMPETIDORES = [
  "Vinícius",
  "Maximus",
  "Cacau",
  "Nobre",
  "Maria Clara",
  "Ana Clara",
];
const SEED_MENTORES = [
  "Maria Melissa",
  "Duda",
  "Any Giselly",
  "Rafael",
  "Gonçalves",
  "Emanuel",
  "Pedro Vinícius",
  "Francisco Evando",
  "Lara",
];

const FRENTES = {
  robo: "Robô",
  deolho: "De Olho na Robótica",
  patro: "Patrocínio",
  marca: "Marca e divulgação",
  gestao: "Gestão",
  doc: "Documentação",
};
const TIPOS = {
  treino: "Treino",
  evento: "Evento",
  misto: "Evento + treino",
  visita: "Visita técnica",
  sem: "Sem treino",
  feriado: "Feriado",
};

const T = (f, o, q, c, e) => ({
  f,
  o,
  q: q || [],
  c: c || [],
  e: e || "",
});
const DIARIO = (quem) =>
  T(
    "doc",
    "Escrever o diário de bordo do dia: fotos, decisões, problemas e o que fica para o próximo treino",
    [quem],
    ["Any Giselly", "Duda"],
    "Página do dia no diário de bordo",
  );

const SEED_DIAS = [
  {
    d: "2026-10-05",
    tipo: "treino",
    titulo: "Construção do robô",
    foco: "Dia de colocar a mão no robô e levantar tudo o que ainda falta para ele ficar pronto.",
    avisos: [
      "Quem vai ao Siará na quarta e na quinta: confirmar autorização e horário do transporte do Sesi até o fim do treino.",
    ],
    tarefas: [
      T(
        "robo",
        "Avançar a montagem do robô e testar o encaixe das peças impressas em colmeia",
        ["Maximus", "Vinícius"],
        ["Rafael", "Gonçalves"],
        "Robô montado até onde as peças permitem, com fotos",
      ),
      T(
        "robo",
        "Listar todas as peças e componentes que ainda faltam, motor incluso",
        ["Maximus", "Cacau"],
        ["Emanuel"],
        "Lista de peças faltantes",
      ),
      T(
        "robo",
        "Colocar o shooter impresso no robô e escrever o primeiro teste de disparo",
        ["Nobre"],
        ["Rafael"],
        "Teste rodando e anotação do que falhou",
      ),
      T(
        "gestao",
        "Abrir a planilha de custo do motor e das peças que faltam (prazo: 30/10)",
        ["Cacau"],
        ["Emanuel"],
        "Planilha criada a partir da lista de hoje",
      ),
      T(
        "patro",
        "Enviar à Ibyte a proposta do evento do Lumen (R$ 600) usando o plano de patrocínio",
        ["Ana Clara"],
        ["Pedro Vinícius"],
        "Proposta enviada e data de resposta combinada",
      ),
      T(
        "marca",
        "Montar a pauta do Siará: perguntas para o patrocinador (quarta) e lista de vídeos para gravar (quinta)",
        ["Maria Clara", "Cacau"],
        ["Nobre", "Ana Clara"],
        "Pauta e lista de vídeos no grupo da equipe",
      ),
      DIARIO("Vinícius"),
    ],
  },
  {
    d: "2026-10-06",
    tipo: "sem",
    titulo: "Folga do treino",
    foco: "Dia livre de treino.",
    avisos: [
      "Ana Clara e Pedro Vinícius: acompanhar a resposta da Ibyte.",
      "Nobre, Maria Clara e Cacau: conferir o horário de saída do transporte do Sesi para amanhã.",
    ],
    tarefas: [],
  },
  {
    d: "2026-10-07",
    tipo: "evento",
    titulo: "Siará Tech Summit · dia 1",
    foco: "Conhecer o nosso patrocinador e mostrar a All Might no hackathon.",
    presenca: [
      { r: "Vão ao Siará", n: ["Nobre", "Maria Clara", "Cacau"] },
      {
        r: "Liberados do treino",
        n: ["Vinícius", "Maximus", "Ana Clara"],
      },
    ],
    avisos: [
      "Transporte de ida e volta pelo Sesi.",
      "Evento gratuito. O hackathon dura 3 dias (7, 8 e 9/10).",
    ],
    tarefas: [
      T(
        "patro",
        "Conhecer o patrocinador, apresentar a equipe e mostrar o plano de patrocínio",
        ["Nobre", "Maria Clara", "Cacau"],
        [],
        "Contato do patrocinador e próximos passos anotados",
      ),
      T(
        "deolho",
        "Participar do hackathon e anotar empresas e pessoas que podem apoiar a equipe",
        ["Cacau"],
        ["Nobre"],
        "Lista de contatos: nome, empresa e como falar",
      ),
      T(
        "marca",
        "Fotos e stories do primeiro dia",
        ["Maria Clara"],
        [],
        "Stories no ar e fotos na pasta da equipe",
      ),
      DIARIO("Nobre"),
    ],
  },
  {
    d: "2026-10-08",
    tipo: "misto",
    titulo: "Siará dia 2 + treino do MCI",
    foco: "Uma parte grava conteúdo no Siará, a outra treina o MCI com o robô.",
    presenca: [
      { r: "Vão ao Siará", n: ["Ana Clara", "Maria Clara", "Cacau"] },
      { r: "Treino na escola", n: ["Vinícius", "Maximus", "Nobre"] },
    ],
    avisos: ["Quem fica: o foco do treino é o MCI com o robô."],
    tarefas: [
      T(
        "marca",
        "Gravar os conteúdos de divulgação da lista feita na segunda",
        ["Ana Clara", "Maria Clara"],
        ["Cacau"],
        "Vídeos brutos organizados na pasta da equipe",
      ),
      T(
        "deolho",
        "Gravar falas de participantes e organizadores do hackathon para o portfólio",
        ["Cacau"],
        [],
        "Falas gravadas e nomes anotados",
      ),
      T(
        "robo",
        "Treino do MCI com o robô",
        ["Nobre", "Vinícius", "Maximus"],
        ["Rafael", "Gonçalves"],
        "Anotações do que travou ou quebrou",
      ),
      T(
        "robo",
        "Ajustar o código com o que apareceu no treino do MCI",
        ["Nobre"],
        ["Rafael"],
        "Código atualizado",
      ),
      DIARIO("Maximus"),
    ],
  },
  {
    d: "2026-10-09",
    tipo: "treino",
    titulo: "Treino normal + estrutura do FLL Discover",
    foco: "Robô andando e o Torneio FLL Discover saindo do papel.",
    avisos: ["Último dia do hackathon do Siará."],
    tarefas: [
      T(
        "deolho",
        "Estruturar o Torneio FLL Discover: formato, número de equipes, datas dos treinos das crianças, regras e avaliação",
        ["Cacau", "Maria Clara", "Ana Clara", "Nobre"],
        ["Maria Melissa", "Duda", "Emanuel"],
        "Documento de 1 página do projeto",
      ),
      T(
        "robo",
        "Seguir a montagem e o CAD das peças em colmeia",
        ["Vinícius", "Maximus"],
        ["Rafael", "Gonçalves"],
        "Arquivos prontos para teste na Távola 3D",
      ),
      T(
        "marca",
        "Escolher o melhor material do Siará e montar o primeiro post",
        ["Maria Clara"],
        ["Ana Clara"],
        "Post pronto para revisão",
      ),
      T(
        "patro",
        "Cobrar a resposta da Ibyte, se ainda não veio",
        ["Ana Clara"],
        ["Pedro Vinícius"],
        "Resposta da Ibyte ou nova data",
      ),
      T(
        "patro",
        "Ver se o patrocínio da Gamebiz caiu e, se caiu, liberar o envio das camisas",
        ["Pedro Vinícius", "Francisco Evando"],
        ["Ana Clara"],
        "Status das camisas",
      ),
      DIARIO("Cacau"),
    ],
  },
  {
    d: "2026-10-12",
    tipo: "feriado",
    titulo: "Nossa Senhora Aparecida",
    foco: "Feriado nacional. Sem treino.",
    avisos: [],
    tarefas: [],
  },
  {
    d: "2026-10-13",
    tipo: "sem",
    titulo: "Sem treino · reunião da camiseta",
    foco: "Não tem treino, mas tem a reunião da camiseta oversized.",
    avisos: [
      "O mentor externo da camiseta volta a ter agenda a partir de hoje.",
    ],
    tarefas: [
      T(
        "marca",
        "Reunião com o mentor externo sobre a camiseta oversized: modelo, custo e como vender",
        ["Pedro Vinícius", "Francisco Evando", "Ana Clara"],
        ["Mentor externo"],
        "Modelo e próximos passos definidos",
      ),
    ],
  },
  {
    d: "2026-10-14",
    tipo: "treino",
    titulo: "Fechar a Ibyte e protótipo do Lumen",
    foco: "Sem o dinheiro confirmado não dá para comprar o material do Lumen. Hoje é o prazo interno.",
    avisos: [
      "Prazo interno: Ibyte confirmada hoje. Se não vier, Maria Melissa e Emanuel decidem o plano B no fim do treino.",
    ],
    tarefas: [
      T(
        "patro",
        "Fechar o patrocínio da Ibyte para o Lumen (R$ 600) e pedir a confirmação por escrito",
        ["Ana Clara"],
        ["Pedro Vinícius", "Maria Melissa"],
        "Confirmação da Ibyte",
      ),
      T(
        "deolho",
        "Desenhar o mini-robô de corrida do Lumen e imprimir o primeiro protótipo em PETG",
        ["Vinícius"],
        ["Gonçalves"],
        "Protótipo impresso",
      ),
      T(
        "robo",
        "Preparar a visita ao IFCE: fotos das peças que cederam, CAD da colmeia e perguntas sobre material",
        ["Maximus", "Vinícius"],
        ["Emanuel"],
        "Pauta da visita pronta",
      ),
      T(
        "robo",
        "Confirmar com o Dr. Nélio Freitas o horário da visita do dia 19",
        ["Maximus"],
        ["Emanuel"],
        "Horário e local confirmados",
      ),
      T(
        "robo",
        "Separar no código o que é teleoperado e o que é autônomo e listar o que falta",
        ["Nobre"],
        ["Rafael"],
        "Lista do que falta na programação",
      ),
      DIARIO("Nobre"),
    ],
  },
  {
    d: "2026-10-15",
    tipo: "treino",
    titulo: "Avine, compras e escola",
    foco: "Marcar a reunião com a Avine, comprar o material do Lumen e alinhar o torneio com a escola.",
    avisos: ["Compras só depois da confirmação da Ibyte."],
    tarefas: [
      T(
        "gestao",
        "Mandar mensagem para a Mônica (Avine) e marcar a reunião do Plus Ultra",
        ["Cacau", "Maria Clara"],
        ["Any Giselly"],
        "Data marcada (meta: até 23/10)",
      ),
      T(
        "deolho",
        "Comprar o material do Lumen: PETG (R$ 210), motores e interruptores (R$ 225), pilhas (R$ 80) e saquinhos (R$ 25)",
        ["Cacau"],
        ["Emanuel", "Pedro Vinícius"],
        "Pedidos feitos e prazo de entrega anotado",
      ),
      T(
        "deolho",
        "Alinhar com a Direção Escolar as turmas do 4º ano, o professor e as datas dos treinos das crianças",
        ["Ana Clara", "Maria Clara"],
        ["Maria Melissa", "Direção Escolar"],
        "Turmas, professor e datas confirmados",
      ),
      T(
        "robo",
        "Mandar para a Távola 3D os arquivos das peças de teste em colmeia",
        ["Vinícius"],
        ["Gonçalves"],
        "Arquivos enviados e prazo combinado",
      ),
      T(
        "robo",
        "Seguir a montagem e o treino do MCI",
        ["Maximus", "Nobre"],
        ["Rafael"],
        "Anotações no diário",
      ),
      DIARIO("Maria Clara"),
    ],
  },
  {
    d: "2026-10-16",
    tipo: "treino",
    titulo: "Protótipo aprovado e próximo evento",
    foco: "Fechar o modelo do mini-robô para começar a impressão em série.",
    avisos: ["A impressão dos mini-robôs vai de hoje até 22/10."],
    tarefas: [
      T(
        "deolho",
        "Testar o protótipo do mini-robô (motor, pilha e interruptor) e fechar o modelo final",
        ["Vinícius", "Nobre"],
        ["Gonçalves"],
        "Modelo final aprovado",
      ),
      T(
        "deolho",
        "Começar a impressão em série dos mini-robôs em PETG",
        ["Maximus"],
        ["Gonçalves"],
        "Plano de impressão com quantidade por dia",
      ),
      T(
        "deolho",
        "Definir o próximo evento do De Olho na Robótica: data, local e parceiro",
        ["Maria Clara", "Cacau"],
        ["Maria Melissa", "Duda", "Emanuel"],
        "Proposta do evento",
      ),
      T(
        "doc",
        "Listar possíveis mentores externos de documentação e mandar o convite",
        ["Ana Clara"],
        ["Any Giselly", "Duda"],
        "Convite enviado",
      ),
      T(
        "patro",
        "Conferir se o patrocínio da Gamebiz caiu",
        ["Pedro Vinícius"],
        ["Francisco Evando"],
        "Status das camisas",
      ),
      DIARIO("Ana Clara"),
    ],
  },
  {
    d: "2026-10-19",
    tipo: "visita",
    titulo: "Visita técnica ao IFCE",
    foco: "Ouvir o Dr. Nélio Freitas sobre o melhor material para fabricar o robô.",
    presenca: [
      {
        r: "Responsáveis pela visita",
        n: ["Maximus", "Vinícius", "Emanuel"],
      },
      { r: "Demais", n: ["Confirmar vagas com o Emanuel"] },
    ],
    avisos: ["Levar as peças que cederam e o notebook com o CAD."],
    tarefas: [
      T(
        "robo",
        "Mostrar o problema (plástico cedendo, peso da chapa) e a colmeia, e perguntar qual material usar",
        ["Maximus", "Vinícius"],
        ["Dr. Nélio Freitas (IFCE)", "Emanuel"],
        "Recomendação de material anotada",
      ),
      T(
        "marca",
        "Fotos e vídeo da visita para o portfólio, se houver vaga",
        ["Maria Clara"],
        [],
        "Fotos na pasta da equipe",
      ),
      T(
        "doc",
        "Relatório da visita: o que perguntamos, o que ouvimos e o que vamos mudar",
        ["Vinícius"],
        ["Any Giselly"],
        "Relatório no diário de bordo",
      ),
    ],
  },
  {
    d: "2026-10-20",
    tipo: "sem",
    titulo: "Folga do treino",
    foco: "Dia livre de treino.",
    avisos: [
      "Dá para fazer de casa: agradecer o Dr. Nélio e marcar a reunião com Dr. Valdenor e Denilson.",
    ],
    tarefas: [
      T(
        "robo",
        "Marcar a reunião com Dr. Francisco Valdenor e Denilson (a partir de 22/10)",
        ["Maximus", "Vinícius"],
        ["Emanuel"],
        "Data confirmada",
      ),
    ],
  },
  {
    d: "2026-10-21",
    tipo: "treino",
    titulo: "Aplicar o que o IFCE disse",
    foco: "Transformar a visita em mudança no robô e no orçamento.",
    avisos: [],
    tarefas: [
      T(
        "robo",
        "Atualizar o CAD com a recomendação de material do Dr. Nélio",
        ["Vinícius"],
        ["Rafael"],
        "CAD atualizado",
      ),
      T(
        "gestao",
        "Atualizar a planilha de custos com o material novo",
        ["Cacau"],
        ["Emanuel"],
        "Planilha atualizada",
      ),
      T(
        "deolho",
        "Conferir a chegada do material do Lumen e seguir a impressão dos mini-robôs",
        ["Maximus"],
        ["Gonçalves"],
        "Quantidade impressa até hoje",
      ),
      T(
        "robo",
        "Rascunhar a rotina de testes do robô: o que testar, como e com que frequência",
        ["Nobre"],
        ["Rafael", "Gonçalves", "Emanuel"],
        "Checklist v1 da rotina de testes",
      ),
      T(
        "deolho",
        "Montar o roteiro da oficina do Lumen: abertura, montagem, corrida e encerramento, com o tempo de cada parte",
        ["Maria Clara"],
        ["Maria Melissa"],
        "Roteiro da oficina",
      ),
      DIARIO("Vinícius"),
    ],
  },
  {
    d: "2026-10-22",
    tipo: "treino",
    titulo: "IFCE de novo + kits do Lumen",
    foco: "Fechar com o IFCE o que eles vão fabricar e deixar os kits do Lumen prontos.",
    avisos: [
      "Maximus, Vinícius e Emanuel podem sair para o IFCE. O resto segue no Lumen.",
    ],
    tarefas: [
      T(
        "robo",
        "Reunião com Dr. Francisco Valdenor (projeto do robô e peças do OFA) e Denilson (fabricação)",
        ["Maximus", "Vinícius"],
        ["Emanuel", "Dr. Francisco Valdenor (IFCE)", "Denilson (IFCE)"],
        "Lista do que o IFCE vai usinar e prazo",
      ),
      T(
        "deolho",
        "Montar os kits do Lumen nos saquinhos: peças, motor, interruptor e pilhas",
        ["Ana Clara", "Cacau"],
        ["Pedro Vinícius"],
        "Kits montados e contados",
      ),
      T(
        "deolho",
        "Montar a pista de corrida e testar mini-robôs completos",
        ["Nobre", "Maria Clara"],
        ["Maria Melissa"],
        "Pista pronta e robôs testados",
      ),
      DIARIO("Maximus"),
    ],
  },
  {
    d: "2026-10-23",
    tipo: "treino",
    titulo: "Ensaio geral do Lumen",
    foco: "Passar a oficina inteira, cada um na função de sábado.",
    avisos: [
      "Todo mundo no ensaio. Saímos daqui com o checklist fechado.",
    ],
    tarefas: [
      T(
        "deolho",
        "Ensaio geral da oficina seguindo o roteiro",
        [...SEED_COMPETIDORES],
        ["Maria Melissa", "Pedro Vinícius", "Emanuel"],
        "Roteiro testado e ajustado",
      ),
      T(
        "gestao",
        "Checklist do sábado: transporte (R$ 60), kits, pilhas extras, ferramentas, pista e uniforme",
        ["Cacau"],
        ["Emanuel"],
        "Checklist conferido",
      ),
      T(
        "marca",
        "Post de chamada do Lumen e aviso para a Ibyte de que o evento é amanhã",
        ["Maria Clara"],
        ["Ana Clara"],
        "Post no ar",
      ),
      DIARIO("Cacau"),
    ],
  },
  {
    d: "2026-10-24",
    tipo: "evento",
    titulo: "Evento no Instituto Lumen",
    foco: "Oficina de robótica com robôs em PETG e corrida de robôs para 30 crianças.",
    presenca: [
      { r: "Equipe", n: [...SEED_COMPETIDORES] },
      {
        r: "Mentores",
        n: ["Maria Melissa", "Pedro Vinícius", "Emanuel"],
      },
    ],
    avisos: [
      "Fotos de crianças só com autorização de imagem.",
      "Custo do evento: R$ 600, patrocínio da Ibyte.",
    ],
    tarefas: [
      T(
        "deolho",
        "Abertura: apresentar a All Might e explicar a oficina",
        ["Maria Clara"],
        ["Maria Melissa"],
        "",
      ),
      T(
        "deolho",
        "Montagem dos mini-robôs com as crianças, cada um com um grupo",
        ["Vinícius", "Maximus", "Nobre", "Ana Clara"],
        ["Pedro Vinícius"],
        "",
      ),
      T(
        "deolho",
        "Corrida de robôs: organizar as baterias e cronometrar",
        ["Cacau"],
        ["Emanuel"],
        "Resultado das corridas",
      ),
      T(
        "marca",
        "Fotos e vídeos depois da abertura",
        ["Maria Clara"],
        [],
        "Material na pasta da equipe",
      ),
      T(
        "doc",
        "Contar participantes e colher depoimentos para o portfólio (Reach)",
        ["Cacau"],
        ["Maria Melissa"],
        "Número de crianças e depoimentos",
      ),
      DIARIO("Nobre"),
    ],
  },
  {
    d: "2026-10-26",
    tipo: "treino",
    titulo: "Depois do Lumen",
    foco: "Agradecer, registrar o impacto e voltar para o robô.",
    avisos: [],
    tarefas: [
      T(
        "marca",
        "Post de agradecimento à Ibyte com fotos do Lumen",
        ["Maria Clara", "Ana Clara"],
        ["Pedro Vinícius"],
        "Post no ar com a Ibyte marcada",
      ),
      T(
        "doc",
        "Relatório de impacto do Lumen: crianças, fotos, depoimentos e custo",
        ["Cacau"],
        ["Duda"],
        "Uma página de evidência para o portfólio",
      ),
      T(
        "robo",
        "Acompanhar a fabricação no IFCE e testar no robô as peças da Távola 3D",
        ["Maximus", "Vinícius"],
        ["Rafael", "Gonçalves"],
        "Peças testadas e anotadas",
      ),
      T(
        "deolho",
        "Começar a impressão das peças em ABS do Torneio FLL Discover, separadas por equipe",
        ["Nobre"],
        ["Gonçalves"],
        "Plano de impressão das peças",
      ),
      DIARIO("Maria Clara"),
    ],
  },
  {
    d: "2026-10-27",
    tipo: "treino",
    titulo: "Rotina de testes v1",
    foco: "Primeira rodada oficial de testes do robô.",
    avisos: ["Confirmar com a equipe."],
    tarefas: [
      T(
        "robo",
        "Rodar a rotina de testes v1 no robô e anotar os resultados",
        ["Nobre"],
        ["Rafael", "Gonçalves", "Emanuel"],
        "Resultados no diário",
      ),
      T(
        "deolho",
        "Preparar o treino 1 das crianças: atividade, materiais e divisão das equipes",
        ["Maria Clara", "Ana Clara"],
        ["Duda"],
        "Plano do treino 1",
      ),
      T(
        "robo",
        "Seguir a montagem com as peças que chegaram",
        ["Maximus", "Vinícius"],
        ["Rafael"],
        "Montagem atualizada",
      ),
      DIARIO("Ana Clara"),
    ],
  },
  {
    d: "2026-10-28",
    tipo: "treino",
    titulo: "Treino 1 das crianças",
    foco: "Primeiro contato das equipes do 4º ano com o torneio.",
    avisos: [
      "Horário do treino das crianças a confirmar com a Direção Escolar.",
    ],
    tarefas: [
      T(
        "deolho",
        "Treino 1 do FLL Discover com as equipes do 4º ano, na sala de robótica",
        ["Maria Clara", "Ana Clara"],
        ["Duda", "Professor do 4º ano"],
        "Lista de presença por equipe",
      ),
      T(
        "robo",
        "Treino do MCI com o robô",
        ["Nobre", "Vinícius", "Maximus"],
        ["Rafael", "Gonçalves"],
        "Anotações do treino",
      ),
      T(
        "gestao",
        "Fechar os valores da planilha de custos (motor e peças)",
        ["Cacau"],
        ["Emanuel"],
        "Planilha pronta para sexta",
      ),
      DIARIO("Vinícius"),
    ],
  },
  {
    d: "2026-10-29",
    tipo: "sem",
    titulo: "Folga do treino",
    foco: "Dia livre de treino.",
    avisos: [
      "Cacau e Nobre: revisar a planilha de custos para apresentar amanhã.",
    ],
    tarefas: [],
  },
  {
    d: "2026-10-30",
    tipo: "treino",
    titulo: "Custos fechados",
    foco: "Prazo do custo do motor e das peças. E o torneio ganha ficha e certificado.",
    avisos: ["Prazo: custo do motor e das peças que faltam."],
    tarefas: [
      T(
        "gestao",
        "Apresentar o custo do motor e das peças que faltam e decidir a quem pedir apoio",
        ["Cacau", "Nobre"],
        ["Rafael", "Emanuel"],
        "Valor total e lista de quem procurar",
      ),
      T(
        "deolho",
        "Ficha de avaliação do torneio para os monitores da escola",
        ["Cacau"],
        ["Maria Melissa", "Duda"],
        "Ficha pronta",
      ),
      T(
        "marca",
        "Arte dos certificados do Torneio FLL Discover",
        ["Ana Clara"],
        [],
        "Arte pronta para imprimir",
      ),
      T(
        "gestao",
        "Primeira conversa do plano de contingência do Grupo All Might: escopo e responsável (Lara ou Maria Clara)",
        ["Maria Clara"],
        ["Lara", "Emanuel", "All Might FLL"],
        "Escopo e responsável definidos",
      ),
      T(
        "robo",
        "Treino com o robô e ajustes da rotina de testes",
        ["Nobre", "Maximus", "Vinícius"],
        ["Gonçalves"],
        "Rotina ajustada",
      ),
      DIARIO("Maximus"),
    ],
  },
  {
    d: "2026-11-02",
    tipo: "feriado",
    titulo: "Finados",
    foco: "Feriado nacional. Sem treino.",
    avisos: [],
    tarefas: [],
  },
  {
    d: "2026-11-03",
    tipo: "treino",
    titulo: "Semana do torneio",
    foco: "Começa a reta final do Torneio FLL Discover.",
    avisos: ["Confirmar com a equipe."],
    tarefas: [
      T(
        "deolho",
        "Planejar o layout do torneio na sala do Fundamental 1 e listar o que falta",
        ["Cacau", "Nobre"],
        ["Emanuel"],
        "Desenho da sala e lista de material",
      ),
      T(
        "marca",
        "Post de convite do Torneio FLL Discover",
        ["Maria Clara"],
        ["Ana Clara"],
        "Post no ar",
      ),
      T(
        "robo",
        "Rotina de testes v2 com as peças novas",
        ["Nobre"],
        ["Rafael", "Gonçalves"],
        "Resultados no diário",
      ),
      T(
        "deolho",
        "Conferir os kits em ABS de cada equipe",
        ["Maximus"],
        ["Gonçalves"],
        "Kits completos",
      ),
      DIARIO("Cacau"),
    ],
  },
  {
    d: "2026-11-04",
    tipo: "treino",
    titulo: "Treino 2 das crianças",
    foco: "Simulado com as regras do torneio.",
    avisos: [
      "Horário do treino das crianças a confirmar com a Direção Escolar.",
    ],
    tarefas: [
      T(
        "deolho",
        "Treino 2 do FLL Discover: simulado com as regras do torneio",
        ["Maria Clara", "Ana Clara"],
        ["Duda", "Professor do 4º ano"],
        "Equipes prontas para sábado",
      ),
      T(
        "deolho",
        "Imprimir os certificados e a ficha de avaliação",
        ["Cacau"],
        ["Emanuel"],
        "Material impresso",
      ),
      T(
        "robo",
        "Treino do MCI com o robô",
        ["Nobre", "Vinícius", "Maximus"],
        ["Rafael"],
        "Anotações do treino",
      ),
      DIARIO("Nobre"),
    ],
  },
  {
    d: "2026-11-05",
    tipo: "treino",
    titulo: "Ensaio do torneio",
    foco: "Fechar o cronograma do sábado e a função de cada um.",
    avisos: [],
    tarefas: [
      T(
        "deolho",
        "Ensaio do sábado: cronograma do dia e função de cada um",
        ["Cacau", "Maria Clara", "Ana Clara", "Nobre"],
        ["Maria Melissa", "Duda", "Emanuel"],
        "Cronograma do torneio fechado",
      ),
      T(
        "deolho",
        "Explicar a ficha de avaliação para os monitores da escola",
        ["Cacau"],
        ["Maria Melissa"],
        "Monitores alinhados",
      ),
      T(
        "robo",
        "Seguir a montagem e os testes do robô",
        ["Maximus", "Vinícius"],
        ["Rafael", "Gonçalves"],
        "Anotações no diário",
      ),
      DIARIO("Maria Clara"),
    ],
  },
  {
    d: "2026-11-06",
    tipo: "treino",
    titulo: "Véspera do torneio",
    foco: "Sala montada e tudo conferido.",
    avisos: [],
    tarefas: [
      T(
        "deolho",
        "Montar o espaço do torneio e conferir tudo pelo checklist",
        ["Cacau", "Nobre", "Maximus", "Vinícius"],
        ["Emanuel"],
        "Sala pronta",
      ),
      T(
        "marca",
        "Separar o material de registro: celular carregado e autorizações de imagem",
        ["Ana Clara", "Maria Clara"],
        [],
        "Tudo separado",
      ),
      T(
        "doc",
        "Revisar o diário de outubro com a mentoria de documentação",
        ["Ana Clara"],
        ["Any Giselly", "Duda"],
        "Diário revisado",
      ),
      DIARIO("Ana Clara"),
    ],
  },
  {
    d: "2026-11-07",
    tipo: "evento",
    titulo: "Torneio FLL Discover",
    foco: "Competição das equipes do 4º ano na sala de robótica do Fundamental 1, com avaliação dos monitores da escola.",
    presenca: [
      { r: "Equipe", n: [...SEED_COMPETIDORES] },
      { r: "Mentores", n: ["Maria Melissa", "Duda", "Emanuel"] },
    ],
    avisos: ["Fotos de crianças só com autorização de imagem."],
    tarefas: [
      T(
        "deolho",
        "Coordenação geral e cronograma do dia",
        ["Cacau"],
        ["Maria Melissa"],
        "",
      ),
      T(
        "deolho",
        "Apresentação e condução do torneio",
        ["Maria Clara"],
        ["Duda"],
        "",
      ),
      T(
        "deolho",
        "Apoio às equipes do 4º ano nas mesas",
        ["Nobre"],
        ["Professor do 4º ano", "Duda"],
        "",
      ),
      T(
        "deolho",
        "Cronômetro e placar",
        ["Vinícius"],
        [],
        "Placar final",
      ),
      T(
        "deolho",
        "Suporte técnico e peças de reserva",
        ["Maximus"],
        ["Emanuel"],
        "",
      ),
      T(
        "deolho",
        "Avaliação das equipes com a ficha",
        ["Monitores da escola"],
        ["Cacau"],
        "Fichas preenchidas",
      ),
      T(
        "marca",
        "Fotos, vídeo e depoimentos",
        ["Ana Clara"],
        [],
        "Material na pasta da equipe",
      ),
      DIARIO("Vinícius"),
    ],
  },
];
const SEED_SOLTOS = [
  T(
    "gestao",
    "Reunião com a Mônica (Avine) sobre o Plus Ultra",
    ["Cacau", "Maria Clara", "Any Giselly"],
    ["Mônica (Avine)"],
    "Marcar em 15/10, meta até 23/10",
  ),
  T(
    "patro",
    "Enviar as camisas assim que o patrocínio da Gamebiz cair",
    ["Pedro Vinícius", "Francisco Evando", "Ana Clara"],
    [],
    "Conferir toda sexta",
  ),
  T(
    "doc",
    "Fechar um mentor externo para a documentação",
    ["Cacau", "Maria Clara", "Ana Clara", "Any Giselly"],
    ["Maria Melissa", "Duda", "Emanuel"],
    "Até novembro",
  ),
  T(
    "deolho",
    "Organizar os próximos eventos do De Olho na Robótica",
    ["Cacau", "Maria Clara", "Ana Clara"],
    ["Maria Melissa", "Emanuel", "Duda"],
    "Proposta em 16/10",
  ),
  T(
    "gestao",
    "Plano de contingência do Grupo All Might",
    ["Maria Clara", "Lara"],
    ["Emanuel", "All Might FLL"],
    "Primeira conversa em 30/10",
  ),
];

/* ========== 3) ESTADO ========== */
let COMPETIDORES = [],
  MENTORES = [],
  EQUIPE = [];
let PESSOAS = []; // {id,nome,tipo,ativo,ordem}
let DIAS = []; // {id,d,tipo,titulo,foco,avisos,presenca,tarefas:[]}
let SOLTOS = []; // {id,dia_id:null,f,o,q,c,e,feito,ordem}
let BY = {},
  ORDER = [];
let PESSOA = "";
let VIEW = "cal";
let SEL = null;
let EDIT = false;

const $ = (s) => document.querySelector(s);
const DOW = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
const DOW3 = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const MES = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];
const parse = (s) => {
  const p = s.split("-").map(Number);
  return new Date(p[0], p[1] - 1, p[2]);
};
const iso = (dt) =>
  dt.getFullYear() +
  "-" +
  String(dt.getMonth() + 1).padStart(2, "0") +
  "-" +
  String(dt.getDate()).padStart(2, "0");
const addDays = (dt, n) => {
  const x = new Date(dt);
  x.setDate(x.getDate() + n);
  return x;
};
const esc = (s) =>
  String(s).replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
  );
const today = new Date();
today.setHours(0, 0, 0, 0);
const TODAY = iso(today);

/* ========== 4) CARREGAMENTO ========== */
function reindex() {
  BY = {};
  ORDER = [];
  DIAS.forEach((x) => {
    BY[x.d] = x;
    ORDER.push(x.d);
  });
  ORDER.sort();
}

function useSeed() {
  COMPETIDORES = SEED_COMPETIDORES.slice();
  MENTORES = SEED_MENTORES.slice();
  EQUIPE = COMPETIDORES.concat(MENTORES);
  DIAS = JSON.parse(JSON.stringify(SEED_DIAS)).map((x) => ({
    ...x,
    tarefas: (x.tarefas || []).map((t) => ({
      ...t,
      feito: false,
      dia_id: null,
    })),
  }));
  SOLTOS = JSON.parse(JSON.stringify(SEED_SOLTOS)).map((t) => ({
    ...t,
    feito: false,
    dia_id: null,
  }));
  reindex();
}

async function seedSupabase() {
  // pessoas
  const pRows = [
    ...SEED_COMPETIDORES.map((n, i) => ({
      nome: n,
      tipo: "competidor",
      ordem: i,
    })),
    ...SEED_MENTORES.map((n, i) => ({
      nome: n,
      tipo: "mentor",
      ordem: i + 100,
    })),
  ];
  await sb.from("pessoas").insert(pRows);
  // dias + tarefas
  for (const d of SEED_DIAS) {
    const { data, error } = await sb
      .from("dias")
      .insert({
        data: d.d,
        tipo: d.tipo,
        titulo: d.titulo,
        foco: d.foco || "",
        avisos: d.avisos || [],
        presenca: d.presenca || [],
      })
      .select()
      .single();
    if (error) {
      console.error(error);
      continue;
    }
    if (d.tarefas?.length) {
      const tRows = d.tarefas.map((t, i) => ({
        dia_id: data.id,
        frente: t.f,
        objetivo: t.o,
        quem: t.q || [],
        com_quem: t.c || [],
        entrega: t.e || "",
        ordem: i,
      }));
      await sb.from("tarefas").insert(tRows);
    }
  }
  // soltos
  if (SEED_SOLTOS.length) {
    await sb.from("tarefas").insert(
      SEED_SOLTOS.map((t, i) => ({
        dia_id: null,
        frente: t.f,
        objetivo: t.o,
        quem: t.q || [],
        com_quem: t.c || [],
        entrega: t.e || "",
        ordem: i,
      })),
    );
  }
}

async function loadData() {
  if (!sb) {
    useSeed();
    return;
  }
  const [p, d, t] = await Promise.all([
    sb.from("pessoas").select("*").order("ordem"),
    sb.from("dias").select("*").order("data"),
    sb.from("tarefas").select("*").order("ordem"),
  ]);
  if (p.error || d.error || t.error) {
    console.error(p.error || d.error || t.error);
    useSeed();
    return;
  }
  if (d.data.length === 0) {
    await seedSupabase();
    return loadData();
  }

  PESSOAS = p.data;
  COMPETIDORES = PESSOAS.filter(
    (x) => x.tipo === "competidor" && x.ativo,
  ).map((x) => x.nome);
  MENTORES = PESSOAS.filter((x) => x.tipo === "mentor" && x.ativo).map(
    (x) => x.nome,
  );
  EQUIPE = COMPETIDORES.concat(MENTORES);

  const mapTask = (r) => ({
    id: r.id,
    dia_id: r.dia_id,
    f: r.frente,
    o: r.objetivo,
    q: r.quem || [],
    c: r.com_quem || [],
    e: r.entrega || "",
    feito: !!r.feito,
    ordem: r.ordem || 0,
  });

  DIAS = d.data.map((dia) => ({
    id: dia.id,
    d: dia.data,
    tipo: dia.tipo,
    titulo: dia.titulo,
    foco: dia.foco || "",
    avisos: dia.avisos || [],
    presenca: dia.presenca || [],
    tarefas: t.data.filter((x) => x.dia_id === dia.id).map(mapTask),
  }));
  SOLTOS = t.data.filter((x) => !x.dia_id).map(mapTask);
  reindex();
}

/* ========== 5) SALVAMENTO ========== */
async function saveDia(dia) {
  if (!sb || !dia.id) return;
  const { error } = await sb
    .from("dias")
    .update({
      data: dia.d,
      tipo: dia.tipo,
      titulo: dia.titulo,
      foco: dia.foco || "",
      avisos: dia.avisos || [],
      presenca: dia.presenca || [],
    })
    .eq("id", dia.id);
  if (error) {
    console.error(error);
    alert("Erro ao salvar dia: " + error.message);
  }
}
async function createDia(dia) {
  if (!sb) {
    dia.id = "local-" + Date.now();
    return dia;
  }
  const { data, error } = await sb
    .from("dias")
    .insert({
      data: dia.d,
      tipo: dia.tipo,
      titulo: dia.titulo,
      foco: dia.foco || "",
      avisos: dia.avisos || [],
      presenca: dia.presenca || [],
    })
    .select()
    .single();
  if (error) {
    console.error(error);
    alert("Erro ao criar dia: " + error.message);
    throw error;
  }
  dia.id = data.id;
  return dia;
}
async function deleteDiaDb(id) {
  if (!sb || !id || String(id).startsWith("local-")) return;
  const { error } = await sb.from("dias").delete().eq("id", id);
  if (error) alert("Erro ao excluir dia: " + error.message);
}
async function saveTask(task) {
  if (!sb) return;
  const payload = {
    frente: task.f,
    objetivo: task.o,
    quem: task.q || [],
    com_quem: task.c || [],
    entrega: task.e || "",
    ordem: task.ordem || 0,
    feito: !!task.feito,
  };
  if (
    !task.id ||
    String(task.id).startsWith("local-") ||
    String(task.id).startsWith("solto-")
  ) {
    const { data, error } = await sb
      .from("tarefas")
      .insert({
        ...payload,
        dia_id: task.dia_id || null,
      })
      .select()
      .single();
    if (error) {
      throw error;
    }
    task.id = data.id;
  } else {
    const { error } = await sb
      .from("tarefas")
      .update(payload)
      .eq("id", task.id);
    if (error) {
      console.error(error);
      alert("Erro ao salvar missão: " + error.message);
    }
  }
}
async function deleteTaskDb(id) {
  if (!sb || !id || String(id).startsWith("local-")) return;
  const { error } = await sb.from("tarefas").delete().eq("id", id);
  if (error) alert("Erro ao excluir: " + error.message);
}
async function createPessoa(p) {
  if (!sb) {
    p.id = "local-" + Date.now();
    return p;
  }
  const { data, error } = await sb
    .from("pessoas")
    .insert(p)
    .select()
    .single();
  if (error) {
    alert("Erro: " + error.message);
    throw error;
  }
  return data;
}
async function toggleFeito(task) {
  if (!sb) return;
  const { error } = await sb
    .from("tarefas")
    .update({ feito: !!task.feito })
    .eq("id", task.id);
  if (error) console.error(error);
}

/* ========== 6) HELPERS ========== */
const envolve = (t, p) => t.q.indexOf(p) >= 0 || t.c.indexOf(p) >= 0;
const missoesDe = (dia, p) =>
  p
    ? (dia.tarefas || []).filter((t) => envolve(t, p))
    : dia.tarefas || [];
const nomeLongo = (d) => {
  const dt = parse(d);
  return (
    DOW[dt.getDay()] + ", " + dt.getDate() + " de " + MES[dt.getMonth()]
  );
};
const curto = (d) => {
  const dt = parse(d);
  return (
    String(dt.getDate()).padStart(2, "0") +
    "/" +
    String(dt.getMonth() + 1).padStart(2, "0")
  );
};
const diasAte = (ate) => Math.round((parse(ate) - today) / 864e5);
function contagem(id, ate) {
  const n = diasAte(ate);
  const el = $(id);
  if (!el) return;
  el.textContent = n > 0 ? n : n === 0 ? "Hoje" : "✓";
}

/* ========== 7) SEMANAS DINÂMICAS ========== */
function getWeeks() {
  if (!DIAS.length) return [];
  const dates = DIAS.map((x) => parse(x.d)).sort((a, b) => a - b);
  const start = new Date(dates[0]);
  const day = start.getDay();
  start.setDate(start.getDate() - (day === 0 ? 6 : day - 1));
  const last = dates[dates.length - 1];
  const weeks = [];
  let cur = new Date(start);
  let n = 1;
  while (cur <= last) {
    const ini = iso(cur);
    const fim = iso(addDays(cur, 5));
    const inWeek = DIAS.filter((x) => x.d >= ini && x.d <= fim);
    const ev = inWeek.find(
      (x) => x.tipo === "evento" || x.tipo === "misto",
    );
    const title = ev ? ev.titulo : inWeek[0]?.titulo || "Semana " + n;
    weeks.push({ n: "Semana " + n, t: title, ini });
    cur = addDays(cur, 7);
    n++;
  }
  return weeks;
}

/* ========== 8) RENDER ========== */
function renderChips() {
  const box = $("#chips");
  box.innerHTML = "";
  ["Todos"].concat(COMPETIDORES).forEach((n) => {
    const b = document.createElement("button");
    b.className = "chip";
    b.type = "button";
    b.textContent = n;
    const ativo = (n === "Todos" && !PESSOA) || n === PESSOA;
    b.setAttribute("aria-pressed", ativo ? "true" : "false");
    b.addEventListener("click", () => setPessoa(n === "Todos" ? "" : n));
    box.appendChild(b);
  });
  const s = $("#mentor");
  if (s.options.length === 1) {
    MENTORES.forEach((m) => {
      const o = document.createElement("option");
      o.value = m;
      o.textContent = m;
      s.appendChild(o);
    });
  }
  s.value = MENTORES.indexOf(PESSOA) >= 0 ? PESSOA : "";
}
function setPessoa(p) {
  PESSOA = p;
  try {
    localStorage.setItem("am-cron-pessoa", p);
  } catch (e) {}
  renderAll();
}

function renderWeeks() {
  const box = $("#weeks");
  box.innerHTML = "";
  const weeks = getWeeks();
  weeks.forEach((w, wi) => {
    const ini = parse(w.ini),
      fim = addDays(ini, 5);
    const sec = document.createElement("div");
    sec.innerHTML =
      '<div class="week-head"><span class="n">' +
      w.n +
      '</span><span class="t">' +
      esc(w.t) +
      '</span><span class="r">' +
      curto(iso(ini)) +
      " a " +
      curto(iso(fim)) +
      "</span></div>";
    const grid = document.createElement("div");
    grid.className = "days";
    if (wi === 0)
      DOW3.slice(1).forEach((d) => {
        const h = document.createElement("div");
        h.className = "dow";
        h.textContent = d;
        grid.appendChild(h);
      });
    for (let i = 0; i < 6; i++) {
      const d = iso(addDays(ini, i));
      const dia = BY[d];
      const b = document.createElement("button");
      b.type = "button";
      const num = parse(d).getDate();
      if (!dia) {
        b.className = "day empty";
        b.disabled = true;
        b.setAttribute("aria-label", nomeLongo(d) + ", sem atividade");
        b.innerHTML =
          '<span class="in"><span class="num"><b>' +
          num +
          "</b></span></span>";
      } else {
        const minhas = missoesDe(dia, PESSOA);
        const totalMinhas = minhas.length;
        const total = (dia.tarefas || []).length;
        const ok = (dia.tarefas || []).filter((t) => t.feito).length;
        let cls = "day t-" + dia.tipo;
        if (d === TODAY) cls += " is-today";
        if (PESSOA && totalMinhas === 0) cls += " dim";
        b.className = cls;
        b.setAttribute("aria-pressed", d === SEL ? "true" : "false");
        b.setAttribute(
          "aria-label",
          nomeLongo(d) +
            ", " +
            TIPOS[dia.tipo] +
            ", " +
            dia.titulo +
            (PESSOA
              ? ", " + totalMinhas + " missões para " + PESSOA
              : ""),
        );
        const mine = PESSOA
          ? totalMinhas
            ? totalMinhas + (totalMinhas === 1 ? " missão" : " missões")
            : ""
          : total
            ? ok + "/" + total + " feitas"
            : "";
        b.innerHTML =
          '<span class="in"><span class="num"><b>' +
          num +
          "</b><i>" +
          DOW3[parse(d).getDay()] +
          "</i></span>" +
          '<span class="type">' +
          TIPOS[dia.tipo] +
          "</span>" +
          '<span class="ttl">' +
          esc(dia.titulo) +
          "</span>" +
          (mine ? '<span class="mine">' + mine + "</span>" : "") +
          "</span>";
        b.addEventListener("click", () => select(d, true));
      }
      grid.appendChild(b);
    }
    sec.appendChild(grid);
    box.appendChild(sec);
  });
  if (!weeks.length) {
    box.innerHTML =
      '<p class="empty-note">Nenhum dia cadastrado. Clique em <b>+ Novo dia</b> ou em <b>Editar</b> para começar.</p>';
  }
}

/* ---------- missão (cartão) ---------- */
function nomes(arr) {
  return (arr || [])
    .map((n) => {
      const interno = EQUIPE.indexOf(n) >= 0;
      const c =
        "nm" + (interno ? "" : " ext") + (n === PESSOA ? " me" : "");
      return '<span class="' + c + '">' + esc(n) + "</span>";
    })
    .join("");
}

function cartao(t, diaId, opts) {
  opts = opts || {};
  const done = !!t.feito;
  const mine = PESSOA && envolve(t, PESSOA);
  let role = "";
  if (opts.showRole && PESSOA) {
    role =
      t.q.indexOf(PESSOA) >= 0
        ? '<span class="role lead">Responsável</span>'
        : '<span class="role">Apoio</span>';
  }
  const editBar =
    '<div class="t-actions">' +
    '<button type="button" data-edit-task="' +
    t.id +
    '" title="Editar">✎</button>' +
    '<button type="button" data-del data-del-task="' +
    t.id +
    '" title="Excluir">✕</button>' +
    "</div>";
  return (
    '<article class="task f-' +
    t.f +
    (done ? " done" : "") +
    (mine && !opts.showRole ? " mine" : "") +
    '">' +
    '<label class="check" title="Marcar como feito">' +
    '<input type="checkbox" data-id="' +
    t.id +
    '"' +
    (done ? " checked" : "") +
    ' aria-label="Feito: ' +
    esc(t.o) +
    '"><span></span>' +
    "</label>" +
    '<div class="t-head">' +
    '<span class="frente">' +
    FRENTES[t.f] +
    "</span>" +
    role +
    editBar +
    "</div>" +
    '<p class="t-o">' +
    esc(t.o) +
    "</p>" +
    '<dl class="t-rows">' +
    '<dt>Quem</dt><dd><span class="names">' +
    nomes(t.q) +
    "</span></dd>" +
    (t.c && t.c.length
      ? '<dt>Com quem</dt><dd><span class="names">' +
        nomes(t.c) +
        "</span></dd>"
      : "") +
    (t.e ? "<dt>Entrega</dt><dd>" + esc(t.e) + "</dd>" : "") +
    "</dl></article>"
  );
}

function findTask(id) {
  for (const dia of DIAS) {
    const t = (dia.tarefas || []).find((x) => x.id === id);
    if (t) return { task: t, dia };
  }
  const s = SOLTOS.find((x) => x.id === id);
  return s ? { task: s, dia: null } : null;
}

/* ---------- ficha do dia ---------- */
function renderDetail() {
  const box = $("#detail");
  const dia = BY[SEL];
  if (!dia) {
    box.innerHTML = "";
    return;
  }
  const idx = ORDER.indexOf(SEL);
  const minhas = missoesDe(dia, PESSOA);
  let h = '<div class="detail-in">';
  h +=
    '<div class="d-top"><span class="d-date">' +
    nomeLongo(SEL) +
    "</span>" +
    '<div class="nav">' +
    '<button class="nav-btn" type="button" id="prev" aria-label="Dia anterior"' +
    (idx <= 0 ? " disabled" : "") +
    ">‹</button>" +
    '<button class="nav-btn" type="button" id="next" aria-label="Próximo dia"' +
    (idx >= ORDER.length - 1 ? " disabled" : "") +
    ">›</button>" +
    "</div></div>";
  h +=
    '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">' +
    '<span class="pill ' +
    dia.tipo +
    '">' +
    TIPOS[dia.tipo] +
    "</span>" +
    (EDIT
      ? '<button class="btn" type="button" id="edit-dia">✎ Editar dia</button>'
      : "") +
    "</div>";
  h += '<h2 class="d-title">' + esc(dia.titulo) + "</h2>";
  if (dia.foco) h += '<p class="d-foco">' + esc(dia.foco) + "</p>";
  if (dia.presenca && dia.presenca.length) {
    h +=
      '<div><p class="block-t">Quem está onde</p><div class="presenca">' +
      dia.presenca
        .map(
          (p) =>
            '<div class="pres"><h4>' +
            esc(p.r) +
            '</h4><div class="names">' +
            nomes(p.n) +
            "</div></div>",
        )
        .join("") +
      "</div></div>";
  }
  if (dia.avisos && dia.avisos.length) {
    h +=
      '<div><p class="block-t">Avisos</p><ul class="avisos">' +
      dia.avisos.map((a) => "<li>" + esc(a) + "</li>").join("") +
      "</ul></div>";
  }
  if ((dia.tarefas || []).length) {
    const totalMinhas = minhas.length;
    const label = PESSOA
      ? totalMinhas
        ? "Missões do dia · " + totalMinhas + " com " + esc(PESSOA)
        : "Missões do dia · nenhuma com " + esc(PESSOA)
      : "Missões do dia";
    h += '<div><p class="block-t">' + label + '</p><div class="tasks">';
    const ord = PESSOA
      ? minhas.concat(
          (dia.tarefas || []).filter((t) => minhas.indexOf(t) < 0),
        )
      : dia.tarefas;
    h += ord.map((t) => cartao(t, dia.id)).join("");
    h += "</div></div>";
  } else {
    h +=
      '<p class="empty-note">Nenhuma missão marcada para este dia.</p>';
  }
  if (EDIT) {
    h +=
      '<button class="add-btn" type="button" id="add-task-dia">+ Nova missão neste dia</button>';
  }
  if (dia.tipo === "treino" || dia.tipo === "misto") {
    h +=
      '<p class="rotina"><b>Rotina de todo treino.</b> Abertura de 10 minutos: a Cacau lê as missões do dia nesta página. Fechamento de 10 minutos: quem está no diário registra o dia e cada um marca o que concluiu.</p>';
  }
  h += "</div>";
  box.innerHTML = h;

  const p = $("#prev"),
    n = $("#next");
  if (p) p.addEventListener("click", () => select(ORDER[idx - 1], false));
  if (n) n.addEventListener("click", () => select(ORDER[idx + 1], false));
  const ed = $("#edit-dia");
  if (ed) ed.addEventListener("click", () => openDiaDialog(dia));
  const at = $("#add-task-dia");
  if (at) at.addEventListener("click", () => openTaskDialog(null, dia));
}

/* ---------- lista por pessoa ---------- */
function renderList() {
  const box = $("#list"),
    prog = $("#prog");
  if (!PESSOA) {
    prog.innerHTML = "";
    box.innerHTML =
      '<p class="empty-note">Escolha seu nome em "Eu sou" ou em "Mentor" para ver todas as suas missões.</p>';
    return;
  }
  let total = 0,
    ok = 0,
    h = "";
  DIAS.slice()
    .sort((a, b) => (a.d < b.d ? -1 : 1))
    .forEach((dia) => {
      const m = missoesDe(dia, PESSOA);
      if (!m.length) return;
      total += m.length;
      ok += m.filter((t) => t.feito).length;
      const dt = parse(dia.d);
      h +=
        '<div class="list-day"><button type="button" class="list-date" data-go="' +
        dia.d +
        '">' +
        "<b>" +
        curto(dia.d) +
        "</b><span>" +
        DOW3[dt.getDay()] +
        " · " +
        TIPOS[dia.tipo] +
        "</span></button>" +
        '<div class="tasks">' +
        m.map((t) => cartao(t, dia.id, { showRole: true })).join("") +
        "</div></div>";
    });
  const soltos = SOLTOS.filter((t) => envolve(t, PESSOA));
  if (soltos.length) {
    total += soltos.length;
    ok += soltos.filter((t) => t.feito).length;
    h +=
      '<div class="list-day"><div class="list-date" style="cursor:default"><b>Sem dia</b><span>Combinados</span></div>' +
      '<div class="tasks">' +
      soltos.map((t) => cartao(t, null, { showRole: true })).join("") +
      "</div></div>";
  }
  const pct = total ? Math.round((ok / total) * 100) : 0;
  prog.innerHTML =
    '<strong style="color:var(--fg)">' +
    esc(PESSOA) +
    "</strong>" +
    "<span>" +
    ok +
    " de " +
    total +
    " missões feitas</span>" +
    '<span class="meter" aria-hidden="true"><i style="width:' +
    pct +
    '%"></i></span>';
  box.innerHTML =
    h ||
    '<p class="empty-note">Nenhuma missão com ' + esc(PESSOA) + ".</p>";
  box.querySelectorAll("[data-go]").forEach((b) =>
    b.addEventListener("click", () => {
      setView("cal");
      select(b.getAttribute("data-go"), true);
    }),
  );
}

function renderLoose() {
  let h = SOLTOS.map((t) => cartao(t, null)).join("");
  if (EDIT)
    h +=
      '<button class="add-btn" type="button" id="add-loose">+ Nova meta sem dia fixo</button>';
  $("#loose").innerHTML =
    h || '<p class="empty-note">Nenhum combinado sem dia fixo.</p>';
  const btn = $("#add-loose");
  if (btn)
    btn.addEventListener("click", () => openTaskDialog(null, null));
}

/* ---------- navegação ---------- */
function select(d, rolar) {
  SEL = d;
  try {
    history.replaceState(null, "", "#dia-" + d);
  } catch (e) {}
  renderWeeks();
  renderDetail();
  if (rolar && window.matchMedia("(max-width:1039px)").matches) {
    const reduz = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    $("#detail").scrollIntoView({
      behavior: reduz ? "auto" : "smooth",
      block: "start",
    });
  }
}
function setView(v) {
  VIEW = v;
  $("#tab-cal").setAttribute(
    "aria-selected",
    v === "cal" ? "true" : "false",
  );
  $("#tab-list").setAttribute(
    "aria-selected",
    v === "list" ? "true" : "false",
  );
  $("#view-cal").hidden = v !== "cal";
  $("#view-list").hidden = v !== "list";
  if (v === "list") renderList();
}
$("#tab-cal").addEventListener("click", () => setView("cal"));
$("#tab-list").addEventListener("click", () => setView("list"));

/* ---------- edição: botão global ---------- */
$("#edit-toggle").addEventListener("click", () => {
  EDIT = !EDIT;
  document.body.classList.toggle("edit-mode", EDIT);
  $("#edit-toggle").classList.toggle("primary", EDIT);
  $("#edit-toggle").textContent = EDIT ? "✓ Editar ativo" : "✎ Editar";
  renderAll();
});

/* ---------- modal do dia ---------- */
function openDiaDialog(dia) {
  const dlg = $("#dlg-dia"),
    form = $("#form-dia");
  form.reset();
  $("#dlg-dia-title").textContent = dia ? "Editar dia" : "Novo dia";
  form.dataset.id = dia ? dia.id : "";
  form.dataset.oldData = dia ? dia.d : "";
  if (dia) {
    form.data.value = dia.d;
    form.tipo.value = dia.tipo;
    form.titulo.value = dia.titulo;
    form.foco.value = dia.foco || "";
    form.avisos.value = (dia.avisos || []).join("\n");
    form.presenca.value = (dia.presenca || [])
      .map((p) => p.r + ": " + (p.n || []).join(", "))
      .join("\n");
  }
  $("#dlg-dia [data-del-dia]").hidden = !dia;
  dlg.showModal();
}

function parsePresenca(texto) {
  return texto
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => {
      const i = l.indexOf(":");
      if (i < 0) return { r: "Presença", n: [l] };
      return {
        r: l.slice(0, i).trim(),
        n: l
          .slice(i + 1)
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      };
    });
}

$("#form-dia").addEventListener("submit", async (e) => {
  e.preventDefault();
  const f = e.target;
  const data = f.data.value,
    tipo = f.tipo.value,
    titulo = f.titulo.value.trim();
  if (!data || !titulo) return;
  const foco = f.foco.value.trim();
  const avisos = f.avisos.value
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
  const presenca = parsePresenca(f.presenca.value);
  const id = f.dataset.id;
  const oldData = f.dataset.oldData;

  if (id) {
    const dia = DIAS.find((x) => x.id === id);
    if (!dia) return;
    dia.d = data;
    dia.tipo = tipo;
    dia.titulo = titulo;
    dia.foco = foco;
    dia.avisos = avisos;
    dia.presenca = presenca;
    reindex();
    await saveDia(dia);
  } else {
    if (BY[data]) {
      alert("Já existe um dia em " + data);
      return;
    }
    const novo = {
      id: null,
      d: data,
      tipo,
      titulo,
      foco,
      avisos,
      presenca,
      tarefas: [],
    };
    await createDia(novo);
    DIAS.push(novo);
    reindex();
  }
  $("#dlg-dia").close();
  SEL = data;
  renderAll();
});

$("#dlg-dia [data-cancel]").addEventListener("click", () =>
  $("#dlg-dia").close(),
);

$("#dlg-dia [data-del-dia]").addEventListener("click", async () => {
  const id = $("#form-dia").dataset.id;
  if (!id) return;
  if (!confirm("Excluir este dia e todas as suas missões?")) return;
  await deleteDiaDb(id);
  DIAS = DIAS.filter((x) => x.id !== id);
  reindex();
  SEL = ORDER[0] || null;
  $("#dlg-dia").close();
  renderAll();
});

$("#add-day-btn").addEventListener("click", () => openDiaDialog(null));

/* ---------- modal de missão ---------- */
function pickHTML(nome, marcados, prefix) {
  return EQUIPE.map((n) => {
    const id = prefix + "-" + n.replace(/\W+/g, "_");
    const ck = marcados.indexOf(n) >= 0 ? " checked" : "";
    return (
      '<label class="pick"><input type="checkbox" data-pick="' +
      prefix +
      '" value="' +
      esc(n) +
      '"' +
      ck +
      ">" +
      esc(n) +
      "</label>"
    );
  }).join("");
}

function openTaskDialog(task, dia) {
  const dlg = $("#dlg-task"),
    form = $("#form-task");
  form.reset();
  const isNew = !task;
  $("#dlg-task-title").textContent = isNew
    ? "Nova missão"
    : "Editar missão";
  form.dataset.id = task ? task.id : "";
  form.dataset.diaId = dia ? dia.id : task ? task.dia_id || "" : "";

  const selDia = form.dia;
  selDia.innerHTML =
    '<option value="">Sem dia fixo</option>' +
    DIAS.slice()
      .sort((a, b) => (a.d < b.d ? -1 : 1))
      .map(
        (d) =>
          '<option value="' +
          d.id +
          '">' +
          curto(d.d) +
          " · " +
          esc(d.titulo) +
          "</option>",
      )
      .join("");
  selDia.value = dia ? dia.id : task && task.dia_id ? task.dia_id : "";

  if (task) {
    form.frente.value = task.f;
    form.objetivo.value = task.o;
    form.entrega.value = task.e || "";
    const eqSet = new Set(EQUIPE);
    const qInt = (task.q || []).filter((n) => eqSet.has(n));
    const qExt = (task.q || []).filter((n) => !eqSet.has(n));
    const cInt = (task.c || []).filter((n) => eqSet.has(n));
    const cExt = (task.c || []).filter((n) => !eqSet.has(n));
    $("#picker-quem").innerHTML = pickHTML("quem", qInt, "q");
    $("#picker-com").innerHTML = pickHTML("com", cInt, "c");
    form.quem_ext.value = qExt.join(", ");
    form.com_ext.value = cExt.join(", ");
  } else {
    $("#picker-quem").innerHTML = pickHTML("quem", [], "q");
    $("#picker-com").innerHTML = pickHTML("com", [], "c");
  }
  $("#dlg-task [data-del-task]").hidden = isNew;
  dlg.showModal();
}

function lerPicks(prefix) {
  return Array.from(
    document.querySelectorAll(
      'input[data-pick="' + prefix + '"]:checked',
    ),
  ).map((i) => i.value);
}

function nextTaskOrder() {
  const tasks = DIAS.flatMap((dia) => dia.tarefas).concat(SOLTOS);
  return (
    tasks.reduce((max, task) => {
      const order = Number(task.ordem);
      return Number.isInteger(order) && order > max ? order : max;
    }, 0) + 1
  );
}

$("#form-task").addEventListener("submit", async (e) => {
  e.preventDefault();
  const f = e.target;
  const frente = f.frente.value;
  const objetivo = f.objetivo.value.trim();
  if (!objetivo) return;
  const qInt = lerPicks("q");
  const cInt = lerPicks("c");
  const qExt = f.quem_ext.value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const cExt = f.com_ext.value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const quem = qInt.concat(qExt);
  const com = cInt.concat(cExt);
  const entrega = f.entrega.value.trim();
  const diaId = f.dia.value || null;
  const id = f.dataset.id;

  if (id) {
    const found = findTask(id);
    if (!found) return;
    const t = found.task;
    t.f = frente;
    t.o = objetivo;
    t.q = quem;
    t.c = com;
    t.e = entrega;
    if (t.dia_id !== diaId) {
      if (found.dia)
        found.dia.tarefas = found.dia.tarefas.filter((x) => x.id !== id);
      else SOLTOS = SOLTOS.filter((x) => x.id !== id);
      t.dia_id = diaId;
      if (diaId) {
        const nd = DIAS.find((x) => x.id === diaId);
        if (nd) nd.tarefas.push(t);
      } else SOLTOS.push(t);
    }
    await saveTask(t);
  } else {
    const nova = {
      id: null,
      dia_id: diaId,
      f: frente,
      o: objetivo,
      q: quem,
      c: com,
      e: entrega,
      feito: false,
      ordem: nextTaskOrder(),
    };
    try {
      await saveTask(nova);
    } catch (error) {
      console.error(error);
      alert("Erro ao criar missão: " + error.message);
      return;
    }
    if (diaId) {
      const d = DIAS.find((x) => x.id === diaId);
      if (d) d.tarefas.push(nova);
    } else {
      SOLTOS.push(nova);
    }
  }
  $("#dlg-task").close();
  renderAll();
});

$("#dlg-task [data-cancel]").addEventListener("click", () =>
  $("#dlg-task").close(),
);

$("#dlg-task [data-del-task]").addEventListener("click", async () => {
  const id = $("#form-task").dataset.id;
  if (!id) return;
  if (!confirm("Excluir esta missão?")) return;
  await deleteTaskDb(id);
  DIAS.forEach((d) => (d.tarefas = d.tarefas.filter((t) => t.id !== id)));
  SOLTOS = SOLTOS.filter((t) => t.id !== id);
  $("#dlg-task").close();
  renderAll();
});

/* ---------- equipe ---------- */
function renderPeople() {
  const box = $("#people-list");
  box.innerHTML = PESSOAS.map(
    (p) =>
      '<div style="display:flex;gap:8px;align-items:center;background:var(--bg);border:1px solid var(--line);padding:6px 10px">' +
      '<b style="flex:1">' +
      esc(p.nome) +
      "</b>" +
      '<span class="role">' +
      (p.tipo === "competidor" ? "Competidor" : "Mentor") +
      "</span>" +
      '<button type="button" class="btn" data-toggle-person="' +
      p.id +
      '">' +
      (p.ativo ? "Desativar" : "Ativar") +
      "</button>" +
      '<button type="button" class="btn danger" data-del-person="' +
      p.id +
      '">✕</button>' +
      "</div>",
  ).join("");
  box.querySelectorAll("[data-del-person]").forEach((b) =>
    b.addEventListener("click", async () => {
      const id = b.getAttribute("data-del-person");
      const p = PESSOAS.find((x) => x.id === id);
      if (!p || !confirm("Excluir " + p.nome + "?")) return;
      if (sb) await sb.from("pessoas").delete().eq("id", id);
      PESSOAS = PESSOAS.filter((x) => x.id !== id);
      recalcPessoas();
      renderPeople();
      renderAll();
    }),
  );
  box.querySelectorAll("[data-toggle-person]").forEach((b) =>
    b.addEventListener("click", async () => {
      const id = b.getAttribute("data-toggle-person");
      const p = PESSOAS.find((x) => x.id === id);
      if (!p) return;
      p.ativo = !p.ativo;
      if (sb)
        await sb.from("pessoas").update({ ativo: p.ativo }).eq("id", id);
      recalcPessoas();
      renderPeople();
      renderAll();
    }),
  );
}
function recalcPessoas() {
  COMPETIDORES = PESSOAS.filter(
    (x) => x.tipo === "competidor" && x.ativo,
  ).map((x) => x.nome);
  MENTORES = PESSOAS.filter((x) => x.tipo === "mentor" && x.ativo).map(
    (x) => x.nome,
  );
  EQUIPE = COMPETIDORES.concat(MENTORES);
  if (PESSOA && EQUIPE.indexOf(PESSOA) < 0) PESSOA = "";
}

$("#manage-people-btn").addEventListener("click", () => {
  renderPeople();
  $("#dlg-people").showModal();
});
$("#dlg-people [data-cancel]").addEventListener("click", () =>
  $("#dlg-people").close(),
);
$("#add-person-btn").addEventListener("click", async () => {
  const f = $("#form-people");
  const nome = f.novo_nome.value.trim();
  const tipo = f.novo_tipo.value;
  if (!nome) return;
  const p = { nome, tipo, ativo: true, ordem: PESSOAS.length + 100 };
  const saved = await createPessoa(p);
  PESSOAS.push(saved);
  recalcPessoas();
  f.novo_nome.value = "";
  renderPeople();
  renderAll();
});

/* ---------- checkbox de missão ---------- */
document.addEventListener("change", async (e) => {
  const el = e.target;
  if (!el.matches || !el.matches('input[type="checkbox"][data-id]'))
    return;
  const id = el.getAttribute("data-id");
  const found = findTask(id);
  if (!found) return;
  found.task.feito = el.checked;
  await toggleFeito(found.task);
  renderAll();
});

/* ---------- abrir modal para editar tarefa (delegação) ---------- */
document.addEventListener("click", (e) => {
  const ed = e.target.closest("[data-edit-task]");
  if (ed) {
    const id = ed.getAttribute("data-edit-task");
    const found = findTask(id);
    if (found) openTaskDialog(found.task, found.dia);
    return;
  }
  const del = e.target.closest("[data-del-task]");
  if (del && e.target.closest(".t-actions")) {
    const id = del.getAttribute("data-del-task");
    if (!confirm("Excluir esta missão?")) return;
    (async () => {
      await deleteTaskDb(id);
      DIAS.forEach(
        (d) => (d.tarefas = d.tarefas.filter((t) => t.id !== id)),
      );
      SOLTOS = SOLTOS.filter((t) => t.id !== id);
      renderAll();
    })();
  }
});

/* ---------- filtro pessoa ---------- */
$("#mentor").addEventListener("change", (e) => setPessoa(e.target.value));

/* ---------- contadores ---------- */
function updateCounters() {
  // Pega o dia de evento cujo título tenha "FLL" ou "Regional"
  const eventos = DIAS.filter((x) => x.tipo === "evento").sort((a, b) =>
    a.d < b.d ? -1 : 1,
  );
  const fll = eventos.find((x) => /FLL|Discover/i.test(x.titulo));
  const reg = eventos.find((x) => /Regional/i.test(x.titulo));
  if (fll) contagem("#c-fll", fll.d);
  if (reg) contagem("#c-reg", reg.d);
  else {
    const el = $("#c-reg");
    if (el) el.textContent = "—";
  }
  if (!fll) {
    const el = $("#c-fll");
    if (el) el.textContent = "—";
  }
}

/* ---------- render geral ---------- */
function renderAll() {
  renderChips();
  renderWeeks();
  renderDetail();
  renderLoose();
  updateCounters();
  if (VIEW === "list") renderList();
}

/* ---------- init ---------- */
async function init() {
  if (!HAS_SB) $("#banner").hidden = false;
  try {
    PESSOA = localStorage.getItem("am-cron-pessoa") || "";
  } catch (e) {}
  await loadData();
  if (PESSOA && EQUIPE.indexOf(PESSOA) < 0) PESSOA = "";
  // se o SEL estiver vazio, escolhe hoje ou o primeiro dia futuro
  const h = (location.hash || "").replace("#dia-", "");
  if (BY[h]) SEL = h;
  else if (BY[TODAY]) SEL = TODAY;
  else SEL = ORDER.find((d) => d >= TODAY) || ORDER[0] || null;
  renderAll();
}
init();
