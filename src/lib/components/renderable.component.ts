import { Point } from '../types/component.types';
import { Body } from 'matter-js';

export default class Renderable {
  public body!: Body;
  public position!: Point;
  public width!: number;
  public height!: number;
  public color!: string;
}
