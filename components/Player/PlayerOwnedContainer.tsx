import Stats from "../../models/stats";
import PlayerSheetCardOwned from "./PlayerSheetCardOwned";

const mageStats: Stats = {
    level: 3,
    constitution: 10,
    intelligence: 10,
    strength: 10,
    dexterity: 10,
    luck: 10,
    defense: 10,
    availablePoints: 10,
}

const PlayerOwnedConatiner: React.FC = () => {
    return (
        <div className="flex mt-10 justify-center gap-10 ">
            <PlayerSheetCardOwned title="Mage" image="/mage.jpeg" stats={mageStats} items={["hat", "staff", "boots"]} />
            <PlayerSheetCardOwned title="Mage" image="/mage.jpeg" stats={mageStats} items={["hat", "staff", "boots"]} />
        </div>
    )
}

export default PlayerOwnedConatiner;