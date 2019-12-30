import Game from '../Game';

export interface IScene {
  sceneKey: string;
  new?(game: Game): IScene;
  start?: () => void;
  update?: (dt: number) => void;
  end?: () => void;
}

export interface AbstractSceneConstructor {
  new (game: Game): IScene;
  sceneKey?: string;
}
