import { Schema, SchemaTypes } from './schema';

export type Items<V extends Schema> = SchemaTypes<{
  [Schema.V0]: Item<V>['id'][];
}>[V];

export type Item<V extends Schema> = SchemaTypes<{
  [Schema.V0]: Item.V0;
}>[V];

export namespace Item {
  export type V0 = {
    /**
     * The item id.
     */
    id: number;

    /**
     * The chat link.
     */
    chat_link: string;

    /**
     * The item name.
     */
    name: string;

    /**
     * The item icon.
     */
    icon?: string;

    /**
     * The item description.
     */
    description?: string;

    /**
     * The item type.
     */
    type: Type;

    /**
     * The item rarity.
     */
    rarity: Rarity;

    /**
     * The required level.
     */
    level: number;

    /**
     * The value in coins when selling to a vendor.
     */
    vendor_value: number;

    /**
     * The default skin id.
     */
    default_skin: number;

    /**
     * Flags applying to this item.
     */
    flags: Flag[];

    /**
     * The game types in which the item is usable.
     */
    game_types: GameType[];

    /**
     * Restrictions applied to the item.
     */
    restrictions: Restrictions[];

    /**
     * Lists what items this item can be upgraded into, and the method of upgrading.
     */
    upgrades_into?: Upgrade[];

    /**
     * Lists what items this item can be upgraded from, and the method of upgrading.
     */
    upgrades_from?: Upgrade[];

    // TODO: Implement details.
  };

  export enum Type {
    ARMOR = 'Armor',

    /**
     * Back item
     */
    BACK = 'Back',

    /**
     * Bags
     */
    BAG = 'Bag',

    /**
     * Consumables
     */
    CONSUMABLE = 'Consumable',

    /**
     * Containers
     */
    CONTAINER = 'Container',

    /**
     * Crafting materials
     */
    CRAFTING_MATERIAL = 'CraftingMaterial',

    /**
     * Gathering tools, baits and lures
     */
    GATHERING = 'Gathering',

    /**
     * Gizmos
     */
    GIZMO = 'Gizmo',

    /**
     * Sensory Array and Service Chip modules
     */
    JADE_TECH_MODULE = 'JadeTechModule',

    KEY = 'Key',

    /**
     * Miniatures
     */
    MINI_PET = 'MiniPet',

    /**
     * Power Cores
     */
    POWER_CORE = 'PowerCore',

    /**
     * Relics
     */
    RELIC = 'Relic',

    /**
     * Salvage kits
     */
    TOOL = 'Tool',

    /**
     * Trait guides
     */
    TRAIT = 'Trait',

    /**
     * Trinkets
     */
    TRINKET = 'Trinket',

    /**
     * Trophies
     */
    TROPHY = 'Trophy',

    /**
     * Upgrade components
     */
    UPGRADE_COMPONENT = 'UpgradeComponent',

    /**
     * Weapons
     */
    WEAPON = 'Weapon',
  }

  export enum Rarity {
    JUNK = 'Junk',
    BASIC = 'Basic',
    FINE = 'Fine',
    MASTERWORK = 'Masterwork',
    RARE = 'Rare',
    EXOTIC = 'Exotic',
    ASCENDED = 'Ascended',
    LEGENDARY = 'Legendary',
  }

  export enum Flag {
    /**
     * Account bound on use.
     */
    ACCOUNT_BIND_ON_USE = 'AccountBindOnUse',

    /**
     * Account bound on acquire.
     */
    ACCOUNT_BOUND = 'AccountBound',

    /**
     * If the item is attuned.
     */
    ATTUNED = 'Attuned',

    /**
     * If the item can be bulk consumed.
     */
    BULK_CONSUME = 'BulkConsume',

    /**
     * If the item will prompt the player with a warning when deleting.
     */
    DELETE_WARNING = 'DeleteWarning',

    /**
     * Hide the suffix of the upgrade component.
     */
    HIDE_SUFFIX = 'HideSuffix',

    /**
     * If the item is infused.
     */
    INFUSED = 'Infused',

    MONSTER_ONLY = 'MonsterOnly',

    /**
     * Not usable in the Mystic Forge.
     */
    NO_MYSTIC_FORGE = 'NoMysticForge',

    /**
     * Not salvageable.
     */
    NO_SALVAGE = 'NoSalvage',

    /**
     * Not sellable.
     */
    NO_SELL = 'NoSell',

    /**
     * Not upgradeable.
     */
    NOT_UPGRADEABLE = 'NotUpgradeable',

    /**
     * Not available underwater.
     */
    NO_UNDERWATER = 'NoUnderwater',

    /**
     * Soulbound on acquire.
     */
    SOULBIND_ON_ACQUIRE = 'SoulbindOnAcquire',

    /**
     * Soulbound on use.
     */
    SOUL_BIND_ON_USE = 'SoulBindOnUse',

    /**
     * If the item is a tonic.
     */
    TONIC = 'Tonic',

    /**
     * {@link https://wiki.guildwars2.com/wiki/Unique|Unique}
     */
    UNIQUE = 'Unique',
  }

  export enum GameType {
    /**
     * Usable in activities.
     */
    ACTIVITY = 'Activity',

    /**
     * Usable in dungeons.
     */
    DUNGEON = 'Dungeon',

    /**
     * Usable in PvE.
     */
    PVE = 'Pve',

    /**
     * Usable in PvP.
     */
    PVP = 'Pvp',

    /**
     * Usable in the Heart of the Mists.
     */
    PVP_LOBBY = 'PvpLobby',

    /**
     * Usable in World vs. World
     */
    WVW = 'Wvw',
  }

  export enum Restrictions {
    // Race Restrictions
    ASURA = 'Asura',
    CHARR = 'Charr',
    HUMAN = 'Human',
    NORN = 'Norn',
    SYLVARI = 'Sylvari',

    // Gender Restrictions
    FEMALE = 'Female',

    // Class Restrictions
    REVENANT = 'Revenant',
    ELEMENTALIST = 'Elementalist',
    ENGINEER = 'Engineer',
    GUARDIAN = 'Guardian',
    MESMER = 'Mesmer',
    NECROMANCER = 'Necromancer',
    RANGER = 'Ranger',
    THIEF = 'Thief',
    WARRIOR = 'Warrior',
  }

  export type Upgrade = {
    /**
     * The item id that results from performing the upgrade.
     */
    item_id: number;

    /**
     * Describes the method of upgrading.
     */
    upgrade: Upgrade.Type;
  };

  export namespace Upgrade {
    export enum Type {
      ATTUNEMENT = 'Attunement',
      INFUSION = 'Infusion',
    }
  }
}
