import Game from '../Game';
import { AbstractSceneConstructor } from '../types/scene.types';
import Scene from '../scenes/scene';
import { SystemTypeEnum } from '../types/system.types';

export default class SceneManager {
  public game: Game;
  public scenes: { [key: string]: AbstractSceneConstructor };
  public currentScene!: Scene;

  public lastTime: number;

  constructor(game: Game, Scenes: AbstractSceneConstructor[]) {
    this.game = game;

    this.scenes = {};
    for (const SceneClass of Scenes) {
      this.scenes[SceneClass.sceneKey] = SceneClass;
    }

    this.lastTime = 0;
  }

  public run(scene: string) {
    let prevScene: Scene | undefined = undefined;
    if (this.currentScene != null) {
      if (typeof this.currentScene.end !== 'undefined') {
        this.currentScene.end();
      }

      prevScene = this.currentScene;
    }

    this.currentScene = new this.scenes[scene](this.game);
    this.currentScene.start?.(prevScene);

    this.loop();
  }

  public loop() {
    this.game.stats.begin();
    const now = performance.now();

    // Render
    this.game.ctx.clearRect(
      0,
      0,
      this.game.canvas.width,
      this.game.canvas.height,
    );

    const delta = (now - this.lastTime) / 1000;

    this.currentScene.update(delta);
    this.currentScene.render(delta);

    this.lastTime = now;
    this.game.stats.end();

    if (this.currentScene.systemManager.hasSystemFor(SystemTypeEnum.LOGIC)) {
      requestAnimationFrame(() => {
        this.loop();
      });
    }
  }
}
