import Image from "next/image";
import { ReviewCard } from "./components/review-card";
import { ReviewCardContent } from "./components/review-card-content";

export type Review = {
  id: number;
  name: string;
  fallback: string;
  review: string;
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Henrique A",
    fallback: "HA",
    review:
      "Atendimento impecável: ambiente discreto, estacionamento no local e ducha quente — tudo pensado no conforto. A sessão Nuru foi técnica e muito respeitosa. Recomendo!",
  },
  {
    id: 2,
    name: "Gabriel C",
    fallback: "GC",
    review:
      "Fui meio receoso, mas a experiência foi ótima. Lugar discreto, tem estacionamento e a ducha quente ajuda muito. A profissional foi super cuidadosa — saí bem relaxado.",
  },
  {
    id: 3,
    name: "Julio M",
    fallback: "JM",
    review:
      "Nunca tinha feito algo assim, e gostei demais. A guia de respiração ajudou, o toque foi respeitoso e me senti bem no momento. Recomendo pra quem quer se conhecer melhor.",
  },
  {
    id: 4,
    name: "Marcelo P",
    fallback: "MP",
    review:
      "Fiz a massagem Nuru e foi incrível! A profissional foi muito atenciosa e o ambiente estava muito limpo. Recomendo pra quem quer relaxar e se sentir bem.",
  },
  {
    id: 5,
    name: "Rodrigo S",
    fallback: "RS",
    review:
      "Sessão muito boa — técnica afiada e ambiente acolhedor. Foi relaxante e ao mesmo tempo sensorial, do jeito que eu buscava.",
  },
  {
    id: 6,
    name: "Thiago R",
    fallback: "TR",
    review:
      "Nunca tinha sentido uma massagem tão diferente. A Hellen sabe o que faz — o toque é firme e delicado ao mesmo tempo. Saí mais leve do que imaginei.",
  },
];

export function Review() {
  return (
    <section
      id="avaliacoes-clientes"
      aria-labelledby="reviews-heading"
      itemScope
      itemType="https://schema.org/ItemList"
      className="mx-auto min-h-screen w-full max-w-[1130px] space-y-10"
    >
      <meta itemProp="name" content="Avaliações de clientes de massagem em Campinas" />
      <meta itemProp="itemListOrder" content="Unordered" />
      <meta itemProp="numberOfItems" content={reviews.length.toString()} />
      <div className="relative h-fit w-full overflow-hidden rounded-xl">
        <div className="relative bmd:min-h-[570px] min-h-[500px] w-full">
          <Image
            src="/images/review(1).webp"
            alt="Ambiente acolhedor para massagem tântrica e Nuru em Campinas"
            fill
            className="object-cover object-center brightness-60"
            itemProp="image"
          />
        </div>
        <ReviewCardContent />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/Review"
            data-position={index + 1}
          >
            <meta itemProp="position" content={(index + 1).toString()} />
            <span itemProp="itemReviewed" itemScope itemType="https://schema.org/LocalBusiness">
              <meta itemProp="name" content="Hellen Massagista Sensual em Campinas" />
              <meta itemProp="servesCuisine" content="Massagem tântrica, Nuru, Mix Tântrico, Vivência" />
            </span>
            <span itemProp="author" itemScope itemType="https://schema.org/Person">
              <meta itemProp="name" content={review.name} />
            </span>
            <meta itemProp="reviewBody" content={review.review} />
            <ReviewCard {...review} />
          </div>
        ))}
      </div>
    </section>
  );
}
