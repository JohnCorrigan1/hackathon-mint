import PlayerSheetCardMint from "./PlayerSheetCardMint";

const PlayerSheetConainer: React.FC = () => {
  return (
    <div className="flex mt-10 justify-center gap-10 ">
        <div className="carousel carousel-center rounded-box gap-10 p-5">
  <div className="carousel-item">
    {/* <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Pizza" /> */}
    <PlayerSheetCardMint title="Mage" image="/mage.jpeg" defaultItems={["Hat", "staff", "boots"]} description="Cast spells level intellect lorem ipsum lorem ipsum" description2="Lorem ipsum lorem ipsum"/>

  </div> 
  <div className="carousel-item">
    {/* <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Pizza" /> */}
    <PlayerSheetCardMint title="Mage" image="/mage.jpeg" defaultItems={["Hat", "staff", "boots"]} description="Cast spells level intellect lorem ipsum lorem ipsum" description2="Lorem ipsum lorem ipsum"/>

  </div> 
  <div className="carousel-item">
    {/* <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Pizza" /> */}
    <PlayerSheetCardMint title="Mage" image="/mage.jpeg" defaultItems={["Hat", "staff", "boots"]} description="Cast spells level intellect lorem ipsum lorem ipsum" description2="Lorem ipsum lorem ipsum"/>

  </div> 
  <div className="carousel-item">
    {/* <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Pizza" /> */}
    <PlayerSheetCardMint title="Mage" image="/mage.jpeg" defaultItems={["Hat", "staff", "boots"]} description="Cast spells level intellect lorem ipsum lorem ipsum" description2="Lorem ipsum lorem ipsum"/>

  </div> 
  <div className="carousel-item">
    {/* <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Pizza" /> */}
    <PlayerSheetCardMint title="Mage" image="/mage.jpeg" defaultItems={["Hat", "staff", "boots"]} description="Cast spells level intellect lorem ipsum lorem ipsum" description2="Lorem ipsum lorem ipsum"/>

  </div> 
  <div className="carousel-item">
    {/* <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Pizza" /> */}
    <PlayerSheetCardMint title="Mage" image="/mage.jpeg" defaultItems={["Hat", "staff", "boots"]} description="Cast spells level intellect lorem ipsum lorem ipsum" description2="Lorem ipsum lorem ipsum"/>


  </div> 
  <div className="carousel-item">
    {/* <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Pizza" /> */}
    <PlayerSheetCardMint title="Mage" image="/mage.jpeg" defaultItems={["Hat", "staff", "boots"]} description="Cast spells level intellect lorem ipsum lorem ipsum" description2="Lorem ipsum lorem ipsum"/>

  </div>
</div>
      {/* <PlayerSheetCardMint title="Mage" image="/mage.jpeg" defaultItems={["Hat", "staff", "boots"]} description="Cast spells level intellect lorem ipsum lorem ipsum" description2="Lorem ipsum lorem ipsum"/>
      <PlayerSheetCardMint title="Mage" image="/mage.jpeg" defaultItems={["Hat", "staff", "boots"]} description="Cast spells level intellect lorem ipsum lorem ipsum" description2="Lorem ipsum lorem ipsum"/>
      <PlayerSheetCardMint title="Mage" image="/mage.jpeg" defaultItems={["Hat", "staff", "boots"]} description="Cast spells level intellect lorem ipsum lorem ipsum" description2="Lorem ipsum lorem ipsum"/> */}
    </div>
  );
};
export default PlayerSheetConainer;
