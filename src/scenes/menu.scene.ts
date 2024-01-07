import Scene from '../lib/scene';

export class MenuScene extends Scene {
  public static sceneKey = 'menu';

  public clickCallback = () => {
    this.game.switchScene('game');
  };

  public start() {
    this.game.canvas.addEventListener('click', this.clickCallback);
  }

  public update() {
    // Title
    this.game.ctx.fillStyle = '#444444';
    this.game.ctx.font = '32px Georgia';
    this.game.ctx.fillText(
      'Attract',
      this.game.canvas.width / 2 - 100,
      this.game.canvas.height / 2,
    );

    // Indication
    this.game.ctx.font = '16px Georgia';
    this.game.ctx.fillText(
      'Click to play',
      this.game.canvas.width / 2 + 10,
      this.game.canvas.height / 2,
    );
  }

  public end() {
    this.game.canvas.removeEventListener('click', this.clickCallback);
  }
}
