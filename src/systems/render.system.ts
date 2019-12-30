import Renderable from '../components/renderable.component';
import System from './system';
import Transform from '../components/transform.component';

class RenderSystem extends System {
  public execute() {
    const entities = this.query('renderable');

    entities.forEach(entity => {
      const render = entity.getComponent(Renderable);
      const { position } = entity.getComponent(Transform);

      this.game.ctx.fillStyle = render.color;
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
    components: [Renderable, Transform]
  }
};

export default RenderSystem;