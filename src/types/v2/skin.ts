import { Item } from './item';
import { Schema, SchemaTypes } from './schema';

export type Skins<V extends Schema> = SchemaTypes<{
  [Schema.V0]: Skin<V>['id'][];
}>[V];

export type Skin<V extends Schema> = SchemaTypes<{
  [Schema.V0]: Skin.V0;
}>[V];

export namespace Skin {
  export type V0 = {
    /**
     * The skin id.
     */
    id: number;

    /**
     * The name of the skin.
     */
    name: string;

    /**
     * The skin description.
     */
    description?: string;

    /**
     * The skin icon.
     */
    icon: string;

    /**
     * The skin type.
     */
    type: Type;

    /**
     * Additional skin flags.
     */
    flags: Flag[];

    /**
     * Restrictions that apply to the skin.
     */
    restrictions: Item.Restrictions[];

    /**
     * The skin rarity.
     */
    rarity: Item.Rarity;

    // TODO: Implement details
  };

  export enum Type {
    ARMOR = 'Armor',
    WEAPON = 'Weapon',
    BACK = 'Back',
    GATHERING = 'Gathering',
  }

  export enum Flag {
    /**
     * When displayed in the account wardrobe (set for all skins listed in the API).
     */
    SHOW_IN_WARDROBE = 'ShowInWardrobe',

    /**
     * When applying the skin is free.
     */
    NO_COST = 'NoCost',

    /**
     * When the skin is hidden until it is unlocked.
     */
    HIDE_IF_LOCKED = 'HideIfLocked',

    /**
     * When the skin overrides item rarity when applied
     */
    OVERRIDE_RARITY = 'OverrideRarity',
  }
}
