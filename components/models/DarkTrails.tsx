import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Back_Down008: THREE.Mesh;
    Back_Little_Part008: THREE.Mesh;
    Back_Mid008: THREE.Mesh;
    Nike_Back008: THREE.Mesh;
    Back_Top_008: THREE.Mesh;
    Down_With_Holes008: THREE.Mesh;
    Front_part_008: THREE.Mesh;
    Inserts008: THREE.Mesh;
    Label_Back008: THREE.Mesh;
    Logo008: THREE.Mesh;
    Middle_With_Holes008: THREE.Mesh;
    Nike_008: THREE.Mesh;
    Shoelace008: THREE.Mesh;
    Tongue008: THREE.Mesh;
    Top_Round_008: THREE.Mesh;
    Central_Back_008: THREE.Mesh;
    Central_008: THREE.Mesh;
    Seams008: THREE.Mesh;
    Under_feet008: THREE.Mesh;
    Circle008: THREE.Mesh;
    Front_With_Holes008: THREE.Mesh;
    Label_Front008: THREE.Mesh;
    Main_sole008: THREE.Mesh;
    Nike_Logo008: THREE.Mesh;
    Tubes008: THREE.Mesh;
    Under_Sole_Plate008: THREE.Mesh;
  };
  materials: {
    ["Light Red"]: THREE.MeshStandardMaterial;
    Black: THREE.MeshStandardMaterial;
    ["Main "]: THREE.MeshStandardMaterial;
    ["Dark Blue"]: THREE.MeshStandardMaterial;
  };
};

export default  function DarkTrails(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/dark-trails.gltf"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Down008.geometry}
        material={materials["Light Red"]}
        position={[1.71, 0.78, -0.1]}
        rotation={[-Math.PI, 0.05, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Little_Part008.geometry}
        material={materials["Light Red"]}
        position={[2.04, 1.45, -0.13]}
        rotation={[1.55, 0.06, 1.62]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Mid008.geometry}
        material={materials["Light Red"]}
        position={[1.28, 1.77, -0.05]}
        rotation={[Math.PI, -1.52, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nike_Back008.geometry}
        material={materials["Light Red"]}
        position={[1.17, 1.09, -0.07]}
        rotation={[Math.PI / 2, 0, -3.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Top_008.geometry}
        material={materials.Black}
        position={[1.45, 2.1, -0.07]}
        rotation={[Math.PI, -0.22, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Down_With_Holes008.geometry}
        material={materials.Black}
        position={[-0.48, 0.85, 0.07]}
        rotation={[Math.PI / 2, 0, -3.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_part_008.geometry}
        material={materials.Black}
        position={[-1.23, 0.54, -0.06]}
        rotation={[Math.PI / 2, 0, -3.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Inserts008.geometry}
        material={materials.Black}
        position={[1, 1.48, -0.05]}
        rotation={[Math.PI, -0.3, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Label_Back008.geometry}
        material={materials.Black}
        position={[0.7, 2.27, -0.02]}
        rotation={[1.65, -1.02, 1.66]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo008.geometry}
        material={materials.Black}
        position={[1.23, 1.75, 0.59]}
        rotation={[0.11, 0.16, -0.35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Middle_With_Holes008.geometry}
        material={materials.Black}
        position={[0.37, 1.63, 0]}
        rotation={[1.54, 0.59, -3.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nike_008.geometry}
        material={materials.Black}
        position={[1.17, 1.09, -0.07]}
        rotation={[Math.PI / 2, 0, -3.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shoelace008.geometry}
        material={materials.Black}
        position={[-0.02, 1.45, 0]}
        rotation={[0, 1.53, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tongue008.geometry}
        material={materials.Black}
        position={[0.4, 1.68, 0.04]}
        rotation={[1.65, -1.02, 1.66]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Round_008.geometry}
        material={materials.Black}
        position={[1.33, 2.27, -0.06]}
        rotation={[Math.PI, -0.22, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Central_Back_008.geometry}
        material={materials.Black}
        position={[0.85, 1.01, 0.02]}
        rotation={[Math.PI, -0.3, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Central_008.geometry}
        material={materials["Main "]}
        position={[0.85, 1.01, 0.02]}
        rotation={[Math.PI, -0.3, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Seams008.geometry}
        material={materials["Main "]}
        position={[0.01, 0.34, -0.05]}
        rotation={[-1.57, -0.02, -1.62]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Under_feet008.geometry}
        material={materials["Main "]}
        position={[0.16, 0.31, -0.08]}
        rotation={[Math.PI, -1.52, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle008.geometry}
        material={materials["Dark Blue"]}
        position={[-0.92, -0.01, -0.33]}
        rotation={[Math.PI / 2, 0, -2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_With_Holes008.geometry}
        material={materials["Dark Blue"]}
        position={[-1.25, 0.77, -0.05]}
        rotation={[Math.PI, -1.52, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Label_Front008.geometry}
        material={materials["Dark Blue"]}
        position={[0.65, 2.51, 0.03]}
        rotation={[1.66, -0.91, 1.68]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Main_sole008.geometry}
        material={materials["Dark Blue"]}
        position={[0, 0.01, -0.07]}
        rotation={[Math.PI / 2, 0, -2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nike_Logo008.geometry}
        material={materials["Dark Blue"]}
        position={[0.22, -0.01, 0.08]}
        rotation={[Math.PI / 2, 0, -2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tubes008.geometry}
        material={materials["Dark Blue"]}
        position={[-0.97, 0.02, -0.1]}
        rotation={[Math.PI / 2, 0, -2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Under_Sole_Plate008.geometry}
        material={materials["Dark Blue"]}
        position={[0.08, 0.05, -0.03]}
        rotation={[Math.PI / 2, 0, -2]}
      />
    </group>
  );
}

useGLTF.preload("/models/dark-trails.gltf");
