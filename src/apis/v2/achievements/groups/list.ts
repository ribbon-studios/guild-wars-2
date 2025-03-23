import { Params, Schema } from '@/types/v2';
import type { V2 } from '@/apis/v2';
import { AchievementGroup } from '@/types/v2/achievement';

export type Options<V extends Schema, Ids extends Params.Ids<string>> = V2.Options<V, true> & {
  /**
   * The achievement group ids.
   * @example
   * 'all' // Returns all of the groups
   * '18DB115A-8637-4290-A636-821362A3C4A8' // Returns the Daily Achievements Group
   */
  ids?: 'all' | Ids;
};

export type Response<V extends Schema, Ids extends Params.Ids<string>> = Ids extends undefined
  ? string[]
  : AchievementGroup<V>[];

export function list<V extends Schema, O extends Schema = V, Ids extends Params.Ids<string> = undefined>(
  this: V2.API<V>,
  options?: Options<O, Ids>
) {
  return this.fetch<Response<V, Ids>>('/v2/achievements/groups', {
    params: options,
  });
}
