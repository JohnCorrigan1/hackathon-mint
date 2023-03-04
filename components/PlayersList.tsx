import PlayerListItem from "./PlayerListItem";

const PlayersList: React.FC = () => {

    return (
        <div className="grid p-10 bg-[#D5CEA3] bg-opacity-40 table gap-10 rounded-lg text-zinc-200 font-bold shadow-xl">
            {/* <div className=" text-zinc-200 text-xl font-bold w-full "> */}
            {/* <p className="flex justify-center w-full">Token ID</p> */}
            <p className="flex justify-center text-2xl">Name</p>
            <p className="flex justify-center text-2xl">Class</p>
            <p className="flex justify-center text-2xl">Level</p>
            <p></p>
            <p></p>
        {/* </div> */}
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