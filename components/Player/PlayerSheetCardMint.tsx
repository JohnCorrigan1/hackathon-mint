import Image from "next/image";
import { useState, useEffect } from "react";
import MintModal from "../MintModal";
import { ethers } from "ethers";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import {
  GOERLI_BARBARIAN_ADDRESS,
  GOERLI_WIZARD_ADDRESS,
} from "../../lib/constants";
import { BARBARIAN_ABI, WIZARD_ABI } from "../../lib/abi";

const PlayerSheetCard: React.FC<{
  title: string;
  image: string;
  defaultItems: string[];
  description: string;
  description2: string;
  classContract: string;
}> = (props) => {
  const ContractAddress = props.classContract;

  const ContractABI = BARBARIAN_ABI;

  const [isOpen, setIsOpen] = useState(false);
  const [isSuccesful, setIsSuccesfull] = useState(false);
  const [info, setInfo] = useState(false);

  const mintHandler = () => {
    mint?.();
    setIsOpen(true);
  };

  const { config } = usePrepareContractWrite({
    // @ts-ignore
    address: ContractAddress,
    abi: ContractABI,
    functionName: "mint",
    args: [],
    onError(error) {
      console.log("Error", error);
    },
  });

  const {
    write: mint,
    isSuccess: isMintStarted,
    data: mintData,
  } = useContractWrite(config);

  const { isSuccess: txSuccess } = useWaitForTransaction({
    hash: mintData?.hash,
  });

  useEffect(() => {
    if (txSuccess) {
      setIsSuccesfull(true);
    }
    console.log(mintData);
  }, [txSuccess]);

  return (
    <>
      <MintModal
        isOpen={isOpen}
        isSuccesful={isSuccesful}
        setIsSuccesfull={setIsSuccesfull}
        setIsOpen={setIsOpen}
      />
      <div className="flex flex-col bg-[#D5CEA3] bg-opacity-40 rounded-xl w-[400px]">
        <Image
          src={props.image}
          alt={props.title}
          width={150}
          height={375}
          className="rounded-t-xl"
        />
        <div className="p-5 text-zinc-200 flex flex-col gap-5 relative">
          <div
            className="relative top-0 left-0"
            onMouseLeave={() => setInfo(false)}
          >
            <Image
              src="/info.svg"
              height={30}
              width={30}
              onMouseEnter={() => setInfo(true)}
              alt="i"
            />
          </div>
          {info && (
            <div className="absolute -top-5 left-14 bg-zinc-800 rounded-xl p-5 z-[100]">
              <p>{props.description}</p>
              <p>{props.description2}</p>
            </div>
          )}

          <h1 className="flex justify-center text-2xl font-bold">
            {props.title}
          </h1>
          <p>{props.description}</p>
          <p>{props.description2}</p>
          <button
            onClick={mintHandler}
            className="bg-[#E5E5CB] text-[#3C2A21] font-bold rounded-xl p-2 active:scale-95 hover:scale-105 duration-200"
          >
            Mint
          </button>
        </div>
      </div>
    </>
  );
};

export default PlayerSheetCard;
