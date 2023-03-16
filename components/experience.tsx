"use client";

import "react-vertical-timeline-component/style.min.css";

import { motion } from "framer-motion";
import Image from "next/image";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import { Experiences, experiences } from "@/utils/constants";
import { getTextVariant } from "@/utils/framer-motion";

import { SectionWrapper } from "./motion/section-wrapper";

function ExperienceCard({ experience }: { experience: Experiences[number] }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <Image src={experience.icon} alt={experience.company_name} className="h-[60%] w-[60%] object-contain" />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
        <p className="text-[16px] font-semibold text-secondary" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 ml-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="pl-1 text-[14px] tracking-wider text-white-100">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

export function Experience() {
  return (
    <SectionWrapper id="work">
      <motion.div variants={getTextVariant(0)}>
        <p className={`sectionSubText text-center`}>What I have done so far</p>
        <h2 className={`sectionHeadText text-center`}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  );
}
