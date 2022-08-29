import React, { Suspense, useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Mesh } from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useSphere } from "@react-three/cannon";

const Sphere: React.FC = () => {
  const sphereRef = useRef<Mesh>(null);
  /*const [sphereRef, api] = useSphere(() => ({
    mass: 1,
    position: [
      Math.random() * 200 - 100,
      Math.random() * 100 - 50,
      Math.random() * 100 - 50,
    ],
  }));*/

  const colorMap = useLoader(TextureLoader, "/spheres/lighting-blue.png");

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

  /*useFrame(({ clock }) => {
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
      sphereRef.current.position.z +
        (Math.random() * 2 - 1) / 1000 +
        sphereMovementSpeed
    );
  });*/

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <mesh ref={sphereRef}>
        <sphereGeometry args={[Math.max(5, Math.random() * 20), 32, 32]} />
        <meshBasicMaterial map={colorMap} />
      </mesh>
    </Suspense>
  );
};

export default Sphere;
