import Renderable from '../components/renderable.component';
import System from './system';
import Block from '../entities/block.entity';
import { SystemTypeEnum } from '../types/system.types';

class RenderSystem extends System {
  public static type = SystemTypeEnum.RENDER;

  public execute() {
    const entities = this.query('renderable');

    entities.forEach(entity => {
      const { position, body, ...render } = entity.getComponent(Renderable);

      if (entity.hasTag('block') && (entity as Block).highlight) {
        this.game.ctx.strokeStyle = 'red';
      } else {
        this.game.ctx.strokeStyle = render.color;
      }

      this.game.ctx.beginPath();
      const vertices = body.vertices;
      this.game.ctx.moveTo(vertices[0].x, vertices[0].y);
      for (var j = 1; j < vertices.length; j += 1) {
        this.game.ctx.lineTo(vertices[j].x, vertices[j].y);
      }
      this.game.ctx.lineTo(vertices[0].x, vertices[0].y);
      this.game.ctx.lineWidth = 1;
      this.game.ctx.stroke();
    });
  }
}

RenderSystem.queries = {
  renderable: {
    components: [Renderable],
  },
};

export default RenderSystem;
