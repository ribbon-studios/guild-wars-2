import { Schema, SchemaResponse, TokenInfo } from '@/types/v2';
import type { V2 } from '.';

export type Options<V extends Schema> = {
  /**
   * The API Key.
   */
  access_token?: string;

  /**
   * The schema version.
   */
  v?: V;
};

export type Responses = SchemaResponse<{
  [Schema.V0]: TokenInfo.V0;
  [Schema.V4]: TokenInfo.V1;
}>;

/**
 * Returns information about the api key.
 */
export function tokeninfo<V extends Schema, O extends Schema = V>(this: V2<V>, options?: Options<O>) {
  return this.fetch<Responses[O]>('https://api.guildwars2.com/v2/tokeninfo', {
    token: true,
    params: options,
  });
}
