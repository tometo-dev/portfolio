"use client";

import { Environment, Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { CanvasLoader } from "@/components/canvas-loader";
import { useIsMobileHook } from "@/components/hooks";

import { Phoenix as PhoenixModel } from "./model";

export function PhoenixCanvas() {
  const isMobile = useIsMobileHook();

  return (
    <Canvas frameloop="always" shadows style={{ width: "100%" }}>
      <Suspense fallback={<CanvasLoader />}>
        <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
        <Environment preset="warehouse" />

        <Sparkles noise={0} count={500} speed={0.01} size={0.6} color={"#FFD2BE"} opacity={10} scale={[20, 100, 20]} />

        <PhoenixModel scale={isMobile ? 0.004 : 0.007} position={[1, -1, 0]} />
      </Suspense>
    </Canvas>
  );
}
