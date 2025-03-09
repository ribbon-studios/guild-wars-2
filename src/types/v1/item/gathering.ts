import { BaseItem, ItemType } from './base';

export enum GatheringType {
  FORAGING = 'Foraging',
  LOGGING = 'Logging',
  MINING = 'Mining',
}

export type GatheringItem = BaseItem & {
  type: ItemType.GATHERING;

  /**
   * Gathering specific properties.
   */
  gathering: {
    /**
     * The gathering type.
     */
    type: GatheringType;
  };
};
