import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { Sneaker } from "./types";

interface ContextValues {
  lastActiveSneaker: Sneaker;
  setLastActiveSneaker: React.Dispatch<React.SetStateAction<Sneaker>>;
  isSneakerActive: boolean;
  setIsSneakerActive: React.Dispatch<React.SetStateAction<boolean>>;
  defaultSneaker: Sneaker;
}

interface ChildrenProps {
  children: ReactNode;
}

const defaultSneaker: Sneaker = {
  id: 1,
  name: "Lighting Blue",
  price: 120,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula suscipit condimentum. Ut non ligula lorem. Maecenas maximus felis id turpis fringilla congue. Mauris finibus, justo sed tempus ullamcorper, est lacus pharetra nulla, a suscipit nibh eros suscipit ligula. Aliquam pharetra consequat quam vel maximus. Aenean augue felis, auctor nec ultricies vitae, viverra id metus. Nunc vitae vulputate lectus. Curabitur eleifend auctor metus.",
  photoURL: "/sneakers/lighting-blue.png",
  bgColor: "#009dff",
  textColor: "white",
};

const AppContext = createContext<ContextValues>({
  lastActiveSneaker: defaultSneaker,
  setLastActiveSneaker: () => {},
  isSneakerActive: false,
  setIsSneakerActive: () => {},
  defaultSneaker,
});

const AppProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [lastActiveSneaker, setLastActiveSneaker] = useState<Sneaker>({
    id: 1,
    name: "Lighting Blue",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula suscipit condimentum. Ut non ligula lorem. Maecenas maximus felis id turpis fringilla congue. Mauris finibus, justo sed tempus ullamcorper, est lacus pharetra nulla, a suscipit nibh eros suscipit ligula. Aliquam pharetra consequat quam vel maximus. Aenean augue felis, auctor nec ultricies vitae, viverra id metus. Nunc vitae vulputate lectus. Curabitur eleifend auctor metus.",
    photoURL: "/sneakers/lighting-blue.png",
    bgColor: "#009dff",
    textColor: "white",
  });
  const [isSneakerActive, setIsSneakerActive] = useState(false);

  return (
    <AppContext.Provider
      value={{
        lastActiveSneaker,
        setLastActiveSneaker,
        isSneakerActive,
        setIsSneakerActive,
        defaultSneaker,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppContext);
};

export default AppProvider;
