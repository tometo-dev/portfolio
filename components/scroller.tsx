"use client";

import { motion } from "framer-motion";

export function Scroller() {
  return (
    <div className="absolute bottom-32 flex w-full items-center justify-center xs:bottom-10">
      <a href="#about">
        <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="mb-1 h-3 w-3 rounded-full bg-secondary"
          />
        </div>
      </a>
    </div>
  );
}
