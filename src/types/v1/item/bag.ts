import { BaseItem, ItemType } from './base';

export type BagItem = BaseItem & {
  /**
   * The bag type.
   */
  type: ItemType.BAG;

  /**
   * Bag specific properties.
   */
  bag: {
    /**
     * Whether items in the bag will not be sold or sorted.
     */
    no_sell_or_sort: string;

    /**
     * The size of the bag.
     */
    size: string;
  };
};
