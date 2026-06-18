"use client";

import { useEffect } from "react";
import Phaser from "phaser";

import { gameConfig } from "@/game/config";
import BootScene from "@/game/scenes/BootScene";
import MainScene from "@/game/scenes/MainScene";

export default function GameCanvas() {
  useEffect(() => {
    const config = {
      ...gameConfig,
      scene: [BootScene, MainScene],
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="game-container" className="w-full h-screen" />;
}
