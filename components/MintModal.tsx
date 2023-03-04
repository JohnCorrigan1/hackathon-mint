import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MintModal: React.FC<{ isOpen: boolean, isSuccesful: boolean, setIsOpen: Dispatch<SetStateAction<boolean>>, setIsSuccesfull: Dispatch<SetStateAction<boolean>> }> = (props) => {

const [tokenID, setTokenId] = useState(1)

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
      className=" bg-black bg-opacity-70 fixed top-0 right-0 bottom-0 left-0 z-[2000]"
    ></div>
    <div onClick={successHandler} className="bg-zinc-900 text-zinc-200 flex flex-col items-center rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 justify-center -translate-y-1/2 w-1/2 max-w-xl overflow-y-scroll scrollbar-hide h-1/2 z-[2001]">
      <div
        className="hover:bg-zinc-600 hover:scale-105 bg-opacity-50 active:scale-95 absolute top-3 right-3 rounded-full p-2"
        onClick={closeHandler}
      >
        <p className="font-bold text-2xl ">X</p>
      </div>

{!props.isSuccesful ? (
    <div className="w-[60px] h-[60px] border-t-4 border-t-rose-600 border-r-4 border-r-emerald-600 border-b-cyan-600 border-b-4 animate-spin rounded-full">

    </div>) : (
              <div className="wrapper mb-10">
              {" "}
              <svg
                className="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  className="checkmark__circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  className="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            </div>
            )}

{props.isSuccesful && (
    <div>
        <p className="text-2xl font-bold">Successfully minted #123!</p>
        <p>You&apos;re player sheet has 12 stat points available to assign</p>
       <Link href={`/${tokenID}`}><p className="underline text-blue-500 cursor-pointer">Assign them here</p></Link>
        <p>Transaction hash: 0x1234568688686</p>
        <p>Nft Address: 0x1234567890</p>
        <p>Check out your player sheet and assign your stats</p>
    </div>  )}
</div>
  
  </>
)

}

export default MintModal