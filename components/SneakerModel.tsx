import React, { Suspense } from "react";
import { AerialLight } from "./models/AerialLight";
import { BlackSpecial } from "./models/BlackSpecial";
import { CoolKidsFavourite } from "./models/CoolKidsFavourite";
import { DarkTrails } from "./models/DarkTrails";
import { ElectricLight } from "./models/ElectricLight";
import { GreenyWizzle } from "./models/GreenyWizzle";
import { LightingBlue } from "./models/LightingBlue";
import { SunnyShiny } from "./models/SunnyShiny";
import { TheBasic } from "./models/TheBasic";
import { WindyMountains } from "./models/WindyMountains";

interface Props {
  sneakerId: number;
}

const SneakerModel: React.FC<Props> = ({ sneakerId }) => {
  const returnModel = () => {
    switch (sneakerId) {
      case 1:
        return <LightingBlue />;
      case 2:
        return <TheBasic />;
      case 3:
        return <BlackSpecial />;
      case 4:
        return <AerialLight />;
      case 5:
        return <CoolKidsFavourite />;
      case 6:
        return <SunnyShiny />;
      case 7:
        return <GreenyWizzle />;
      case 8:
        return <ElectricLight />;
      case 9:
        return <WindyMountains />;
      case 10:
        return <DarkTrails />;
      default:
        return <AerialLight />;
    }
  };
  return <Suspense fallback={null}>{returnModel()}</Suspense>;
};

export default SneakerModel;
