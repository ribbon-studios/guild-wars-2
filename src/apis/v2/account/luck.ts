import { Schema, Scopes } from '@/types/v2';
import type { V2 } from '../';
import { Luck } from '@/types/v2/account';

export type Options<V extends Schema> = V2.Options<V>;

export type Response<V extends Schema> = Luck<V>[];

/**
 * Returns the total luck consumed on an account.
 * @scopes {@link luck.scopes}
 *
 * @example
 * [] // The account hasn't consumed any luck
 */
export function luck<V extends Schema, O extends Schema = V>(this: V2.API<V>, options?: Options<O>) {
  return this.fetch<Response<V>>('/v2/account/luck', {
    params: options,
  });
}

export namespace luck {
  /* node:coverage ignore next */
  export const scopes: Scopes[] = [Scopes.ACCOUNT, Scopes.PROGRESSION, Scopes.UNLOCKS];
}
