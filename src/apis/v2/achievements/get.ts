import { Schema } from '@/types/v2';
import type { V2 } from '@/apis/v2';
import { Achievement } from '@/types/v2/achievement';

export type Options<V extends Schema> = V2.Options<V, true>;

export type Response<V extends Schema> = Achievement<V>;

export function get<V extends Schema, O extends Schema = V>(this: V2.API<V>, id: number, options?: Options<O>) {
  return this.fetch<Response<V>>(`/v2/achievements/${id}`, {
    params: options,
  });
}
