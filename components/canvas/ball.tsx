"use client";

import {
  Decal,
  Float,
  Html,
  OrbitControls,
  OrthographicCamera,
  Preload,
  useAspect,
  useTexture,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Box, Flex } from "@react-three/flex";
import { ReactNode, Suspense, useRef } from "react";
import { BufferGeometry, Mesh } from "three";

import { CanvasLoader } from "../canvas-loader";

function FlexComponent({ children }: { children: ReactNode }) {
  const { size } = useThree();

  const [width, height] = useAspect(size.width, size.height);

  return (
    <Flex flexDirection="column" size={[width, height, 0]} position={[-width / 2, height / 2, 0]}>
      <Box flexDirection="row" alignItems="center" justifyContent="center" flexWrap="wrap" width="100%">
        {children}
      </Box>
    </Flex>
  );
}

function Ball(props: { imgUrl: string; link: string }) {
  const [decal] = useTexture([props.imgUrl]);
  const ref = useRef<Mesh<BufferGeometry>>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const elapsed = clock.getElapsedTime();

    const amplitude = 0.5;

    ref.current.rotation.x = amplitude * Math.sin(elapsed) * Math.cos(elapsed);
    ref.current.rotation.y = amplitude * Math.cos(elapsed);
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.05} position={[0, 0, -10]} />
      <directionalLight position={[0, 0, -10]} intensity={0.5} />
      <mesh
        castShadow
        receiveShadow
        scale={2.75}
        ref={ref}
        onClick={() => {
          window.open(props.link, "_blank");
        }}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} flatShading />
      </mesh>
    </Float>
  );
}

export function BallCanvas({ technologies }: { technologies: Array<{ name: string; icon: string; link: string }> }) {
  return (
    <Canvas frameloop="always" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={15} />
        <FlexComponent>
          {technologies.map((technology, i) => (
            <Box margin={0.2} key={i} centerAnchor>
              <Ball imgUrl={technology.icon} link={technology.link} />
            </Box>
          ))}
        </FlexComponent>
      </Suspense>

      <Preload all />
    </Canvas>
  );
}
