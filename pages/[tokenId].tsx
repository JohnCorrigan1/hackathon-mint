import { NextPage } from "next";
import Nav from "../components/Nav";
import PlayerSheetCardOwned from "../components/Player/PlayerSheetCardOwned";
import PlayerSheetItems from "../components/PlayerSheetItems";
import Stats from "../models/stats";

const assignStats: NextPage = () => {
  const mageStats: Stats = {
    level: 1,
    hp: 8,
    intelligence: 8,
    strength: 8,
    agility: 8,
    luck: 8,
    defense: 8,
    availablePoints: 8,
  };

  return (
    <div className="h-[100vh] w-[100vw] bg-[#2D2424]">
      <Nav />
      <div className="flex justify-center">
      <div className="flex w-1/2 rounded-xl bg-[#D5CEA3] bg-opacity-30">
        <PlayerSheetCardOwned
          title={"title"}
          items={[]}
          stats={mageStats}
          image={"/wizard.png"}
        />
        <PlayerSheetItems />

        </div>
      </div>
    </div>
  );
};

export default assignStats;
