"use client";

import { motion } from "framer-motion";

import { getFadeIn, getTextVariant } from "@/utils/framer-motion";

import { SectionWrapper } from "./motion/section-wrapper";

export function About() {
  return (
    <SectionWrapper id="about">
      <motion.div variants={getTextVariant(0)}>
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview.</h2>
      </motion.div>

      <motion.p
        variants={getFadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        I&apos;m a frontend developer with 2+ years of experience. I have worked on a wide range of projects from small
        to large scale. I have worked on projects using React, Next.js, Tailwind CSS and other frontend technologies.
        <br /> I love learning new things and applying them in my projects
      </motion.p>
    </SectionWrapper>
  );
}
