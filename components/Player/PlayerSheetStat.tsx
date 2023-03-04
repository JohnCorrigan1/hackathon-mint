import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

const PlayerSheetStat: React.FC<{
  availablePoints: number | undefined;
  setAvailablePoints: Dispatch<SetStateAction<number | undefined>>;
  stat: number | undefined;
  setState: Dispatch<SetStateAction<number | undefined>>;
  currentStat: number | undefined;
  statName: string;
}> = (props) => {
  const handleIncrease = () => {
    if(props.stat && props.availablePoints){
        if (props.availablePoints > 0) {
          props.setState(props.stat + 1);
          props.setAvailablePoints(props.availablePoints - 1);
        }
      }
  };

  const handleDecrease = () => {
    if(props.stat && props.availablePoints && props.currentStat){
        if (props.stat > 1 && props.stat > props.currentStat) {
          props.setState(props.stat - 1);
          props.setAvailablePoints(props.availablePoints + 1);
        }
      }
  };

  return (
    <div className="flex justify-between p-1 border-b-2 border-black items-center">
      <p>{props.statName}: {props.stat}</p>
      <div className="flex items-center gap-5 ">
        <button onClick={handleIncrease}>
          <Image
            src="/add.svg"
            alt="add"
            width={30}
            height={30}
            className="hover:bg-zinc-300 p-2 rounded-xl hover:scale-105 active:scale-95 duration-100"
          />
        </button>
        <button onClick={handleDecrease}>
          <Image
            src="/minus.svg"
            alt="minus"
            width={30}
            height={30}
            className="hover:bg-zinc-300 p-1 rounded-xl hover:scale-105 active:scale-95 duration-100"
          />
        </button>
      </div>
    </div>
  );
};

export default PlayerSheetStat;
