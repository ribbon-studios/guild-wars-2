import { Params, Schema } from '@/types/v2';
import type { V2 } from '@/apis/v2';
import { AchievementCategory } from '@/types/v2/achievement';

export type Options<V extends Schema, Ids extends Params.Ids<number>> = V2.Options<V, true> & {
  /**
   * The achievement category ids.
   * @example
   * 'all' // Returns all of the categories
   */
  ids?: 'all' | Ids;
};

export type Response<V extends Schema, Ids extends Params.Ids<number>> = Ids extends undefined
  ? number[]
  : AchievementCategory<V>[];

export function list<V extends Schema, O extends Schema = V, Ids extends Params.Ids<number> = undefined>(
  this: V2.API<V>,
  options?: Options<O, Ids>
) {
  return this.fetch<Response<V, Ids>>('/v2/achievements/categories', {
    params: options,
  });
}
