import SceneManager from './managers/scene.manager';
import { IGameOptions } from './types/game.d';
import MouseController from './inputs/mouse.controller';

export default class Game {
  public options: IGameOptions;

  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;
  public sceneManager: SceneManager;
  public mouseController: MouseController;

  constructor(options: IGameOptions) {
    this.options = options;

    this.canvas = document.getElementById(options.canvas) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = options.width;
    this.canvas.height = options.height;

    // Initialize inputs
    this.mouseController = new MouseController(this.canvas);

    // Initialize scene manager
    this.sceneManager = new SceneManager(this, options.scenes);
    this.sceneManager.run(Object.keys(this.sceneManager.scenes)[0]);
  }

  public switchScene(sceneKey: string) {
    this.sceneManager.run(sceneKey);
  }
}

