import { Schema, TokenInfo } from '@/types/v2';
import type { V2 } from '.';

export type Options<V extends Schema> = V2.Options<V> & {
  /**
   * The API Key.
   */
  access_token?: string;
};

export type Response<V extends Schema> = TokenInfo<V>;

/**
 * Returns information about the api key.
 */
export function tokeninfo<V extends Schema, O extends Schema = V>(this: V2.API<V>, options?: Options<O>) {
  return this.fetch<Response<O>>('/v2/tokeninfo', {
    params: options,
  });
}
