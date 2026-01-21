import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Alternate } from "@/components/icons/alternate";
import { Arrow } from "@/components/icons/arrow";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { massages } from "./lib/data";

export function Massages() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-10">
      <div className="flex w-full flex-col items-center gap-4">
        <h1 className="mx-auto w-fit text-center font-bold text-4xl md:text-5xl lg:text-6xl">
          Meus Serviços
        </h1>
        <div className="w-md">
          <p className="text-center text-muted text-sm md:text-base lg:text-lg">
            Cada sessão é um convite à entrega, respeitando seus limites e
            despertando sensações através de uma experiência sensorial completa.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-6">
        <div className="relative grid w-fit grid-cols-1 place-items-center justify-center gap-x-6 gap-y-8 md:grid-cols-2">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 aspect-square w-10 flex-center rounded-2xl">
            <Alternate size={32} color="#dcab6b" />
          </div>
          {massages.map((massage) => (
            <div
              key={massage.id}
              className={cn(
                "relative h-[400px] max-w-md overflow-hidden rounded-4xl bg-muted md:aspect-square md:h-auto md:max-w-sm",
                massage.color,
              )}
            >
              <div className="absolute inset-0">
                <Image
                  src={massage.image}
                  alt={massage.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="relative z-2 flex size-full flex-col justify-between gap-6 p-4 backdrop-blur-sm backdrop-brightness-65">
                <div className="flex items-start justify-between gap-4">
                  <div className="h-13 w-fit flex-center rounded-full bg-primary px-4 backdrop-blur-sm">
                    <p className="text-primary-foreground text-sm">
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
                  <Button className="cursor-pointer rounded-full py-5.5 pe-2 text-primary-foreground">
                    Agendar
                    <div className="rounded-full bg-foreground p-2">
                      <Calendar className="size-3 sm:size-4" />
                    </div>
                  </Button>
                  <p className="text-primary-foreground">
                    {massage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
