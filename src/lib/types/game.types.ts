import { AbstractSceneConstructor } from "./scene.types";

export interface IGameOptions {
  canvas: string;
  width: number;
  height: number;
  scenes: AbstractSceneConstructor[];
  debug?: boolean;
  [key: string]: any;
}