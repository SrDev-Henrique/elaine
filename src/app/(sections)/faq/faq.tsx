import FaqAccordion from "./components/accordion";

export function Faq() {
  return (
    <div className="mx-auto h-fit w-full max-w-[1130px] space-y-6">
      <h1 className="text-center font-bold text-3xl sm:text-4xl">
        Perguntas Frequentes
      </h1>
      <FaqAccordion />
    </div>
  );
}
