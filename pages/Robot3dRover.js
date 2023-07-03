import React, { Suspense, useState, useEffect, useRef } from 'react';
import { ActivityIndicator, Button } from 'react-native';
import { Canvas} from '@react-three/fiber'
import { OrbitControls, View } from '@react-three/drei'
import { useGLTF } from "@react-three/drei";
import {StyleSheet} from 'react-native';

import CoordinateDisplay from '../components/CoordinateDisplay';

const debugScreen = false;

export default function Robot3dRover() {
  const camera = useRef();
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, z: 0 });

  const handleButtonClick = () => {
    console.log(camera);
    if (camera.current) {
      camera.current.update();
      const { x, y, z } = camera.current.object.position;
      setCameraPosition({ x, y, z });
    }
  };

  return (
    <Suspense fallback={<ActivityIndicator size="large" color="#8532a8" style={styles.centered}/>}>
      {debugScreen && <Button title="Update Coordinates" onPress={handleButtonClick} />}  
      {debugScreen && <CoordinateDisplay {...cameraPosition} />}
      <Canvas camera={{ position: [5.85, 3.42, 3.83] }} >
        <ambientLight intensity={0.5} />
        <pointLight position={[-10, 10, -10]} />
        <Robot scale={0.3} position={[2, 0, -1.1]} />
        <OrbitControls ref={camera}/>
      </Canvas>
    </Suspense>
  );
}

const styles = StyleSheet.create({
  centered: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  }, 
})

function Robot(props) {
  const { nodes, materials } = useGLTF(require('../assets/3d/rover2.glb'));
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_1.geometry}
          material={materials["131,88,197"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_2.geometry}
          material={materials["254,254,255"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_3.geometry}
          material={materials["221,232,255"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_4.geometry}
          material={materials["211,214,211"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_5.geometry}
          material={materials.MATERIAL_NOT_DEFINED}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_6.geometry}
          material={materials["170,178,196"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_7.geometry}
          material={materials["228,233,237"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_8.geometry}
          material={materials["0,0,0"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_9.geometry}
          material={materials["192,192,192"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_10.geometry}
          material={materials["202,209,238"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_11.geometry}
          material={materials["165,158,150"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_12.geometry}
          material={materials["26,26,26"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_13.geometry}
          material={materials["229,234,237"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_14.geometry}
          material={materials["75,75,75"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_15.geometry}
          material={materials["75,75,75_1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_16.geometry}
          material={materials["135,140,140"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_17.geometry}
          material={materials["165,132,0"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_18.geometry}
          material={materials["166,158,150"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_19.geometry}
          material={materials["203,210,239"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_20.geometry}
          material={materials["192,192,192_1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_21.geometry}
          material={materials["202,209,238_1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_22.geometry}
          material={materials["191,191,191"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_23.geometry}
          material={materials["236,241,239"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_24.geometry}
          material={materials["244,244,244"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_25.geometry}
          material={materials["245,245,245"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_26.geometry}
          material={materials["75,75,75_2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_27.geometry}
          material={materials["203,210,239_1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_28.geometry}
          material={materials["192,192,192_2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_29.geometry}
          material={materials["135,140,140_1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_30.geometry}
          material={materials["0,0,0_1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_31.geometry}
          material={materials.B0ACD209B49CEF3EA4A86383AB0D813A959A30B4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_32.geometry}
          material={materials["6D7BB711712E1FE49B38A8E26B62F6C3EC728DA1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_33.geometry}
          material={materials["1,62,241"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_34.geometry}
          material={materials["202,209,238_2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_35.geometry}
          material={materials["75,75,75_3"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_36.geometry}
          material={materials["25,25,25"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_37.geometry}
          material={materials["177,24,24"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_38.geometry}
          material={materials["9C29BE26B4178F69B15EFE69B94D0862C46259B2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_39.geometry}
          material={materials["43,43,43"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_40.geometry}
          material={materials["217,217,0"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_41.geometry}
          material={materials["217,0,0"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_42.geometry}
          material={materials["204,204,204"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_43.geometry}
          material={materials["255,255,255"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_44.geometry}
          material={materials["203,154,59"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_45.geometry}
          material={materials["221,124,15"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_46.geometry}
          material={materials["244,244,244_1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_47.geometry}
          material={materials["5,5,5"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_48.geometry}
          material={materials["64,64,64"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_49.geometry}
          material={materials["89,89,89"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_50.geometry}
          material={materials["192,192,192_3"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_51.geometry}
          material={materials["247,247,229"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_52.geometry}
          material={materials["190,188,186"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_53.geometry}
          material={materials["204,204,204_1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_54.geometry}
          material={materials["202,209,238_3"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_55.geometry}
          material={materials["69,69,69"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_56.geometry}
          material={materials["128,128,128"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chasisRover_57.geometry}
          material={materials["221,221,13"]}
        />
      </group>
    </group>
  );
}
useGLTF.preload(require('../assets/3d/rover2.glb'));