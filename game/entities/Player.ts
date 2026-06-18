import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  keys!: {
    W: Phaser.Input.Keyboard.Key;
    A: Phaser.Input.Keyboard.Key;
    S: Phaser.Input.Keyboard.Key;
    D: Phaser.Input.Keyboard.Key;
  };

  speed = 250;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number
  ) {
    super(scene, x, y, "__player");

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setDisplaySize(40, 40);

    this.cursors =
      scene.input.keyboard!.createCursorKeys();

    this.keys = scene.input.keyboard!.addKeys({
      W: Phaser.Input.Keyboard.KeyCodes.W,
      A: Phaser.Input.Keyboard.KeyCodes.A,
      S: Phaser.Input.Keyboard.KeyCodes.S,
      D: Phaser.Input.Keyboard.KeyCodes.D,
    }) as any;
  }

  update() {
    this.setVelocity(0);

    if (this.keys.W.isDown)
      this.setVelocityY(-this.speed);

    if (this.keys.S.isDown)
      this.setVelocityY(this.speed);

    if (this.keys.A.isDown)
      this.setVelocityX(-this.speed);

    if (this.keys.D.isDown)
      this.setVelocityX(this.speed);
  }
}