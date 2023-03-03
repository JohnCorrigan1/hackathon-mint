const PlayerListItem: React.FC<{name: string, class: string, level: string}> = (props) => {

    return (
        <div className=" text-zinc-200 flex justify-between text-xl font-bold w-full">
            <p>{props.name}</p>
            <p>{props.class}</p>
            <p>{props.level}</p>
        </div>
    )
}

export default PlayerListItem;