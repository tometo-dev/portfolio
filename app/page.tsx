import Image from "next/image";

import logo from "@/assets/images/logo.png";
import { ComputerCanvas } from "@/components/canvas/computer";
import { Scroller } from "@/components/scroller";

export default function Page() {
  return (
    <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
      <nav className="paddingX fixed top-0 z-20 flex w-full items-center bg-primary py-5">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Image src={logo} alt="logo" className="h-10 w-10 object-contain" />
            <p className="cursor-pointer text-lg font-bold text-white">Sudhanshu</p>
          </a>
          <ul className="hidden list-none flex-row gap-10 sm:flex">
            <li className="cursor-pointer text-lg font-medium text-secondary hover:text-white">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer text-lg font-medium text-secondary hover:text-white">
              <a href="#work">Work</a>
            </li>
          </ul>
        </div>
      </nav>
      <section className={`relative mx-auto h-screen w-full`}>
        <div className={`paddingX absolute inset-0  top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5`}>
          <div className="mt-5 flex flex-col items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
            <div className="violet-gradient h-40 w-1 sm:h-80" />
          </div>

          <div>
            <h1 className={`heroHeadText text-white`}>
              Hi, I&apos;m <span className="text-[#915EFF]">Sudhanshu</span>
            </h1>
            <p className={`heroSubText mt-2 text-white-100`}>I am a frontend developer</p>
          </div>
        </div>

        <ComputerCanvas />
        <Scroller />
      </section>
      <h1 className="text-red-600">Tometo</h1>
    </div>
  );
}
