import { SupportedLanguages, Map } from '@/types/v1';
import type { V1 } from '.';

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

export function maps(this: V1.API, options?: Options) {
  return this.fetch<Response>('/v1/maps.json', {
    params: options,
  });
}
