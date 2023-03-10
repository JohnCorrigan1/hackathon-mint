import PlayerListItem from "./PlayerListItem";
import { useEffect, useState } from "react";
import { getPlayers } from "../lib/SubgraphQueries";
import { useQuery } from "urql";
import { useAccount } from "wagmi";
import { Player } from "../models/Player";
import Link from "next/link";

const PlayersList: React.FC = () => {

    const { isConnected } = useAccount();
    const [user, setUser] = useState<`0x${string}`>(`0x${""}`);
    const [query, setQuery] = useState<string>(getPlayers(user) || "");
    const [players, setPlayers] = useState<Player[]>([])
    const [noPlayers, setNoPlayers] = useState(false)
    const [result, reexecuteQuery] = useQuery({
        query,
      });

    useEffect(() => {
      getAccount()
    }, [isConnected])
3
    useEffect(() => {
        // console.log("user", user)
        setQuery(getPlayers(user))
        reexecuteQuery()
    }, [user])

    // const { account } = useAccount();
    const getAccount = async () => {
    if(isConnected) {
    const account = await window.ethereum?.request({ method: 'eth_accounts' })
    setUser(account![0])
    // console.log("user here", user)
    }
    }
  
    useEffect(() => {
      const { data, fetching, error } = result;
      if(result.data?.players.length > 0){
        setNoPlayers(false)
        setPlayers(result.data?.players)
      }
      else {
        setNoPlayers(true)
      }
    }, [result])

    return (
        <>
        {noPlayers ? (
        <div className="flex justify-center flex-col items-center gap-5">
            <h1 className="text-2xl font-bold text-zinc-200">You have no players yet!</h1>
        <Link href="/">
            <h2 className="text-xl underline cursor-pointer">Get one here</h2>
        </Link>
        </div>
        
        ) : (
        <div className="grid p-10 bg-[#D5CEA3] bg-opacity-40 table gap-10 rounded-lg text-zinc-200 font-bold shadow-xl">
            <p className="flex justify-center text-2xl">TokenId</p>
            <p className="flex justify-center text-2xl">Class</p>
            <p></p>
            <p></p>
            {players?.map((player, index) => {
                return (
                    <PlayerListItem key={index} name={player.tokenId} class={player.playerClass.name} tokenId={player.tokenId} playerId={player.id} />
                )
            })}
        </div> )}
        </>
    )
}

export default PlayersList;
