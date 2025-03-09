export enum ItemType {
  ARMOR = 'Armor',
  BACK = 'Back',
  BAG = 'Bag',
  CONSUMABLE = 'Consumable',
  CONTAINER = 'Container',
  CRAFTING_MATERIAL = 'CraftingMaterial',
  GATHERING = 'Gathering',
  GIZMO = 'Gizmo',
  MINI_PET = 'MiniPet',
  TOOL = 'Tool',
  TRAIT = 'Trait',
  TRINKET = 'Trinket',
  TROPHY = 'Trophy',
  UPGRADE_COMPONENT = 'UpgradeComponent',
  WEAPON = 'Weapon',
}

export enum ItemRarity {
  ASCENDED = 'Ascended',
  BASIC = 'Basic',
  EXOTIC = 'Exotic',
  FINE = 'Fine',
  JUNK = 'Junk',
  LEGENDARY = 'Legendary',
  MASTERWORK = 'Masterwork',
  RARE = 'Rare',
}

export enum GameType {
  ACTIVITY = 'Activity',
  DUNGEON = 'Dungeon',
  PVE = 'Pve',
  PVP = 'Pvp',
  PVP_LOBBY = 'PvpLobby',
  WVW = 'Wvw',
}

export enum ItemFlags {
  ACCOUNT_BIND_ON_USE = 'AccountBindOnUse',
  ACCOUNT_BOUND = 'AccountBound',
  HIDE_SUFFIX = 'HideSuffix',
  MONSTER_ONLY = 'MonsterOnly',
  NO_MYSTIC_FORGE = 'NoMysticForge',
  NO_SALVAGE = 'NoSalvage',
  NO_SELL = 'NoSell',
  NOT_UPGRADEABLE = 'NotUpgradeable',
  NO_UNDERWATER = 'NoUnderwater',
  SOULBIND_ON_ACQUIRE = 'SoulbindOnAcquire',
  SOUL_BIND_ON_USE = 'SoulBindOnUse',
  UNIQUE = 'Unique',
}

export enum ItemRestrictions {
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

export enum InfusionType {
  DEFENSE = 'Defense',
  OFFENSE = 'Offense',
  UTILITY = 'Utility',
}

export type InfusionSlot = {
  /**
   * ID of the item applied in the infusion slot.
   */
  item_id: number;

  /**
   * infusion slot type.
   */
  flags: InfusionType[];
};

export type ItemBuff = {
  /**
   * The id of the skill applied to the item.
   */
  skill_id: number;

  /**
   * Description of the effect of the skill.
   */
  description: string;
};

export type ItemAttribute = {
  /**
   * Name of the attribute.
   */
  attribute: string;

  /**
   * Bonus given to the previous attribute.
   */
  modifier: number;
};

export type InfixUpgrade = {
  id: number;

  /**
   * Buff applied by the item.
   */
  buff: ItemBuff;

  /**
   * list stat bonuses given by the item.
   */
  attributes: ItemAttribute[];
};

export type BaseItem = {
  /**
   * The item id.
   */
  item_id: string;

  /**
   * The name of the item.
   */
  name: string;

  /**
   * The item description.
   */
  description: string;

  /**
   * The item type.
   */
  type: ItemType;

  /**
   * The required level.
   */
  level: string;

  /**
   * The rarity.
   */
  rarity: ItemRarity;

  /**
   * The value in coins when selling to a vendor.
   */
  vendor_value: string;

  /**
   * The icon file id to be used with the render service.
   */
  icon_file_id: string;

  /**
   * The icon file signature to be used with the render service.
   */
  icon_file_signature: string;

  /**
   * The game types where the item is usable.
   * Always contains at least 1 value.
   */
  game_types: GameType[];

  /**
   * Any number of additional item flags.
   */
  flags: ItemFlags[];

  /**
   * Item usage restriction based on character race / profession.
   */
  restrictions: ItemRestrictions[];
};
