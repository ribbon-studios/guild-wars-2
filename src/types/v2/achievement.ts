import { Schema, SchemaTypes } from './schema';

export type Achievement<V extends Schema> = SchemaTypes<{
  [Schema.V0]: Achievement.V0;
}>[V];

export namespace Achievement {
  export type V0 = {
    /**
     * The achievement id.
     */
    id: number;

    /**
     * The achievement icon.
     */
    icon?: string;

    /**
     * The achievement name.
     */
    name: string;

    /**
     * The achievement description.
     */
    description: string;

    /**
     * The achievement requirement as listed in-game.
     */
    requirement: string;

    /**
     * The achievement description prior to unlocking it.
     */
    locked_text: string;

    /**
     * The achievement type.
     */
    type: Type;

    /**
     * Achievement categories.
     */
    flags: Flags[];

    /**
     * The achievement tiers.
     */
    tiers: Tier[];

    /**
     * Achievements required to unlock this achievement.
     */
    prerequisites: V0['id'][];

    /**
     * The achievement rewards.
     */
    rewards?: Reward[];

    /**
     * Contains a number of objects to give more information on the progress of the achievement.
     */
    bits?: Bit[];

    /**
     * The maximum number of AP that can be rewarded by an achievement flagged as {@link Flags.REPEATABLE}.
     *
     * @example
     * -1 // Can be repeated an infinite number of times.
     */
    point_cap?: number;
  };

  export enum Type {
    /**
     * A default achievement.
     */
    DEFAULT = 'Default',

    /**
     * Achievement is linked to {@link Collections}
     */
    ITEM_SET = 'ItemSet',
  }

  export enum Flags {
    /**
     * A PVP achievement.
     */
    PVP = 'Pvp',

    /**
     * A Meta achievement.
     */
    CATEGORY_DISPLAY = 'CategoryDisplay',

    /**
     * Displays this achievement at the top of the achievement panel.
     */
    MOVE_TO_TOP = 'MoveToTop',

    /**
     * Doesn't appear in the "Nearly Complete" UI.
     */
    IGNORE_NEARLY_COMPLETE = 'IgnoreNearlyComplete',

    /**
     * An achievement that can be repeated.
     */
    REPEATABLE = 'Repeatable',

    /**
     * A hidden achievement.
     */
    HIDDEN = 'Hidden',

    /**
     * A locked achievement.
     */
    REQUIRES_UNLOCK = 'RequiresUnlock',

    /**
     * Unknown
     */
    REPAIR_ON_LOGIN = 'RepairOnLogin',

    /**
     * An achievement that resets daily.
     */
    DAILY = 'Daily',

    /**
     * An achievement that resets weekly.
     */
    WEEKLY = 'Weekly',

    /**
     * An achievement that resets monthly.
     */
    Monthly = 'Monthly',

    /**
     * An achievement that never resets.
     */
    Permanent = 'Permanent',
  }

  export type Tier = {
    /**
     * The number of "things" that must be completed to achieve this tier.
     */
    count: number;

    /**
     * The number of AP awarded for completing this tier.
     */
    points: number;
  };

  export type Reward = Reward.Coins | Reward.Item | Reward.Mastery | Reward.Title;

  export namespace Reward {
    export type Coins = {
      /**
       * The type of reward.
       */
      type: Reward.Type.COINS;

      /**
       * The number of Coins to be rewarded.
       */
      count: number;
    };

    export type Item = {
      /**
       * The type of reward.
       */
      type: Reward.Type.ITEM;

      /**
       * The item to be rewarded.
       */
      id: number;

      /**
       * The number of items to be rewarded.
       */
      count: number;
    };

    export type Mastery = {
      /**
       * The type of reward.
       */
      type: Reward.Type.MASTERY;

      /**
       * The mastery point to be rewarded.
       */
      id: number;

      /**
       * The mastery point region.
       */
      region: Region;
    };

    export type Title = {
      /**
       * The type of reward.
       */
      type: Reward.Type.TITLE;

      /**
       * The title to be rewarded.
       */
      id: number;
    };

    export enum Type {
      COINS = 'Coins',
      ITEM = 'Item',
      MASTERY = 'Mastery',
      TITLE = 'Title',
    }

    export enum Region {
      /**
       * Core Tyria
       */
      TYRIA = 'Tyria',

      /**
       * Heart of Thorns & Living World Season 3
       */
      MAGUUMA = 'Maguuma',

      /**
       * Path of Fire & Living World Season 4
       */
      DESERT = 'Desert',

      /**
       * The Icebrood Saga
       */
      TUNDRA = 'Tundra',

      /**
       * End of Dragons
       */
      JADE = 'Jade',

      /**
       * Secrets of the Obscure
       */
      SKY = 'Sky',

      /**
       * Janthir Wilds
       */
      UNKNOWN = 'Unknown',
    }
  }

  export type Bit = Bit.Text;

  export namespace Bit {
    export type Text = {
      type: Bit.Type.TEXT;

      /**
       * The text for the bit.
       */
      text: string;
    };

    export type Item = {
      type: Bit.Type.ITEM;

      /**
       * The item id.
       */
      id: number;
    };

    export type Minipet = {
      type: Bit.Type.MINIPET;

      /**
       * The minipet id.
       */
      id: number;
    };

    export type Skin = {
      type: Bit.Type.SKIN;

      /**
       * The skin id.
       */
      id: number;
    };

    export enum Type {
      TEXT = 'Text',
      ITEM = 'Item',
      MINIPET = 'Minipet',
      SKIN = 'Skin',
    }
  }
}

export type AchievementGroup<V extends Schema> = SchemaTypes<{
  [Schema.V0]: AchievementGroup.V0;
}>[V];

export namespace AchievementGroup {
  export type V0 = {
    /**
     * The id of the group.
     */
    id: string;

    /**
     * The group name.
     */
    name: string;

    /**
     * The group description.
     */
    description: string;

    /**
     * A number describing the sorting order of this group.
     *
     * Sorted least to greatest.
     */
    order: number;

    /**
     * The categories associated with this group.
     */
    categories: number[];
  };
}
