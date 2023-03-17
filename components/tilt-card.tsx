"use client";

import { HTMLAttributes, useEffect, useRef } from "react";
import VanillaTilt, { TiltOptions } from "vanilla-tilt";

export type TiltCardProps = HTMLAttributes<HTMLDivElement> & {
  options: TiltOptions;
};
export function TiltCard({ options, ...rest }: TiltCardProps) {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tiltElement = tiltRef.current;
    if (!tiltElement) return;
    VanillaTilt.init(tiltElement, options);

    return () => {
      (tiltElement as any)?.vanillaTilt.destroy();
    };
  }, [options]);

  return <div ref={tiltRef} {...rest} />;
}
