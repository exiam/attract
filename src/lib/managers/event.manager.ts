class EventManager {
  public listeners: { [key: string]: Array<(value?: any) => void> };

  constructor() {
    this.listeners = {};
  }

  /**
   * Add listener.
   *
   * @param {string} event
   * @param {() => void} callback
   * @memberof EventManager
   */
  addListener(event: string, callback: (value?: any) => void): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  /**
   * Dispatch event.
   *
   * @param {string} event
   * @param {*} [value]
   * @returns {void}
   * @memberof EventManager
   */
  dispatch(event: string, value?: any): void {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event].forEach(callback => {
      callback(value);
    });
  }
}

export default new EventManager();
