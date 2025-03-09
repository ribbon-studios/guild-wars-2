import { BaseItem, InfixUpgrade, InfusionSlot, ItemType } from './base';

export enum WeightClass {
  CLOTHING = 'Clothing',
  HEAVY = 'Heavy',
  LIGHT = 'Light',
  MEDIUM = 'Medium',
}

export enum ArmorType {
  BOOTS = 'Boots',
  COAT = 'Coat',
  GLOVES = 'Gloves',
  HELM = 'Helm',
  HELM_AQUATIC = 'HelmAquatic',
  LEGGINGS = 'Leggings',
  SHOULDERS = 'Shoulders',
}

export type ArmorItem = BaseItem & {
  /**
   * The armor piece type.
   */
  type: ItemType.ARMOR;

  /**
   * The id of the items skin.
   */
  default_skin: string;

  /**
   * Armor specific properties.
   */
  armor: {
    /**
     * The armor type.
     */
    type: ArmorType;

    /**
     * The armor weight class.
     */
    weight_class: WeightClass;

    /**
     * The armor's defense rating.
     */
    defense: string;

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
