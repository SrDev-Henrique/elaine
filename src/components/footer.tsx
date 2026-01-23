import Link from "next/link";
import { Clock } from "./icons/clock";
import { Localization } from "./icons/localization";
import { Separator } from "./ui/separator";
import { WhatsappLink } from "./whatsapp-link";

export function Footer() {
  return (
    <div className="mt-20 w-full bg-primary/90 py-10 text-primary-foreground">
      <div className="mx-auto flex max-w-[1130px] flex-col gap-10 rounded-4xl bg-foreground p-6">
        <div className="mx-auto flex w-fit flex-col items-start gap-6 lg:w-full lg:flex-row lg:justify-between">
          <div className="space-y-4">
            <p className="font-medium text-2xl text-primary-foreground">
              Contato
            </p>
            <WhatsappLink />
          </div>
          <div className="space-y-4">
            <p className="font-medium text-2xl text-primary-foreground">
              Localização
            </p>
            <div className="group rounded-lg border border-primary/80 p-2 transition-colors duration-300 hover:border-primary">
              <div className="flex items-start justify-between gap-6 pe-2">
                <div className="flex items-start gap-2">
                  <Localization color="oklch(1 0 0)" />
                  <div className="space-y-0.5">
                    <p className="cursor-default font-medium text-muted text-sm">
                      Guanabara
                    </p>
                    <p className="truncate text-muted-bright-foreground text-xs">
                      Campinas, SP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[270px] space-y-4">
            <p className="font-medium text-2xl text-primary-foreground">
              Horários de atendimento
            </p>
            <div className="group rounded-lg border border-gold/80 p-2 transition-colors duration-300 hover:border-gold">
              <div className="flex items-start justify-between gap-6 pe-2">
                <div className="flex items-start gap-2">
                  <Clock color="oklch(1 0 0)" />
                  <div className="space-y-2">
                    <div className="space-y-0.5">
                      <p className="font-medium text-muted text-sm">
                        De segunda a sexta-feira:
                      </p>
                      <p>10:00 - 19:00</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="font-medium text-muted text-sm">
                        Aos sábados:
                      </p>
                      <p>10:00 - 18:00</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="font-medium text-muted text-sm">
                        Aos domingos:
                      </p>
                      <p>Verificar Agenda</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator className="bg-accent/40" />
        <div className="flex w-full flex-col items-center gap-2">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Hellen Massoterapeuta. Todos os
            direitos reservados.
          </p>
          <p className="text-center text-sm">
            Site desenvolvido por{" "}
            <Link
              href="https://github.com/SrDev-Henrique"
              target="_blank"
              className="text-primary-foreground underline"
            >
              Henrique Albuquerque
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
