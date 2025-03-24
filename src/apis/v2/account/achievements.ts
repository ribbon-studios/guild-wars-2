import { Schema } from '@/types/v2';
import type { V2 } from '../';
import { AccountAchievement } from '@/types/v2/achievement';

export type Options<V extends Schema> = V2.Options<V, true>;

export type Response<V extends Schema> = AccountAchievement<V>[];

export function achievements<V extends Schema, O extends Schema = V>(this: V2.API<V>, options?: Options<O>) {
  return this.fetch<Response<V>>('/v2/account/achievements', {
    params: options,
  });
}
