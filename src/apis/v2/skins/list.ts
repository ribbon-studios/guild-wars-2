import { Params, Schema, Skin, Skins } from '@/types/v2';
import type { V2 } from '../';

export type Options<V extends Schema, Ids extends Params.Ids<Skin<V>['id']>> = V2.Options<V, true> & {
  /**
   * The skin ids.
   */
  ids?: Ids;
};

export type Response<V extends Schema, Ids extends Params.Ids<Skin<V>['id']>> = Ids extends undefined
  ? Skins<V>
  : Skin<V>[];

/**
 * Returns a list of items available in the game.
 */
export function list<V extends Schema, O extends Schema = V, Ids extends Params.Ids<Skin<O>['id']> = undefined>(
  this: V2.API<V>,
  options?: Options<O, Ids>
) {
  return this.fetch<Response<V, Ids>>('/v2/skins', {
    params: options,
  });
}
