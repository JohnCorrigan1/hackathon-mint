import PlayerListItem from "./PlayerListItem";

const PlayersList: React.FC = () => {

    return (
        <div className="grid p-10 bg-zinc-600 grid-flow-row gap-10">
            <div className=" text-zinc-200 grid grid-flow-col text-xl font-bold w-full">
            <p className="flex justify-center w-full">Token ID</p>
            <p className="flex justify-center w-full">Name</p>
            <p className="flex justify-center w-full">Class</p>
            <p className="flex justify-center w-full">Level</p>
        </div>
            <PlayerListItem name="Player" class="Mage" level="3" tokenId="123" />
            <PlayerListItem name="Player" class="Mage" level="3" tokenId="123" />
            <PlayerListItem name="Player" class="Mage" level="3" tokenId="123" />
            <PlayerListItem name="Player" class="Mage" level="3" tokenId="123" />
            <PlayerListItem name="Player" class="Mage" level="3" tokenId="123" />
            <PlayerListItem name="Player" class="Mage" level="3" tokenId="123" />
            <PlayerListItem name="Player" class="Mage" level="3" tokenId="123" />
        </div>
    )
}

export default PlayersList;