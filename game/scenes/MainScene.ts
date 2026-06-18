import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
  private player!: Phaser.GameObjects.Rectangle;
  private sign!: Phaser.GameObjects.Rectangle;
  private tree!: Phaser.GameObjects.Rectangle;
  private mansion!: Phaser.GameObjects.Rectangle;
  private dialogText!: Phaser.GameObjects.Text;
  private interactionPrompt!: Phaser.GameObjects.Text;

  private keys!: {
    W: Phaser.Input.Keyboard.Key;
    A: Phaser.Input.Keyboard.Key;
    S: Phaser.Input.Keyboard.Key;
    D: Phaser.Input.Keyboard.Key;
  };

  private interactionKey!: Phaser.Input.Keyboard.Key;
  private escapeKey!: Phaser.Input.Keyboard.Key;

  private speed = 5;

  constructor() {
    super("MainScene");
  }

  create() {
    // Grass Background
    this.cameras.main.setBackgroundColor("#7ec850");

    // Player
    this.player = this.add.rectangle(300, 300, 40, 40, 0xffff00);

    // Curiosity Tree
    this.add.circle(700, 250, 60, 0x228b22);
    this.tree = this.add.rectangle(700, 320, 25, 60, 0x8b4513);

    // Welcome Sign
    this.sign = this.add.rectangle(500, 450, 40, 40, 0x654321);

    // Mansion Placeholder
    this.mansion = this.add.rectangle(1100, 250, 250, 180, 0x8b7355);

    // Labels
    this.add.text(630, 170, "Curiosity Tree", {
      color: "#000",
    });

    this.add.text(450, 500, "Welcome Sign", {
      color: "#000",
    });

    this.add.text(1040, 350, "Mansion", {
      color: "#000",
    });

    // Controls
    this.keys = this.input.keyboard!.addKeys({
      W: Phaser.Input.Keyboard.KeyCodes.W,
      A: Phaser.Input.Keyboard.KeyCodes.A,
      S: Phaser.Input.Keyboard.KeyCodes.S,
      D: Phaser.Input.Keyboard.KeyCodes.D,
    }) as any;

    this.interactionKey = this.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.E,
    );

    this.escapeKey = this.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.ESC,
    );

    // Interaction Prompt
    this.interactionPrompt = this.add.text(0, 0, "[E] Interact", {
      fontSize: "16px",
      color: "#ffffff",
      backgroundColor: "#000000",
      padding: {
        x: 8,
        y: 4,
      },
    });
    this.interactionPrompt.setOrigin(0.5);
    this.interactionPrompt.setVisible(false);

    // Dialogue Box
    this.dialogText = this.add.text(40, 560, "", {
      fontSize: "22px",
      color: "#ffffff",
      backgroundColor: "#000000",
      padding: {
        x: 15,
        y: 15,
      },
      wordWrap: {
        width: 1200,
      },
    });
    this.dialogText.setVisible(false);
  }

  update() {
    // Movement
    if (this.keys.W.isDown) {
      this.player.y -= this.speed;
    }

    if (this.keys.S.isDown) {
      this.player.y += this.speed;
    }

    if (this.keys.A.isDown) {
      this.player.x -= this.speed;
    }

    if (this.keys.D.isDown) {
      this.player.x += this.speed;
    }

    // World Boundaries
    this.player.x = Phaser.Math.Clamp(this.player.x, 20, 1260);

    this.player.y = Phaser.Math.Clamp(this.player.y, 20, 700);

    // Check interaction targets
    const targets = [
      {
        name: "Welcome Sign",
        object: this.sign,
        text: "Welcome to UditVerse!\n\nA world built through curiosity, creativity, and persistence.\n\nPress ESC to close.",
        offsetY: -40,
      },
      {
        name: "Curiosity Tree",
        object: this.tree,
        text: "Curiosity Tree:\n\n'Every project starts with a question.'\n\nPress ESC to close.",
        offsetY: -60,
      },
      {
        name: "Mansion",
        object: this.mansion,
        text: "Udit's Mansion:\n\n'Explore the rooms to learn more about my coding journey, projects, and future plans.'\n\nPress ESC to close.",
        offsetY: -110,
      },
    ];

    let closestTarget = null;
    let minDistance = 100; // Interaction radius

    for (const target of targets) {
      const dist = Phaser.Math.Distance.Between(
        this.player.x,
        this.player.y,
        target.object.x,
        target.object.y
      );

      if (dist < minDistance) {
        minDistance = dist;
        closestTarget = target;
      }
    }

    if (closestTarget) {
      // Show prompt above the target
      this.interactionPrompt.setPosition(
        closestTarget.object.x,
        closestTarget.object.y + closestTarget.offsetY
      );
      this.interactionPrompt.setVisible(true);

      // Handle interaction key press
      if (Phaser.Input.Keyboard.JustDown(this.interactionKey)) {
        this.dialogText.setText(closestTarget.text);
        this.dialogText.setVisible(true);
      }
    } else {
      // Hide prompt if too far from any interactive object
      this.interactionPrompt.setVisible(false);
    }

    // Hide Dialogue on ESC key press
    if (Phaser.Input.Keyboard.JustDown(this.escapeKey)) {
      this.dialogText.setVisible(false);
    }
  }
}
