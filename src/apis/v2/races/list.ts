import { Params, Race, Races, Schema } from '@/types/v2';
import type { V2 } from '../';

export type Options<V extends Schema, Ids extends Params.Ids<Race<V>['id']>> = V2.Options<V, true> & {
  /**
   * The race ids.
   */
  ids?: Ids;
};

export type Response<V extends Schema, Ids extends Params.Ids<Race<V>['id']>> = Ids extends undefined
  ? Races<V>
  : Race<V>[];

/**
 * Returns a list of the playable races.
 */
export function list<V extends Schema, O extends Schema = V, Ids extends Params.Ids<Race<O>['id']> = undefined>(
  this: V2.API<V>,
  options?: Options<O, Ids>
) {
  return this.fetch<Response<V, Ids>>('/v2/races', {
    params: options,
  });
}
