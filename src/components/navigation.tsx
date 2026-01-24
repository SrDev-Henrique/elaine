"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ScheduleButton } from "./dialog-schedule";
import { RelaxedIcon } from "./icons/relaxed-icon";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Início", href: "#massagem-tantrica-campinas" },
  { label: "Serviços", href: "#servicos-de-massagem" },
  { label: "Estúdio", href: "#studio-massagem-campinas" },
  { label: "Avaliações", href: "#avaliacoes-clientes" },
  { label: "FAQ", href: "#faq-massagem-campinas" },
  { label: "Agendar", href: "#agendar-sessao-massagem" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-40 w-full border-foreground/20 border-b bg-gold/35 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg text-primary-foreground"
          aria-label="Ir para a página inicial"
        >
          <span className="h-9 w-9 flex-center rounded-full bg-foreground/55">
            <RelaxedIcon width={28} height={28} />
          </span>
          Hellen Massagista Sensual
        </Link>

        <nav className="hidden items-center gap-4 lg:flex">
          {!isHome ? (
            <Link
              href="/"
              className="rounded-full bg-foreground px-3 py-2 font-medium text-muted text-sm transition-colors hover:bg-foreground/80 hover:text-primary-foreground"
            >
              Início
            </Link>
          ) : (
            navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full bg-foreground px-3 py-2 font-medium text-muted text-sm transition-colors hover:bg-foreground/80 hover:text-primary-foreground"
              >
                {item.label}
              </Link>
            ))
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ScheduleButton className="bg-primary text-primary-foreground hover:bg-primary/90" />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/50 text-primary-foreground lg:hidden"
          onClick={toggle}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "transition-all duration-200 lg:hidden",
          open
            ? "pointer-events-auto max-h-screen opacity-100"
            : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 pb-4 md:px-6">
          {!isHome ? (
            <Link
              href="/"
              className="rounded-full bg-foreground px-3 py-2 font-medium text-muted text-sm transition-colors hover:bg-foreground/80 hover:text-primary-foreground"
            >
              Início
            </Link>
          ) : (
            navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-2xl border border-foreground/15 bg-foreground/40 px-4 py-3 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary/10"
              >
                {item.label}
              </Link>
            ))
          )}
          <ScheduleButton className="w-full justify-between bg-primary text-primary-foreground hover:bg-primary/90" />
        </div>
      </div>
    </header>
  );
}
