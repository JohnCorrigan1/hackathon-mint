import Gear from "../models/gear";
import Image from "next/image";
import EquipModal from "./EquipModal";
import { useState } from "react";
const GearCard: React.FC<{ item: Gear }> = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSuccessfull, setIsSuccessfull] = useState(false)

    const equipHandler = () => {
        setIsOpen(true)
    }
  return (
    <>
    <EquipModal isOpen={isOpen} setIsOpen={setIsOpen} isSuccesfull={isSuccessfull} setIsSuccesfull={setIsSuccessfull} />
    <div className="flex flex-col bg-zinc-600 max-w-lg ">
      <Image src="/mage.jpeg" height={200} width={200} alt={props.item.name} />
      <div className="flex flex-col p-3 gap-3">
        {props.item.modifiers.map((mod, index) => {
          return <p key={index}>{mod.statToBuff}: {mod.buff}</p>
        })}
      <button onClick={equipHandler} className="bg-blue-500 p-2 rounded-lg font-bold hover:bg-blue-600 hover:scale-105 active:scale-95">Equip</button>
      </div>
    </div>
    </>
  );
};

export default GearCard;
