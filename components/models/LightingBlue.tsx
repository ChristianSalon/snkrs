import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Back_Down: THREE.Mesh;
    Back_Little_Part: THREE.Mesh;
    Back_Mid: THREE.Mesh;
    Circle: THREE.Mesh;
    Down_With_Holes: THREE.Mesh;
    Front_part_: THREE.Mesh;
    Main_sole: THREE.Mesh;
    Middle_With_Holes: THREE.Mesh;
    Nike_Logo: THREE.Mesh;
    Tubes: THREE.Mesh;
    Under_Sole_Plate: THREE.Mesh;
    Back_Top_: THREE.Mesh;
    Inserts: THREE.Mesh;
    Label_Front: THREE.Mesh;
    Logo: THREE.Mesh;
    Nike_: THREE.Mesh;
    Shoelace: THREE.Mesh;
    Top_Round_: THREE.Mesh;
    Central_: THREE.Mesh;
    Front_With_Holes: THREE.Mesh;
    Label_Back: THREE.Mesh;
    Seams: THREE.Mesh;
    Tongue: THREE.Mesh;
    Under_feet: THREE.Mesh;
  };
  materials: {
    Blue: THREE.MeshStandardMaterial;
    Black: THREE.MeshStandardMaterial;
    ["Main "]: THREE.MeshStandardMaterial;
  };
};

export default function LightingBlue(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/lighting-blue.gltf"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Down.geometry}
        material={materials.Blue}
        position={[1.71, 0.78, -0.1]}
        rotation={[-Math.PI, 0.05, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Little_Part.geometry}
        material={materials.Blue}
        position={[2.04, 1.45, -0.13]}
        rotation={[1.55, 0.06, 1.62]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Mid.geometry}
        material={materials.Blue}
        position={[1.28, 1.77, -0.05]}
        rotation={[Math.PI, -1.52, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials.Blue}
        position={[-0.92, -0.01, -0.33]}
        rotation={[Math.PI / 2, 0, -2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Down_With_Holes.geometry}
        material={materials.Blue}
        position={[-0.48, 0.85, 0.07]}
        rotation={[Math.PI / 2, 0, -3.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_part_.geometry}
        material={materials.Blue}
        position={[-1.23, 0.54, -0.06]}
        rotation={[Math.PI / 2, 0, -3.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Main_sole.geometry}
        material={materials.Blue}
        position={[0, 0.01, -0.07]}
        rotation={[Math.PI / 2, 0, -2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Middle_With_Holes.geometry}
        material={materials.Blue}
        position={[0.37, 1.63, 0]}
        rotation={[1.54, 0.59, -3.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nike_Logo.geometry}
        material={materials.Blue}
        position={[0.22, -0.01, 0.08]}
        rotation={[Math.PI / 2, 0, -2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tubes.geometry}
        material={materials.Blue}
        position={[-0.97, 0.02, -0.1]}
        rotation={[Math.PI / 2, 0, -2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Under_Sole_Plate.geometry}
        material={materials.Blue}
        position={[0.08, 0.05, -0.03]}
        rotation={[Math.PI / 2, 0, -2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Top_.geometry}
        material={materials.Black}
        position={[1.45, 2.1, -0.07]}
        rotation={[Math.PI, -0.22, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Inserts.geometry}
        material={materials.Black}
        position={[1, 1.48, -0.05]}
        rotation={[Math.PI, -0.3, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Label_Front.geometry}
        material={materials.Black}
        position={[0.65, 2.51, 0.03]}
        rotation={[1.66, -0.91, 1.68]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo.geometry}
        material={materials.Black}
        position={[1.23, 1.75, 0.59]}
        rotation={[0.11, 0.16, -0.35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nike_.geometry}
        material={materials.Black}
        position={[1.17, 1.09, -0.07]}
        rotation={[Math.PI / 2, 0, -3.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shoelace.geometry}
        material={materials.Black}
        position={[-0.02, 1.45, 0]}
        rotation={[0, 1.53, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Round_.geometry}
        material={materials.Black}
        position={[1.33, 2.27, -0.06]}
        rotation={[Math.PI, -0.22, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Central_.geometry}
        material={materials["Main "]}
        position={[0.85, 1.01, 0.02]}
        rotation={[Math.PI, -0.3, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_With_Holes.geometry}
        material={materials["Main "]}
        position={[-1.25, 0.77, -0.05]}
        rotation={[Math.PI, -1.52, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Label_Back.geometry}
        material={materials["Main "]}
        position={[0.7, 2.27, -0.02]}
        rotation={[1.65, -1.02, 1.66]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Seams.geometry}
        material={materials["Main "]}
        position={[0.01, 0.34, -0.05]}
        rotation={[-1.57, -0.02, -1.62]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tongue.geometry}
        material={materials["Main "]}
        position={[0.4, 1.68, 0.04]}
        rotation={[1.65, -1.02, 1.66]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Under_feet.geometry}
        material={materials["Main "]}
        position={[0.16, 0.31, -0.08]}
        rotation={[Math.PI, -1.52, Math.PI]}
      />
    </group>
  );
}

useGLTF.preload("/models/lighting-blue.gltf");
