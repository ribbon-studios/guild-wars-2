import { Schema } from '@/types/v2';
import type { V2 } from '../';
import { Account } from '@/types/v2/account';

export type Options<V extends Schema> = V2.Options<V, true>;

export type Response<V extends Schema> = Account<V>;

/**
 * Returns the Authenticated Account Information
 */
export function get<V extends Schema, O extends Schema = V>(this: V2.API<V>, options?: Options<O>) {
  return this.fetch<Response<V>>('/v2/account', {
    params: options,
  });
}
