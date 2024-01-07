import Game from '../Game';
import Scene from '../lib/scene';

export interface AbstractSceneConstructor {
  new (game: Game): Scene;
  readonly sceneKey: string;
}
