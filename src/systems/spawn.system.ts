import System from './system';
import Block from '../entities/block.entity';
import Timer from '../lib/utils/timer';
import { Body } from 'matter-js';
import Renderable from '../lib/components/renderable.component';

const SPAWN_INTERVAL = 500;
export default class SpawnSystem extends System {
  public spawnTimer!: Timer;

  public initialize() {
    this.spawnTimer = new Timer(SPAWN_INTERVAL);
    super.initialize();
  }

  public execute() {
    this.spawnTimer.update();

    if (this.spawnTimer.tick) {
      const block = new Block({
        position: { x: Math.random() * this.game.canvas.width, y: 0 },
      });

      const renderComponent = block.getComponent(Renderable);
      Body.applyForce(renderComponent.body, renderComponent.position, {
        x: (Math.random() * (-5 - 5) + 5) / 1000,
        y: 0,
      });

      this.scene.addEntity(block);
    }
  }
}
