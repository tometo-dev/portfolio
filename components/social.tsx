"use client";

import { motion } from "framer-motion";

import github from "@/assets/social/github.svg";
import linkedin from "@/assets/social/linkedin.svg";
import twitter from "@/assets/social/twitter.svg";
import { getSlideIn } from "@/utils/framer-motion";

import { PhoenixCanvas } from "./canvas/phoenix/phoenix";
import { SectionWrapper } from "./motion/section-wrapper";
import { Sparkles } from "./sparkles";
import { TiltCard } from "./tilt-card";

const socialLinks: Array<{ name: string; icon: string; link: string }> = [
  { name: "twitter", icon: twitter.src, link: "https://twitter.com/trululusolulu" },
  { name: "github", icon: github.src, link: "https://github.com/tometo-dev" },
  { name: "linkedin", icon: linkedin.src, link: "https://www.linkedin.com/in/perfectsudh" },
];

export function Social() {
  return (
    <SectionWrapper id="connect">
      <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
        <motion.div
          variants={getSlideIn("left", "tween", 0.2, 1)}
          className="relative flex-[0.75] flex-row flex-wrap rounded-2xl bg-black-100 p-8 sm:flex"
        >
          <div className="flex-1">
            <Sparkles>
              <p className="sectionSubText">Get in touch</p>
            </Sparkles>
            <h3 className="sectionHeadText">Find me here.</h3>

            <div className="mt-10 flex flex-row flex-wrap justify-start gap-10">
              {socialLinks.map((social) => (
                <div className="size-20" key={social.name}>
                  <TiltCard
                    options={{
                      max: 45,
                      scale: 1,
                      speed: 450,
                    }}
                  >
                    <Sparkles>
                      <a href={social.link} target="_blank" rel="noopener noreffer">
                        <div
                          className="size-12 text-black"
                          style={{
                            backgroundImage: `url(${social.icon})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        />
                      </a>
                    </Sparkles>
                  </TiltCard>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -top-10 right-0 sm:block  md:static">
            <PhoenixCanvas />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
