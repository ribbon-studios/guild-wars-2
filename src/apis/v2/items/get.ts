import { Item, Schema } from '@/types/v2';
import type { V2 } from '../';

export type Options<V extends Schema> = V2.Options<V>;

export type Response<V extends Schema> = Item<V>;

/**
 * Returns the requested item.
 */
export async function get<V extends Schema, O extends Schema = V>(this: V2.API<V>, id: number, options?: Options<O>) {
  return await this.fetch<Response<V>>(`/v2/items/${id}`, {
    params: options,
  });
}
