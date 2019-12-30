import Renderable from '../components/renderable.component';
import Entity from './entity';
import Movable from '../components/movable.component';
import Transform from '../components/transform.component';

class Player extends Entity {
  constructor() {
    super();

    this.addComponent(Transform, { position: { x: 0, y: 0 } });
    this.addComponent(Renderable, {
      width: 32,
      height: 32,
      color: '#69D2F5',
    });
    this.addComponent(Movable, { latency: 16, moving: false });
  }
}

Player.tags = ['player'];

export default Player;
