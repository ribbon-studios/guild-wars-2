import { BaseItem, InfixUpgrade, InfusionSlot, ItemType } from './base';

export enum TrinketType {
  AMULET = 'Amulet',
  ACCESSORY = 'Accessory',
  RING = 'Ring',
}

export type TrinketItem = BaseItem & {
  type: ItemType.TRINKET;

  /**
   * Trinket specific properties.
   */
  trinket: {
    /**
     * The type of trinket.
     */
    type: TrinketType;

    /**
     * The number and type of infusion slots
     */
    infusion_slots: InfusionSlot[];

    /**
     * The (x) value to be combined with the (m, gradient) multiplier and (c, offset)
     * @see https://wiki.guildwars2.com/wiki/API:2/itemstats
     */
    attribute_adjustment: number;

    /**
     * Describe the bonus gived by the item.
     */
    infix_upgrade: InfixUpgrade;

    /**
     * The item id of an already applied upgrade component.
     */
    suffix_item_id: string;

    /**
     * The secondary suffix item id.
     * @example "" // no secondary suffix item
     */
    secondary_suffix_item_id: string;
  };
};
