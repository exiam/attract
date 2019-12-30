import Game from './Game';
import GameScene from './scenes/game.scene';
import MenuScene from './scenes/menu.scene';

new Game({
  canvas: 'game',
  width: 480,
  height: 800,
  scenes: [MenuScene, GameScene]
});
