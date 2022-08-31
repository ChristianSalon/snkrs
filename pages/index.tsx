import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useAppState } from "../AppContext";
import { Sneaker, SphereBackground } from "../components";
import { useWindow } from "../hooks";
import { sneakers } from "../sneakers";
import gsap from "gsap";

const Home: NextPage = () => {
  const { lastActiveSneaker, setLastActiveSneaker, setIsSneakerActive } =
    useAppState();
  const { windowWidth, windowHeight, scrollY } = useWindow();

  const sneakersWrapper = useRef<HTMLDivElement>(null);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(wrapperRef);

  useEffect(() => {
    setIsSneakerActive(false);
  }, []);

  useEffect(() => {
    const section = sneakersWrapper.current;
    if (section === null || windowWidth >= 1024) return;

    const sectionStart = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const numberOfSneakers = sneakers.size;
    const sneakerHeight = sectionHeight / numberOfSneakers;
    const pageHeight = sectionHeight + sectionStart;

    //const sneakerId = Math.ceil((-sectionStart + scrollY) / sneakerHeight);
    const sneakerId = Math.ceil(
      (-sectionStart + scrollY + windowHeight / 2) / sneakerHeight
    );

    const sneaker = sneakers.get(sneakerId.toString());
    if (sneaker && sneaker !== lastActiveSneaker) {
      setLastActiveSneaker(sneaker);
    }

    console.log(
      sneakerId,
      scrollY + windowHeight,
      sectionHeight + sectionStart
    );
  }, [scrollY]);

  useEffect(() => {
    gsap.fromTo(
      q(".hero-title"),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
    );
    gsap.fromTo(
      q(".hero-description"),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power2.inOut" }
    );
    gsap.fromTo(
      sneakersWrapper.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.6, ease: "power2.inOut" }
    );
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="px-8 sm:px-16 lg:px-32 relative"
      style={{ color: lastActiveSneaker.textColor }}
    >
      <Head>
        <title>snkrs.</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <SphereBackground />

      <section className="flex flex-col justify-center gap-8 py-12 lg:py-32 lg:mb-8">
        <h1 className="hero-title text-6xl lg:text-[200px] font-['Archivo_black'] font-extrabold drop-shadow-xl">
          SNKRS.
        </h1>
        <p className="hero-description text-sm sm:text-base lg:text-xl lg:w-2/3 drop-shadow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum
          nemo aliquid totam neque dolorem sint. Quam nam hic velit commodi
          facilis dolorem dolorum veniam.
        </p>
      </section>

      <section
        ref={sneakersWrapper}
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16"
      >
        {[...sneakers.values()].map((sneaker) => (
          <Sneaker sneaker={sneaker} key={sneaker.id} />
        ))}
      </section>

      <footer className="pt-24 lg:pt-32 pb-12 text-sm lg:text-base">
        Made by Christian Saloň
      </footer>
    </div>
  );
};

export default Home;
