import Gear from "../models/gear";
import Image from "next/image";
import EquipModal from "./EquipModal";
import { useState } from "react";
const GearCard: React.FC<{ item: Gear, image: string }> = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSuccessfull, setIsSuccessfull] = useState(false)

    const equipHandler = () => {
        setIsOpen(true)
    }
  return (
    <>
    <EquipModal isOpen={isOpen} setIsOpen={setIsOpen} isSuccesfull={isSuccessfull} setIsSuccesfull={setIsSuccessfull} />
    <div className="flex flex-col bg-[#D5CEA3] bg-opacity-40 rounded-lg max-w-lg text-zinc-200 ">
      <Image src={props.image} height={200} width={200} alt={props.item.name} className="rounded-t-lg" />
      <div className="flex flex-col p-3 gap-3">
        <h1 className="text-xl font-bold">Rarity: {props.item.rarity}</h1>
        {props.item.modifiers.map((mod, index) => {
          return <p key={index}>{mod.statToBuff}: {mod.buff}</p>
        })}
      <button onClick={equipHandler} className="bg-[#E5E5CB] text-[#3C2A21] font-bold rounded-xl p-2 active:scale-95 hover:scale-105 duration-200">Equip</button>
      </div>
    </div>
    </>
  );
};

export default GearCard;
