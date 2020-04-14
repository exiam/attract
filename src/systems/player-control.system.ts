import System from './system';
import Player from '../entities/player.entity';
import Renderable from '../components/renderable.component';
import Movable from '../components/movable.component';

class PlayerControlSystem extends System {
  public initialize() {
    this.game.inputs.mouse.on('click', () => {
      this.onClick();
    });

    super.initialize();
  }

  public onClick() {
    const player = this.query('player')[0] as Player;
    const movable = player.getComponent(Movable);

    movable.destination = { ...this.game.inputs.mouse.click };
  }

  public execute(dt: number) {
    const player = this.query('player')[0] as Player;

    const { position, ...render } = player.getComponent(Renderable);

    const posX = position.x + render.width / 2;
    const posY = position.y + render.height / 2;

    const toMouseX = this.game.inputs.mouse.position.x - posX;
    const toMouseY = this.game.inputs.mouse.position.y - posY;

    this.game.ctx.beginPath();
    this.game.ctx.moveTo(posX, posY);
    this.game.ctx.lineTo(posX + toMouseX, posY + toMouseY);
    this.game.ctx.strokeStyle = '#ff0000';
    this.game.ctx.stroke();
  }
}

PlayerControlSystem.queries = {
  player: {
    tags: ['player'],
  },
};

export default PlayerControlSystem;
