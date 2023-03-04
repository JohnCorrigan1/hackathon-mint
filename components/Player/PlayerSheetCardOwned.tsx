import Stats from "../../models/stats";
import Image from "next/image";
import { useState } from "react";

const PlayerSheetCardOwned: React.FC<{
  title: string;
  items: string[];
  stats: Stats;
  image: string;
}> = (props) => {
  const [hp, setHp] = useState(props.stats.hp);
  const [intelligence, setIntelligence] = useState(props.stats.intelligence);
  const [strength, setStrength] = useState(props.stats.strength);
  const [agility, setAgility] = useState(props.stats.agility);
  const [luck, setLuck] = useState(props.stats.luck);
  const [defense, setDefense] = useState(props.stats.defense);
  const [availablePoints, setAvailablePoints] = useState(
    props.stats.availablePoints
  );

  const [name, setName] = useState("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleHpIncrease = () => {
    if (availablePoints > 0) {
      setHp(hp + 1);
      setAvailablePoints(availablePoints - 1);
    }
  };

  const handleHpDecrease = () => {
    if (hp > 1 && hp > props.stats.hp) {
      setHp(hp - 1);
      setAvailablePoints(availablePoints + 1);
    }
  };

  const handleIntelligenceIncrease = () => {
    if (availablePoints > 0) {
      setIntelligence(intelligence + 1);
      setAvailablePoints(availablePoints - 1);
    }
  };

  const handleIntelligenceDecrease = () => {
    if (intelligence > 1 && intelligence > props.stats.intelligence) {
      setIntelligence(intelligence - 1);
      setAvailablePoints(availablePoints + 1);
    }
  };

  const handleStrengthIncrease = () => {
    if (availablePoints > 0) {
      setStrength(strength + 1);
      setAvailablePoints(availablePoints - 1);
    }
  };

  const handleStrengthDecrease = () => {
    if (strength > 1 && strength > props.stats.strength) {
      setStrength(strength - 1);
      setAvailablePoints(availablePoints + 1);
    }
  };

  const handleAgilityIncrease = () => {
    if (availablePoints > 0) {
      setAgility(agility + 1);
      setAvailablePoints(availablePoints - 1);
    }
  };

  const handleAgilityDecrease = () => {
    if (agility > 1 && agility > props.stats.agility) {
      setAgility(agility - 1);
      setAvailablePoints(availablePoints + 1);
    }
  };

  const handleLuckIncrease = () => {
    if (availablePoints > 0) {
      setLuck(luck + 1);
      setAvailablePoints(availablePoints - 1);
    }
  };

  const handleLuckDecrease = () => {
    if (luck > 1 && luck > props.stats.luck) {
      setLuck(luck - 1);
      setAvailablePoints(availablePoints + 1);
    }
  };

  const handleDefenseIncrease = () => {
    if (availablePoints > 0) {
      setDefense(defense + 1);
      setAvailablePoints(availablePoints - 1);
    }
  };

  const handleDefenseDecrease = () => {
    if (defense > 1 && defense > props.stats.defense) {
      setDefense(defense - 1);
      setAvailablePoints(availablePoints + 1);
    }
  };

  return (
    <div className="flex flex-col  w-1/2 border-r-2 border-black p-5">
      <Image
        src={props.image}
        alt={props.title}
        width={300}
        height={250}
        className="rounded-xl shadow-xl"
      />
      <div className="p-5 text-zinc-200 flex flex-col gap-5">
        {/* <p>{props.description}</p> */}
        <div className="border-2 border-black rounded-xl flex flex-col">
          <div className="flex justify-center border-b-2 border-black p-3 flex-col items-center">
            <label className="" htmlFor="name">
              Name
            </label>
            <input type="text" name="name" onChange={handleName} value={name} />
          </div>
          <div className="flex justify-center border-b-2 border-black p-3">
            <h2>Level: {props.stats.level}</h2>
          </div>
          <div className="flex justify-between p-1 border-b-2 border-black items-center">
            <p>Hp: {hp}</p>
            <div className="flex items-center gap-5 ">
              <button onClick={handleHpIncrease}>
                <Image
                  src="/add.svg"
                  alt="add"
                  width={30}
                  height={30}
                  className="hover:bg-zinc-300 p-2 rounded-xl hover:scale-105 active:scale-95 duration-100"
                />
              </button>
              {/* <button className="text-3xl font-bold hover:scale-105 active:scale-95">
                +
              </button> */}
              <button onClick={handleHpDecrease}>
                <Image
                  src="/minus.svg"
                  alt="minus"
                  width={30}
                  height={30}
                  className="hover:bg-zinc-300 p-1 rounded-xl hover:scale-105 active:scale-95 duration-100"
                  onClick={handleHpDecrease}
                />
              </button>
              {/* <button className="text-3xl font-bold">-</button> */}
            </div>
          </div>
          <div className="flex justify-between p-1 border-b-2 border-black items-center">
            <p>Strength: {strength}</p>
            <div className="flex items-center gap-5 cursor-pointer ">
              <button onClick={handleStrengthIncrease}>
                <Image
                  src="/add.svg"
                  alt="add"
                  width={30}
                  height={30}
                  className="hover:bg-zinc-300 p-2 rounded-xl hover:scale-105 active:scale-95 duration-100"
                />
              </button>
              <button onClick={handleStrengthDecrease}>
                <Image
                  src="/minus.svg"
                  alt="minus"
                  width={30}
                  height={30}
                  className="hover:bg-zinc-300 p-2 rounded-xl hover:scale-105 active:scale-95 duration-100"
                />
              </button>
            </div>
          </div>
          <div className="flex justify-between p-1 border-b-2 border-black items-center">
            <p>Intelligence: {intelligence}</p>
            <div className="flex items-center gap-5 cursor-pointer ">
              <button onClick={handleIntelligenceIncrease}>
                <Image
                  src="/add.svg"
                  alt="add"
                  width={30}
                  height={30}
                  className="hover:bg-zinc-300 p-2 rounded-xl hover:scale-105 active:scale-95 duration-100"
                />
              </button>
              <button onClick={handleIntelligenceDecrease}>
                <Image
                  src="/minus.svg"
                  alt="minus"
                  width={30}
                  height={30}
                  className="hover:bg-zinc-300 p-2 rounded-xl hover:scale-105 active:scale-95 duration-100"
                />
              </button>
            </div>
          </div>
          <div className="flex justify-between p-1 border-b-2 border-black items-center">
            <p>Defense: {defense}</p>
            <div className="flex items-center gap-5 cursor-pointer ">
              <button onClick={handleDefenseIncrease}>
                <Image
                  src="/add.svg"
                  alt="add"
                  width={30}
                  height={30}
                  className="hover:bg-zinc-300 p-2 rounded-xl hover:scale-105 active:scale-95 duration-100"
                />
              </button>
              <button onClick={handleDefenseDecrease}>
                <Image
                  src="/minus.svg"
                  alt="minus"
                  width={30}
                  height={30}
                  className="hover:bg-zinc-300 p-2 rounded-xl hover:scale-105 active:scale-95 duration-100"
                />
              </button>
            </div>
          </div>
          <div className="flex justify-between p-1 border-b-2 border-black items-center">
            <p>Agility: {agility}</p>
            <div className="flex items-center gap-5 cursor-pointer ">
              <button onClick={handleAgilityIncrease}>
                <Image
                  src="/add.svg"
                  alt="add"
                  width={30}
                  height={30}
                  className="hover:bg-zinc-300 p-2 rounded-xl hover:scale-105 active:scale-95 duration-100"
                />
              </button>
              <button onClick={handleAgilityDecrease}>
                <Image
                  src="/minus.svg"
                  alt="minus"
                  width={30}
                  height={30}
                  className="hover:bg-zinc-300 p-2 rounded-xl hover:scale-105 active:scale-95 duration-100"
                />
              </button>
            </div>
          </div>
          <div className="flex justify-between p-1 border-b-2 border-black items-center">
            <p>Luck: {luck}</p>
            <div className="flex items-center gap-5 cursor-pointer ">
              <button onClick={handleLuckIncrease}>
                <Image
                  src="/add.svg"
                  alt="add"
                  width={30}
                  height={30}
                  className="hover:bg-zinc-300 p-2 rounded-xl hover:scale-105 active:scale-95 duration-100"
                />
              </button>
              <button onClick={handleLuckDecrease}>
                <Image
                  src="/minus.svg"
                  alt="minus"
                  width={30}
                  height={30}
                  className="hover:bg-zinc-300 p-2 rounded-xl hover:scale-105 active:scale-95 duration-100"
                />
              </button>
            </div>
          </div>
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
