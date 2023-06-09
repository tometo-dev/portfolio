/*
Initially autogenerated by: https://github.com/pmndrs/gltfjsx, later modified as needed
Command: npx gltfjsx@6.1.4 scene.gltf --transform --types
Author: NORBERTO-3D (https://sketchfab.com/norberto3d)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
Title: phoenix bird
*/

import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import { AnimationClip } from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_7: THREE.SkinnedMesh;
    Object_8: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    MatI_Ride_FengHuang_01a: THREE.MeshStandardMaterial;
    MatI_Ride_FengHuang_01b: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Take 001";
type GLTFActions = AnimationClip & { name: ActionName };

const MODEL_PATH = "./3d/phoenix/phoenix-transformed.glb";

export function Phoenix(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(MODEL_PATH) as GLTFResult;

  const { actions } = useAnimations<GLTFActions>(animations as any, group);

  useFrame(() => {
    actions["Take 001"]?.play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" position={[-0.62, 0, -17.14]} rotation={[-Math.PI / 2, 0, 0.05]}>
          <group name="5f59736c86d4457fa045aec4aea6b7e0fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.MatI_Ride_FengHuang_01a}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.MatI_Ride_FengHuang_01b}
                    skeleton={nodes.Object_8.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(MODEL_PATH);
