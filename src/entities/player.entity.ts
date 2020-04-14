import Renderable from '../components/renderable.component';
import Entity from './entity';
import Movable from '../components/movable.component';
import Collider from '../components/collider.component';

const PLAYER_WIDTH = 16;
const PLAYER_HEIGHT = 16;

class Player extends Entity {
  public score: number;

  constructor() {
    super();

    this.score = 0;

    this.addComponent(Renderable, {
      position: { x: 0, y: 0 },
      width: PLAYER_WIDTH,
      height: PLAYER_HEIGHT,
      color: '#69D2F5',
    });
    this.addComponent(Movable, { latency: 16, moving: false });
    this.addComponent(Collider, { width: PLAYER_WIDTH, height: PLAYER_HEIGHT });
  }

  public onColliderHit(hit: Entity) {}
}

Player.tags = ['player'];

export default Player;
