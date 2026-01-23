type MassageItem = {
  id: number;
  name: string;
  massage: "Nuru" | "Vivência" | "Mix Tântrico" | "Tântrica";
  color: string;
  description: string;
  image: string;
};

export const massages: MassageItem[] = [
  {
    id: 1,
    name: "Massagem Nuru",
    massage: "Nuru",
    color: "bg-gold",
    description:
      "Técnica japonesa diferenciada que utiliza gel especial à base de algas. A massagem nuru proporciona deslizamento contínuo, relaxamento intenso e uma experiência sensorial única em ambiente discreto.",
      image: "/images/massage-0.webp",
  },
  {
    id: 2,
    name: "Massagem Tântrica",
    massage: "Tântrica",
    color: "bg-blue",
    description:
      "Experiência sensorial que desperta a energia vital e amplia a conexão corporal. A massagem tântrica favorece o autoconhecimento, o relaxamento profundo e o bem-estar físico e emocional.",
    image: "/images/massage-1.webp",
    },
  {
    id: 3,
    name: "Massagem Mix Tântrico",
    massage: "Mix Tântrico",
    color: "bg-strong-purple",
    description:
      "Sessão combinada que une técnicas tântricas e toques conscientes para aprofundar a presença corporal, liberar tensões e ampliar o bem-estar emocional, sempre com respeito e consentimento",
    image: "/images/massage-2.webp",
  },
  {
    id: 4,
    name: "Massagem Vivência",
    massage: "Vivência",
    color:
      "bg-purple",
    description:
      "Sessão interativa que envolve troca de toques entre cliente e terapeuta. Na massagem vivência, o cliente participa ativamente, explorando sensações, presença corporal e conexão.",
    image: "/images/massage-3.webp",
  },
];
