export type MassageDetail = {
  name: "Nuru" | "Tântrica" | "Mix Tântrico" | "Vivência";
  description: string[];
  slug: string;
  benefits: string[];
  indicatedFor: string[];
  sessionFlow: string[];
  commonDoubts: { question: string; answer: string }[];
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
  },
];
