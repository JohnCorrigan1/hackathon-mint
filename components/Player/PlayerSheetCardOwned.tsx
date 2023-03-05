import Image from "next/image";
import { useState } from "react";
import { Player } from "../../models/Player";
import PlayerSheetStat from "./PlayerSheetStat";

const PlayerSheetCardOwned: React.FC<{
  title: string;
  items: string[];
  player: Player | null;
  image: string;
}> = (props) => {
  const [constitution, setConstitution] = useState(props.player?.constitution);
  const [intelligence, setIntelligence] = useState(props.player?.intelligence);
  const [strength, setStrength] = useState(props.player?.strength);
  const [dexterity, setDexterity] = useState(props.player?.dexterity);
  const [luck, setLuck] = useState(props.player?.luck);
  const [wisdom, setWisdom] = useState(props.player?.wisdom);
  const [charisma, setCharisma] = useState(props.player?.charisma);
  const [availablePoints, setAvailablePoints] = useState(
    props.player?.pointsToSpend
  );
//  const [className, setClassName] = useState(props.player?.playerClass.name);
    let image = ""

  if(props.player?.playerClass.name === "Wizard"){
    image = "/wizard.png"
  } else if(props.player?.playerClass.name === "Barbarian"){
    image = "/barbarian.png"
  } else if(props.player?.playerClass.name === "Rogue"){
    image = "/rogue.png"
  } else if(props.player?.playerClass.name === "Paladin"){
    image = "/paladin.png"
  } else if(props.player?.playerClass.name === "Monk"){
    image = "/monk.png"
  }

  return (
    <div className="flex flex-col w-full p-5">
      <Image
        src={image}
        alt={props.player?.playerClass.name}
        width={300}
        height={250}
        className="rounded-xl shadow-xl"
      />
      <div className="p-5 text-zinc-200 flex flex-col gap-5">
        <div className="border-2 border-black rounded-xl flex flex-col">
          <div className="flex justify-center border-b-2 border-black p-3 flex-col items-center">
            
            <h1 className="text-2xl">{props.player?.playerClass.name}</h1>
          </div>
     
          <PlayerSheetStat
            availablePoints={availablePoints}
            setAvailablePoints={setAvailablePoints}
            stat={constitution}
            setState={setConstitution}
            currentStat={props.player?.constitution}
            statName="Constitution"
          />
          <PlayerSheetStat
            availablePoints={availablePoints}
            setAvailablePoints={setAvailablePoints}
            stat={intelligence}
            setState={setIntelligence}
            currentStat={props.player?.intelligence}
            statName="Intelligence"
          />
          <PlayerSheetStat
            availablePoints={availablePoints}
            setAvailablePoints={setAvailablePoints}
            stat={strength}
            setState={setStrength}
            currentStat={props.player?.strength}
            statName="Strength"
          />
          <PlayerSheetStat
            availablePoints={availablePoints}
            setAvailablePoints={setAvailablePoints}
            stat={dexterity}
            setState={setDexterity}
            currentStat={props.player?.dexterity}
            statName="Dexterity"
          />
          <PlayerSheetStat
            availablePoints={availablePoints}
            setAvailablePoints={setAvailablePoints}
            stat={luck}
            setState={setLuck}
            currentStat={props.player?.luck}
            statName="Luck"
          />
          <PlayerSheetStat
            availablePoints={availablePoints}
            setAvailablePoints={setAvailablePoints}
            stat={wisdom}
            setState={setWisdom}
            currentStat={props.player?.wisdom}
            statName="Wisdom"
          />
          <PlayerSheetStat
            availablePoints={availablePoints}
            setAvailablePoints={setAvailablePoints}
            stat={charisma}
            setState={setCharisma}
            currentStat={props.player?.charisma}
            statName="Charisma"
          />
          <div className="p-3 flex justify-center items-center">
            <h2>Available points: {availablePoints}</h2>
          </div>
        </div>
        <button className="bg-blue-500 p-3 rounded-xl font-bold hover:scale-105 hover:bg-blue-600 active:scale-95 duration-200">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default PlayerSheetCardOwned;
