import React from "react";
import { useSneaker } from "../hooks";

const Footer: React.FC = () => {
  const { sneakerTextColor } = useSneaker();

  return (
    <footer
      className="pt-28 lg:pt-32 pb-12 text-sm lg:text-base"
      style={{ color: sneakerTextColor }}
    >
      Made by Christian Saloň
    </footer>
  );
};

export default Footer;
