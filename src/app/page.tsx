import { Faq } from "./(sections)/faq/faq";
import { Hero } from "./(sections)/hero/hero";
import { Massages } from "./(sections)/massages/massages";
import { Me } from "./(sections)/me/me";
import { Review } from "./(sections)/review/review";
import { Studio } from "./(sections)/studio/studio";

export default function Home() {
  return (
    <div className="mx-auto w-full space-y-20 overflow-x-hidden px-4 lg:px-6">
      <Hero />
      <Massages />
      <Me />
      <Studio />
      <Review />
      <Faq />
    </div>
  );
}
