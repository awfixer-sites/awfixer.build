import { Hero } from "@/app/_components/hero";
import { Benefits } from "@/app/_components/benefits";
import { Services } from "@/app/_components/services";
import { OpenSourceProjects } from "@/app/_components/open-source";
import { CTA } from "@/app/_components/cta";

export default function Index() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Services />
      <OpenSourceProjects />
      <CTA />
    </main>
  );
}
