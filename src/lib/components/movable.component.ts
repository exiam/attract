export default class Movable {
  public latency!: number;
  public moving!: boolean;
  public destination?: { x: number; y: number } | null | undefined;
  public velocity?: { x: number; y: number } | null | undefined;
}
