import Entity from './entity';
import Renderable from '../components/renderable.component';
import Movable from '../components/movable.component';
import Collider from '../components/collider.component';
import { Bodies } from 'matter-js';

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

    const defaultPosition = initialValues?.position || { x: 0, y: 0 };
    this.addComponent(Renderable, {
      body: Bodies.rectangle(
        defaultPosition.x,
        defaultPosition.y,
        BLOCK_WIDTH,
        BLOCK_HEIGHT,
      ),
      position: defaultPosition,
      width: BLOCK_WIDTH,
      height: BLOCK_HEIGHT,
      color: '#000000',
    });
    this.addComponent(Collider, { width: BLOCK_WIDTH, height: BLOCK_HEIGHT });
  }
}

Block.tags = ['block'];

export default Block;
