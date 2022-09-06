import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import { Sphere } from ".";
import { Physics } from "@react-three/cannon";
import { useAppState } from "../AppContext";
import { useWindow } from "../hooks";

const SphereBackground: React.FC = () => {
  const { lastActiveSneaker } = useAppState();
  const { windowOuterHeight } = useWindow();

  useEffect(() => {
    document.body.style.background = lastActiveSneaker.bgColor;
    document.body.style.transition =
      "background 300ms cubic-bezier(0.4, 0, 0.2, 1)";
  }, [lastActiveSneaker]);

  return (
    <div
      className="fixed -z-10 top-0 left-0 right-0 transition-colors duration-300"
      style={{
        height: windowOuterHeight,
        background: lastActiveSneaker.bgColor,
      }}
    >
      <Canvas>
        <OrthographicCamera makeDefault position={[0, 0, 100]} zoom={10} />

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
      </Canvas>
    </div>
  );
};

export default SphereBackground;
