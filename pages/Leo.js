import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Leo(props) {
  const { nodes, materials } = useGLTF(require('../assets/3d/leo.glb'));
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["240mm"].geometry}
        material={nodes["240mm"].material}
      />
    </group>
  );
}
useGLTF.preload(require('../assets/3d/leo.glb'));