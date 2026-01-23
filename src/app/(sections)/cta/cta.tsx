import { ScheduleForm } from "./components/schedule-form";

export function Cta() {
  return (
    <div className="mx-auto h-fit w-full max-w-[1130px] space-y-10">
      <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl">
        Agende Sua Sessão
      </h1>
      <ScheduleForm />
    </div>
  );
}
