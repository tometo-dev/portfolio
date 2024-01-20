"use client";

import { ComputerCanvas } from "./canvas/computer/computer";
import { Scroller } from "./motion/scroller";

export function Hero() {
  return (
    <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
      <section className={`relative mx-auto h-screen w-full`}>
        <div className={`paddingX absolute inset-0  top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5`}>
          <div className="mt-5 flex flex-col items-center justify-center">
            <div className="size-5 rounded-full bg-[#915EFF]" />
            <div className="violet-gradient h-40 w-1 sm:h-80" />
          </div>

          <div className="z-10 select-none">
            <h1 className={`heroHeadText text-white`}>
              Hi, I&apos;m{" "}
              <a
                href="https://twitter.com/tometo_dev"
                target="_blank"
                rel="noreferrer noopenner"
                className="text-[#915EFF] hover:text-[#1DA1F2]"
              >
                Sudhanshu
              </a>
            </h1>
            <p className={`heroSubText mt-2 text-white-100`}>I am a frontend developer</p>
          </div>
        </div>
        <ComputerCanvas />
        <Scroller />
      </section>
    </div>
  );
}
