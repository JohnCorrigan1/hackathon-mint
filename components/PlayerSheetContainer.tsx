import PlayerSheetCardMint from "./PlayerSheetCardMint";

const PlayerSheetConainer: React.FC = () => {
  return (
    <div className="flex mt-10 justify-center gap-10 ">
      <PlayerSheetCardMint title="Mage" image="/mage.jpeg" defaultItems={["Hat", "staff", "boots"]} description="Cast spells level intellect lorem ipsum lorem ipsum"/>
      <PlayerSheetCardMint title="Mage" image="/mage.jpeg" defaultItems={["Hat", "staff", "boots"]} description="Cast spells level intellect lorem ipsum lorem ipsum"/>
      <PlayerSheetCardMint title="Mage" image="/mage.jpeg" defaultItems={["Hat", "staff", "boots"]} description="Cast spells level intellect lorem ipsum lorem ipsum"/>
    </div>
  );
};
export default PlayerSheetConainer;
