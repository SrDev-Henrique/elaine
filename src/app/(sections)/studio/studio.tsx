import { Calendar } from "lucide-react";
import Image from "next/image";
import { Candle } from "@/components/icons/candle";
import { Car } from "@/components/icons/car";
import { HotWater } from "@/components/icons/hot-water";
import { Localization } from "@/components/icons/localization";
import { Lock } from "@/components/icons/lock";
import { Spark } from "@/components/icons/spark";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const studioImages = [
  {
    id: 1,
    image: "/images/studio-0.webp",
    alt: "Studio de massagem tântrica e Nuru em Campinas",
  },
  {
    id: 2,
    image: "/images/studio-1.webp",
    alt: "Studio de massagem tântrica e Nuru em Campinas",
  },
  {
    id: 3,
    image: "/images/studio-2.webp",
    alt: "Studio de massagem tântrica e Nuru em Campinas",
  },
  {
    id: 4,
    image: "/images/studio-3.webp",
    alt: "Studio de massagem tântrica e Nuru em Campinas",
  },
];

const badges = [
  {
    id: 1,
    content: "Estacionamento",
    Icon: <Car color="#ffffff" />,
  },
  {
    id: 2,
    content: "Ducha Quente",
    Icon: <Candle color="#ffffff" />,
  },
  {
    id: 3,
    content: "Higiene Impecável",
    Icon: <Spark color="#ffffff" />,
  },
];

export function Studio() {
  return (
    <section
      id="studio-massagem-campinas"
      aria-labelledby="studio-heading"
      itemScope
      itemType="https://schema.org/Place"
      className="mx-auto h-fit w-full max-w-[1130px] space-y-10"
    >
      <meta itemProp="name" content="Ambiente privativo de massagem em Campinas" />
      <meta itemProp="address" content="Av. Brasil, Campinas, SP" />
      <meta itemProp="amenityFeature" content="Estacionamento, ducha quente, ambiente privativo" />
      <h2
        id="studio-heading"
        className="text-center font-bold text-4xl md:text-5xl lg:text-6xl"
      >
        Meu Espaço
      </h2>
      <Card className="mx-auto w-fit border-none bg-foreground lg:w-full">
        <CardContent className="px-0 lg:px-4">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-16">
            <div className="w-full px-8 lg:max-w-lg lg:px-1">
              <Carousel className="w-full">
                <CarouselContent>
                  {studioImages.map((image) => (
                    <CarouselItem key={image.id} itemProp="photo">
                      <div className="p-1">
                        <div className="relative aspect-square max-h-[500px] w-full overflow-hidden rounded-xl lg:max-h-none">
                          <Image
                            src={image.image}
                            alt={image.alt}
                            fill
                            className="object-cover object-center"
                            itemProp="image"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious variant="secondary" />
                <CarouselNext variant="secondary" />
              </Carousel>
            </div>
            <div className="flex w-full flex-col justify-between gap-6 lg:min-w-lg">
              <div className="space-y-6">
                <h3
                  className="font-bold text-3xl md:text-4xl lg:text-5xl"
                  itemProp="description"
                >
                  Espaço Privativo e Intimista em Campinas
                </h3>
                <div className="flex w-full items-center gap-2">
                  {badges.map((badge) => (
                    <Badge key={badge.id} className="lg:text-sm">
                      {badge.Icon}
                      {badge.content}
                    </Badge>
                  ))}
                </div>
                <p>
                  Atendimento em{" "}
                  <strong className="text-gold">
                    ambiente privativo na Av. Brasil
                  </strong>
                  , em Campinas – SP, com fácil acesso e estacionamento no
                  local.
                </p>
                <ul className="grid grid-cols-1 gap-1.5">
                  <li className="-ms-0.5 flex items-center gap-2">
                    <Localization color="oklch(0.9619 0.058 95.6174)" />{" "}
                    <strong className="text-gold">Av. Brasil</strong> —
                    Campinas/SP
                  </li>
                  <li className="flex items-center gap-2">
                    <Car color="oklch(0.9619 0.058 95.6174)" />{" "}
                    <strong className="text-gold">
                      Estacionamento no local
                    </strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <HotWater color="oklch(0.9619 0.058 95.6174)" />{" "}
                    <strong className="text-gold">
                      Ducha quente disponível
                    </strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lock color="oklch(0.9619 0.058 95.6174)" />{" "}
                    <strong className="text-gold">
                      Ambiente privativo e discreto
                    </strong>
                  </li>
                </ul>
              </div>
              <Button className="w-fit cursor-pointer rounded-full py-5.5 pe-2">
                Agendar Uma Sessão
                <div className="rounded-full bg-foreground p-2">
                  <Calendar className="size-3 sm:size-4" />
                </div>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
