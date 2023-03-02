import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const EquipModal: React.FC<{ isOpen: boolean, isSuccesfull: boolean, setIsOpen: Dispatch<SetStateAction<boolean>>, setIsSuccesfull: Dispatch<SetStateAction<boolean>> }> = (props) => {

// const [tokenID, setTokenId] = useState(1)

const closeHandler = () => {
    props.setIsOpen(false);
}

const successHandler = () => {
    props.setIsSuccesfull(true);
}


if(!props.isOpen){
    return null;
}

return (
    <>
    <div
      onClick={closeHandler}
      className="modal bg-black bg-opacity-70 fixed top-0 right-0 bottom-0 left-0 z-[2000]"
    ></div>
    <div onClick={successHandler} className="bg-zinc-900 text-zinc-200 flex flex-col items-center rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 justify-center -translate-y-1/2 w-1/2 max-w-xl overflow-y-scroll scrollbar-hide h-2/6 z-[2001]">
      <div
        className="hover:bg-zinc-600 hover:scale-105 bg-opacity-50 active:scale-95 absolute top-3 right-3 rounded-full p-2"
        onClick={closeHandler}
      >
        {/* <Image src="/close_white.svg" height={40} width={40} alt="X" /> */}
        <p className="font-bold text-2xl ">X</p>
      </div>

    <div>
        <p className="text-xl text-zinc-200">Map all owned players with item slot free</p>
    </div>
        
</div>
  
  </>
)

}

export default EquipModal