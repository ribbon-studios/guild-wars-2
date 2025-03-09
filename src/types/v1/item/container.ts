import { BaseItem, ItemType } from './base';

export enum ContainerType {
  DEFAULT = 'Default',
  GIFT_BOX = 'GiftBox',
  OPEN_UI = 'OpenUI',
}

export type ContainerItem = BaseItem & {
  type: ItemType.CONTAINER;

  /**
   * Container specific properties.
   */
  container: {
    /**
     * The container type.
     */
    type: ContainerType;
  };
};
