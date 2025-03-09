import { Emblem } from '@/types';
import { rfetch } from '@ribbon-studios/js-utils';

export type Options =
  | {
      /**
       * The guild id to query for.
       */
      guild_id: string;
    }
  | {
      /**
       * The guild name to query for.
       */
      guild_name: string;
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

export function guildDetails(options?: Options) {
  return rfetch<Guild>('https://api.guildwars2.com/v1/guild_details.json', {
    params: options,
  });
}
