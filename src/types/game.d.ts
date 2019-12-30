import { AbstractSceneConstructor } from "./scene";

export interface IGameOptions {
  canvas: string;
  width: number;
  height: number;
  scenes: AbstractSceneConstructor[];
  [key: string]: any;
}