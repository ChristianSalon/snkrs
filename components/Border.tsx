import React from "react";

const Border: React.FC = () => {
  return (
    <mesh>
      <planeGeometry args={[30, 30]} />
      <meshBasicMaterial color="hotpink" />
    </mesh>
  );
};

export default Border;
