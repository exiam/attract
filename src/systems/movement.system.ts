import System from './system';
import Movable from '../components/movable.component';
import Player from '../entities/player.entity';
import Renderable from '../components/renderable.component';

class MovementSystem extends System {
  public execute(dt: number) {
    const entities = this.query('movable');

    entities.forEach(entity => {
      const movement = entity.getComponent(Movable);
      const { position } = entity.getComponent(Renderable);

      if (movement.destination) {
        const toPointX = movement.destination.x - position.x;
        const toPointY = movement.destination.y - position.y;

        position.x += toPointX / movement.latency;
        position.y += toPointY / movement.latency;

        if (entity.hasTag('player')) {
          (entity as Player).score += Math.round(
            Math.abs(toPointX / movement.latency) +
              Math.abs(toPointX / movement.latency),
          );
        }
      }

      if (movement.velocity) {
        position.x += movement.velocity.x;
        position.y += movement.velocity.y;
      }

      // Check boundaries
      if (position.y > this.game.canvas.height && !entity.hasTag('player')) {
        this.entityManager.removeEntity(entity);
        return;
      }

      if (position.x > this.game.canvas.width) {
        position.x = 0;
      } else if (position.x < 0) {
        position.x = this.game.canvas.width;
      }
    });
  }
}

MovementSystem.queries = {
  movable: {
    components: [Movable, Renderable],
  },
};

export default MovementSystem;
