import { BaseItem, ItemType } from './base';

export enum ConsumableType {
  APPEARANCE_CHANGE = 'AppearanceChange',
  BOOZE = 'Booze',
  CONTRACT_NPC = 'ContractNpc',
  FOOD = 'Food',
  GENERIC = 'Generic',
  HALLOWEEN = 'Halloween',
  IMMEDIATE = 'Immediate',
  TRANSMUTATION = 'Transmutation',
  UNLOCK = 'Unlock',
  UN_TRANSMUTATION = 'UnTransmutation',
  UPGRADE_REMOVAL = 'UpgradeRemoval',
  UTILITY = 'Utility',
}

export enum UnlockType {
  BAG_SLOT = 'BagSlot',
  BANK_TAB = 'BankTab',
  COLLECTIBLE_CAPACITY = 'CollectibleCapacity',
  CONTENT = 'Content',
  CRAFTING_RECIPE = 'CraftingRecipe',
  DYE = 'Dye',
  UNKNOWN = 'Unknown',
}

export type ConsumableItem = BaseItem & {
  type: ItemType.CONSUMABLE;

  consumable:
    | {
        /**
         * The consumable type.
         */
        type:
          | ConsumableType.APPEARANCE_CHANGE
          | ConsumableType.BOOZE
          | ConsumableType.CONTRACT_NPC
          | ConsumableType.HALLOWEEN
          | ConsumableType.IMMEDIATE
          | ConsumableType.TRANSMUTATION
          | ConsumableType.UN_TRANSMUTATION
          | ConsumableType.UPGRADE_REMOVAL;
      }
    | {
        /**
         * The effect consumable type.
         */
        type: ConsumableType.FOOD | ConsumableType.GENERIC | ConsumableType.UTILITY;

        /**
         * Duration of the effect in milliseconds.
         */
        duration_ms?: string;

        /**
         * Description of the effect.
         */
        description?: string;
      }
    | {
        /**
         * The consumable type.
         */
        type: ConsumableType.UNLOCK;

        /**
         * The type of unlock.
         */
        unlock_type: Omit<UnlockType, UnlockType.CRAFTING_RECIPE | UnlockType.DYE>;
      }
    | {
        /**
         * The consumable type.
         */
        type: ConsumableType.UNLOCK;

        /**
         * The type of unlock.
         */
        unlock_type: UnlockType.CRAFTING_RECIPE;

        /**
         * The id of the recipe that will be unlocked.
         */
        recipe_id: string;
      }
    | {
        /**
         * The consumable type.
         */
        type: ConsumableType.UNLOCK;

        /**
         * The type of unlock.
         */
        unlock_type: UnlockType.DYE;

        /**
         * The id of the color that will be unlocked.
         */
        color_id: string;
      };
};
