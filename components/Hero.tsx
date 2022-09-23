import React from "react";
import { useSneaker } from "../hooks";

const Hero: React.FC = () => {
  const { sneakerTextColor } = useSneaker();

  return (
    <section
      className="flex flex-col justify-center gap-8 py-12 lg:py-32 lg:mb-8"
      style={{ color: sneakerTextColor }}
    >
      <h1 className="hero-title text-6xl lg:text-[200px] font-['Archivo_black'] font-extrabold drop-shadow-xl">
        SNKRS.
      </h1>
      <p className="hero-description text-sm sm:text-base lg:text-xl lg:w-2/3 drop-shadow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum nemo
        aliquid totam neque dolorem sint. Quam nam hic velit commodi facilis
        dolorem dolorum veniam.
      </p>
    </section>
  );
};

export default Hero;
