import { IComponentConstructor } from '../types/component.types';
import EventManager from '../managers/event.manager';

export default abstract class Entity {
  public static tags?: string[];

  public id!: string;
  public components: { [key: string]: any };

  constructor() {
    this.components = {};
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
  public addComponent<T extends {}>(
    Component: IComponentConstructor<T>,
    initialValue?: T,
  ) {
    const component = new Component();

    if (typeof initialValue !== 'undefined') {
      Object.assign(component, initialValue);
    }

    this.components[Component.name] = component;

    if (this.id) {
      EventManager.dispatch('ADD_ENTITY_COMPONENT', this.id);
    }

    return this;
  }

  /**
   * Get component.
   *
   * @template T
   * @param {IComponentConstructor<T>} Component
   * @returns
   * @memberof Entity
   */
  public getComponent<T>(Component: IComponentConstructor<T>): T {
    return this.components[Component.name] || null;
  }

  public hasComponent(name: string): boolean {
    return !!this.components[name];
  }

  /**
   * Check if entity has tag.
   *
   * @param {string} tag
   * @returns {boolean}
   * @memberof Entity
   */
  public hasTag(tag: string): boolean {
    return (<typeof Entity>this.constructor).tags?.includes(tag) || false;
  }
}
