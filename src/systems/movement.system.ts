import System from './system';
import Movable from '../components/movable.component';
import Player from '../entities/player.entity';
import Renderable from '../components/renderable.component';
import { Body } from 'matter-js';

class MovementSystem extends System {
  public execute(dt: number) {
    const entities = this.query('movable');

    entities.forEach(entity => {
      const movement = entity.getComponent(Movable);
      const { position: entityPosition, body } = entity.getComponent(
        Renderable,
      );
      const position = body.position;

      // Manage player movement
      if (entity.hasTag('player')) {
        // First apply force to disable gravity effect
        Body.applyForce(body, body.position, {
          x:
            -this.scene.engine.world.gravity.x *
            this.scene.engine.world.gravity.scale *
            body.mass,
          y:
            -this.scene.engine.world.gravity.y *
            this.scene.engine.world.gravity.scale *
            body.mass,
        });

        // Then calculate player movement
        const destination = {
          x: movement.destination ? movement.destination.x : position.x,
          y: movement.destination ? movement.destination.y : position.y,
        };
        const toPointX = destination.x - position.x;
        const toPointY = destination.y - position.y;

        if (Math.round(toPointX) !== 0 || Math.round(toPointY) !== 0) {
          Body.setAngularVelocity(
            body,
            toPointX / destination.x + toPointY / destination.y,
          );
          Body.setVelocity(body, {
            x: toPointX / movement.latency,
            y: toPointY / movement.latency,
          });
          Body.setPosition(body, {
            x: body.position.x + toPointX / movement.latency,
            y: body.position.y + toPointY / movement.latency,
          });

          entityPosition.x = body.position.x;
          entityPosition.y = body.position.y;

          (entity as Player).score += Math.round(
            Math.abs(toPointX / movement.latency) +
              Math.abs(toPointX / movement.latency),
          );
        } else if (movement.destination) {
          // Cancel destination
          movement.destination = null;
        }
      }

      // Check boundaries
      if (position.y > this.game.canvas.height && !entity.hasTag('player')) {
        this.scene.removeEntity(entity);
        return;
      }

      if (position.x > this.game.canvas.width) {
        Body.setPosition(body, { x: 0, y: position.y });
      } else if (position.x < 0) {
        Body.setPosition(body, { x: this.game.canvas.width, y: position.y });
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
