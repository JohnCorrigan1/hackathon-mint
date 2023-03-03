import HelloWorldScene from "../scenes/HelloWorldScene"
import phaserGame from "./PhaserGame"

const Button: React.FC = () => {

    const handleClick = () => {
        const scene = phaserGame.scene.keys.helloworld as HelloWorldScene
        scene.createEmitter()
      }

    return (
        <button className="text-zinc-200 text-2xl " onClick={handleClick}>Click me</button>
    )
}

export default Button