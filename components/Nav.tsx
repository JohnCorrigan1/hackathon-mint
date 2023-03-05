import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="p-5 flex justify-between items-center">
      <Link href="/">
        <h1 className=" text-zinc-200 p-2 cursor-pointer rounded-lg hover:scale-105 active:scale-95 duration-200 font-bold text-2xl hover:bg-[#E0C097] hover:bg-opacity-30">
          Block Crawler
        </h1>
      </Link>
      <div className="flex gap-10 items-center">
        <Link href="/players">
          <h1 className=" text-zinc-200 text-xl font-bold cursor-pointer hover:bg-[#E0C097] p-2 hover:scale-105 active:scale-95 rounded-xl hover:bg-opacity-50 duration-300">
            My Players
          </h1>
        </Link>
        <Link href="/gear">
          <h1 className="text-zinc-200 text-xl font-bold cursor-pointer hover:bg-[#E0C097] p-2 hover:scale-105 active:scale-95 rounded-xl hover:bg-opacity-50 duration-300">
            My Gear
          </h1>
        </Link>
        <Link href="/mintgear">
            <h1 className="text-zinc-200 text-xl font-bold cursor-pointer hover:bg-[#E0C097] p-2 hover:scale-105 active:scale-95 rounded-xl hover:bg-opacity-50 duration-300">
                Mint Gear
            </h1>
        </Link>
        <Link href="/game">
          <h1 className="text-zinc-200 text-xl font-bold cursor-pointer hover:bg-zinc-400 p-2 hover:scale-105 active:scale-95 rounded-xl hover:bg-opacity-50 duration-300">
            Play Game
          </h1>
        </Link>
        <ConnectButton />
      </div> 
    </div>
  );
};

export default Nav;
