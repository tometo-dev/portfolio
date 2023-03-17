import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Social } from "@/components/social";
import { Tech } from "@/components/tech";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Social />
    </>
  );
}
