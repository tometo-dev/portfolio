/**
 * Code taken from: https://www.joshwcomeau.com/react/animated-sparkles-in-react/
 * Author: Josh W. Comeau
 */
"use client";

import { HTMLAttributes, ReactNode, SVGAttributes, useState } from "react";

import { useRandomInterval } from "./hooks";

const DEFAULT_COLOR = "hsl(50deg, 100%, 50%)";
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

type Sparkle = {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: SVGAttributes<SVGSVGElement>["style"];
};

const generateSparkle = (color: string): Sparkle => {
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    // Bright yellow color:
    color,
    size: random(10, 20),
    style: {
      // Pick a random spot in the available space
      top: random(0, 100) + "%",
      left: random(0, 100) + "%",
      // Float sparkles above sibling content
      zIndex: 2,
    },
  };
};

type SparkleInstanceProps = {
  color: string;
  size: number;
  style: HTMLAttributes<HTMLDivElement>["style"];
};
function SparkleInstance({ color, size, style }: SparkleInstanceProps) {
  return (
    <div className="absolute block animate-grow-and-shrink" style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 160 160"
        className="pointer-events-none absolute z-[2] animate-spin"
      >
        <path
          fill={color}
          d="M80 0s4.285 41.292 21.496 58.504C118.707 75.715 160 80 160 80s-41.293 4.285-58.504 21.496S80 160 80 160s-4.285-41.293-21.496-58.504C41.292 84.285 0 80 0 80s41.292-4.285 58.504-21.496C75.715 41.292 80 0 80 0z"
        ></path>
      </svg>
    </div>
  );
}

export type SparklesProps = {
  children: ReactNode;
  color?: string;
} & HTMLAttributes<HTMLSpanElement>;
export function Sparkles({ children, color = DEFAULT_COLOR, ...rest }: SparklesProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>(Array.from({ length: 3 }, () => generateSparkle(color)));

  useRandomInterval(
    () => {
      const now = Date.now();

      // create a new sparkle
      const sparkle = generateSparkle(color);

      // cleanup old sparkles
      const nextSparkles = sparkles.filter((sparkle) => {
        const delta = now - sparkle.createdAt;
        return delta < 1000;
      });

      nextSparkles.push(sparkle);

      setSparkles(nextSparkles);
    },
    50,
    500,
  );

  return (
    <span className="relative inline-block" {...rest}>
      {sparkles.map((sparkle) => (
        <SparkleInstance key={sparkle.id} color={sparkle.color} size={sparkle.size} style={sparkle.style} />
      ))}
      <strong className="relative z-[1] font-bold">{children}</strong>
    </span>
  );
}
