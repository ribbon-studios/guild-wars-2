import { Schema } from '@/types/v2';
import type { V2 } from '../';
import { Race } from '@/types/v2';

export type Options<V extends Schema> = V2.Options<V>;

export type Response<V extends Schema> = Race<V>;

/**
 * Returns information about the given race.
 */
export function get<V extends Schema, O extends Schema = V>(this: V2.API<V>, id: string, options?: Options<O>) {
  return this.fetch<Response<V>>(`/v2/races/${id}`, {
    params: options,
  });
}
