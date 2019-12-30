import Entity from '../entities/entity';
import Game from '../Game';
import System from '../systems/system';
import EntityManager from '../managers/entity.manager';
import { ISystemConstructor } from '../types/system';
import SystemManager from '../managers/system.manager';

export default class Scene {
  public static systems: ISystemConstructor<System>[];

  public game: Game;
  public entityManager: EntityManager;
  public systemManager: SystemManager;

  constructor(game: Game) {
    this.game = game;
    this.entityManager = new EntityManager();
    this.systemManager = new SystemManager();

    (this.constructor as any).systems.forEach(
      (SystemClass: ISystemConstructor<System>) => {
        this.systemManager.registerSystem(new SystemClass(this));
      },
    );
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

  /**
   * Update scene by executing systems.
   *
   * @param {number} dt
   * @memberof Scene
   */
  public update(dt: number) {
    this.systemManager.systems.forEach(system => {
      if (!system.initialized) {
        system.initialize();
      }

      system.execute(dt);
    });
  }
}