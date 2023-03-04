import Image from "next/image"
import { useState } from "react"
import { Player } from "../../models/Player";

const PlayerSheetItems: React.FC <{player: Player }> = (props) => {

  console.log(props.player.legs)
    const [head, setHead] = useState<{}>(true);
    const [body, setBody] = useState<{}>(false);
    const [legs, setLegs] = useState<{}>(true);
    const [feet, setFeet] = useState<{}>(false);

    return (
    <div className=" w-1/2 flex flex-col justify-between items-center p-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1>Epic Gamer hat</h1>
          {head ? (
            <>
              <Image src="/mage.jpeg" height={100} width={100} alt="slot" />
              <button className="p-2 bg-rose-600 font-bold rounded-lg text-zinc-200 hover:scale-105 hover:bg-rose-700 active:scale-95 duration-200">
                Unequip
              </button>
            </>
          ) : (
            <>
              <div className="h-[100px] w-[100px]"></div>
              <button className="p-2 bg-cyan-600 font-bold rounded-lg text-zinc-200 hover:scale-105 hover:bg-cyan-700 active:scale-95 duration-200">
                Equip
              </button>
            </>
          )}
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <h1>Big Boobies</h1>
          {body ? (
            <>
              <Image src="/mage.jpeg" height={100} width={100} alt="slot" />
              <button className="p-2 bg-rose-600 font-bold rounded-lg text-zinc-200 hover:scale-105 hover:bg-rose-700 active:scale-95 duration-200">
                Unequip
              </button>
            </>
          ) : (
            <>
              {/* <div className="h-[100px] w-[100px] flex justify-center items-center border-2 border-black p-5">currently shirtless</div>
               */}
              <Image
                src="/chestplate.png"
                height={100}
                width={100}
                alt="chest"
              />
              <button className="p-2 bg-cyan-600 font-bold rounded-lg text-zinc-200 hover:scale-105 hover:bg-cyan-700 active:scale-95 duration-200">
                Equip
              </button>
            </>
          )}
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <h1>Diamond Sweatpants</h1>
          {legs ? (
            <>
              <Image src="/mage.jpeg" height={100} width={100} alt="slot" />
              <button className="p-2 bg-rose-600 font-bold rounded-lg text-zinc-200 hover:scale-105 hover:bg-rose-700 active:scale-95 duration-200">
                Unequip
              </button>
            </>
          ) : (
            <>
              <div className="h-[100px] w-[100px] flex justify-center items-center border-2 border-black p-5">
                currently shirtless
              </div>
              <button className="p-2 bg-cyan-600 font-bold rounded-lg text-zinc-200 hover:scale-105 hover:bg-cyan-700 active:scale-95 duration-200">
                Equip
              </button>
            </>
          )}
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <h1>SpeedBoots</h1>
          {feet ? (
            <>
              <Image src="/mage.jpeg" height={100} width={100} alt="slot" />
              <button className="p-2 bg-rose-600 font-bold rounded-lg text-zinc-200 hover:scale-105 hover:bg-rose-700 active:scale-95 duration-200">
                Unequip
              </button>
            </>
          ) : (
            <>
              <div className="h-[100px] w-[100px] flex justify-center items-center border-2 border-black p-5">
                currently shirtless
              </div>
              <button className="p-2 bg-cyan-600 font-bold rounded-lg text-zinc-200 hover:scale-105 hover:bg-cyan-700 active:scale-95 duration-200">
                Equip
              </button>
            </>
          )}
        </div>
      </div>
    )
}

export default PlayerSheetItems