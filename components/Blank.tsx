import HelloWorldScene from "./Phaser/scenes/HelloWorldScene"
import phaserGame from "./Phaser/PhaserGame"

export default function Blank() {

  const handleClick = () => {
      const scene = phaserGame.scene.keys.helloworld as HelloWorldScene
      scene.createEmitter()
    }

    return (
        <button className="text-zinc-200 text-2xl " onClick={handleClick}>Click me</button>
    )
}
