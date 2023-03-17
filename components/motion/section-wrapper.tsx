"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

import { getStaggerContainer } from "@/utils/framer-motion";

export function SectionWrapper({ id = "", children }: { id?: string; children: ReactNode }) {
  return (
    <motion.section
      variants={getStaggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`padding relative z-0 mx-auto max-w-7xl`}
    >
      <span className="hash-span" id={id}>
        &nbsp;
      </span>

      {children}
    </motion.section>
  );
}
