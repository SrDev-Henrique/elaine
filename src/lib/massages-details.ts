export type MassageDetail = {
  name: "Nuru" | "Tântrica" | "Mix Tântrico" | "Vivência";
  description: string[];
  slug: string;
  benefits: string[];
  indicatedFor: string[];
  sessionFlow: string[];
  commonDoubts: { question: string; answer: string }[];
  metaDescription: string;
};

export const massageDetails: MassageDetail[] = [
  {
    name: "Nuru",
    slug: "nuru",
    description: [
      "A massagem Nuru é uma técnica japonesa corpo a corpo que usa um gel à base de algas para criar deslizamento contínuo e contato pele a pele.",
      "O foco está no relaxamento profundo e no despertar sensorial, sempre mantendo respeito aos limites acordados antes da sessão.",
    ],
    benefits: [
      "Relaxamento muscular intenso e alívio de tensões",
      "Aumento da consciência corporal e presença",
      "Sensação de acolhimento em ambiente seguro e discreto",
      "Estímulo circulatório suave devido aos deslizamentos",
    ],
    indicatedFor: [
      "Pessoas que buscam uma experiência sensorial diferenciada",
      "Quem deseja relaxar com toques contínuos e envolventes",
      "Clientes que valorizam privacidade e clima intimista",
    ],
    sessionFlow: [
      "Boas-vindas, briefing sobre limites e objetivos, e ducha opcional.",
      "Aplicação do gel nuru e início dos deslizamentos corpo a corpo.",
      "Ritmo moderado, com foco em relaxar e manter comunicação aberta.",
      "Encerramento gradual, limpeza do gel e orientações pós-sessão.",
    ],
    commonDoubts: [
      {
        question: "O gel utilizado é seguro?",
        answer:
          "Sim. É um gel à base de algas, neutro, hipoalergênico e apropriado para uso corporal.",
      },
      {
        question: "Preciso levar algo para a sessão?",
        answer:
          "Não. Fornecemos gel, toalhas e ducha. Basta chegar com alguns minutos de antecedência.",
      },
      {
        question: "Há nudez?",
        answer:
          "A técnica é corpo a corpo e pode envolver nudez consensual. Todos os limites são combinados antes.",
      },
    ],
    metaDescription: `A massagem Nuru é uma sessão orientada para relaxamento profundo e estimulação sensorial realizada com um gel condutor à base de algas, formulado para promover deslizamento confortável e seguro entre o terapeuta e o cliente. Geralmente oferecemos opções de 60 e 90 minutos, onde o tempo inclui recepção, briefing inicial, período de aplicação da técnica e encerramento com limpeza e orientações. A experiência começa com um acolhimento e alinhamento de expectativas: falamos sobre histórico de saúde, alergias, preferências de pressão e limites, garantindo consentimento contínuo durante toda a sessão. Em seguida é possível optar por uma ducha breve antes da aplicação do gel; o profissional aplica o produto e conduz movimentos contínuos e fluídos que visam reduzir tensões musculares, melhorar a circulação superficial e favorecer a sensação de presença e relaxamento. Indicação: pessoas que buscam um momento de relaxamento sensorial, aumento da percepção corporal e alívio de tensão acumulada; também é indicada para quem valoriza um atendimento discreto e personalizado. Contraindicações e cuidados: não recomendamos para quem tem feridas abertas, infecções de pele, alergia conhecida a componentes do gel, doenças contagiosas cutâneas, ou em casos específicos de condições médicas graves sem liberação médica. Gestantes devem consultar antes — determinadas fases da gestação exigem restrições. Ambiente: atendimento em sala privada, higienizada, com toalhas limpas, produtos descartáveis quando aplicável e possibilidade de ducha; o local é preparado para garantir conforto e privacidade. Pós-sessão: é recomendado hidratar-se e evitar atividades intensas nas próximas horas; o terapeuta fornece orientações personalizadas. FAQ curto: 1) “Dói?” — Não; a técnica é suave e focada no deslizamento, a pressão é ajustada ao cliente. 2) “Posso parar a qualquer momento?” — Sim, consentimento é contínuo. 3) “Quanto tempo antes devo chegar?” — Chegue 10 minutos antes para o briefing.`,
  },
  {
    name: "Tântrica",
    slug: "tantrica",
    description: [
      "A massagem tântrica trabalha respiração, toques conscientes e ritmos alternados para despertar a energia vital e ampliar a percepção do próprio corpo.",
      "É feita de forma respeitosa, com foco no autoconhecimento, no relaxamento profundo e na liberação de bloqueios sensoriais.",
    ],
    benefits: [
      "Maior percepção corporal e presença no momento",
      "Redução de ansiedade e estresse",
      "Melhora na respiração e no fluxo de energia",
      "Sensação de equilíbrio físico e emocional",
    ],
    indicatedFor: [
      "Quem busca autoconhecimento e conexão mente-corpo",
      "Pessoas que desejam reduzir ansiedade e tensões",
      "Clientes que querem explorar o prazer de forma segura e consciente",
    ],
    sessionFlow: [
      "Conversas iniciais para alinhar expectativas, saúde e limites.",
      "Exercícios de respiração guiada e toques progressivos, sempre com consentimento.",
      "Ritmos que alternam suavidade e presença firme para despertar sensações.",
      "Fechamento com tempo para integração e retorno gradual à rotina.",
    ],
    commonDoubts: [
      {
        question: "Há foco apenas no prazer?",
        answer:
          "O foco é a consciência corporal e a energia vital; prazer pode surgir, mas a proposta é terapêutica e respeitosa.",
      },
      {
        question: "Preciso ter experiência prévia?",
        answer:
          "Não. Tudo é explicado antes e conduzido no seu ritmo, com comunicação aberta.",
      },
      {
        question: "Existe toque íntimo obrigatório?",
        answer:
          "Não. Nada é obrigatório. Todos os limites são definidos e respeitados antes e durante a sessão.",
      },
    ],
    metaDescription: `A massagem tântrica oferecida aqui é uma abordagem centrada na respiração, presença e toque consciente, criada para promover autoconhecimento, relaxamento profundo e maior sintonia entre corpo e mente. Uma sessão típica tem duração de 60 ou 90 minutos, dependendo do objetivo do cliente; o tempo inclui recepção, conversa inicial sobre histórico e limites, prática guiada e um período final de integração. O atendimento inicia com um briefing detalhado para alinhar expectativas, esclarecer condições de saúde e definir limites claros; essa etapa é essencial para garantir conforto e segurança. A técnica combina exercícios de respiração, toques lentos e conscientes e sequências rítmicas que ajudam a liberar tensões musculares e emocionais, melhorar a qualidade da respiração e aumentar a percepção corporal. Indicações: pessoas que buscam reduzir ansiedade, trabalhar bloqueios emocionais, aprimorar a consciência corporal ou experimentar práticas de relaxamento profundo com orientação profissional. Contraindicações: não é recomendada para quem se encontra em condições médicas instáveis sem liberação profissional, pacientes com feridas abertas ou infecções cutâneas, casos de doenças contagiosas ou quando há histórico de reações adversas a manipulações corporais intensas; gestantes devem consultar antes. Ambiente e estrutura: sala privada, climatizada quando necessário, higienizada a cada atendimento, com música ambiente suave e toalhas limpas; paramos a qualquer sinal de desconforto e mantemos comunicação constante. Pós-sessão: o cliente recebe tempo para integração, recomendações de hidratação e orientações simples para continuidade do cuidado. FAQ curto: 1) “É terapêutico ou somente sensorial?” — O foco é terapêutico com benefícios sensoriais. 2) “Preciso estar em forma física específica?” — Não; as técnicas são adaptáveis. 3) “Como são definidos os limites?” — No briefing inicial e durante toda a sessão.`,
  },
  {
    name: "Mix Tântrico",
    slug: "mix-tantrico",
    description: [
      "O Mix Tântrico combina técnicas tântricas com toques sensoriais e alongamentos leves para uma experiência personalizada.",
      "A sessão adapta ritmo e intensidade conforme o feedback do cliente, equilibrando relaxamento e presença.",
    ],
    benefits: [
      "Relaxamento profundo com variedade de estímulos",
      "Desbloqueio de tensões e maior vitalidade",
      "Experiência customizada para necessidades específicas",
      "Melhora na consciência respiratória e postural",
    ],
    indicatedFor: [
      "Quem deseja um blend de técnicas com personalização",
      "Pessoas com tensões físicas e mentais que buscam alívio",
      "Clientes que querem explorar sensações com orientação próxima",
    ],
    sessionFlow: [
      "Anamnese breve para entender necessidades e preferências.",
      "Respiração guiada, toques tântricos e sensoriais combinados.",
      "Alongamentos leves ou ajustes posturais quando apropriado.",
      "Desaceleração final e orientações para pós-sessão.",
    ],
    commonDoubts: [
      {
        question: "Em que difere da tântrica tradicional?",
        answer:
          "Inclui mistura de toques sensoriais e alongamentos leves, personalizando a experiência além da estrutura clássica.",
      },
      {
        question: "Posso escolher a intensidade?",
        answer:
          "Sim. O ritmo e a pressão são ajustados durante a sessão conforme seu feedback.",
      },
      {
        question: "É adequada para iniciantes?",
        answer:
          "Sim. É conduzida com explicações e ajustes contínuos para seu conforto.",
      },
    ],
    metaDescription: `Mix Tântrico é uma sessão personalizada que combina práticas de toque consciente, exercícios respiratórios e alongamentos suaves, desenhada para quem busca tanto relaxamento quanto um trabalho mais profundo de liberação de tensões e equilíbrio corporal. Oferecemos formatos de 60 e 90 minutos; a sessão inclui recepção, anamnese, prática guiada e um período final de integração e orientações pós-sessão. No início fazemos uma anamnese rápida para mapear histórico de saúde, preferências de pressão e eventuais limitações físicas. A partir daí a experiência é moldada: alternamos toques tântricos mais lentos com estímulos sensoriais variados, incorporamos alongamentos leves quando necessário para aliviar pontos de tensão e mantemos comunicação constante para ajustar intensidade. Indicações: clientes com dores de tensão, estresse acumulado, rigidez postural ou que procurem uma experiência que una técnicas de relaxamento com intervenções físicas leves para melhora da mobilidade. Contraindicações: feridas abertas, infecções de pele, problemas médicos que impeçam manipulação corporal sem liberação, e situações agudas que exijam acompanhamento médico; em caso de dúvida, pedimos orientação profissional antes do agendamento. Ambiente: sala preparada para acolhimento, limpeza entre atendimentos, música cuidadosa e privacidade total. Recomendações pós-sessão incluem hidratação, descanso leve e evitar atividades físicas intensas nas próximas horas. FAQ curto: 1) “Tenho dor nas costas, posso fazer?” — Sim, ajustamos toques e alongamentos conforme necessidade. 2) “Preciso alongar antes?” — Não é necessário; tudo é conduzido pelo terapeuta. 3) “Há parte educativa?” — Sim, damos orientações posturais simples quando aplicável.`,
  },
  {
    name: "Vivência",
    slug: "vivencia",
    description: [
      "A Vivência é uma prática interativa com troca de toques orientados, favorecendo presença, conexão e escuta corporal.",
      "Envolve participação ativa do cliente, sempre com consentimento, instruções claras e acompanhamento contínuo.",
    ],
    benefits: [
      "Aumento da consciência relacional e da escuta do corpo",
      "Prática de comunicação de limites e consentimento",
      "Relaxamento com participação ativa e guiada",
      "Exploração segura de novas sensações",
    ],
    indicatedFor: [
      "Quem deseja uma experiência participativa e guiada",
      "Pessoas interessadas em exercitar limites e consentimento",
      "Casos em que a curiosidade sobre trocas de toque é central",
    ],
    sessionFlow: [
      "Briefing detalhado sobre dinâmica, papéis e consentimentos.",
      "Explicação passo a passo dos toques e da troca orientada.",
      "Prática acompanhada com pausas para feedback e ajustes.",
      "Encerramento com integração e recomendações simples.",
    ],
    commonDoubts: [
      {
        question: "Preciso ter experiência prévia?",
        answer:
          "Não. Tudo é explicado antes e durante. Você participa apenas dentro dos limites combinados.",
      },
      {
        question: "O que acontece se eu ficar desconfortável?",
        answer:
          "A sessão pode ser pausada ou ajustada a qualquer momento; o consentimento é contínuo.",
      },
      {
        question: "Existe nudez obrigatória?",
        answer:
          "Não. O nível de exposição é combinado previamente e respeitado integralmente.",
      },
    ],
    metaDescription:
      "A Vivência é uma proposta de sessão interativa que combina orientação, prática de escuta corporal e exercícios simples de troca de toque, sempre com foco no consentimento, na segurança e na presença. As sessões costumam ocorrer em durações de 60 ou 90 minutos, contemplando um momento de acolhimento e briefing, a prática orientada, pausas para feedback e um tempo de integração ao final. No briefing inicial explicamos com clareza a dinâmica, papéis, limites e sinais de segurança; esse alinhamento permite que a pessoa participe no seu ritmo, sempre com autonomia para interromper ou ajustar a experiência. Durante a prática, o terapeuta orienta sequências de movimentos e toques, convida a explorar sensações corporais e a observar respostas físicas e emocionais, sempre respeitando o espaço e a privacidade do participante. Indicações: ideal para quem quer trabalhar comunicação de limites, aumentar a consciência relacion",
  },
];
