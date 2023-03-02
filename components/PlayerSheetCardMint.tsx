import Image from "next/image";
import { useState } from "react";
import MintModal from "./MintModal";

const PlayerSheetCard: React.FC<{
  title: string;
  image: string;
  defaultItems: string[];
  description: string;
  description2: string;
}> = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isSuccesful, setIsSuccesfull] = useState(false);
    const [info, setInfo] = useState(false)
    const mintHandler = () => {
        setIsOpen(true);
    }


    
  return (
    <>
    <MintModal isOpen={isOpen} isSuccesful={isSuccesful} setIsSuccesfull={setIsSuccesfull} setIsOpen={setIsOpen}/>
      <div className="flex flex-col bg-zinc-500 rounded-xl">
        <Image
          src={props.image}
          alt={props.title}
          width={150}
          height={375}
          className="rounded-t-xl"
        />
        <div className="p-5 text-zinc-200 flex flex-col gap-5 relative">
            <div className="relative top-0 left-0" onMouseEnter={() => setInfo(true)} onMouseLeave={() => setInfo(false)}>
            <Image src="/info.svg" height={30} width={30} alt="i"/>
            </div>
            {info && <div className="absolute -top-5 left-14 bg-zinc-800 rounded-xl p-5 z-[100]">
                <p>{props.description}</p>
                <p>{props.description2}</p>
            </div>}

        <h1 className="flex justify-center text-2xl font-bold">{props.title}</h1>
          <p>{props.description}</p>
          <p>{props.description2}</p>
          <button onClick={mintHandler} className="bg-zinc-200 text-zinc-500 rounded-xl p-2 active:scale-95 hover:scale-105 duration-200">
            Mint
          </button>
        </div>
      </div>
    </>
  );
};

export default PlayerSheetCard;
