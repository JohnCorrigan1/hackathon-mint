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

  {classes?.map((playerClass, index) => {
    return (
      <div className="carousel-item" key={index}>
        <PlayerSheetCardMint title={playerClass.name} image="/wizard.png" description="Wizards specialize in arcane magic. They use a spellbook to prepare and cast spells and are known for their intelligence and versatility." description2="dkljfjlskdfjlsj" classContract={playerClass.id} />
        </div>
    )
  })}
</div>
    </div>
  );
};
export default PlayerSheetConainer;
