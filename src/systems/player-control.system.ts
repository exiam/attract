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

    movable.destination = this.game.inputs.mouse.click;
  }

  public execute(dt: number) {
    const player = this.query('player')[0] as Player;

    const {
      body: { position },
    } = player.getComponent(Renderable);
    const { x: posX, y: posY } = position;

    const mouseX = this.game.inputs.mouse.position.x;
    const mouseY = this.game.inputs.mouse.position.y;

    const toMouseX = mouseX - posX;
    const toMouseY = mouseY - posY;

    // Render line
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
