import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useAppState } from "../AppContext";
import { Sneaker, SphereBackground } from "../components";
import { sneakers } from "../sneakers";

const Home: NextPage = () => {
  const { lastActiveSneaker, setIsSneakerActive } = useAppState();

  useEffect(() => {
    setIsSneakerActive(false);
  }, []);

  return (
    <div
      className="px-8 sm:px-16 lg:px-32 relative"
      style={{ color: lastActiveSneaker.textColor }}
    >
      <Head>
        <title>snkrs.</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <SphereBackground />

      <div className="flex flex-col justify-center gap-8 py-12 lg:py-32 lg:mb-8">
        <h1 className="text-6xl lg:text-[200px] font-['Archivo_black'] font-extrabold drop-shadow-xl">
          SNKRS.
        </h1>
        <p className="text-sm sm:text-base lg:text-xl lg:w-2/3 drop-shadow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum
          nemo aliquid totam neque dolorem sint. Quam nam hic velit commodi
          facilis dolorem dolorum veniam.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
        {[...sneakers.values()].map((sneaker) => (
          <Sneaker sneaker={sneaker} key={sneaker.id} />
        ))}
      </div>

      <footer className="pt-24 lg:pt-32 pb-12 text-sm lg:text-base">
        Made by Christian Saloň
      </footer>
    </div>
  );
};

export default Home;
