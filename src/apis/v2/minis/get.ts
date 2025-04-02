import { Mini, Schema } from '@/types/v2';
import type { V2 } from '../';
import { MiniUtils } from './utils/map';

export type Options<V extends Schema> = V2.Options<V>;

export type Response<V extends Schema> = Mini<V>;

/**
 * Returns the requested mini.
 */
export async function get<V extends Schema, O extends Schema = V>(this: V2.API<V>, id: number, options?: Options<O>) {
  const mini = await this.fetch<Response<V>>(`/v2/minis/${id}`, {
    params: options,
  });

  if (this.config.apply_corrections) {
    return MiniUtils.correct(mini);
  }

  return mini;
}
