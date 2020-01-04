import Entity from '../entities/entity';
import { uuidv4 } from '../utils/uuid';
import { IComponentConstructor } from '../types/component';

export default class EntityManager {
  public entities: { [key: string]: Entity };
  public index: { [key: string]: string[] };
  public tagIndex: { [key: string]: string[] };

  constructor() {
    this.entities = {};
    this.index = {};
    this.tagIndex = {};
  }

  /**
   * Add entity.
   *
   * @param {Entity} entity
   * @memberof EntityManager
   */
  public addEntity(entity: Entity) {
    let id: string;

    do {
      id = uuidv4();
    } while (this.entities[id]);

    entity.id = id;
    this.entities[entity.id] = entity;

    Object.keys(entity.components).forEach(component => {
      if (!this.index[component]) {
        this.index[component] = [];
      }

      this.index[component].push(entity.id);
    });

    if ((<typeof Entity>entity.constructor).tags) {
      (<typeof Entity>entity.constructor).tags.forEach(tag => {
        if (!this.tagIndex[tag]) {
          this.tagIndex[tag] = [];
        }

        this.tagIndex[tag].push(entity.id);
      });
    }
  }

  /**
   * Remove entity.
   *
   * @param {Entity} entity
   * @memberof EntityManager
   */
  public removeEntity(entity: Entity) {
    Object.keys(entity.components).forEach(component => {
      const index = this.index[component].indexOf(entity.id);
      this.index[component].splice(index, 1);
    });

    if ((<typeof Entity>entity.constructor).tags) {
      (<typeof Entity>entity.constructor).tags.forEach(tag => {
        const index = this.tagIndex[tag].indexOf(entity.id);
        this.tagIndex[tag].splice(index, 1);
      });
    }

    delete this.entities[entity.id];
  }

  /**
   * Return entities filtered by components.
   *
   * @param {IComponentConstructor<any>[]} components
   * @returns {Entity[]}
   * @memberof EntityManager
   */
  public findByComponents(components: IComponentConstructor<any>[]): Entity[] {
    const { name: firstComponent } = components[0];
    return this.index[firstComponent].reduce((results, entityId) => {
      const entity = this.entities[entityId];
      if (components.every(({ name }) => entity.hasComponent(name))) {
        results.push(entity);
      }
      return results;
    }, []);
  }

  /**
   * Return entities filtered by tags.
   *
   * @param {string[]} tags
   * @returns {Entity[]}
   * @memberof EntityManager
   */
  public findByTags(tags: string[]): Entity[] {
    const entitiesIds = tags.reduce((results: string[], tag) => {
      if (this.tagIndex[tag]) {
        results = [...results, ...this.tagIndex[tag]];
      }

      return results;
    }, []);

    return entitiesIds.map(entityId => this.entities[entityId]);
  }
}
