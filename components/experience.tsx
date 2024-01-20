"use client";

import "react-vertical-timeline-component/style.min.css";

import { motion } from "framer-motion";
import Image from "next/image";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import aptus from "@/assets/company/aptus.png";
import fletch from "@/assets/company/fletch.png";
import ik from "@/assets/company/ik.svg";
import paytm from "@/assets/company/paytm.png";
import { getTextVariant } from "@/utils/framer-motion";

import { SectionWrapper } from "./motion/section-wrapper";

const experiences = [
  {
    title: "Senior Software Engineer",
    companyName: "Fletch",
    icon: fletch,
    iconBg: "#151030",
    date: "Jan 2023 - Present",
    points: ["Added features to the existing app", "Maintenence  and improvement of the existing codebase"],
    techUsed: ["React", "TypeScript", "Redux"],
  },
  {
    title: "Software Engineer",
    companyName: "Interview Kickstart",
    icon: ik,
    iconBg: "#ffffff",
    date: "November 2021 - November 2022",
    points: [
      "Integrate payment gateways to faciliate payment in India",
      "Led the frontend team for the internalization (i18n) of the app",
      "Added developer tooling around i18n, testing and component stories",
      "Built framework for integrating any 3rd party analytics tool to the app",
      "Setup monorepo for the management and release of internal npm packages",
      "Mentored fellow developers around app architecture and better code practices",
      "Added minor features to the backend django codebase",
    ],
    techUsed: ["React", "TypeScript", "ReactQuery", "NextJS", "TailwindCSS", "TestingLibrary", "Storybook", "Django"],
  },
  {
    title: "Software Engineer, Frontend",
    companyName: "Paytm",
    icon: paytm,
    iconBg: "#ffffff",
    date: "August 2021 - November 2021",
    points: ["Added features to Paytm Seller Panel", "Bug fixes and minor modifications to the PaytmMall app"],
    techUsed: ["React", "JavaScript"],
  },
  {
    title: "Software Developer",
    companyName: "Aptus Data Labs",
    icon: aptus,
    iconBg: "#ffffff",
    date: "July 2019 - August 2021",
    points: [
      "Built UI for Intelligent Supply Chain Planning Platform using React, TypeScript and Material UI",
      "Implemented Role-based-access-control for the application",
      "Managed deployments of the frontend applications using Docker and Github Actions",
      "Built rest apis using Django and Golang",
    ],
    techUsed: ["React", "TypeScript", "TailwindCSS", "ReactQuery", "TestingLibrary", "Redux", "Django", "Golang"],
  },
];

type Experiences = typeof experiences;

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
        <div className="flex size-full items-center justify-center">
          <Image src={experience.icon} alt={experience.companyName} className="size-[60%] object-contain" />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
        <p className="text-[16px] font-semibold text-secondary" style={{ margin: 0 }}>
          {experience.companyName}
        </p>
      </div>

      <ul className="mt-5 ml-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="pl-1 text-sm tracking-wider text-white-100">
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-4 text-sm tracking-wider text-white-100">
        <div>Tech used:</div>
        <div className="flex flex-wrap">
          {experience.techUsed.map((tech, index) => (
            <span key={`experience-tech-${index}`} className="mr-2">
              {tech}
            </span>
          ))}
        </div>
      </div>
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
