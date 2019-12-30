import SceneManager from './managers/scene.manager';
import { IGameOptions } from './types/game.d';

export default class Game {
  public options: IGameOptions;

  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;
  public sceneManager: SceneManager;

  constructor(options: IGameOptions) {
    this.options = options;

    this.canvas = document.getElementById(options.canvas) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = options.width;
    this.canvas.height = options.height;

    this.sceneManager = new SceneManager(this, options.scenes);
    this.sceneManager.run(Object.keys(this.sceneManager.scenes)[0]);
  }

  public switchScene(sceneKey: string) {
    this.sceneManager.run(sceneKey);
  }
}

