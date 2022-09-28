import React, { Suspense, useRef, useState, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Mesh } from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useSneaker } from "../hooks";

interface Props {
  sneakerName: string;
}

const Sphere: React.FC<Props> = ({ sneakerName }) => {
  const sphereRef = useRef<Mesh>(null);

  const sphereTexture =
    sneakerName.toLowerCase().replaceAll(" ", "-") + "-sphere.png";

  const colorMap = useLoader(TextureLoader, `/spheres/${sphereTexture}`);

  const sphereMovementSpeed = (Math.random() * 2 - 1) / 50;
  const sphereRotationSpeed = (Math.random() * 2 - 1) / 50;

  /*useFrame(({ clock }) => {
    api.velocity.set(1, 0, 0);
  });*/

  /*useFrame((state, delta) => {
    if (!sphereRef.current) return;

    sphereRef.current.rotation.x += 0.005;
    sphereRef.current.rotation.y += 0.005;
    sphereRef.current.rotation.z += 0.005;

    sphereRef.current.position.x += 0.005;
    sphereRef.current.position.y += 0.005;
    sphereRef.current.position.z += 0.005;
  });*/

  useFrame(({ clock }) => {
    if (!sphereRef.current) return;

    sphereRef.current.rotation.x += sphereRotationSpeed;
    sphereRef.current.rotation.y += sphereRotationSpeed;
    sphereRef.current.rotation.z += sphereRotationSpeed;

    sphereRef.current.position.set(
      sphereRef.current.position.x +
        (Math.random() * 2 - 1) / 1000 +
        sphereMovementSpeed,
      sphereRef.current.position.y +
        (Math.random() * 2 - 1) / 1000 +
        sphereMovementSpeed,
      sphereRef.current.position.z
    );
  });

  return (
    <Suspense fallback={null}>
      <mesh
        ref={sphereRef}
        position={[
          Math.round((Math.random() * 2 - 1) * 100),
          Math.round((Math.random() * 2 - 1) * 100),
          Math.round(Math.random() * 50),
        ]}
      >
        <sphereGeometry args={[Math.round(Math.random() * 25), 32, 32]} />
        <meshBasicMaterial map={colorMap} />
      </mesh>
    </Suspense>
  );
};

export default Sphere;
