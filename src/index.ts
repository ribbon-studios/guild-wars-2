import { V1 } from './apis/v1';
import { V2 } from './apis/v2';
import { SupportedLanguages } from './types/v1';
import { Schema } from './types/v2';

export class GuildWars2<V extends Schema = Schema.LATEST> {
  public v1: V1;
  public v2: V2<V>;
  public readonly config: GuildWars2.Config<V>;

  constructor(config?: GuildWars2.Config<V>) {
    this.config = {
      v: Schema.LATEST as V,
      lang: SupportedLanguages.ENGLISH,
      ...config,
    };

    this.v1 = new V1(this.config);
    this.v2 = new V2(this.config);
  }
}

export namespace GuildWars2 {
  export type Config<V extends Schema> = Config.V1 & {
    /**
     * The default api key.
     * @default undefined
     */
    api_key?: string;

    /**
     * The default schema version.
     */
    v?: V;
  };

  export namespace Config {
    export type V1 = {
      /**
       * Show localized texts in the specified language.
       * @default 'en'
       */
      lang?: SupportedLanguages;
    };
  }
}
