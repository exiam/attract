type MouseEventKey = 'click' | 'mousemove';

export default class MouseController {
  public element: HTMLCanvasElement;

  public position: { x: number, y: number };
  public click: { x: number, y: number } | undefined;
  public listeners: { [key: string]: Array<() => void>} ; 

  constructor(element: HTMLCanvasElement) {
    this.element = element;

    this.position = { x: 0, y: 0 };

    this.element.addEventListener('mousemove', (e: any) => this.onMouseMove(e));
    this.element.addEventListener('click', (e: any) => this.onClick(e));

    this.listeners = { 'click': [], 'mousemove': [] };
  }

  private onMouseMove(e: MouseEvent) {
    this.position = { x: e.clientX, y: e.clientY };
    
    this.listeners['mousemove'].forEach(callback => {
      callback();
    });
  }

  private onClick(e: MouseEvent) {
    this.click = { x: e.clientX, y: e.clientY };

    this.listeners['click'].forEach(callback => {
      callback();
    });
  }

  public on(event: MouseEventKey, callback: () => void) {
    this.listeners[event].push(callback);
  }
}