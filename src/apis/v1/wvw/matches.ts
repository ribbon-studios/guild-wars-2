import type { WvW } from '@/types/v1';
import type { V1 } from '..';

export type Response = {
  /**
   * The current WvW matches.
   */
  wvw_matches: WvW.Matches[];
};

export function matches(this: V1.API) {
  return this.fetch<Response>('/v1/wvw/matches.json');
}
