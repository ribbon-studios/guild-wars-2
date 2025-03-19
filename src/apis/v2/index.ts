import type { GuildWars2 } from '@/index';
import { Schema } from '@/types/v2';
import { build } from './build';
import { tokeninfo } from './tokeninfo';
import { rfetch, RibbonFetchBasicOptions } from '@ribbon-studios/js-utils';

export class V2<V extends Schema> implements V2.API<V> {
  constructor(public config: GuildWars2.InternalConfig<V>) {}

  async fetch<T>(endpoint: string, { token, ...options }: V2.FetchOptions = {}): Promise<T> {
    const url = new URL(endpoint, 'https://api.guildwars2.com');
    const rfetchOptions: RibbonFetchBasicOptions = {
      ...options,
      params: {
        v: this.config.v,
        ...options?.params,
      },
    };

    if (token) {
      const access_token =
        typeof options?.params?.access_token === 'string' ? options?.params?.access_token : this.config.access_token;

      if (typeof process === 'object') {
        rfetchOptions.headers = {
          Authorization: `Bearer ${access_token}`,
          ...rfetchOptions.headers,
        };
      } else {
        // If we're running in a browser then bypass the OPTIONS call
        rfetchOptions.mode = 'cors';
        rfetchOptions.params = {
          access_token,
          ...rfetchOptions.params,
        };
      }
    }

    return rfetch.get<T>(url.toString(), rfetchOptions);
  }

  build = build;
  tokeninfo = tokeninfo;
}

export namespace V2 {
  export interface API<V extends Schema> {
    config: GuildWars2.InternalConfig<V>;

    fetch<T>(endpoint: string, options?: V2.FetchOptions): Promise<T>;
  }

  export type FetchOptions = {
    token?: boolean;
    schema?: Schema;
  } & Pick<RibbonFetchBasicOptions, 'params' | 'headers'>;
}
