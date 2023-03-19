import docker from "@/assets/tech/docker.svg";
import nextjs from "@/assets/tech/nextjs.svg";
import python from "@/assets/tech/python.svg";
import react from "@/assets/tech/react.svg";
import redux from "@/assets/tech/redux.svg";
import storybook from "@/assets/tech/storybook.svg";
import tailwindcss from "@/assets/tech/tailwindcss.svg";
import tanstackQuery from "@/assets/tech/tanstack-query.svg";
import testingLibrary from "@/assets/tech/testing-library.svg";
import typescript from "@/assets/tech/typescript.svg";

import { BallCanvas } from "./canvas/ball";
import { SectionWrapper } from "./motion/section-wrapper";

const technologies: Array<{ name: string; icon: string }> = [
  { name: "TypeScript", icon: typescript.src },
  { name: "React", icon: react.src },
  { name: "Next.js", icon: nextjs.src },
  { name: "Tailwind CSS", icon: tailwindcss.src },
  { name: "Docker", icon: docker.src },
  { name: "Redux Toolkit", icon: redux.src },
  { name: "Tanstack Query", icon: tanstackQuery.src },
  { name: "Storybook", icon: storybook.src },
  { name: "Testing Library", icon: testingLibrary.src },
  { name: "Python", icon: python.src },
];

export function Tech() {
  return (
    <SectionWrapper id="">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
