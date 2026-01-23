import { Calendar } from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import { Heart } from "@/components/icons/heart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const blocksContent = [
  {
    id: 1,
    title: "2+",
    description: "Anos de experiência",
  },
  {
    id: 2,
    title: "1000+",
    description: "Sessões realizadas",
  },
  {
    id: 3,
    title: "",
    description: "",
  },
  {
    id: 4,
    title: "500+",
    description: "Clientes satisfeitos",
  },
];

export function Me() {
  // todo: Colocar dados reais
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hellen — Massagista",
    description:
      "Massagem tântrica, Nuru e vivência em ambiente privativo na Av. Brasil, Campinas. Técnica, discrição e atendimento personalizado.",
    url: "https://seusite.com/Hellen-massagem-tantrica-nuru-campinas",
    image: "https://seusite.com/images/me.webp",
    telephone: "+55 19 XXXXX-XXXX",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Brasil",
      addressLocality: "Campinas",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    areaServed: "Campinas, SP",
    priceRange: "R$400–R$1200",
    openingHours: ["Mo-Su 09:00-20:00"],
  };

  return (
    <>
      <Script
        id="ld-local-business"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(jsonLd)}
      </Script>
      <section
        id="Hellen-massagista-campinas"
        aria-labelledby="about-Hellen-heading"
        itemScope
        itemType="https://schema.org/LocalBusiness"
        className="h-fit w-full"
      >
        <meta
          itemProp="url"
          content="https://seusite.com/Hellen-massagem-tantrica-nuru-campinas"
        />
        <meta itemProp="telephone" content="+55 19 XXXXX-XXXX" />
        <meta itemProp="priceRange" content="R$400–R$1200" />
        <meta itemProp="areaServed" content="Campinas, SP" />
        <div className="mx-auto flex w-full max-w-[1130px] flex-col gap-6">
          <div className="flex w-full flex-col gap-6">
            <div className="space-y-6">
              <h2
                id="about-Hellen-heading"
                itemProp="name"
                className="font-bold text-4xl md:text-5xl lg:text-6xl"
              >
                Hellen - Massagista <span className="text-gold">Tântrica</span>,{" "}
                <span className="text-gold">Nuru e Vivência</span> em Campinas -
                SP
              </h2>

              <div className="space-y-4">
                <div className="flex w-fit items-center gap-2 rounded-full bg-primary px-3 py-4">
                  <p className="font-bold text-primary-foreground">
                    Olá, me chamo Hellen
                  </p>
                  👋🏻
                </div>
                <p itemProp="description">
                  Eu sou uma massagista certificada especializada em{" "}
                  <span className="text-gold">
                    massagem tântrica, Nuru e vivência em Campinas
                  </span>
                  , atendendo em ambiente privativo e discreto na Av. Brasil.
                </p>
                <p itemProp="description">
                  Com mais de 2 anos de experiência, eu combino técnica,
                  presença e sensibilidade para criar sessões personalizadas que
                  convidam à presença, ao autoconhecimento corporal e ao
                  despertar das sensações.
                </p>
                <p itemProp="description">
                  Cada atendimento é planejado com cuidados de higiene, conforto
                  e respeito aos seus limites — óleos aquecidos, respiração
                  guiada e toques conscientes que equilibram{" "}
                  <span className="text-gold">relaxamento e prazer sutil</span>.
                </p>
                <p itemProp="description">
                  Se você busca uma{" "}
                  <span className="text-gold">
                    experiência sensorial profissional e segura em Campinas
                  </span>
                  , eu ofereço um espaço acolhedor e reservado, onde a entrega
                  acontece com técnica e discrição.
                </p>
              </div>
            </div>
            <div className="flex h-fit flex-col-reverse gap-6 md:flex-row md:justify-between lg:gap-8">
              <div className="flex flex-col gap-6 rounded-xl border border-primary p-2">
                <Heart size={50} color="oklch(0.465 0.147 24.9381)" />
                <div className="space-y-4">
                  <p className="max-w-md text-primary-foreground">
                    Agende sua sessão e descubra uma experiência sensorial
                    personalizada em Campinas.
                  </p>
                  <Button className="rounded-full py-5.5 pe-2">
                    Agendar
                    <div className="rounded-full bg-foreground p-2">
                      <Calendar className="size-3 sm:size-4" />
                    </div>
                  </Button>
                </div>
              </div>
              <div className="grid min-h-40 w-fit grid-cols-2 gap-1.5 self-end">
                {blocksContent.map((block, index) => (
                  <div
                    key={block.id}
                    className={cn(
                      "w-fit rounded-xl bg-muted px-2 py-4",
                      index === 2 && "bg-transparent",
                    )}
                  >
                    {index !== 2 && (
                      <div className="flex-center flex-col gap-2">
                        <h3 className="font-bold text-foreground text-xl">
                          {block.title}
                        </h3>
                        <p className="text-center text-muted-foreground">
                          {block.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative aspect-square h-full overflow-hidden rounded-2xl sm:max-h-[700px]">
            <Image
              src="/images/hellen.jpeg"
              alt="Hellen, massagista tântrica e Nuru em Campinas — atendimento em ambiente privativo (Av. Brasil)"
              fill
              className="object-cover object-[50%_35%]"
              itemProp="image"
            />
          </div>
        </div>
      </section>
    </>
  );
}
