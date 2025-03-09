import { SupportedLanguages } from '@/types';
import { rfetch } from '@ribbon-studios/js-utils';

export type Options = {
  /**
   * Show localized texts in the specified language.
   */
  lang?: SupportedLanguages;
};

export type MapName = {
  /**
   * The map id.
   */
  id: string;

  /**
   * The name of the map in the specified language.
   */
  name: string;
};

export function mapNames(options?: Options) {
  return rfetch<MapName[]>('https://api.guildwars2.com/v1/map_names.json', {
    params: options,
  });
}
