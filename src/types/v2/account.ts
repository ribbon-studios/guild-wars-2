import { Schema, SchemaTypes } from './schema';

export type Account<T extends Schema> = SchemaTypes<Account.Changes>[T];

export namespace Account {
  export type Changes = {
    [Schema.V0]: V0;
    [Schema.V5]: V1;
    [Schema.V11]: V2;
  };

  export type V0 = {
    /**
     * The account id.
     */
    id: string;

    /**
     * The age of the account in seconds.
     */
    age: number;

    /**
     * The unique account name with numerical suffix.
     *
     * Do not use this as a unique identifier. Use `id` instead.
     */
    name: string;

    /**
     * The id of the home world the account is assigned to.
     */
    world: number;

    /**
     * The guild ids assigned to the given account.
     */
    guilds: number[];

    /**
     * The ids of the guilds the account is the leader of.
     * @scope `guilds`
     */
    guild_leader: number[];

    /**
     * A list of the content this account has access to.
     */
    access: Access[];

    /**
     * Whether the player has bought the Commander's Compendium. (Catmander does not affect this flag)
     */
    commander: boolean;

    /**
     * The account's personal fractal reward level.
     * @scope `progression`
     */
    fractal_level: number;

    /**
     * The daily AP the account has.
     * @scope `progression`
     */
    daily_ap: number;

    /**
     * The monthly AP the account has.
     * @scope `progression`
     */
    monthly_ap: number;

    /**
     * The account's personal WvW rank.
     * @scope `progression`
     */
    wvw_rank: number;

    /**
     * An ISO-8601 timestamp of when the account was created.
     */
    created: string;

    /**
     * An ISO-8601 timestamp of when the account was last modified.
     */
    last_modified: string;
  };

  export type V1 = V0 & {
    /**
     * The number of build storage slots the account has unlocked.
     * @scope `builds`
     */
    build_storage_slots: number;
  };

  export type V2 = Omit<V1, 'wvw_rank'> & {
    /**
     * The account's WvW information.
     */
    wvw: WorldVsWorld;
  };

  export enum Access {
    /**
     * Should probably never happen.
     */
    NONE = 'None',

    /**
     * F2P Account
     */
    PLAY_FOR_FREE = 'PlayForFree',

    /**
     * Owns the base game.
     */
    GUILD_WARS_2 = 'GuildWars2',

    /**
     * Owns Heart of Thorns
     */
    HEART_OF_THORNS = 'HeartOfThorns',

    /**
     * Owns Path of Fire
     */
    PATH_OF_FIRE = 'PathOfFire',

    /**
     * Owns End of Dragons
     */
    END_OF_DRAGONS = 'EndOfDragons',

    /**
     * Owns Secrets of the Obscure
     */
    SECRETS_OF_THE_OBSCURE = 'SecretsOfTheObscure',

    /**
     * Owns Janthir WIlds
     */
    JANTHIR_WILDS = 'JanthirWilds',
  }

  export type WorldVsWorld = {
    /**
     * The currently allocated WvW world restructuring team id.
     */
    team_id: number;

    /**
     * The account's personal wvw rank.
     * @scope `progression`
     */
    rank: number;
  };
}

export type Luck<T extends Schema> = SchemaTypes<{
  [Schema.V0]: Luck.V0;
}>[T];

export namespace Luck {
  export type V0 = {
    /**
     * The id (the only known value for this is 'luck')
     */
    id: string;

    /**
     * The amount of luck consumed.
     *
     * @note This can exceed the 4,295,450 luck required to hit max magic find.
     */
    value: number;
  };
}
