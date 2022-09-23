import React, { useEffect, useState } from "react";
import { sneakers } from "../sneakers";
import { Sneaker } from "../types";
import useWindow from "./useWindow";

const useScroll = (wrapper: React.RefObject<HTMLDivElement>) => {
  const { windowWidth, windowHeight } = useWindow();

  const [mappedSneaker, setMappedSneaker] = useState<Sneaker | null>(null);
  let scrollY = 0;

  const mapScrollYToId = () => {
    const section = wrapper.current;
    if (section === null || windowWidth >= 1024) return null;

    const sectionStart = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sneakerHeight = sectionHeight / sneakers.size;

    const sneakerId = Math.ceil(
      (-sectionStart + scrollY + windowHeight / 2) / sneakerHeight
    );

    return sneakerId;
  };

  useEffect(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;

      const sneakerId = mapScrollYToId();

      if (sneakerId) {
        const sneaker = sneakers.get(sneakerId.toString());
        sneaker && setMappedSneaker(sneaker);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowHeight]);

  return {
    mappedSneaker,
  };
};

export default useScroll;
