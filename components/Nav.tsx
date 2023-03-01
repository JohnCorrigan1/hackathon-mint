import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

const Nav = () => {
    return (
        <div className="p-5 flex justify-between items-center">
            <Link href="/"><h1 className="text-zinc-200 text-2xl font-bold cursor-pointer hover:bg-zinc-400 p-3 hover:scale-105 active:scale-95 rounded-xl hover:bg-opacity-50 duration-300">Dungeon</h1></Link>
            <div className="flex gap-10 items-center">
            <Link href="/players"><h1 className="text-zinc-200 text-xl font-bold cursor-pointer hover:bg-zinc-400 p-3 hover:scale-105 active:scale-95 rounded-xl hover:bg-opacity-50 duration-300">My Players</h1></Link>
            <ConnectButton />
            </div>
        </div>
    );
};

export default Nav;