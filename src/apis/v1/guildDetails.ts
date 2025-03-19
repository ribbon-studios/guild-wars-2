import { Guild } from '@/types/v1';
import type { V1 } from '.';

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

export function guildDetails(this: V1.API, options?: Options) {
  return this.fetch<Guild>('/v1/guild_details.json', {
    params: options,
  });
}
