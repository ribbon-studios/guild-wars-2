import { rfetch } from '@ribbon-studios/js-utils';
import { SupportedLanguages, Map } from '@/types/v1';

export type Options = {
  /**
   * The id of the specific map you want to request.
   */
  map_id?: number;

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
  maps: Record<string, Map>;
};

export function maps(options?: Options) {
  return rfetch.get<Response>('https://api.guildwars2.com/v1/maps.json', {
    params: options,
  });
}
