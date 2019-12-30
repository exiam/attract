import { IComponentConstructor } from '../types/component.d';
import EventManager from '../managers/event.manager';

export default abstract class Entity {
  public static tags?: string[];

  public id: string;
  public components: Object[];

  constructor() {
    this.components = [];
  }
  
  /**
   * Add component to entity.
   *
   * @template T
   * @param {IComponentConstructor<T>} Component
   * @param {*} [initialValue]
   * @returns
   * @memberof Entity
   */
  public addComponent<T>(Component: IComponentConstructor<T>, initialValue?: T) {
    const component = new Component();

    if (typeof initialValue !== 'undefined') {
      Object.assign(component, initialValue);
    }

    this.components.push(component);

    if (this.id) {
      EventManager.dispatch('ADD_ENTITY_COMPONENT', this.id);
    }

    return this;
  }

  /**
   * Get component.
   *
   * @template T
   * @param {IComponentConstructor<T>} componentClass
   * @returns
   * @memberof Entity
   */
  public getComponent<T>(componentClass: IComponentConstructor<T>) {
    for (const component of this.components) {
      if (component instanceof componentClass) {
        return component;
      }
    }

    return null;
  }

  /**
   * Check if entity has tag.
   *
   * @param {string} tag
   * @returns {boolean}
   * @memberof Entity
   */
  public hasTag(tag: string): boolean {
    return (<typeof Entity>this.constructor).tags.includes(tag);
  }
}