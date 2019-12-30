import Entity from '../entities/entity';
import { uuidv4 } from '../utils/uuid';
import { IComponentConstructor } from '../types/component';
import { IComponentQueryOptions } from '../types/entity';

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

    entity.components.forEach(component => {
      const name = component.constructor.name;

      if (!this.index[name]) {
        this.index[name] = [];
      }

      this.index[name].push(entity.id);
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
    entity.components.forEach(component => {
      const name = component.constructor.name;
      const index = this.index[name].indexOf(entity.id);
      this.index[name].splice(index, 1);
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
   * @param {IComponentQueryOptions} [options]
   * @returns {Entity[]}
   * @memberof EntityManager
   */
  public findByComponents(
    components: IComponentConstructor<any>[],
    options?: IComponentQueryOptions,
  ): Entity[] {
    const requireAll =
      options && options.requireAll ? options.requireAll : true;

    const computedEntities = components.reduce(
      (results: { [key: string]: number }, component) => {
        const name: string = component.name;

        if (this.index[name]) {
          this.index[name].forEach(id => {
            results[id] = (results[id] || 0) + 1;
          });
        }

        return results;
      },
      {},
    );

    return Object.keys(computedEntities).reduce((results, entityId) => {
      if (!requireAll || computedEntities[entityId] === components.length) {
        results.push(this.entities[entityId]);
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
