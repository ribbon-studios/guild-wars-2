import { Guild } from '@/types';
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

export function guildDetails(options?: Options) {
  return rfetch.get<Guild>('https://api.guildwars2.com/v1/guild_details.json', {
    params: options,
  });
}
