export type MassageDetail = {
  name:
    | "Massagem Sensorial Com Gel"
    | "Sessão Interativa Guiada"
    | "Sessão Combinada Sensorial"
    | "Sessão de Presença Corporal";
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
    name: "Massagem Sensorial Com Gel",
    slug: "sensorial-com-gel",
    description: [
      "Sessão sensorial com gel vegetal para aumentar o deslizamento das mãos sobre o corpo, priorizando relaxamento profundo e bem-estar geral.",
      "Tudo é feito com consentimento e comunicação clara, em ambiente privado, com foco em conforto e segurança.",
    ],
    benefits: [
      "Relaxamento muscular intenso e alívio de tensões",
      "Aumento da consciência corporal e presença",
      "Sensação de acolhimento em ambiente seguro e discreto",
      "Estímulo circulatório suave devido aos deslizamentos",
    ],
    indicatedFor: [
      "Pessoas que buscam uma experiência sensorial relaxante",
      "Quem deseja aliviar tensões com toques contínuos e suaves",
      "Clientes que valorizam privacidade e ambiente controlado",
    ],
    sessionFlow: [
      "Boas-vindas, alinhamento de objetivos, higiene das mãos e ducha opcional.",
      "Aplicação do gel vegetal e início dos deslizamentos com pressão ajustável.",
      "Ritmo moderado, com foco em relaxar e manter comunicação aberta.",
      "Encerramento gradual, remoção do excesso de gel e orientações pós-sessão.",
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
        question: "Como funciona a condução da sessão?",
        answer:
          "A sessão é realizada com técnicas de toque consciente e orientação profissional, respeitando sempre os limites combinados previamente. O conforto, a privacidade e o bem-estar do cliente são prioridades em todo o atendimento.",
      },
    ],
    metaDescription: `Massagem sensorial com gel vegetal, voltada a relaxamento profundo, alívio de tensões e aumento da consciência corporal. Sessões de 60 ou 90 minutos incluem acolhimento, briefing de saúde e limites, prática com deslizamentos suaves e orientações finais. Ambiente privado, higienizado, com ducha opcional e comunicação constante para ajustar pressão e ritmo. Indicada para quem busca relaxamento e bem-estar; contraindicações incluem feridas abertas, infecções de pele ou condições médicas sem liberação. Após a sessão, recomenda-se hidratação e evitar esforço intenso.`,
  },
  {
    name: "Sessão de Presença Corporal",
    slug: "presenca-corporal",
    description: [
      "Sessão focada em respiração guiada, toques conscientes e ritmos alternados para ampliar a percepção corporal e promover equilíbrio emocional.",
      "Abordagem respeitosa, com foco em autoconhecimento, relaxamento e liberação de tensões, sempre dentro de limites acordados.",
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
      "Clientes que querem aprofundar presença e equilíbrio emocional",
    ],
    sessionFlow: [
      "Conversas iniciais para alinhar expectativas, saúde e limites.",
      "Exercícios de respiração guiada e toques progressivos, sempre com consentimento.",
      "Ritmos que alternam suavidade e presença firme para despertar sensações.",
      "Fechamento com tempo para integração e retorno gradual à rotina.",
    ],
    commonDoubts: [
      {
        question: "Qual é o objetivo da sessão?",
        answer:
          "O objetivo é terapêutico e voltado ao bem-estar, com foco em respiração, presença e relaxamento profundo. A sessão busca promover equilíbrio físico e emocional em um ambiente profissional e acolhedor.",
      },
      {
        question: "Preciso ter experiência prévia?",
        answer:
          "Não. A sessão é explicada previamente e conduzida de forma gradual, respeitando o ritmo individual, com comunicação clara durante todo o atendimento.",
      },
      {
        question: "Como são definidos os limites durante a sessão?",
        answer:
          "Antes do início, são alinhadas expectativas, conforto e limites pessoais. Todo o atendimento é conduzido com respeito, consentimento e atenção ao bem-estar do cliente.",
      },
    ],
    metaDescription: `Sessão de presença corporal com respiração guiada e toques conscientes para promover autoconhecimento, relaxamento e equilíbrio emocional. Durações de 60 ou 90 minutos incluem acolhimento, briefing de saúde e limites, prática guiada e integração final. Indicada para reduzir ansiedade, melhorar percepção corporal e favorecer bem-estar. Contraindicações: condições médicas instáveis sem liberação, feridas abertas, infecções cutâneas ou doenças contagiosas. Ambiente privado, higienizado e com comunicação contínua para ajustes de conforto. Recomenda-se hidratação e atividades leves após a sessão.`,
  },
  {
    name: "Sessão Combinada Sensorial",
    slug: "combinada-sensorial",
    description: [
      "Integra diferentes abordagens sensoriais, respiração e alongamentos leves para personalizar a experiência.",
      "Ritmo e intensidade são ajustados conforme feedback, equilibrando relaxamento e presença corporal.",
    ],
    benefits: [
      "Relaxamento profundo com variedade de estímulos",
      "Desbloqueio de tensões e maior vitalidade",
      "Experiência customizada para necessidades específicas",
      "Melhora na consciência respiratória e postural",
    ],
    indicatedFor: [
      "Quem deseja combinação de técnicas com personalização",
      "Pessoas com tensões físicas e mentais que buscam alívio",
      "Clientes que querem orientação próxima e ajustes contínuos",
    ],
    sessionFlow: [
      "Anamnese breve para entender necessidades e preferências.",
      "Respiração guiada, toques corporais sensoriais combinados.",
      "Alongamentos leves ou ajustes posturais quando apropriado.",
      "Desaceleração final e orientações para pós-sessão.",
    ],
    commonDoubts: [
      {
        question: "Em que difere da massagem tradicional?",
        answer:
          "Inclui mistura de toques sensoriais e alongamentos leves, personalizando a experiência além de protocolos fixos.",
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
    metaDescription: `Sessão combinada sensorial com toque consciente, exercícios respiratórios e alongamentos suaves, ajustada para relaxamento, liberação de tensões e equilíbrio corporal. Formatos de 60 ou 90 minutos contemplam acolhimento, anamnese, prática guiada e integração. Indicada para quem enfrenta tensão muscular, estresse ou rigidez postural e busca uma abordagem personalizada. Contraindicações: feridas abertas, infecções de pele, condições médicas graves sem liberação. Ambiente privado e higienizado; comunicação contínua para ajustar pressão e ritmo. Após a sessão, recomenda-se hidratação e evitar esforço intenso.`,
  },
  {
    name: "Sessão Interativa Guiada",
    slug: "interativa-guiada",
    description: [
      "Sessão interativa e guiada com exercícios simples de toque consciente para aumentar presença, conexão e escuta corporal.",
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
      "Quem busca melhorar comunicação de limites e presença corporal",
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
          "Não. A proposta é acessível para qualquer pessoa. Todas as etapas são explicadas antes e durante a sessão, respeitando seus limites e conforto.",
      },
      {
        question: "O que acontece se eu ficar desconfortável?",
        answer:
          "A sessão pode ser ajustada ou pausada a qualquer momento. A comunicação é constante e o bem-estar do cliente é sempre prioridade.",
      },
      {
        question: "Os limites são respeitados durante a sessão?",
        answer:
          "Sim. Os limites são definidos previamente e mantidos durante todo o atendimento, com comunicação aberta e contínua.",
      },
    ],
    metaDescription:
      "Sessão interativa guiada com foco em presença, escuta corporal e comunicação de limites. Inclui acolhimento, briefing claro sobre dinâmica e segurança, prática orientada com toques conscientes e pausas para feedback, finalizando com integração e recomendações simples. Indicada para quem quer desenvolver consciência corporal e comunicação de limites em ambiente seguro e privado. Contraindicações: condições médicas instáveis sem liberação, infecções cutâneas ativas ou qualquer situação que impeça participação confortável.",
  },
];
