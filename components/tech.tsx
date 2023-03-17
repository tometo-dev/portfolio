import { BallCanvas } from "./canvas/ball";
import { SectionWrapper } from "./motion/section-wrapper";

const technologies: Array<{ name: string; icon: string }> = [
  { name: "TypeScript", icon: "./tech/typescript.svg" },
  { name: "React", icon: "./tech/react.svg" },
  { name: "Next.js", icon: "./tech/nextjs.svg" },
  { name: "Tailwind CSS", icon: "./tech/tailwindcss.svg" },
  { name: "Docker", icon: "./tech/docker.svg" },
  { name: "Redux Toolkit", icon: "./tech/redux.svg" },
  { name: "Tanstack Query", icon: "./tech/tanstack-query.svg" },
  { name: "Storybook", icon: "./tech/storybook.svg" },
  { name: "Testing Library", icon: "./tech/testing-library.svg" },
  { name: "Python", icon: "./tech/python.svg" },
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
