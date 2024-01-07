import { TSystemQueries, SystemTypeEnum } from '../lib/types/system.types';
import Entity from '../lib/entity';
import Scene from '../lib/scene';

export default abstract class System {
  public static type: SystemTypeEnum = SystemTypeEnum.LOGIC;
  public static queries: TSystemQueries;

  public scene: Scene;
  public initialized: boolean;

  constructor(scene: Scene) {
    this.scene = scene;
    this.initialized = false;
  }

  initialize() {
    this.initialized = true;
  }

  abstract execute(dt: number): void;

  query(queryKey: string): Entity[] {
    const query = (<typeof System>this.constructor).queries[queryKey];

    if (query.components) {
      return this.entityManager.findByComponents(query.components);
    }

    if (query.tags) {
      return this.entityManager.findByTags(query.tags);
    }

    return [];
  }

  get game() {
    return this.scene.game;
  }

  get entityManager() {
    return this.scene.entityManager;
  }
}
