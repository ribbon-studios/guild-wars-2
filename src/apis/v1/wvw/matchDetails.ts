import type { WvW } from '@/types/v1';
import type { V1 } from '..';

export type Options = {
  /**
   * The WvW match to query for.
   */
  match_id: string;
};

export type Response = WvW.MatchDetails;

/**
 * This is a test
 */
export function matchDetails(this: V1.API, options: Options) {
  return this.fetch<Response>('/v1/wvw/match_details.json', {
    params: options,
  });
}
