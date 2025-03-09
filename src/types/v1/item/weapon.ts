import { BaseItem, InfixUpgrade, InfusionSlot, ItemType } from './base';

export enum WeaponType {
  AXE = 'Axe',
  DAGGER = 'Dagger',
  FOCUS = 'Focus',
  GREATSWORD = 'Greatsword',
  HAMMER = 'Hammer',
  HARPOON = 'Harpoon',
  LARGE_BUNDLE = 'LargeBundle',
  LONG_BOW = 'LongBow',
  MACE = 'Mace',
  PISTOL = 'Pistol',
  RIFLE = 'Rifle',
  SCEPTER = 'Scepter',
  SHIELD = 'Shield',
  SHORT_BOW = 'ShortBow',
  SMALL_BUNDLE = 'SmallBundle',
  SPEARGUN = 'Speargun',
  STAFF = 'Staff',
  SWORD = 'Sword',
  TORCH = 'Torch',
  TOY = 'Toy',
  TRIDENT = 'Trident',
  TWO_HANDED_TOY = 'TwoHandedToy',
  WARHORN = 'Warhorn',
}

export enum DamageType {
  CHOKING = 'Choking',
  FIRE = 'Fire',
  ICE = 'Ice',
  LIGHTNING = 'Lightning',
  PHYSICAL = 'Physical',
}

export type WeaponItem = BaseItem & {
  type: ItemType.WEAPON;

  /**
   * The id of the items skin.
   */
  default_skin: string;

  /**
   * Weapon specific properties
   */
  weapon: {
    /**
     * The weapon type.
     */
    type: WeaponType;

    /**
     * The weapon's damage type.
     */
    damage_type: DamageType;

    /**
     * The weapon's minimum power rating.
     */
    min_power: string;

    /**
     * The weapon's maximum power rating.
     */
    max_power: string;

    /**
     * The weapon's defense rating.
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
