import { useEffect, useState } from "react";
import PlayerSheetCardMint from "./PlayerSheetCardMint";
import { useQuery } from "urql";
import { getClasses } from "../../lib/SubgraphQueries";
import { PlayerClass } from "../../models/playerClass";



const PlayerSheetConainer = () => {

  const [classes, setClasses] = useState<PlayerClass[]>([])
  const [result, reexecuteQuery] = useQuery({
    query: getClasses,
  });


  useEffect(() => {
    reexecuteQuery()
  }, [classes])

  useEffect(() => {
    const { data, fetching, error } = result;
    setClasses(data?.playerClasses)
    console.log(classes)
  }, [result])
  

  return (
    <div className="flex items-center ">
        <div className="carousel carousel-center rounded-box gap-5 p-5">
  {/* <div className="carousel-item">
    <PlayerSheetCardMint title="Mage" image="/wizard.png" defaultItems={["Hat", "staff", "boots"]} description="Cast spells level intellect lorem ipsum lorem ipsum" description2="Lorem ipsum lorem ipsum"/>
  </div>  */}

  {classes?.map((playerClass, index) => {
    return (
      <div className="carousel-item" key={index}>
        <PlayerSheetCardMint title={playerClass.name} image="/wizard.png" defaultItems={["hat"]} description="lorem ipsum" description2="dkljfjlskdfjlsj" />
        </div>
    )
  })}
  



  {/* <div className="carousel-item">
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
  </div> */}
</div>
    </div>
  );
};
export default PlayerSheetConainer;
