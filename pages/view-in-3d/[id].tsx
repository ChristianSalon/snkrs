import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Suspense } from "react";
import { SneakerModel, SphereBackground } from "../../components";
import { Sneaker } from "../../types";

interface Props {
  sneaker: Sneaker;
}

const ViewIn3D: NextPage<Props> = ({ sneaker }) => {
  return (
    <div className="w-screen h-screen bg-gray-300">
      <Head>
        <title>snkrs.</title>
      </Head>

      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="white" intensity={0.5} position={[0, 0, 10]} />
        <directionalLight
          color="white"
          intensity={0.5}
          position={[0, 0, -10]}
        />
        <directionalLight color="white" intensity={0.5} position={[10, 0, 0]} />
        <directionalLight
          color="white"
          intensity={0.5}
          position={[-10, 0, 0]}
        />
        <Suspense fallback="Loading...">
          <SneakerModel sneakerId={sneaker.id} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const res = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? process.env.DEV_URL
        : process.env.PROD_URL
    }/api/sneakers/${context.params?.id}`
  );
  const sneaker = await res.json();

  return { props: { sneaker } };
};

export default ViewIn3D;
