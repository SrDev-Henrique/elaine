import { Hero } from "./(sections)/hero/hero";
import { Massages } from "./(sections)/massages/massages";
import { Me } from "./(sections)/me/me";
import { Studio } from "./(sections)/studio/studio";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1320px] space-y-20 px-4 lg:max-w-[1540px] lg:px-6">
      <Hero />
      <Massages />
      <Me />
      <Studio />
    </div>
  );
}
