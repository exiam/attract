import EntityManager from '../managers/entity.manager';
import Scene from '../scenes/scene';
import { IComponentConstructor } from './component';

export type TSystemQuery = {
  components?: IComponentConstructor<any>[];
  tags?: string[],
  options?: any;
};
export type TSystemQueries = { [key: string]: TSystemQuery };

export interface ISystemConstructor<T> {
  new (scene: Scene): T;
}
