import Link from "next/link";

const PlayerListItem: React.FC<{name: string, class: string, level: string, tokenId: string}> = (props) => {

    return (
            <>
            <p className="w-full flex justify-center text-xl">{props.name}</p>
            <p className="w-full flex justify-center text-xl">{props.class}</p>
            <p className="w-full flex justify-center text-xl">{props.level}</p>
            <p className="w-full flex justify-center text-xl"><Link href={`/${props.tokenId}`}><button className="p-2 bg-cyan-600 rounded-lg w-1/2 hover:bg-cyan-700 active:scale-95 duration-200">Edit</button></Link></p>
            <p className="w-full flex justify-center text-xl"><Link href={`/game`}><button className="p-2 bg-cyan-600 rounded-lg w-1/2 hover:bg-cyan-700 active:scale-95 duration-200">Play</button></Link></p>
        </>
    )
}

export default PlayerListItem;