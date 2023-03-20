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

const technologies: Array<{ name: string; icon: string; link: string }> = [
  { name: "TypeScript", icon: typescript.src, link: "https://www.typescriptlang.org" },
  { name: "React", icon: react.src, link: "https://react.dev" },
  { name: "Next.js", icon: nextjs.src, link: "https://nextjs.org" },
  { name: "Tailwind CSS", icon: tailwindcss.src, link: "https://tailwindcss.com" },
  { name: "Docker", icon: docker.src, link: "https://www.docker.com" },
  { name: "Redux Toolkit", icon: redux.src, link: "https://redux-toolkit.js.org" },
  { name: "Tanstack Query", icon: tanstackQuery.src, link: "https://tanstack.com/query" },
  { name: "Storybook", icon: storybook.src, link: "https://storybook.js.org" },
  { name: "Testing Library", icon: testingLibrary.src, link: "https://testing-library.com" },
  { name: "Python", icon: python.src, link: "https://www.python.org" },
];

export function Tech() {
  return (
    <SectionWrapper>
      <div className="flex h-96 flex-row flex-wrap justify-center gap-10 md:h-48 lg:h-28">
        <BallCanvas technologies={technologies} />
      </div>
    </SectionWrapper>
  );
}
