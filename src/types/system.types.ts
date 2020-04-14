import Scene from '../scenes/scene';
import { IComponentConstructor } from './component.types';

export type TSystemQuery = {
  components?: IComponentConstructor<any>[];
  tags?: string[],
  options?: any;
};
export type TSystemQueries = { [key: string]: TSystemQuery };

export interface ISystemConstructor<T> {
  new (scene: Scene): T;
}

export const SystemTypes = {
  LOGIC: 'logic',
  RENDER: 'render'
};

export enum SystemTypeEnum {
  LOGIC = 'logic',
  RENDER = 'render',
}