import { useEffect, useState } from "react";
import PlayerSheetCardMint from "./PlayerSheetCardMint";
import { useQuery } from "urql";
import { getClasses } from "../../lib/SubgraphQueries";
import { PlayerClass } from "../../models/playerClass";



const PlayerSheetConainer = () => {

  // const [description, setDescription] = useState<string>("");
  // const [description2, setDescription2] = useState<string>("");
  // const [image, setImage] = useState<string>("");
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

  {classes?.map((playerClass, index) => {
    let image = ""
    let description = ""
    let description2 = ""
    if(playerClass.name === "Wizard"){
      image = "/wizard.png"
      description = "Wizards specialize in arcane magic. They use a spellbook to prepare and cast spells and are known for their intelligence and versatility."
      description2 = "Damage scales with intelligence."
    }
    else if(playerClass.name === "Barbarian"){
      image = "/barbarian.png"
      description = "Relies on brute strength and savage instincts to overpower foes. They can shrug off damage and resist spells. Thrive up close and personal."
      description2 = "Damage scales with strength."
    }
    else if(playerClass.name === "Rogue"){
      image = "/rogue.png"
      description = "Rogues are skilled at using weapons and armor, and are known for their agility and stealth. They can be seen picking locks and stealing from others."
      description2 = "Damage scales with dexterity."
    }
    else if(playerClass.name === "Paladin"){
      image = "/paladin.png"
      description = "Paladins are holy warriors who use divine magic to protect the weak and punish the wicked. They are known for their strength and courage."
      description2 = "Damage scales with strength."
    }
    else if(playerClass.name === "Monk"){
      image = "/monk.png"
      description = "Monks are masters of martial arts. They are known for their agility and discipline. They can be seen meditating and practicing their skills."
      description2 = "Damage scales with dexterity."
    }
    return (
      <div className="carousel-item" key={index}>
        <PlayerSheetCardMint title={playerClass.name} image={image} description={description} description2={description2} classContract={playerClass.id} />
        </div>
    )
  })}
</div>
    </div>
  );
};
export default PlayerSheetConainer;
