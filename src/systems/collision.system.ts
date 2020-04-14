import System from './system';
import Collider from '../components/collider.component';
import Entity from '../entities/entity';
import Renderable from '../components/renderable.component';
import Player from '../entities/player.entity';
import Block from '../entities/block.entity';

class CollisionSystem extends System {
  public intersects(e1: Entity, e2: Entity) {
    const {
      position: { x: x1, y: y1 },
    } = e1.getComponent(Renderable);
    const {
      position: { x: x2, y: y2 },
    } = e2.getComponent(Renderable);
    const { width: w1, height: h1 } = e1.getComponent(Collider);
    const { width: w2, height: h2 } = e2.getComponent(Collider);

    return x1 <= x2 + w2 && x2 <= x1 + w1 && y1 <= y2 + h2 && y2 <= y1 + h1;
  }

  public execute(dt: number) {
    // Only check collision on block around player
    const player = this.entityManager.findOneByTags<Player>(['player']);
    const playerNode = this.scene.collisionManager.tree.findNodeById(player.id);

    if (!playerNode) {
      return;
    }

    const colliderKeys = Object.keys(playerNode.children);

    for (const colliderKey of colliderKeys) {
      if (colliderKey === player.id) {
        continue;
      }

      const targetEntity = this.entityManager.entities[colliderKey];

      if (targetEntity) {
        if (this.game.debug && targetEntity.hasTag('block')) {
          (targetEntity as Block).highlight = true;
        }

        if (this.intersects(player, targetEntity)) {
          player.onColliderHit(targetEntity);

          if (targetEntity.hasTag('block')) {
            this.game.switchScene('gameover');
          }
        }
      }
    }
  }
}

CollisionSystem.queries = {
  collider: {
    components: [Collider, Renderable],
  },
};

export default CollisionSystem;
