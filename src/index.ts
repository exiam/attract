class Game {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.getElementById('game') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = 480;
    this.canvas.height = 800;

    this.start();
  }

  public start(): void {
    this.update();
  }

  public update(): void {
    this.draw();
    requestAnimationFrame(() => this.update());
  }

  public draw(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = '#eeeeee';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export default new Game();
