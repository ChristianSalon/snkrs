import React, { createContext, useContext, ReactNode, useState } from "react";
import { sneakers } from "../sneakers";
import { Sneaker } from "../types";

interface ContextValues {
  sneakerId: number;
  setSneakerId: React.Dispatch<React.SetStateAction<number>>;
  sneakerName: string;
  setSneakerName: React.Dispatch<React.SetStateAction<string>>;
  sneakerPrice: number;
  setSneakerPrice: React.Dispatch<React.SetStateAction<number>>;
  sneakerDescription: string;
  setSneakerDescription: React.Dispatch<React.SetStateAction<string>>;
  sneakerPhotoURL: string;
  setSneakerPhotoURL: React.Dispatch<React.SetStateAction<string>>;
  sneakerBgColor: string;
  setSneakerBgColor: React.Dispatch<React.SetStateAction<string>>;
  sneakerTextColor: "black" | "white";
  setSneakerTextColor: React.Dispatch<React.SetStateAction<"black" | "white">>;
  setLastActiveSneaker: (sneaker: Sneaker) => void;
}

interface ChildrenProps {
  children: ReactNode;
}

const [firstSneaker] = sneakers.values();

const SneakerContext = createContext<ContextValues>({
  sneakerId: firstSneaker.id,
  setSneakerId: () => {},
  sneakerName: firstSneaker.name,
  setSneakerName: () => {},
  sneakerPrice: firstSneaker.price,
  setSneakerPrice: () => {},
  sneakerDescription: firstSneaker.description,
  setSneakerDescription: () => {},
  sneakerPhotoURL: firstSneaker.photoURL,
  setSneakerPhotoURL: () => {},
  sneakerBgColor: firstSneaker.bgColor,
  setSneakerBgColor: () => {},
  sneakerTextColor: firstSneaker.textColor,
  setSneakerTextColor: () => {},
  setLastActiveSneaker: () => {},
});

export const SneakerProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [sneakerId, setSneakerId] = useState(firstSneaker.id);
  const [sneakerName, setSneakerName] = useState(firstSneaker.name);
  const [sneakerPrice, setSneakerPrice] = useState(firstSneaker.price);
  const [sneakerDescription, setSneakerDescription] = useState(
    firstSneaker.description
  );
  const [sneakerPhotoURL, setSneakerPhotoURL] = useState(firstSneaker.photoURL);
  const [sneakerBgColor, setSneakerBgColor] = useState(firstSneaker.bgColor);
  const [sneakerTextColor, setSneakerTextColor] = useState(
    firstSneaker.textColor
  );

  const setLastActiveSneaker = (sneaker: Sneaker) => {
    setSneakerId(sneaker.id);
    setSneakerName(sneaker.name);
    setSneakerPrice(sneaker.price);
    setSneakerDescription(sneaker.description);
    setSneakerPhotoURL(sneaker.photoURL);
    setSneakerBgColor(sneaker.bgColor);
    setSneakerTextColor(sneaker.textColor);
  };

  return (
    <SneakerContext.Provider
      value={{
        sneakerId,
        setSneakerId,
        sneakerName,
        setSneakerName,
        sneakerPrice,
        setSneakerPrice,
        sneakerDescription,
        setSneakerDescription,
        sneakerPhotoURL,
        setSneakerPhotoURL,
        sneakerBgColor,
        setSneakerBgColor,
        sneakerTextColor,
        setSneakerTextColor,
        setLastActiveSneaker,
      }}
    >
      {children}
    </SneakerContext.Provider>
  );
};

export const useSneaker = () => {
  return useContext(SneakerContext);
};
