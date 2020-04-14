import Scene from './scene';
import { GameScene } from './game.scene';
import Player from '../entities/player.entity';

export class GameOverScene extends Scene {
  public static sceneKey = 'gameover';
  public score: number = 0;

  public clickCallback = () => {
    this.game.switchScene('menu');
  };

  public start(prevScene: GameScene) {
    const player = prevScene.entityManager.findOneByTags<Player>(['player']);
    this.score = player.score;
    this.game.canvas.addEventListener('click', this.clickCallback);
  }

  public update() {
    // Title
    this.game.ctx.fillStyle = '#444444';
    this.game.ctx.font = '32px Georgia';
    this.game.ctx.fillText(
      'Game Over',
      this.game.canvas.width / 2 - 100,
      this.game.canvas.height / 2,
    );

    // Indication
    this.game.ctx.font = '16px Georgia';
    this.game.ctx.fillText(
      `Score: ${this.score}`,
      this.game.canvas.width / 2 + 10,
      this.game.canvas.height / 2 + 60,
    );
  }

  public end() {
    this.game.canvas.removeEventListener('click', this.clickCallback);
  }
}

