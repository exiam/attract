import Entity from './entity';
import Renderable from '../components/renderable.component';
import Movable from '../components/movable.component';
import Collider from '../components/collider.component';

const BLOCK_WIDTH = 16;
const BLOCK_HEIGHT = 16;

class Block extends Entity {
  public highlight: boolean;

  constructor(initialValues?: Partial<Renderable>) {
    super();

    this.highlight = false;

    this.addComponent(Movable, {
      latency: 16,
      velocity: { x: Math.random() > 0.5 ? 1 : -1, y: 1 },
      moving: true,
    });
    this.addComponent(Renderable, {
      position: { x: 0, y: 0 },
      width: BLOCK_WIDTH,
      height: BLOCK_HEIGHT,
      color: '#000000',
      ...initialValues,
    });
    this.addComponent(Collider, { width: BLOCK_WIDTH, height: BLOCK_HEIGHT });
  }
}

Block.tags = ['block'];

export default Block;
