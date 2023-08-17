import Game from '../Game';
import Scene from '../scenes/scene';

export interface AbstractSceneConstructor {
  new (game: Game): Scene;
  readonly sceneKey: string;
}
