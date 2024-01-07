/// <reference path="./stats.js.d.ts">
import Game from './lib/Game';
import { MenuScene } from './scenes/menu.scene';
import { GameScene } from './scenes/game.scene';
import { GameOverScene } from './scenes/game-over.scene';

new Game({
  canvas: 'game',
  width: 480,
  height: 800,
  scenes: [MenuScene, GameScene, GameOverScene],
  debug: window.location.search === '?debug',
});
