import { LittleGuyScene } from "./Phaser/scenes";

import phaserGame from "./Phaser/PhaserGame"

export default function Blank() {

  const handleClick = () => {
      const scene = phaserGame.scene.keys.helloworld as LittleGuyScene
      scene.nextRoom()
    }

    return (
        <button className="text-zinc-200 text-2xl " onClick={handleClick}>Click me</button>
    )
}
