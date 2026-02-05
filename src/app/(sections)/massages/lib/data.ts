type MassageItem = {
  id: number;
  name: string;
  massage: "Sensorial com gel" | "Interativa guiada" | "Combinada sensorial" | "Presença corporal";
  link: string;
  color: string;
  description: string;
  image: string;
};

export const massages: MassageItem[] = [
  {
    id: 1,
    name: "Massagem Sensorial Com Gel",
    link: "sensorial-com-gel",
    massage: "Sensorial com gel",
    color: "bg-gold",
    description:
      "Técnica que utiliza gel vegetal para aumentar o deslizamento entre mãos e corpo, promovendo relaxamento intenso, redução de tensões e experiência sensorial em estúdio privativo.",
    image: "/images/massage-0.webp",
  },
  {
    id: 2,
    name: "Sessão de Presença Corporal",
    link: "presenca-corporal",
    massage: "Presença corporal",
    color: "bg-blue",
    description:
      "Sessão terapêutica voltada à presença corporal, respiração guiada e toques conscientes, com objetivo de promover autoconhecimento, equilíbrio emocional e relaxamento profundo.",
    image: "/images/massage-1.webp",
  },
  {
    id: 3,
    name: "Sessão Combinada Sensorial",
    link: "combinada-sensorial",
    massage: "Combinada sensorial",
    color: "bg-strong-purple",
    description:
      "Sessão que integra diferentes abordagens sensoriais e técnicas de toque consciente para aprofundar presença, liberar tensões e promover bem-estar emocional, sempre respeitando limites e consentimento.",
    image: "/images/massage-2.webp",
  },
  {
    id: 4,
    name: "Sessão Interativa Guiada",
    link: "interativa-guiada",
    massage: "Interativa guiada",
    color: "bg-purple",
    description:
      "Sessão interativa com orientação do terapeuta para explorar sensações, presença e autoconsciência em ambiente seguro e guiado; indicada para quem busca maior conexão corporal e relaxamento.",
    image: "/images/massage-3.webp",
  },
];
