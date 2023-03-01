import Image from "next/image"

const PlayerSheetCard: React.FC <{ title: string, image: string, defaultItems: string[], description: string}> = (props) => {

    return (
        <div className="flex flex-col bg-zinc-500 rounded-xl">
            <Image src={props.image} alt={props.title} width={150} height={300} className="rounded-t-xl" />
        <div className="p-5 text-zinc-200 flex flex-col gap-5">
            <p>{props.description}</p>
            <ul>
                {props.defaultItems.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            <button className="bg-zinc-200 text-zinc-500 rounded-xl p-2 active:scale-95 hover:scale-105">Mint</button>
        </div>
        </div>
    )

}

export default PlayerSheetCard