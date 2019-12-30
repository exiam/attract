export interface IComponentConstructor<T> {
  new (): T;
}

export type Point = { x: number, y: number };