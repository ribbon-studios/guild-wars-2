import { Params, Schema, Minis, Mini } from '@/types/v2';
import type { V2 } from '../';
import { MiniUtils } from './utils/map';

export type Options<V extends Schema, Ids extends Params.Ids<Mini<V>['id']>> = V2.Options<V, true> & {
  /**
   * The mini ids.
   */
  ids?: 'all' | Ids;
};

export type Response<V extends Schema, Ids extends Params.Ids<Mini<V>['id']>> = Ids extends undefined
  ? Minis<V>
  : Mini<V>[];

/**
 * Returns a list of minis available in the game.
 */
export async function list<V extends Schema, O extends Schema = V, Ids extends Params.Ids<Mini<O>['id']> = undefined>(
  this: V2.API<V>,
  options?: Options<O, Ids>
) {
  const minis = await this.fetch<Response<V, Ids>>('/v2/minis', {
    params: options,
  });

  if (this.config.apply_corrections && MiniUtils.is(minis)) {
    return MiniUtils.correctAll(minis) as Response<V, Ids>;
  }

  return minis;
}
