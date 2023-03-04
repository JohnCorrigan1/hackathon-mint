import { NextPage } from "next";
import Nav from "../components/Nav";
import PlayerSheetCardOwned from "../components/PlayerSheetCardOwned";
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
        <PlayerSheetCardOwned
          title={"title"}
          items={[]}
          stats={mageStats}
          image={"/wizard.png"}
        />
      </div>
    </div>
  );
};

export default assignStats;
