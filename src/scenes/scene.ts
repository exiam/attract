import Entity from '../entities/entity';
import Game from '../Game';
import System from '../systems/system';
import EntityManager from '../managers/entity.manager';
import { ISystemConstructor, SystemTypeEnum } from '../types/system.types';
import SystemManager from '../managers/system.manager';
import CollisionManager from '../managers/collision.manager';

export default abstract class Scene {
  public static sceneKey: string = undefined;
  public static systems: ISystemConstructor<System>[];

  public game: Game;
  public entityManager: EntityManager;
  public systemManager: SystemManager;
  public collisionManager: CollisionManager;

  constructor(game: Game) {
    this.game = game;
    this.entityManager = new EntityManager();
    this.systemManager = new SystemManager();

    if ((<typeof Scene>this.constructor).systems) {
      (<typeof Scene>this.constructor).systems.forEach(
        (SystemClass: ISystemConstructor<System>) => {
          this.systemManager.registerSystem(new SystemClass(this));
        },
      );
    }
  }

  /**
   * Add entity to scene.
   *
   * @param {Entity} entity
   * @returns
   * @memberof Scene
   */
  public addEntity(entity: Entity) {
    this.entityManager.addEntity(entity);
    return this;
  }

  start?(prevScene?: Scene): void;
  end?(): void;

  /**
   * Update scene by executing systems.
   *
   * @param {number} dt
   * @memberof Scene
   */
  public update(dt: number) {
    this.systemManager.systems[SystemTypeEnum.LOGIC].forEach(system => {
      if (!system.initialized) {
        system.initialize();
      }

      system.execute(dt);
    });
  }

  /**
   * Render scene with render systems.
   *
   * @memberof Scene
   */
  public render(dt: number) {
    this.systemManager.systems[SystemTypeEnum.RENDER].forEach(system => {
      system.execute(dt);
    });
  }
}
