import { Schema, Title } from '@/types/v2';
import type { V2 } from '../';

export type Options<V extends Schema> = V2.Options<V>;

export type Response<V extends Schema> = Title<V>;

/**
 * Returns the requested title.
 */
export function get<V extends Schema, O extends Schema = V>(this: V2.API<V>, id: number, options?: Options<O>) {
  return this.fetch<Response<V>>(`/v2/titles/${id}`, {
    params: options,
  });
}
