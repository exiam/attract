import System from "../systems/system";
import { SystemTypeEnum } from "../types/system.types";

export default class SystemManager {
  public systems: { [key: string]: System[] };

  constructor() {
    this.systems = {
      [SystemTypeEnum.LOGIC]: [],
      [SystemTypeEnum.RENDER]: [],
    };
  }

  public registerSystem(system: System) {
    this.systems[(<typeof System>system.constructor).type].push(system);
  }

  public hasSystemFor(type: SystemTypeEnum) {
    return !!this.systems[type] && this.systems[type].length > 0;
  }
}