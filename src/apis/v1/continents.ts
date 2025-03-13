import { rfetch } from '@ribbon-studios/js-utils';
import { SupportedLanguages, Continent } from '@/types';

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

export function continents(options?: Options) {
  return rfetch.get<Response>('https://api.guildwars2.com/v1/continents.json', {
    params: options,
  });
}
