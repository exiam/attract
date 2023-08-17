import { QuadTree } from '../utils/quad-tree';
import Game from '../Game';
import Entity from '../entities/entity';
import Collider from '../components/collider.component';
import Renderable from '../components/renderable.component';

export default class CollisionManager {
  public game: Game;
  public tree!: QuadTree;

  constructor(game: Game) {
    this.game = game;
    this.buildTree();
  }

  public buildTree(entities?: Entity[]) {
    this.tree = new QuadTree({
      x: 0,
      y: 0,
      width: this.game.canvas.width,
      height: this.game.canvas.height,
    });

    if (entities) {
      entities.forEach(entity => {
        this.registerEntity(entity);
      });
    }
  }

  public registerEntity(entity: Entity) {
    const {
      position: { x, y },
    } = entity.getComponent(Renderable);
    const { width, height } = entity.getComponent(Collider);

    this.tree.insert({ x, y, width, height }, entity.id);
  }

  /**
   * For debug purpose.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @memberof CollisionManager
   */
  public renderTree(ctx: CanvasRenderingContext2D) {
    this.tree.render(ctx);
  }
}
