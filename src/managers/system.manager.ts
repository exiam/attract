import System from "../systems/system";

export default class SystemManager {
  public systems: System[];

  constructor() {
    this.systems = [];
  }

  public registerSystem(system: System) {
    this.systems.push(system);
  }
}