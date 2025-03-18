import type { GuildWars2 } from '@/index';
import { Schema } from '@/types/v2';
import { build } from './build';
import { tokeninfo } from './tokeninfo';
import { rfetch, RibbonFetchBasicOptions } from '@ribbon-studios/js-utils';

export class V2<V extends Schema> {
  constructor(protected config: GuildWars2.Config<V>) {}

  async fetch<T>(url: string, options?: V2.FetchOptions): Promise<T> {
    const headers = options?.headers ?? {};
    const params = {
      // Verify all types are accurate before bumping this version!
      v: Schema.V11,
      ...options?.params,
    };

    if (options.token) {
      const api_key =
        typeof options?.params?.access_token === 'string' ? options?.params?.access_token : this.config.api_key;

      if (typeof process === 'object') {
        headers['Authorization'] = `Bearer ${api_key}`;
        delete params['access_token'];
      } else {
        params['access_token'] = api_key;
        delete headers['Authorization'];
      }
    }

    return rfetch.get<T>(url, {
      params,
      headers,
    });
  }

  build = build;
  tokeninfo = tokeninfo;
}

export namespace V2 {
  export type FetchOptions = {
    token?: boolean;
    schema?: Schema;
  } & Pick<RibbonFetchBasicOptions, 'params' | 'headers'>;
}
