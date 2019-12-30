import Game from '../Game';
import { IScene, AbstractSceneConstructor } from '../types/scene.d';

export default class SceneManager {
  public game: Game;
  public scenes: { [key: string]: IScene };
  public currentScene: IScene;

  public lastTime: number;

  constructor(game: Game, Scenes: AbstractSceneConstructor[]) {
    this.game = game;

    this.scenes = {};
    this.load(Scenes);

    this.lastTime = 0;
  }

  public load(Scenes: AbstractSceneConstructor[]) {
    for (const Scene of Scenes) {
      const instance = new Scene(this.game);
      this.scenes[instance.sceneKey] = instance;
    }
  }

  public run(scene: string) {
    if (
      this.currentScene != null &&
      typeof this.currentScene.end !== 'undefined'
    ) {
      this.currentScene.end();
    }

    this.currentScene = this.scenes[scene];
    this.currentScene.start();

    this.loop();
  }

  public loop() {
    const now = performance.now();

    // Render
    this.game.ctx.clearRect(
      0,
      0,
      this.game.canvas.width,
      this.game.canvas.height,
    );

    const delta = now - this.lastTime;

    this.currentScene.update(delta / 1000);

    this.lastTime = now;

    requestAnimationFrame(() => {
      this.loop();
    });
  }
}
