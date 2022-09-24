import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useSneaker } from "../hooks";
import { Sneaker } from "../types";

interface Props {
  sneaker: Sneaker;
  isSneakerActive: boolean;
  setIsSneakerActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sneaker: React.FC<Props> = ({
  sneaker,
  isSneakerActive,
  setIsSneakerActive,
}) => {
  const { sneakerId, sneakerTextColor, setLastActiveSneaker } = useSneaker();

  const sneakerRef = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(sneakerRef);

  const onEnter: React.MouseEventHandler<HTMLDivElement> = ({
    currentTarget,
  }) => {
    setLastActiveSneaker(sneaker);
    setIsSneakerActive(true);
    gsap.to(q(".sneaker-image"), { scale: 1.1 });
    gsap.fromTo(
      q(".sneaker-details"),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1 }
    );
  };

  const onLeave: React.MouseEventHandler<HTMLDivElement> = ({
    currentTarget,
  }) => {
    gsap.to(q(".sneaker-image"), { scale: 1 });
    setIsSneakerActive(false);
  };

  return (
    <Link href={`/sneaker/${sneaker.id}`}>
      <div
        ref={sneakerRef}
        className="space-y-4 cursor-pointer"
        style={{ color: sneakerTextColor }}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div
          className={`overflow-hidden ${
            isSneakerActive && sneakerId !== sneaker.id ? "grayscale" : null
          }`}
        >
          <img
            src={sneaker.photoURL}
            alt={sneaker.name}
            className="sneaker-image w-full"
          />
        </div>
        <div className="flex justify-between items-center">
          <h4 className="sneaker-details xl:text-xl">{sneaker.name}</h4>
          <h4 className="sneaker-details xl:text-xl">${sneaker.price}</h4>
        </div>
      </div>
    </Link>
  );
};

export default Sneaker;
