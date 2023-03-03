import Link from "next/link";

const PlayerListItem: React.FC<{name: string, class: string, level: string, tokenId: string}> = (props) => {

    return (
        <div className=" text-zinc-200 grid grid-flow-col text-xl font-bold w-full">
            {/* <p className="w-full flex justify-center">{props.tokenId}</p> */}
            <p className="w-full flex justify-center">{props.name}</p>
            <p className="w-full flex justify-center">{props.class}</p>
            <p className="w-full flex justify-center">{props.level}</p>
            <p className="w-full flex justify-center"><Link href={`/${props.tokenId}`}><button className="p-2 bg-cyan-600 rounded-lg pr-4 pl-4 hover:bg-cyan-700 active:scale-95 duration-200">Edit</button></Link></p>
            <p className="w-full flex justify-center"><Link href={`/game`}><button className="p-2 bg-cyan-600 rounded-lg pr-4 pl-4 hover:bg-cyan-700 active:scale-95 duration-200">Play</button></Link></p>
        </div>
    )
}

export default PlayerListItem;