import PlayerListItem from "./PlayerListItem";

const PlayersList: React.FC = () => {

    return (
        <div className="flex flex-col items-center mt-10 justify-center gap-10 p-10 bg-zinc-600">
            <div className=" text-zinc-200 flex justify-between text-xl font-bold w-full">
            <p>Name</p>
            <p>Class</p>
            <p>Level</p>
        </div>
            <PlayerListItem name="Player 1" class="Mage" level="3" />
            <PlayerListItem name="Player 1" class="Mage" level="3" />
            <PlayerListItem name="Player 1" class="Mage" level="3" />
            <PlayerListItem name="Player 1" class="Mage" level="3" />
            <PlayerListItem name="Player 1" class="Mage" level="3" />
        </div>
    )
}

export default PlayersList;