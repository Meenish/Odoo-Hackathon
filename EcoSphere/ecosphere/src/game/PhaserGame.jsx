import { useEffect, useRef } from "react";
import Phaser from "phaser";
import MainScene from "./MainScene";

export default function PhaserGame() {
  const gameRef = useRef(null);

  useEffect(() => {
    const game = new Phaser.Game({
      type: Phaser.AUTO,

      width: 1280,
      height: 720,

      parent: gameRef.current,

      backgroundColor: "#000000",

      scene: [MainScene],
    });

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div ref={gameRef}></div>;
}