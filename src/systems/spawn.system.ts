import System from './system';
import Block from '../entities/block.entity';
import Timer from '../utils/timer';

const SPAWN_INTERVAL = 500;

export default class SpawnSystem extends System {
  public spawnTimer: Timer;

  public initialize() {
    this.spawnTimer = new Timer(SPAWN_INTERVAL);
    super.initialize();
  }

  public execute() {
    this.spawnTimer.update();

    if (this.spawnTimer.tick) {
      this.scene.addEntity(
        new Block({
          position: { x: Math.random() * this.game.canvas.width, y: 0 },
        }),
      );
    }
  }
}
