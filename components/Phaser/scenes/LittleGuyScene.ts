export default class LittleGuyScene extends Phaser.Scene {
  constructor() {
    super('helloworld')
  }

  preload() {
    this.load.image('wizzard', './assets/wizzard_f_idle_anim_f0.png')
    this.load.image('floor', './assets/floor_1.png')
  }

  create() {
    this.createFloors(13,13)
    this.createEmitter()
  }

  createFloors(x:number, y:number) {
    for(let i=0; i<x; i++) {
      for(let j=0; j<y; j++) {
        this.add.image(i*16, j*16, 'floor').setOrigin(0,0)
      }
    }
  }

  createEmitter() {
  //const particles = this.add.particles('red')

  //const emitter = particles.createEmitter({
  //  speed: 100,
  //  scale: { start: 1, end: 0 },
  //  blendMode: 'ADD',
  //})

    const logo = this.physics.add.image(100, 100, 'wizzard')

    logo.setVelocity(100, 200)
    logo.setBounce(1, 1)
    logo.setCollideWorldBounds(true)

    //emitter.startFollow(logo)
  }
}
