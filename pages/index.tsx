import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";
import { Footer, Hero, SneakerGrid, SphereBackground } from "../components";
import gsap from "gsap";

const Home: NextPage = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(wrapperRef);

  useEffect(() => {
    gsap.fromTo(
      q(".hero-title"),
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      q(".hero-description"),
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power2.out" }
    );
    gsap.fromTo(
      q(".sneaker-grid"),
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.6, ease: "power2.out" }
    );
  }, []);

  return (
    <div ref={wrapperRef} className="px-8 sm:px-16 lg:px-32 relative">
      <Head>
        <title>snkrs.</title>
      </Head>

      <Hero />

      <SphereBackground />

      <SneakerGrid />

      <Footer />
    </div>
  );
};

export default Home;
