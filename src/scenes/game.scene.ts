import Player from '../entities/player.entity';
import Scene from './scene';
import RenderSystem from '../systems/render.system';
import SpawnSystem from '../systems/spawn.system';
import MovementSystem from '../systems/movement.system';
import PlayerControlSystem from '../systems/player-control.system';
import CollisionManager from '../managers/collision.manager';
import Collider from '../components/collider.component';
import CollisionSystem from '../systems/collision.system';
import Block from '../entities/block.entity';

class GameScene extends Scene {
  public static sceneKey = 'game';

  public collisionManager: CollisionManager;

  public start() {
    this.collisionManager = new CollisionManager(this.game);
    this.addEntity(new Player());
  }

  public update(dt: number) {
    this.collisionManager.buildTree(
      this.entityManager.findByComponents([Collider]),
    );

    if (this.game.debug) {
      this.collisionManager.renderTree(this.game.ctx);

      const blocks = this.entityManager.findByTags(['block']) as Block[];
      for (const block of blocks) {
        block.highlight = false;
      }
    }

    
    super.update(dt);
  }

  public render(dt: number) {
    super.render(dt);

    const player = this.entityManager.findOneByTags<Player>(['player']);

    // Title
    this.game.ctx.fillStyle = '#444444';
    this.game.ctx.font = '16px Georgia';
    this.game.ctx.fillText(`Score: ${player.score}`, 0, 16);
  }
}

GameScene.systems = [
  RenderSystem,
  SpawnSystem,
  MovementSystem,
  PlayerControlSystem,
  CollisionSystem,
];

export { GameScene };
