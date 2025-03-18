import type { WvW } from '@/types/v1';
import { rfetch } from '@ribbon-studios/js-utils';

export type Response = {
  /**
   * The current WvW matches.
   */
  wvw_matches: WvW.Matches[];
};

export function matches() {
  return rfetch.get<Response>('https://api.guildwars2.com/v1/wvw/matches.json');
}
