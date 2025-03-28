export enum Scopes {
  /**
   * Your account display name, ID, home world, and list of guilds. Required permission.
   */
  ACCOUNT = 'account',

  /**
   * Your account bank, material storage, recipe unlocks, and character inventories.
   */
  INVENTORIES = 'inventories',

  /**
   * Basic information about your characters.
   */
  CHARACTERS = 'characters',

  /**
   * Your Trading Post transactions.
   */
  TRADING_POST = 'tradingpost',

  /**
   * Your account's wallet.
   */
  WALLET = 'wallet',

  /**
   * Your wardrobe unlocks—skins, dyes, minipets, finishers, etc.—and currently equipped skins.
   */
  UNLOCKS = 'unlocks',

  /**
   * Your PvP stats, match history, reward track progression, and custom arena details.
   */
  PVP = 'pvp',

  /**
   * Your selected WvW guild, assigned team, and personal WvW information.
   */
  WVW = 'wvw',

  /**
   * Your currently equipped specializations, traits, skills, and equipment for all game modes.
   */
  BUILDS = 'builds',

  /**
   * Your achievements, dungeon unlock status, mastery point assignments, and general PvE progress.
   */
  PROGRESSION = 'progression',

  /**
   * Guilds' rosters, history, and MOTDs for all guilds you are a member of.
   */
  GUILDS = 'guilds',
}
