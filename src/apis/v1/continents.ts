import { SupportedLanguages, Continent } from '@/types/v1';
import type { V1 } from '.';

export type Options = {
  /**
   * Show localized texts in the specified language.
   * @default 'en'
   */
  lang?: SupportedLanguages;
};

export type Response = {
  /**
   * Dictionary of maps where the key is the map id.
   */
  continents: Record<string, Continent>;
};

export function continents(this: V1.API, options?: Options) {
  return this.fetch<Response>('/v1/continents.json', {
    params: options,
  });
}
