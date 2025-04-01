import { Params, Schema, Title, Titles } from '@/types/v2';
import type { V2 } from '../';

export type Options<V extends Schema, Ids extends Params.Ids<Title<V>['id']>> = V2.Options<V, true> & {
  /**
   * The title ids.
   */
  ids?: 'all' | Ids;

  /**
   * The page number.
   */
  page?: number;

  /**
   * The page size.
   */
  page_size?: number;
};

export type Response<V extends Schema, Ids extends Params.Ids<Title<V>['id']>> = Ids extends undefined
  ? Titles<V>
  : Title<V>[];

/**
 * Returns a list of titles available in the game.
 */
export function list<V extends Schema, O extends Schema = V, Ids extends Params.Ids<Title<O>['id']> = undefined>(
  this: V2.API<V>,
  options?: Options<O, Ids>
) {
  return this.fetch<Response<V, Ids>>('/v2/titles', {
    params: options,
  });
}
