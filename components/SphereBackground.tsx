import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import { useSneaker } from "../hooks";
import { Sphere } from ".";

interface Props {
  bgColor?: string;
}

const SphereBackground: React.FC<Props> = ({ bgColor }) => {
  const { sneakerId, sneakerBgColor, sneakerTextColor } = useSneaker();

  useEffect(() => {
    document.body.style.background = sneakerBgColor;
    document.body.style.transition =
      "background 300ms cubic-bezier(0.4, 0, 0.2, 1)";
  }, [sneakerId]);

  return (
    <div
      className="fixed -z-10 top-0 bottom-0 left-0 right-0 transition-colors duration-300"
      style={{
        background: bgColor ? bgColor : sneakerBgColor,
      }}
    >
      <Canvas>
        <OrthographicCamera makeDefault position={[0, 0, 100]} zoom={10} />

        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
        <Sphere color={sneakerTextColor} />
      </Canvas>
    </div>
  );
};

export default SphereBackground;
