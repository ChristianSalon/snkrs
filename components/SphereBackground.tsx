import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import { Sphere, Border } from ".";
import { Physics } from "@react-three/cannon";
import { useAppState } from "../AppContext";

const SphereBackground: React.FC = () => {
  const { lastActiveSneaker } = useAppState();

  return (
    <div
      className="fixed -z-10 top-0 bottom-0 left-0 right-0 transition-colors duration-300"
      style={{ background: lastActiveSneaker.bgColor }}
    >
      {/*<Canvas>
        <OrthographicCamera makeDefault position={[0, 0, 100]} zoom={10} />

        <Physics gravity={[0, 0, 0]}>
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
        </Physics>
    </Canvas>*/}
    </div>
  );
};

export default SphereBackground;
