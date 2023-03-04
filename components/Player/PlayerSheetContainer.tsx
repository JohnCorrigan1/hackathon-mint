import PlayerSheetCardMint from "./PlayerSheetCardMint";

const PlayerSheetConainer: React.FC = () => {
  return (
    <div className="flex items-center ">
        <div className="carousel carousel-center rounded-box gap-5 p-5">
  <div className="carousel-item">
    <PlayerSheetCardMint title="Mage" image="/wizard.png" defaultItems={["Hat", "staff", "boots"]} description="Cast spells level intellect lorem ipsum lorem ipsum" description2="Lorem ipsum lorem ipsum"/>
  </div> 
  <div className="carousel-item">
    <PlayerSheetCardMint title="Mage" image="/wizard.png" defaultItems={["Hat", "staff", "boots"]} description="Cast spells level intellect lorem ipsum lorem ipsum" description2="Lorem ipsum lorem ipsum"/>
  </div> 
  <div className="carousel-item">
    <PlayerSheetCardMint title="Mage" image="/wizard.png" defaultItems={["Hat", "staff", "boots"]} description="Cast spells level intellect lorem ipsum lorem ipsum" description2="Lorem ipsum lorem ipsum"/>
  </div> 
  <div className="carousel-item">
    <PlayerSheetCardMint title="Mage" image="/wizard.png" defaultItems={["Hat", "staff", "boots"]} description="Cast spells level intellect lorem ipsum lorem ipsum" description2="Lorem ipsum lorem ipsum"/>
  </div> 
  <div className="carousel-item">
    <PlayerSheetCardMint title="Mage" image="/mage.jpeg" defaultItems={["Hat", "staff", "boots"]} description="Cast spells level intellect lorem ipsum lorem ipsum" description2="Lorem ipsum lorem ipsum"/>
  </div> 
  <div className="carousel-item">
    <PlayerSheetCardMint title="Mage" image="/mage.jpeg" defaultItems={["Hat", "staff", "boots"]} description="Cast spells level intellect lorem ipsum lorem ipsum" description2="Lorem ipsum lorem ipsum"/>
  </div> 
  <div className="carousel-item">
    <PlayerSheetCardMint title="Mage" image="/mage.jpeg" defaultItems={["Hat", "staff", "boots"]} description="Cast spells level intellect lorem ipsum lorem ipsum" description2="Lorem ipsum lorem ipsum"/>
  </div>
</div>
    </div>
  );
};
export default PlayerSheetConainer;
