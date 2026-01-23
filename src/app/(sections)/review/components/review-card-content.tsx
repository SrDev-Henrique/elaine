import { AvatarFallback } from "@radix-ui/react-avatar";
import { RiStarFill } from "@remixicon/react";
import { ScheduleButton } from "@/components/dialog-schedule";
import { Quote } from "@/components/icons/quote";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { reviews } from "../review";

const popularMassages = ["Nuru", "Vivência", "Mix Tântrico"];
export function ReviewCardContent() {
  return (
    <div className="absolute inset-0 flex flex-col justify-between gap-6 bmd:px-6 px-4 bmd:py-6 py-4">
      <div className="max-w-xl space-y-2">
        <Quote size={48} color="#ffffff" />
        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">
          A melhor massagem de Campinas
        </h2>
      </div>
      <div className="flex w-full bmd:flex-row flex-col items-start bmd:items-end justify-between gap-4">
        <div className="w-fit space-y-4 rounded-2xl p-4 backdrop-blur-sm backdrop-brightness-75">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                {reviews.slice(0, 3).map((review) => (
                  <div key={review.id} className="not-first:-ms-2 w-fit">
                    <Avatar className="bmd:size-10 border-2 border-muted/30 bg-accent-foreground">
                      <AvatarFallback className="flex items-center ps-1.5 font-bold bmd:text-base text-muted-bright-foreground text-xs">
                        {review.fallback}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                ))}
              </div>
              <p className="text-nowrap rounded-full bg-card/12 p-2 font-semibold bmd:text-base text-primary-foreground text-sm">
                Mais 250
              </p>
              <p className="bmd:text-base text-primary-foreground text-sm">
                Reverenciada!
              </p>
            </div>
            <p className="max-w-[300px] bmd:text-base text-muted text-xs">
              Sessão muito boa — técnica afiada e ambiente acolhedor. Foi
              relaxante e ao mesmo tempo sensorial, do jeito que eu buscava.
            </p>
            <Separator className="bmd:block hidden bg-card/20" />
            <div className="flex items-end justify-between gap-4">
              <div className="flex items-start">
                <p className="bmd:text-8xl text-5xl text-primary-foreground">
                  4.9
                </p>
                <RiStarFill className="size-4 text-yellow-500" />
              </div>
              <p className="bmd:text-lg text-muted text-sm">( Avaliações )</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-full sm:flex-row sm:items-center">
          <p className="font-semibold bmd:text-base text-primary-foreground text-xs">
            Mais populares
          </p>
          <div className="flex items-center gap-2">
            {popularMassages.map((massage) => (
              <ScheduleButton
                key={massage}
                text={massage}
                massage={massage as "Nuru" | "Vivência" | "Mix Tântrico"}
                className="wrap-normal cursor-pointer rounded-3xl bg-foreground/46 bmd:py-6 py-4 text-primary-foreground text-xs uppercase backdrop-blur-sm hover:bg-foreground/56"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
