"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { CanvasLoader } from "@/components/canvas-loader";
import { useIsMobileHook } from "@/components/hooks";

import { Model as ComputerModel } from "./model";

export function ComputerCanvas() {
  const isMobile = useIsMobileHook();

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} />
        <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <ComputerModel
          scale={isMobile ? 0.4 : 0.75}
          position={isMobile ? [-4, -2, -2] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.3, -0.1]}
        />
      </Suspense>
    </Canvas>
  );
}
