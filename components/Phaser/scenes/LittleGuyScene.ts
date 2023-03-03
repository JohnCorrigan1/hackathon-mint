import { argv0 } from "process";

type MonsterType = 'orc' | 'zombie' | 'skeleton';

export default class LittleGuyScene extends Phaser.Scene {

  background: Phaser.GameObjects.TileSprite | undefined;

  constructor() {
    super('helloworld')
  }


  preload() {
    this.load.image('floor', './assets/floor_1.png')
    this.load.image('blood', './assets/blood.png')
    this.load.spritesheet('wizardAnim', './wizardCrop.png', {
      frameWidth: 16,
      frameHeight: 23
    })
    this.load.spritesheet('orc', './assets/Orc.png', {
      frameWidth: 31,
      frameHeight: 28
    })
    this.load.spritesheet('goon', './assets/Goon.png', {
      frameWidth: 31,
      frameHeight: 34 
    })
    this.load.spritesheet('skeleton', './assets/Skeleton.png', {
      frameWidth: 16,
      frameHeight: 16 
    })
  }

  create() {
    this.background = this.add.tileSprite(0,0, 20000, 800, 'floor')
    this.createWizzard(25, 100)
    this.spawnRoom()
  }

  bloodSplatter(x:number, y:number) {
    const blood = this.add.particles('blood').createEmitter({
      x: x,
      y: y,
      speed: 100,
      lifespan: 200,
      gravityY: 200,
      scale: { start: 0.01, end: 0 },
      quantity: 10,
      blendMode: 'ADD'
    });

    this.time.delayedCall(50, () => {
      blood.stop();
    });
  }

  killAllEnemies() {
    this.children.getAll()
    .filter((child) => child.type === 'Sprite' && child.name !== 'player')
    .forEach((child) => {
      this.tweens.add({
        targets: child,
        angle: 90,
        duration: 500,
        ease: 'Power1',
      }).on('complete', () => {
        //@ts-ignore
        this.bloodSplatter(child.x, child.y)
        child.destroy()
      })
    });
  }

  spawnRoom() {
    this.createMonsters('orc', Phaser.Math.Between(0, 3))
    this.createMonsters('skeleton',Phaser.Math.Between(0, 3))
    this.createMonsters('zombie',Phaser.Math.Between(0, 3))
  }

  scrollBackground() {
    if(!this.background) return;
    this.tweens.add({
      targets: this.background,
      x: this.background.x - 100,
      duration: 1000,
      ease: 'Power1',
    });
  }

  nextRoom() {
    this.killAllEnemies()
    this.time.delayedCall(500, () => {
      console.log('next room')
      this.scrollBackground()
    });
    this.time.delayedCall(1500, () => {
      this.spawnRoom()
    });
  }

  createMonsters(type: MonsterType, count:number) {
    switch(type) {
      case 'orc':
        for(let i=0; i<count; i++) {
          this.createOrc(Phaser.Math.Between(100, 150), Phaser.Math.Between(50, 175))
        }
        break;
      case 'zombie':
        for(let i=0; i<count; i++) {
          this.createGoon(Phaser.Math.Between(100, 150), Phaser.Math.Between(50, 175))
        }
        break;
      case 'skeleton':
        for(let i=0; i<count; i++) {
          this.createSkeleton(Phaser.Math.Between(100, 150), Phaser.Math.Between(50, 175))
        }
        break;
    }
  }

  createLogAllEnemies() {
    this.children.getAll().forEach((child) => console.log(child))
  }

  createOrc(x:number, y:number) {
    this.anims.create({
      key: 'orcWalk',
      frames: this.anims.generateFrameNumbers('orc', { start: 0, end: 3 }),
      frameRate: 8,
      repeat: -1
    })
    const orc = this.add.sprite(200, 100, 'orc').play('orcWalk');
    orc.flipX = true

    this.tweens.add({
      targets: orc,
      x: x,
      y: y,
      duration: 1000,
      ease: 'Power1',
    }).on('complete', () => {
      this.tweens.add({
        targets: orc,
        x: Phaser.Math.Between(x-25, x+25),
        y: Phaser.Math.Between(y-25, y+25),
        duration: Phaser.Math.Between(2000, 4000),
        ease: 'Sine.easeInOut',
        yoyo: true,
        repeat: -1
      });
    })
  }

  createSkeleton(x:number, y:number) {
    this.anims.create({
      key: 'skeletonWalk',
      frames: this.anims.generateFrameNumbers('skeleton', { start: 0, end: 8 }),
      frameRate: 8,
      repeat: -1
    })
    const skeleton = this.add.sprite(200, 100, 'skeleton').play('skeletonWalk');
    skeleton.flipX = true

    this.tweens.add({
      targets: skeleton,
      x: x,
      y: y,
      duration: 1000,
      ease: 'Power1',
    }).on('complete', () => {
      this.tweens.add({
        targets: skeleton,
        x: Phaser.Math.Between(x-25, x+25),
        y: Phaser.Math.Between(y-25, y+25),
        duration: Phaser.Math.Between(2000, 4000),
        ease: 'Sine.easeInOut',
        yoyo: true,
        repeat: -1
      });
    })
  }

  createGoon(x:number, y:number) {
    this.anims.create({
      key: 'goonWalk',
      frames: this.anims.generateFrameNumbers('goon', { start: 0, end: 3 }),
      frameRate: 8,
      repeat: -1
    })
    const goon = this.add.sprite(200, 100, 'goon').play('goonWalk');
    goon.flipX = true

    this.tweens.add({
      targets: goon,
      x: x,
      y: y,
      duration: 1000,
      ease: 'Power1',
    }).on('complete', () => {
      this.tweens.add({
        targets: goon,
        x: Phaser.Math.Between(x-25, x+25),
        y: Phaser.Math.Between(y-25, y+25),
        duration: Phaser.Math.Between(2000, 4000),
        ease: 'Sine.easeInOut',
        yoyo: true,
        repeat: -1
      });
    })
  }

  createWizzard(x:number, y:number) {
    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('wizardAnim', { start: 0, end: 3 }),
      frameRate: 8,
      repeat: -1
    })
    const wizard = this.add.sprite(x, y, 'wizardAnim').play('walk');
    wizard.name = 'player'
  }
}
