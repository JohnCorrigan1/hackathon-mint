import { LittleGuyScene } from "./Phaser/scenes";

import phaserGame from "./Phaser/PhaserGame"

export default function Blank() {

  const nextRoom = () => {
      const scene = phaserGame.scene.keys.helloworld as LittleGuyScene
      scene.nextRoom()
  }

  const attackPlayer = () => {
      const scene = phaserGame.scene.keys.helloworld as LittleGuyScene
      scene.attackPlayer()
  }

    return (
        <>
        <button className="text-zinc-200 text-2xl p-3 " onClick={nextRoom}>Click me</button>
        <button className="text-zinc-200 text-2xl p-3" onClick={attackPlayer}>Attack</button>
        </>
    )
}
