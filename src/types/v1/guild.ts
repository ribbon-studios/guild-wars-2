export enum EmblemFlag {
  FLIP_BACKGROUND_HORIZONTAL = 'FlipBackgroundHorizontal',
  FLIP_BACKGROUND_VERTICAL = 'FlipBackgroundVertical',
  FLIP_FOREGROUND_HORIZONTAL = 'FlipForegroundHorizontal',
  FLIP_FOREGROUND_VERTICAL = 'FlipForegroundVertical',
}

export type Emblem = {
  /**
   * The id of the background image.
   */
  background_id: number;

  /**
   * The id of the foreground image.
   */
  foreground_id: number;

  /**
   * A list of additional flags.
   */
  flags: EmblemFlag;

  /**
   * The background color id.
   * @see https://wiki.guildwars2.com/wiki/API:1/colors
   */
  background_color_id: number;

  /**
   * The primary foreground color id.
   * @see https://wiki.guildwars2.com/wiki/API:1/colors
   */
  foreground_primary_color_id: number;

  /**
   * The secondar foreground color id.
   * @see https://wiki.guildwars2.com/wiki/API:1/colors
   */
  foreground_seconday_color_id: number;
};

export type Guild = {
  /**
   * The guild id.
   */
  guild_id: string;

  /**
   * The guild name.
   */
  guild_name: string;

  /**
   * The guild tag.
   */
  tag: string;

  /**
   * If present, it holds detailed information about the guilds emblem.
   */
  emblem: Emblem;
};
