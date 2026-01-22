"use client";

import { Calendar } from "lucide-react";
import Image from "next/image";
import { Localization } from "@/components/icons/localization";
import { Button } from "@/components/ui/button";

const popularMassages = ["Nuru", "Vivência", "Mix Tântrico"];

export function Hero() {
  return (
    <section
      id="massagem-tantrica-campinas"
      aria-labelledby="hero-heading"
      itemScope
      itemType="https://schema.org/HealthAndBeautyBusiness"
      className="flex h-fit w-full items-start pt-24 lg:min-h-screen lg:items-center"
    >
      <div className="flex h-fit w-full flex-col items-center justify-between gap-10 lg:flex-row lg:items-start lg:justify-center">
        <div className="relative aspect-video w-full max-w-2xl overflow-hidden rounded-xl lg:aspect-12/16 lg:max-w-sm">
          <Image
            src="/images/elaine(1).jpeg"
            alt="Elaine, massoterapeuta especializada em massagem tântrica e Nuru em Campinas"
            fill
            className="object-cover object-[50%_20%] lg:object-center"
            itemProp="image"
          />
        </div>
        <div className="h-fit w-full max-w-2xl">
          <div className="space-y-4">
            <h1
              id="hero-heading"
              itemProp="name"
              className="font-bold text-[3.5rem] sm:text-4xl lg:text-7xl"
            >
              Massagem Tântrica e Nuru em Campinas
            </h1>
            <p
              itemProp="description"
              className="text-muted-bright-foreground text-sm lg:pt-4 lg:text-base"
            >
              <span className="font-bold text-muted">
                Massagem tântrica e Nuru em Campinas
              </span>
              , pensadas para despertar sensações com técnica, presença e
              ambiente intimista. Atendimento em estúdio privativo na região
              central de Campinas.
            </p>
            <div className="flex w-full items-center justify-between gap-2 lg:justify-start">
              <Button className="cursor-pointer rounded-full py-5.5 pe-2">
                Agendar
                <div className="rounded-full bg-foreground p-2">
                  <Calendar className="size-3 sm:size-4" />
                </div>
              </Button>
              <div
                className="flex w-fit items-center gap-2 rounded-full border border-primary p-2"
                itemProp="addressLocality"
              >
                <Localization color="oklch(1 0 0)" />
                <p className="text-primary-foreground">
                  Guanabara,{" "}
                  <span className="text-muted-bright-foreground text-xs">
                    Campinas, SP
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-foreground/30 p-2">
              <p className="text-nowrap font-semibold bmd:text-base text-primary-foreground text-xs">
                Mais populares
              </p>
              <div className="flex items-center gap-2 overflow-hidden lg:justify-between">
                {popularMassages.map((massage, index) => (
                  <div
                    key={massage}
                    className={`${index === 2 && "bmd:block hidden"}`}
                  >
                    <Button className="cursor-pointer rounded-3xl border border-primary bg-transparent bmd:py-5 py-4 pe-2 text-primary-foreground">
                      {massage}
                      <div className="rounded-full bg-foreground p-2">
                        <Calendar className="size-3 sm:size-4" />
                      </div>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
