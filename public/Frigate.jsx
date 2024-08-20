/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 Frigate.gltf 
Author: TM05 (https://sketchfab.com/TM05)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/halo-frigate-0feb0f80df5346b5810f16ee813a6094
Title: Halo Frigate
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Frigate(props) {
  const { nodes, materials } = useGLTF("/Frigate.gltf");
  return (
    <group {...props} dispose={null}>
      <group scale={0.112}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.ship} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.ship} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.light} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.ship} />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials["checker.003"]}
        />
      </group>
      <group scale={1.011}>
        <mesh geometry={nodes.Object_10.geometry} material={materials.ship} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.ship} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.light} />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials["checker.002"]}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials["checker.003"]}
        />
      </group>
      <group scale={0.112}>
        <mesh geometry={nodes.Object_16.geometry} material={materials.ship} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.ship} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.light} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.ship} />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials["checker.003"]}
        />
      </group>
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials.ship}
        position={[2.087, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_24.geometry}
        material={materials.material_0}
        position={[-1.138, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_26.geometry}
        material={materials.material_0}
        position={[2.087, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/Frigate.gltf");
