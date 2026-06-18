import Phaser from "phaser";

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,

  width: 1280,
  height: 720,

  parent: "game-container",

  backgroundColor: "#87CEEB",

  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },

  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },

  scene: [],
};