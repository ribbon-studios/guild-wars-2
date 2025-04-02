import { DelimiterType, rfetch, RibbonFetchBasicOptions } from '@ribbon-studios/js-utils';
import type { GuildWars2, SupportedLanguages } from '@/index';
import { Schema } from '@/types/v2';
import { bind } from '@/utils';

import * as account from './account';
import * as achievements from './achievements';
import * as minis from './minis';
import * as races from './races';
import * as titles from './titles';

import { build } from './build';
import { tokeninfo } from './tokeninfo';

export class V2<V extends Schema> implements V2.API<V> {
  constructor(public config: GuildWars2.InternalConfig<V>) {
    rfetch.delimiters(DelimiterType.COMMA);
  }

  async fetch<T>(endpoint: string, options?: V2.FetchOptions): Promise<T> {
    const url = new URL(endpoint, 'https://api.guildwars2.com');
    const rfetchOptions: RibbonFetchBasicOptions = {
      ...options,
      params: {
        v: this.config.v,
        ...options?.params,
      },
    };

    const access_token =
      typeof options?.params?.access_token === 'string' ? options?.params?.access_token : this.config.access_token;

    if (access_token) {
      if (typeof process === 'object') {
        rfetchOptions.headers = {
          Authorization: `Bearer ${access_token}`,
          ...rfetchOptions.headers,
        };
      } else {
        rfetchOptions.params = {
          access_token,
          ...rfetchOptions.params,
        };
      }
    }

    return rfetch.get<T>(url.toString(), rfetchOptions);
  }

  account = bind(account, this as V2.API<V>);
  achievements = bind(achievements, this as V2.API<V>);
  minis = bind(minis, this as V2.API<V>);
  races = bind(races, this as V2.API<V>);
  titles = bind(titles, this as V2.API<V>);

  build = build;
  tokeninfo = tokeninfo;
}

export namespace V2 {
  export interface API<V extends Schema> {
    config: GuildWars2.InternalConfig<V>;

    fetch<T>(endpoint: string, options?: V2.FetchOptions): Promise<T>;
  }

  export type FetchOptions = Pick<RibbonFetchBasicOptions, 'params' | 'headers'>;

  type SchemaOptions<V extends Schema> = {
    /**
     * The schema version.
     */
    v?: V;
  };

  type SchemaOptionsWithLang<V extends Schema> = SchemaOptions<V> & {
    /**
     * Show localized texts in the specified language.
     * @default 'en'
     */
    lang?: SupportedLanguages;
  };

  export type Options<V extends Schema, WithLang extends boolean = false> = WithLang extends true
    ? SchemaOptionsWithLang<V>
    : SchemaOptions<V>;
}
