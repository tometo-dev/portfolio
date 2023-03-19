"use client";
import { motion } from "framer-motion";

import github from "@/assets/social/github.svg";
import linkedin from "@/assets/social/linkedin.svg";
import twitter from "@/assets/social/twitter.svg";
import { getSlideIn } from "@/utils/framer-motion";

import { SectionWrapper } from "./motion/section-wrapper";
import { TiltCard } from "./tilt-card";

const socialLinks: Array<{ name: string; icon: string; link: string }> = [
  { name: "twitter", icon: twitter.src, link: "https://twitter.com/tometo_dev" },
  { name: "github", icon: github.src, link: "https://github.com/tometo-dev" },
  { name: "linkedin", icon: linkedin.src, link: "https://www.linkedin.com/in/perfectsudh" },
];

export function Social() {
  return (
    <SectionWrapper id="connect">
      <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
        <motion.div variants={getSlideIn("left", "tween", 0.2, 1)} className="flex-[0.75] rounded-2xl bg-black-100 p-8">
          <p className="sectionSubText">Get in touch</p>
          <h3 className="sectionHeadText">Find me here.</h3>

          <div className="mt-10 flex flex-row flex-wrap justify-start gap-10">
            {socialLinks.map((social) => (
              <div className="h-20 w-20" key={social.name}>
                <TiltCard
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                >
                  <a href={social.link} target="_blank" rel="noopener noreffer">
                    <div
                      className="h-12 w-12 text-black"
                      style={{
                        backgroundImage: `url(${social.icon})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    />
                  </a>
                </TiltCard>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
