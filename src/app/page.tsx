import { Hero } from "./(sections)/hero/hero";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1320px] space-y-20 px-4 lg:max-w-[1540px] lg:px-6">
      <Hero />
    </div>
  );
}
