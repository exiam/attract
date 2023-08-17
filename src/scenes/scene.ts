import Entity from '../entities/entity';
import Game from '../Game';
import System from '../systems/system';
import EntityManager from '../managers/entity.manager';
import { ISystemConstructor, SystemTypeEnum } from '../types/system.types';
import SystemManager from '../managers/system.manager';
import CollisionManager from '../managers/collision.manager';
import Renderable from '../components/renderable.component';
import { World, Engine } from 'matter-js';

export default abstract class Scene {
  public static sceneKey: string;
  public static systems: ISystemConstructor<System>[];

  public game: Game;
  public entityManager: EntityManager;
  public systemManager: SystemManager;
  public collisionManager!: CollisionManager;
  public engine!: Engine;

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

    if (this.engine && entity.hasComponent(Renderable.name)) {
      const renderProps = entity.getComponent(Renderable);
      
      if (renderProps.body) {
        World.add(this.engine.world, renderProps.body);
      }
    }

    return this;
  }

  /**
   * Remove entity from scene.
   * 
   * @param entity 
   */
  public removeEntity(entity: Entity) {
    if (this.engine && entity.hasComponent(Renderable.name)) {
      const renderProps = entity.getComponent(Renderable);

      if (renderProps.body) {
        World.remove(this.engine.world, renderProps.body);
      }
    }

    this.entityManager.removeEntity(entity);
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
