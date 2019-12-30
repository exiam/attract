import Player from '../entities/player.entity';
import Scene from './scene';
import RenderSystem from '../systems/render.system';
import SpawnSystem from '../systems/spawn.system';
import MovementSystem from '../systems/movement.system';
import PlayerControlSystem from '../systems/player-control.system';

class GameScene extends Scene {
  public readonly sceneKey = 'game';

  public start() {
    this.addEntity(new Player())
  }
}

GameScene.systems = [RenderSystem, SpawnSystem, MovementSystem, PlayerControlSystem];

export default GameScene;