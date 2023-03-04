type MonsterType = 'orc' | 'zombie' | 'skeleton';

export default class LittleGuyScene extends Phaser.Scene {

  background: Phaser.GameObjects.TileSprite | undefined;
  walls: Phaser.GameObjects.TileSprite | undefined;
  wizard: Phaser.GameObjects.Sprite | undefined;
  healthText: Phaser.GameObjects.Text | undefined;

  constructor() {
    super('helloworld')
  }


  preload() {
    this.load.image('floor', './assets/floor_1.png')
    this.load.image('wall', './assets/wall_mid.png') 
    this.load.image('blood', './assets/blood.png')

    this.load.audio('squish', './assets/squish.mp3') 
    this.load.audio('sword', './assets/sword.mp3')
    this.load.audio('hit', './assets/umph.mp3')
    this.load.audio('music', './assets/dungeon_song.mp3')

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
    this.sound.play('music', {seek: 15, loop: true})
    this.background = this.add.tileSprite(0,0, 20000, 800, 'floor')
    this.walls = this.add.tileSprite(0,0, 20000, 25, 'wall')
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

  killEnemy(enemy: Phaser.GameObjects.Sprite) {
      this.tweens.add({
        targets: enemy,
        angle: 90,
        duration: 500,
        ease: 'Power1',
      }).on('complete', () => {
        this.sound.play('squish')
        this.bloodSplatter(enemy.x, enemy.y)
        enemy.destroy()
      })
  }


  killAllEnemies() {
    this.children.getAll()
    .filter((child) => child.name === 'monster')
    .forEach((child) => this.killEnemy(child as Phaser.GameObjects.Sprite));
  }

  spawnRoom() {
    this.createMonsters('orc', Phaser.Math.Between(0, 3))
    this.createMonsters('skeleton',Phaser.Math.Between(1, 3))
    this.createMonsters('zombie',Phaser.Math.Between(0, 3))
  }

  scrollBackground() {
    if(!this.background) return;
    this.tweens.add({
      name: 'scroll',
      targets: [this.background, this.walls],
      x: this.background.x - 100,
      duration: 1000,
      ease: 'Power1',
    });
  }

  nextRoom() {
    this.wizard?.setPosition(25, 100)
    this.killAllEnemies()
    this.time.delayedCall(500, () => {
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

  createOrc(x:number, y:number) {
    this.anims.create({
      key: 'orcWalk',
      frames: this.anims.generateFrameNumbers('orc', { start: 0, end: 3 }),
      frameRate: 8,
      repeat: -1
    })
    const orc = this.add.sprite(200, 100, 'orc').play('orcWalk');
    orc.flipX = true
    orc.name = 'monster'

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
    skeleton.name = 'monster'

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
    goon.name = 'monster'

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

  attackPlayer() {
    if(!this.wizard) return;
    const attackers = this.children.getAll().filter((child) => child.name === 'monster')
    const attacker = attackers[Phaser.Math.Between(0, attackers.length-1)]

    this.tweens.add({
      targets: attacker,
      x: this.wizard.x,
      y: this.wizard.y,
      duration: 250,
      ease: 'Sine.easeInOut',
      yoyo: true,
    })
    this.time.delayedCall(125, () => {
      if(!this.wizard) return;
      this.sound.play('hit', { seek: 0.5 });
      this.bloodSplatter(this.wizard.x, this.wizard.y)
    })
  }

  attackMonster() {
    if(!this.wizard) return;
    const monsters = this.children.getAll().filter((child) => child.name === 'monster')
    const monster = monsters[Phaser.Math.Between(0, monsters.length-1)] as Phaser.GameObjects.Sprite
    //make a particle effect that goes from the wizard to the monster
    //make a blood splatter effect on the monster

    this.tweens.add({
      targets: this.wizard,
      x: monster.x,
      y: monster.y,
      duration: 250,
      ease: 'Sine.easeInOut',
      yoyo: true,
    })

    this.time.delayedCall(125, () => {
      this.sound.play('sword');
      this.killEnemy(monster)
    })

    if(monsters.length === 1) {
      this.nextRoom()
    }

  }

  createWizzard(x:number, y:number) {
    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('wizardAnim', { start: 0, end: 3 }),
      frameRate: 8,
      repeat: -1
    })
    const wizard = this.add.sprite(x, y, 'wizardAnim').play('walk').setDataEnabled();
    wizard.name = 'player'
    this.wizard = wizard
    wizard.setData('health', 100)
  }

  damagePlayer(damage:number) {
    if(!this.wizard) return;
    this.bloodSplatter(this.wizard.x, this.wizard.y)
  }
}
