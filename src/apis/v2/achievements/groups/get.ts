import { Schema } from '@/types/v2';
import type { V2 } from '@/apis/v2';
import { AchievementGroup } from '@/types/v2/achievement';

export type Options<V extends Schema> = V2.Options<V, true>;

export type Response<V extends Schema> = AchievementGroup<V>;

export function get<V extends Schema, O extends Schema = V>(this: V2.API<V>, id: string, options?: Options<O>) {
  return this.fetch<Response<V>>(`/v2/achievements/groups/${id}`, {
    params: options,
  });
}
