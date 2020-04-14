import Renderable from '../components/renderable.component';
import System from './system';
import Block from '../entities/block.entity';
import { SystemTypeEnum } from '../types/system.types';

class RenderSystem extends System {
  public static type = SystemTypeEnum.RENDER;

  public execute() {
    const entities = this.query('renderable');

    entities.forEach(entity => {
      const { position, ...render } = entity.getComponent(Renderable);

      if (entity.hasTag('block') && (entity as Block).highlight) {
        this.game.ctx.fillStyle = 'red';
      } else {
        this.game.ctx.fillStyle = render.color;
      }

      this.game.ctx.fillRect(
        position.x,
        position.y,
        render.width,
        render.height,
      );
    });
  }
}

RenderSystem.queries = {
  renderable: {
    components: [Renderable]
  }
};

export default RenderSystem;