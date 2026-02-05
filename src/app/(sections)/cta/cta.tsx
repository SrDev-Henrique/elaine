import { ScheduleForm } from "./components/schedule-form";

export function Cta() {
  return (
    <section
      id="agendar-sessao-massagem"
      aria-labelledby="cta-heading"
      itemScope
      itemType="https://schema.org/Action"
      className="mx-auto h-fit w-full max-w-[1130px] space-y-10"
    >
      <meta itemProp="name" content="Agendar sessão de massagem em Campinas" />
      <meta
        itemProp="description"
        content="Formulário para agendamento de massagem seonsorial com gel, interativa guiada, combinada sensorial ou presença corporal em Campinas."
      />
      <h2
        id="cta-heading"
        className="text-center font-bold text-3xl md:text-4xl lg:text-5xl"
      >
        Agende Sua Sessão
      </h2>
      <ScheduleForm />
    </section>
  );
}
