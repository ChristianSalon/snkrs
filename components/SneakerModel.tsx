import dynamic from "next/dynamic";
import React, { Suspense } from "react";

interface Props {
  sneakerId: number;
}

const DynamicAerialLight = dynamic(
  () => import("./models/AerialLight") as any,
  {
    suspense: true,
  }
);
const DynamicBlackSpecial = dynamic(
  () => import("./models/BlackSpecial") as any,
  {
    suspense: true,
  }
);
const DynamicCoolKidsFavourite = dynamic(
  () => import("./models/CoolKidsFavourite") as any,
  {
    suspense: true,
  }
);
const DynamicDarkTrails = dynamic(() => import("./models/DarkTrails") as any, {
  suspense: true,
});
const DynamicElectricLight = dynamic(
  () => import("./models/ElectricLight") as any,
  {
    suspense: true,
  }
);
const DynamicGreenyWizzle = dynamic(
  () => import("./models/GreenyWizzle") as any,
  {
    suspense: true,
  }
);
const DynamicLightingBlue = dynamic(
  () => import("./models/LightingBlue") as any,
  {
    suspense: true,
  }
);
const DynamicSunnyShiny = dynamic(() => import("./models/SunnyShiny") as any, {
  suspense: true,
});
const DynamicTheBasic = dynamic(() => import("./models/TheBasic") as any, {
  suspense: true,
});
const DynamicWindyMountains = dynamic(
  () => import("./models/WindyMountains") as any,
  {
    suspense: true,
  }
);

const SneakerModel: React.FC<Props> = ({ sneakerId }) => {
  const returnModel = () => {
    switch (sneakerId) {
      case 1:
        return <DynamicLightingBlue />;
      case 2:
        return <DynamicTheBasic />;
      case 3:
        return <DynamicBlackSpecial />;
      case 4:
        return <DynamicAerialLight />;
      case 5:
        return <DynamicCoolKidsFavourite />;
      case 6:
        return <DynamicSunnyShiny />;
      case 7:
        return <DynamicGreenyWizzle />;
      case 8:
        return <DynamicElectricLight />;
      case 9:
        return <DynamicWindyMountains />;
      case 10:
        return <DynamicDarkTrails />;
      default:
        return <DynamicAerialLight />;
    }
  };
  return <Suspense fallback={null}>{returnModel()}</Suspense>;
};

export default SneakerModel;
