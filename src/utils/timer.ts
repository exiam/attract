export default class Timer {
  public now: number;
  public dt: number;
  public last: number;
  public counter: number;
  public interval: number;
  public tick: boolean;

  constructor(interval: number) {
    this.interval = interval;
    
    this.now = 0;
    this.dt = 0;
    this.counter = 0;
    this.last = 0;
    this.tick = false;
  }

  public start() {
    this.now = this.last = performance.now();
  }

  public update() {
    if (this.last <= 0) {
      this.start();
    }

    this.now = performance.now();
    this.dt = this.now - this.last;
    this.last = performance.now();

    this.counter += this.dt;

    if (this.counter >= this.interval) {
      this.tick = true;
      this.counter = 0;
    } else {
      this.tick = false;
    }
  }

  public reset() {
    this.counter = 0;
    this.tick = false;
  }
}
