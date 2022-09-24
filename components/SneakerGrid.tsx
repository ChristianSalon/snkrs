import React, { useEffect, useRef, useState } from "react";
import { Sneaker } from ".";
import { useWindow, useSneaker, useScroll } from "../hooks";
import { sneakers } from "../sneakers";

const SneakerGrid: React.FC = () => {
  const [isSneakerActive, setIsSneakerActive] = useState(false);

  const { setLastActiveSneaker } = useSneaker();

  const sneakersWrapper = useRef<HTMLDivElement>(null);
  const { mappedSneaker } = useScroll(sneakersWrapper);

  useEffect(() => {
    mappedSneaker && setLastActiveSneaker(mappedSneaker);
  }, [mappedSneaker]);

  return (
    <section
      ref={sneakersWrapper}
      className="sneaker-grid grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16"
    >
      {[...sneakers.values()].map((sneaker) => (
        <Sneaker
          sneaker={sneaker}
          isSneakerActive={isSneakerActive}
          setIsSneakerActive={setIsSneakerActive}
          key={sneaker.id}
        />
      ))}
    </section>
  );
};

export default SneakerGrid;
