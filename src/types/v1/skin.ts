import { ArmorType, DamageType, WeaponType, WeightClass } from './item';

export type BaseSkin = {
  /**
   * The skin id.
   */
  skin_id: string;

  /**
   * The name of the skin.
   */
  name: string;

  /**
   * The skin description.
   */
  description?: string;

  /**
   * The skin type.
   */
  type: Skin.Type;

  /**
   * Additional skin flags.
   */
  flags: Skin.Flags[];

  /**
   * Race / Profession restrictions that apply to the skin.
   */
  restrictions: Skin.Restrictions[];

  /**
   * The icon file id to be used with the render service.
   */
  icon_file_id: string;

  /**
   * The icon file signature to be used with the render service.
   */
  icon_file_signature: string;
};

export type ArmorSkin = BaseSkin & {
  type: Skin.Type.ARMOR;

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
     * The dye slots of the armor. (unavailable slots are specified with a null value)
     */
    dye_slots: Skin.DyeSlots;
  };
};

export type WeaponSkin = BaseSkin & {
  type: Skin.Type.WEAPON;

  weapon: {
    /**
     * The weapon type.
     */
    type: WeaponType;

    /**
     * The damage type.
     */
    damage_type: DamageType;
  };
};

export type BackSkin = BaseSkin & {
  type: Skin.Type.BACK;
};

export type Skin = BackSkin | ArmorSkin | WeaponSkin;

export namespace Skin {
  export enum Type {
    ARMOR = 'Armor',
    WEAPON = 'Weapon',
    BACK = 'Back',
  }

  export enum Flags {
    SHOW_IN_WARDROBE = 'ShowInWardrobe',
    NO_COST = 'NoCost',
    HIDE_IF_LOCKED = 'HideIfLocked',
  }

  export enum Restrictions {
    // Races
    ASURA = 'Asura',
    CHARR = 'Charr',
    HUMAN = 'Human',
    NORN = 'Norn',
    SYLVARI = 'Sylvari',

    // Professions
    GUARDIAN = 'Guardian',
    WARRIOR = 'Warrior',
    MESMER = 'Mesmer',
    ELEMENTALIST = 'Elementalist',
    THIEF = 'Thief',
    ENGINEER = 'Engineer',
    NECROMANCER = 'Necromancer',
    RANGER = 'Ranger',
  }

  export type DyeSlot = {
    /**
     * The color.
     */
    color_id: number;

    /**
     * The material type.
     */
    material: string;
  };

  export type DyeSlots = Record<string, DyeSlot[]>;
}
