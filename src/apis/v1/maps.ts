import { rfetch } from '@ribbon-studios/js-utils';
import { SupportedLanguages, Coordinate } from '@/types';

export type Options = {
  /**
   * The id of the specific map you want to request.
   */
  map_id?: number;

  /**
   * Show localized texts in the specified language.
   */
  lang?: SupportedLanguages;
};

export type Map = {
  map_name: string;
  min_level: number;
  max_level: number;
  default_floor: number;
  floors: number[];
  region_id: number;
  region_name: string;
  continent_id: number;
  continent_name: string;
  map_rect: Coordinate[];
  continent_rect: Coordinate[];
};

export type Response = {
  maps: Record<number, Map>;
};

export function maps(options?: Options) {
  return rfetch<Response>('https://api.guildwars2.com/v1/maps.json', {
    params: options,
  });
}
