import { LittleGuyScene } from "./Phaser/scenes";

import phaserGame from "./Phaser/PhaserGame"
import Link from "next/link";
import { useRouter } from "next/router";

export default function Blank() {

    const router = useRouter()
      
    
    const homeHandler = () =>{ 
        const canvas = document.querySelector('canvas')
        canvas?.remove()
        router.push('/')
    }

  const nextRoom = () => {
      const scene = phaserGame.scene.keys.helloworld as LittleGuyScene
      scene.nextRoom()
  }

  const attackPlayer = () => {
      const scene = phaserGame.scene.keys.helloworld as LittleGuyScene
      scene.attackPlayer()
  }

  const attackMonster = () => {
      const scene = phaserGame.scene.keys.helloworld as LittleGuyScene
      scene.attackMonster()
  }

    return (
        <>
        <button className="text-zinc-200 text-2xl p-3 " onClick={nextRoom}>Click me</button>
        <button className="text-zinc-200 text-2xl p-3" onClick={attackPlayer}>Attack Player</button>
        <button className="text-zinc-200 text-2xl p-3" onClick={attackMonster}>Attack Monster</button>
        <button onClick={homeHandler} className="text-zinc-200 text-txl p-3">Mint</button>
        </>
    )
}
