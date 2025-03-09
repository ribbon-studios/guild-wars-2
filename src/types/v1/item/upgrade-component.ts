import { BaseItem, InfixUpgrade, InfusionType, ItemType } from './base';

export enum UpgradeComponentType {
  DEFAULT = 'Default',
  GEM = 'Gem',
  RUNE = 'Rune',
  SIGIL = 'Sigil',
}

export enum UpgradeComponentFlag {
  HEAVY_ARMOR = 'HeavyArmor',
  LIGHT_ARMOR = 'LightArmor',
  MEDIUM_ARMOR = 'MediumArmor',
  AXE = 'Axe',
  DAGGER = 'Dagger',
  FOCUS = 'Focus',
  GREATSWORD = 'Greatsword',
  HAMMER = 'Hammer',
  HARPOON = 'Harpoon',
  LONG_BOW = 'LongBow',
  MACE = 'Mace',
  PISTOL = 'Pistol',
  RIFLE = 'Rifle',
  SCEPTER = 'Scepter',
  SHIELD = 'Shield',
  SHORT_BOW = 'ShortBow',
  SPEARGUN = 'Speargun',
  STAFF = 'Staff',
  SWORD = 'Sword',
  TORCH = 'Torch',
  TRIDENT = 'Trident',
  WARHORN = 'Warhorn',
  TRINKET = 'Trinket',
}

export type UpgradeComponentItem = BaseItem & {
  type: ItemType.UPGRADE_COMPONENT;

  /**
   * Upgrade Component specific properties.
   */
  upgrade_component: {
    /**
     * List of item types on which the upgrade component can be applied.
     */
    flags: UpgradeComponentFlag[];

    /**
     * List of infusion slots on which the upgrade component can be applied.
     */
    infusion_upgrade_flags: InfusionType;

    /**
     * Suffix added to the item name when the current upgrade component is applied.
     */
    suffix: string;
  } & (
    | {
        /**
         * The Upgrade Component type.
         */
        type: UpgradeComponentType.DEFAULT | UpgradeComponentType.GEM;
      }
    | {
        /**
         * The Upgrade Component type.
         */
        type: UpgradeComponentType.SIGIL;

        /**
         * Describe the bonus gived by the sigil.
         */
        infix_upgrade: InfixUpgrade;
      }
    | {
        /**
         * The Upgrade Component type.
         */
        type: UpgradeComponentType.RUNE;

        /**
         * List of rune bonuses.
         */
        bonuses: string[];
      }
  );
};
