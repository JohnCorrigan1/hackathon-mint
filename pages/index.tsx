import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/Nav";
import PlayerSheetConainer from "../components/Player/PlayerSheetContainer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Block Crawler</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
      </Head>
      <div className="h-[100vh] bg-[#2D2424]">
        <Nav />
        <div className="flex justify-center">
          <h1 className=" text-zinc-200 font-bold mt-10 text-2xl mb-5">
            Mint a player
          </h1>
        </div>
        <PlayerSheetConainer />
      </div>
    </>
  );
};

export default Home;
