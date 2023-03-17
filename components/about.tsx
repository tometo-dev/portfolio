"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import nextjsIcon from "@/assets/icons/nextjs.svg";
import tailwindcssIcon from "@/assets/icons/tailwindcss.svg";
import typescriptIcon from "@/assets/icons/typescript.svg";
import { getFadeIn, getTextVariant } from "@/utils/framer-motion";

import { SectionWrapper } from "./motion/section-wrapper";
import { TiltCard } from "./tilt-card";

function TechCard({
  index,
  title,
  renderIcon,
}: {
  index: number;
  title: string;

  renderIcon: () => JSX.Element;
}) {
  return (
    <TiltCard
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={getFadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
      >
        <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary py-5 px-12">
          <div className="h-28 w-28">{renderIcon()}</div>
          <h3 className="text-center text-[20px] font-bold text-white">{title}</h3>
        </div>
      </motion.div>
    </TiltCard>
  );
}

const techs: Array<{ title: string; renderIcon: () => JSX.Element }> = [
  {
    title: "React",
    renderIcon: () => (
      <svg
        width="100%"
        height="100%"
        viewBox="-10.5 -9.45 21 18.9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-4 mb-3 mr-0 flex w-24 origin-center self-center text-sm  transition-all ease-in-out dark:text-[#149ECA] lg:w-28"
      >
        <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="10" ry="4.5"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
        </g>
      </svg>
    ),
  },
  {
    title: "Next.js",
    renderIcon: () => <Image src={nextjsIcon} alt="nextjs icon" />,
  },
  {
    title: "Tailwind CSS",
    renderIcon: () => <Image src={tailwindcssIcon} alt="tailwindcss icon" />,
  },
  {
    title: "TypeScript",
    renderIcon: () => <Image src={typescriptIcon} alt="typescript icon" />,
  },
];

export function About() {
  return (
    <SectionWrapper id="about">
      <motion.div variants={getTextVariant(0)}>
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview.</h2>
      </motion.div>

      <motion.p variants={getFadeIn("", "", 0.1, 1)} className="mt-4 max-w-4xl text-[17px] leading-[30px]">
        I&apos;m a frontend developer with 2+ years of experience. I have worked on a wide range of projects from small
        to large scale. I have worked on projects using React, Next.js, Tailwind CSS and other frontend technologies.
        <br /> I love learning new things and applying them in my projects
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {techs.map((tech, index) => (
          <TechCard key={`tech-${index}`} index={index} title={tech.title} renderIcon={tech.renderIcon} />
        ))}
      </div>
    </SectionWrapper>
  );
}
