import Phaser from 'phaser'
// import { useEffect } from 'react'

import HelloWorldScene from '../scenes/HelloWorldScene'




const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  backgroundColor: '#282c34',
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [HelloWorldScene],
}

// const game = new Phaser.Game(config)
// //@ts-ignore    
// window.game = game

export default new Phaser.Game(config)