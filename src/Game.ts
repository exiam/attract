import SceneManager from './managers/scene.manager';
import { IGameOptions } from './types/game.types';
import MouseController from './inputs/mouse.controller';
import Stats from 'stats.js';

export default class Game {
  public options: IGameOptions;

  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;
  public inputs: { mouse: MouseController };
  public sceneManager: SceneManager;
  public stats: any;
  public debug: boolean;

  constructor(options: IGameOptions) {
    this.options = options;

    this.canvas = document.getElementById(options.canvas) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = options.width;
    this.canvas.height = options.height;

    this.debug = options.debug || false;

    // Initialize inputs
    this.inputs = {
      mouse: new MouseController(this.canvas),
    };

    this.stats = new Stats();
    this.stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
    (this.stats.dom as HTMLElement).id = 'stats';
    document.body.appendChild(this.stats.dom);
    
    // Initialize scene manager
    this.sceneManager = new SceneManager(this, options.scenes);
    this.sceneManager.run(Object.keys(this.sceneManager.scenes)[0]);
  }

  public switchScene(sceneKey: string) {
    this.sceneManager.run(sceneKey);
  }
}

