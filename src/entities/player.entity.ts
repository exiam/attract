import Renderable from '../components/renderable.component';
import Entity from './entity';
import Movable from '../components/movable.component';
import Collider from '../components/collider.component';
import { Bodies } from 'matter-js';

const PLAYER_WIDTH = 16;
const PLAYER_HEIGHT = 16;

class Player extends Entity {
  public score: number;

  constructor() {
    super();

    this.score = 0;

    const defaultPosition = { x: 50, y: 50 };
    this.addComponent(Renderable, {
      body: Bodies.rectangle(
        defaultPosition.x,
        defaultPosition.y,
        PLAYER_WIDTH,
        PLAYER_HEIGHT,
      ),
      position: defaultPosition,
      width: PLAYER_WIDTH,
      height: PLAYER_HEIGHT,
      color: '#69D2F5',
    });
    this.addComponent(Movable, { latency: 16, moving: false });
    this.addComponent(Collider, { width: PLAYER_WIDTH, height: PLAYER_HEIGHT });
  }

  public onColliderHit(_hit: Entity) {}
}

Player.tags = ['player'];

export default Player;
