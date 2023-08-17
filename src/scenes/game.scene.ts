import Player from '../entities/player.entity';
import Scene from './scene';
import RenderSystem from '../systems/render.system';
import SpawnSystem from '../systems/spawn.system';
import MovementSystem from '../systems/movement.system';
import PlayerControlSystem from '../systems/player-control.system';
import CollisionManager from '../managers/collision.manager';
import { Engine } from 'matter-js';
import EngineSystem from '../systems/engine.system';

class GameScene extends Scene {
  public static sceneKey = 'game';

  public start() {
    this.engine = Engine.create();
    this.engine.world.gravity.y = 0.5;
    this.collisionManager = new CollisionManager(this.game);
    this.addEntity(new Player());
  }

  public render(dt: number) {
    super.render(dt);

    const player = this.entityManager.findOneByTags<Player>([
      'player',
    ]) as Player;

    // Title
    this.game.ctx.fillStyle = '#444444';
    this.game.ctx.font = '16px Georgia';
    this.game.ctx.fillText(`Score: ${player.score}`, 0, 16);
  }
}

GameScene.systems = [
  SpawnSystem,
  MovementSystem,
  EngineSystem,
  PlayerControlSystem,
  RenderSystem,
];

export { GameScene };
