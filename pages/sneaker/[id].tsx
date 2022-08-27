import gsap from "gsap";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useAppState } from "../../AppContext";
import { SphereBackground } from "../../components";
import { Sneaker } from "../../types";

interface Props {
  sneaker: Sneaker;
}

const SneakerDetails: NextPage<Props> = ({ sneaker }) => {
  const { setLastActiveSneaker } = useAppState();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(wrapperRef);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    setLastActiveSneaker(sneaker);
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(q(".view-in-3d"), { opacity: 0 }, { opacity: 1, duration: 2 });
    gsap.to(q(".divider-mask"), {
      right: "100%",
      duration: 1,
      ease: "easeIn",
    });
    gsap.fromTo(
      q(".sneaker-name"),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      q(".sneaker-price"),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.2, duration: 1 }
    );
    gsap.fromTo(
      q(".sneaker-description"),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.4, duration: 1 }
    );
    gsap.fromTo(
      q(".add-to-cart"),
      { opacity: 0 },
      { opacity: 1, delay: 0.6, duration: 1 }
    );
  }, []);

  const buttonsEnter: React.MouseEventHandler<HTMLDivElement> = ({
    currentTarget,
  }) => {
    gsap.to(currentTarget, { background: sneaker.textColor });
    gsap.to(currentTarget.firstChild, { color: sneaker.bgColor });
  };

  const buttonsLeave: React.MouseEventHandler<HTMLDivElement> = ({
    currentTarget,
  }) => {
    gsap.to(currentTarget, { background: sneaker.bgColor });
    gsap.to(currentTarget.firstChild, { color: sneaker.textColor });
  };

  return (
    <div
      className="lg:px-32 relative"
      style={{ color: sneaker.textColor }}
      ref={wrapperRef}
    >
      <Head>
        <title>snkrs.</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <SphereBackground />

      <section className="flex flex-col items-center">
        <img
          src={sneaker.photoURL}
          alt={sneaker.name}
          className="w-full max-w-[1024px]"
        />

        <div
          className="view-in-3d px-8 py-4 border-[1px] relative z-10 -top-6 cursor-pointer font-medium"
          style={{
            background: sneaker.bgColor,
            borderColor: sneaker.textColor,
          }}
          onMouseEnter={buttonsEnter}
          onMouseLeave={buttonsLeave}
        >
          {/*<div
            className="absolute top-0 bottom-0 left-0 right-0 z-20 opacity-0"
            style={{ background: sneaker.textColor }}
          />*/}
          <Link href="#" style={{ position: "relative", zIndex: 30 }}>
            View in 3D
          </Link>
        </div>
      </section>

      <section className="px-8 sm:px-16 lg:px-32 pb-12">
        <div className="flex justify-between items-center py-6">
          <h2
            className={`sneaker-name text-2xl sm:text-5xl font-['Archivo_black']`}
          >
            {sneaker.name}
          </h2>
          <h4 className="sneaker-price text-xl sm:text-2xl md:text-3xl">
            ${sneaker.price}
          </h4>
        </div>
        <div
          className="divider w-full h-[2px] mb-8 relative"
          style={{ background: sneaker.textColor }}
        >
          <div
            className="divider-mask absolute top-0 bottom-0 left-0 right-0"
            style={{ background: sneaker.bgColor }}
          ></div>
        </div>
        <div className="flex flex-col gap-16 xl:flex-row">
          <p className="sneaker-description sm:text-lg xl:w-2/3 leading-loose sm:leading-loose">
            {sneaker.description}
          </p>
          <div
            className="add-to-cart flex self-end justify-center items-center px-12 py-4 w-full xl:w-1/3 border-[1px] cursor-pointer font-medium"
            style={{
              background: sneaker.bgColor,
              borderColor: sneaker.textColor,
            }}
            onMouseEnter={buttonsEnter}
            onMouseLeave={buttonsLeave}
          >
            <Link href="#">Add to cart</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const res = await fetch(
    `http://localhost:3000/api/sneakers/${context.params?.id}`
  );
  const sneaker = await res.json();

  return { props: { sneaker } };
};

export default SneakerDetails;