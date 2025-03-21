import { FixedArray } from '../utils';
import { Schema, SchemaTypes } from './schema';

export type Character<V extends Schema> = SchemaTypes<{
  [Schema.V0]: Character.V0;
}>[V] & {
  /**
   * The characters equipped items.
   */
  equipment: Equipment<V>;
};

export namespace Character {
  export enum Race {
    ASURA = 'Asura',
    CHARR = 'Charr',
    HUMAN = 'Human',
    NORN = 'Norn',
    SYLVARI = 'Sylvari',
  }

  export enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
  }

  export enum Profession {
    ELEMENTALIST = 'Elementalist',
    ENGINEER = 'Engineer',
    GUARDIAN = 'Guardian',
    MESMER = 'Mesmer',
    NECROMANCER = 'Necromancer',
    RANGER = 'Ranger',
    REVENANT = 'Revenant',
    THIEF = 'Thief',
    WARRIOR = 'Warrior',
  }

  export type V0 = {
    /**
     * The character's name.
     */
    name: string;

    /**
     * The amount of seconds this character was played.
     */
    age: number;

    /**
     * The character's level.
     */
    level: number;

    /**
     * The character's gender.
     */
    race: Race;

    /**
     * The character's gender.
     */
    gender: Gender;

    /**
     * The character's profession.
     */
    profession: Profession;

    /**
     * The id of the guild the character is currently representing.
     */
    guild: string;

    /**
     * The currently selected title for the character.
     */
    title: string;

    /**
     * The amount of times this character has been {@link https://wiki.guildwars2.com/wiki/Defeated|defeated}.
     */
    deaths: number;

    /**
     * An array of strings representing backstory answer IDs pertaining to the questions answered during character creation.
     * @see https://wiki.guildwars2.com/wiki/API:2/backstory/answers
     */
    backstory: string[];

    /**
     * Ids of the recipes that have been unlocked on this character.
     *
     * TODO: Does this list contain all account level recipes?
     */
    recipes: number[];

    /**
     * Returns the flags on this character.
     * Only known value is 'Beta'
     */
    flags: string[];

    /**
     * The bags in the character's inventory.
     * TODO: Implement this type.
     */
    bags: [];

    /**
     * The character's unlocked crafting disciplines.
     * TODO: Implement this type.
     */
    crafting: [];

    /**
     * {@link https://en.wikipedia.org/wiki/ISO_8601|ISO 8601} representation of the character's creation time.
     */
    created: string;

    /**
     * {@link https://en.wikipedia.org/wiki/ISO_8601|ISO 8601} representation of when the api last updated the character.
     */
    last_modified: string;
  };
}

export type Bag<Size extends number> = {
  /**
   * The bag's item id.
   */
  id: number;

  /**
   * The amount of slots available with this bag.
   */
  size: Size;

  /**
   * The items within the bag.
   *
   * @example
   * null // Indicates an empty slot
   */
  inventory: FixedArray<Item | null, Size>;
};

export type Item = {
  /**
   * The id of the item.
   */
  id: number;

  /**
   * Whether this item is bound to an account or character.
   */
  binding?: Item.Binding;

  /**
   * Name of the character this item is bound to.
   */
  bound_to?: string;

  /**
   * The amount of items in the stack.
   */
  count: number;

  /**
   * The number of charges on an item.
   */
  charges?: number;

  /**
   * TODO: Implement this type.
   */
  infusions?: [];
};

export namespace Item {
  export enum Binding {
    ACCOUNT = 'Account',
    CHARACTER = 'Character',
  }
}

export type Equipment<V extends Schema> = SchemaTypes<{
  [Schema.V0]: Equipment.V0;
  [Schema.V5]: Equipment.V1;
}>[V];

export namespace Equipment {
  export type V0 = {
    /**
     * The item id.
     */
    id: number;

    /**
     *
     */
    binding?: Item.Binding;
  };

  export type V1 = {
    /**
     * Where this item is stored.
     */
    location: Location;

    /**
     * The unlock count of this item when `location` is {@link Location.LEGENDARY_ARMORY}.
     */
    count?: number;

    /**
     * Identifies which tabs this particular item is reused in.
     */
    tabs: number[];
  };

  export enum Location {
    /**
     * The item is equipped in the active tab.
     */
    EQUIPPED = 'Equipped',
    /**
     * The item is equipped in an inactive tab.
     */
    ARMORY = 'Armory',

    /**
     * The item is stored in the account-wide legendary armory, but equipped in the active tab.
     */
    EQUIPPED_FROM_LEGENDARY_ARMORY = 'EquippedFromLegendaryArmory',

    /**
     * The item is stored in the account-wide legendary armory, but equipped in an inactive tab.
     */
    LEGENDARY_ARMORY = 'LegendaryArmory',
  }
}
