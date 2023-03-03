import Phaser from 'phaser'

import {HelloWorldScene, LittleGuyScene} from './scenes'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: '#282c34',
  pixelArt: true,
  zoom: 4,
  scale: {
    width: 200,
    height: 200,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [LittleGuyScene]
}

export default new Phaser.Game(config)
