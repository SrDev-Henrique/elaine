import { PlusIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

const faq = [
  {
    id: 1,
    question: "O que é a massagem Nuru e como ela é feita?",
    answer:
      "A massagem Nuru é uma técnica corpo-a-corpo originária do Japão que utiliza um gel específico deslizante para promover toque pele-a-pele. No nosso espaço a sessão é realizada com produtos seguros e neutros, higiene rigorosa e comunicação clara sobre limites durante toda a experiência.",
  },
  {
    id: 2,
    question: "O que é a massagem Mix Tântrico?",
    answer:
      "Mix Tântrico é uma combinação de técnicas tântricas e sensoriais (toques conscientes, alongamentos leves e respiração guiada) montada de forma personalizada. A ideia é unir relaxamento e despertar sensorial, sempre com respeito ao seu ritmo e limites.",
  },
  {
    id: 3,
    question: "O que é a Vivência e como funciona a troca mútua?",
    answer:
      "A Vivência é uma prática interativa onde há troca de papéis e toques orientados para aumentar presença e conexão. Antes da sessão explicamos claramente a dinâmica, definimos consentimentos e limites, e acompanhamos toda a prática para garantir segurança e conforto.",
  },
  {
    id: 4,
    question: "Qual a duração das sessões?",
    answer:
      "A duração varia conforme a modalidade escolhida e o objetivo do cliente. Sessões comuns variam de 45 minutos a 1 hora; há opções mais curtas ou pacotes estendidos mediante acordo prévio. Sempre informamos a duração no momento do agendamento.",
  },
  {
    id: 5,
    question: "Quanto custa? Quais são os valores?",
    answer:
      "Os valores são combinados conforme a modalidade e duração, com pacotes especiais quando aplicável. Nossas sessões têm valores a partir de R$ 400. Para orçamento exato, entre em contato informando modalidade, duração desejada e data.",
  },
  {
    id: 6,
    question: "Quais cuidados de higiene e segurança vocês adotam?",
    answer:
      "Higiene rigorosa entre cada atendimento: roupa de cama trocada, limpeza do ambiente, produtos neutros e testados. Também seguimos um protocolo de briefing para confirmar saúde, alergias e limites antes de iniciar a sessão.",
  },
  {
    id: 7,
    question: "O que eu preciso levar ou como me preparar para a sessão?",
    answer:
      "Chegar com antecedência para se ambientar é ideal. Tomar banho é recomendado (há ducha quente no local). Não é preciso levar nada — fornecemos toalhas e produtos — apenas traga documento se necessário. Use roupas confortáveis e esteja pronto para comunicar seus limites.",
  },
  {
    id: 8,
    question: "Quem pode receber essas massagens? Existem contraindicações?",
    answer:
      "As massagens são pensadas para adultos que buscam uma experiência sensorial e de autoconhecimento. Pessoas com condições médicas específicas (infecções de pele, febre, certos problemas cardíacos ou gravidez sem liberação médica) devem consultar um médico antes. Informe sempre seu histórico de saúde no pré-atendimento.",
  },
];

export default function FaqAccordion() {
  return (
    <div className="mx-auto w-full max-w-xl space-y-4">
      <Accordion className="w-full" collapsible defaultValue="1" type="single">
        {faq.map((item) => (
          <AccordionItem
            className="my-3"
            key={item.id}
            value={item.id.toString()}
          >
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="[&>svg]:-order-1 flex flex-1 items-center gap-4 rounded-md py-2 text-left font-semibold text-lg leading-6 outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                {item.question}
                <PlusIcon
                  aria-hidden="true"
                  className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                  size={16}
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="ps-7 pb-2 text-muted-bright-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
