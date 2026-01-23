"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ScheduleButton } from "@/components/dialog-schedule";
import { Alternate } from "@/components/icons/alternate";
import { Arrow } from "@/components/icons/arrow";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useDimension } from "@/lib/use-dimension";
import { cn } from "@/lib/utils";
import { massages } from "./lib/data";

export function Massages() {
  const { width } = useDimension();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="servicos-de-massagem"
      aria-labelledby="massages-heading"
      itemScope
      itemType="https://schema.org/ItemList"
      className="flex min-h-screen w-full flex-col items-center gap-10 overflow-x-hidden"
    >
      <div className="flex w-full flex-col items-center gap-4">
        <h2
          id="massages-heading"
          itemProp="name"
          className="mx-auto w-fit text-center font-bold text-4xl md:text-5xl lg:text-6xl"
        >
          Meus Serviços
        </h2>
        <div className="w-md">
          <p
            itemProp="description"
            className="text-center text-muted text-sm md:text-base lg:text-lg"
          >
            Cada sessão é um convite à entrega, respeitando seus limites e
            despertando sensações através de uma experiência sensorial completa.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-6">
        <div className="relative grid w-fit grid-cols-1 place-items-center justify-center gap-x-6 gap-y-8 md:grid-cols-2">
          {isMounted && width && width > 768 && (
            <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 aspect-square w-10 flex-center rounded-2xl">
              <Alternate size={32} color="#dcab6b" />
            </div>
          )}
          {massages.map((massage, index) => (
            <div
              key={massage.id}
              className={cn(
                "relative h-[400px] max-w-md overflow-hidden rounded-4xl bg-muted md:aspect-square md:h-auto md:max-w-sm",
                massage.color,
              )}
              itemScope
              itemType="https://schema.org/Service"
              itemProp="itemListElement"
              data-position={index + 1}
            >
              <div className="absolute inset-0">
                <Image
                  src={massage.image}
                  alt={`${massage.name} em Campinas`}
                  fill
                  className="object-cover object-center"
                  itemProp="image"
                />
              </div>
              <div className="relative z-2 flex size-full flex-col justify-between gap-6 p-4 backdrop-blur-sm backdrop-brightness-65">
                <div className="flex items-start justify-between gap-4">
                  <div className="h-13 w-fit flex-center rounded-full bg-primary px-4 backdrop-blur-sm">
                    <p
                      className="text-primary-foreground text-sm"
                      itemProp="name"
                    >
                      {massage.name}
                    </p>
                  </div>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button
                        asChild
                        className="-rotate-45 size-13 rounded-full bg-foreground hover:bg-foreground/96"
                      >
                        <Link href={`/massagens/${massage.name}`}>
                          <Arrow size={32} color="#fff" />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Ver detalhes</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="flex w-full flex-col items-center gap-4 rounded-xl bg-foreground/56 p-4">
                  <ScheduleButton
                    massage={
                      massage.massage as
                        | "Nuru"
                        | "Vivência"
                        | "Mix Tântrico"
                        | "Tântrica"
                    }
                  />
                  <p className="text-primary-foreground" itemProp="description">
                    {massage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
