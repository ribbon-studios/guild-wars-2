import { Schema, SchemaTypes, TokenInfo } from '@/types/v2';
import type { V2 } from '.';

export type Options<V extends Schema> = V2.Options<V> & {
  /**
   * The API Key.
   */
  access_token?: string;
};

export type Responses = SchemaTypes<{
  [Schema.V0]: TokenInfo.V0;
  [Schema.V4]: TokenInfo.V1;
}>;

/**
 * Returns information about the api key.
 */
export function tokeninfo<V extends Schema, O extends Schema = V>(this: V2.API<V>, options?: Options<O>) {
  return this.fetch<Responses[O]>('/v2/tokeninfo', {
    params: options,
  });
}
