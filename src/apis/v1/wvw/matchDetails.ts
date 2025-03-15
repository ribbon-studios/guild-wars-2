import type { WvW } from '@/types';
import { rfetch } from '@ribbon-studios/js-utils';

export type Options = {
  /**
   * The WvW match to query for.
   */
  match_id: string;
};

export type Response = WvW.MatchDetails;

export function matchDetails(options: Options) {
  return rfetch.get<Response>('https://api.guildwars2.com/v1/wvw/match_details.json', {
    params: options,
  });
}
