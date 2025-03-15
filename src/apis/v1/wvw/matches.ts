import type { WvW } from '@/types';
import { rfetch } from '@ribbon-studios/js-utils';

export type Response = {
  /**
   * The id of the current build.
   */
  wvw_matches: WvW.Matches[];
};

export function matches() {
  return rfetch.get<Response>('https://api.guildwars2.com/v1/wvw/matches.json');
}
