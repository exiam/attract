import System from './system';
import { Engine } from 'matter-js';

class EngineSystem extends System {
  public execute(_dt: number) {
    Engine.update(this.scene.engine);
  }
}

export default EngineSystem;
