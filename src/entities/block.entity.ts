import Entity from './entity';
import Renderable from '../components/renderable.component';
import Movable from '../components/movable.component';
import Transform from '../components/transform.component';

class Block extends Entity {
  constructor(initialValues?: Partial<Transform>) {
    super();

    this.addComponent(Transform, {
      position: { x: 0, y: 0 },
      ...initialValues,
    });
    this.addComponent(Movable, {
      latency: 16,
      velocity: { x: Math.random() > 0.5 ? 1 : -1, y: 1 },
      moving: true,
    });
    this.addComponent(Renderable, {
      width: 32,
      height: 32,
      color: '#000000',
    });
  }
}

Block.tags = ['block'];

export default Block;
