import { rfetch } from '@ribbon-studios/js-utils';
import { SupportedLanguages, Coordinate2D } from '@/types';

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
  /**
   * The map name.
   */
  map_name: string;

  /**
   * The minimal level of this map.
   */
  min_level: number;

  /**
   * The maximum level of this map.
   */
  max_level: number;

  /**
   * The default floor of this map.
   */
  default_floor: number;

  /**
   * The list of available floors for this map.
   */
  floors: number[];

  /**
   * The id of the region this map belongs to.
   */
  region_id: number;

  /**
   * The name of the region this map belongs to.
   */
  region_name: string;

  /**
   * The id of the continent this map belongs to.
   */
  continent_id: number;

  /**
   * The name of the continent this map belongs to.
   */
  continent_name: string;

  /**
   * The dimensions of the map, given as the coordinates of the lower-left (SW) and upper-right (NE) corners.
   */
  map_rect: Coordinate2D[];

  /**
   * The dimensions of the map within the continent coordinate system, given as the coordinates of the upper-left (NW) and lower-right (SE) corners.
   */
  continent_rect: Coordinate2D[];
};

export type Response = {
  /**
   * Dictionary of maps where the key is the map id.
   */
  maps: Record<number, Map>;
};

export function maps(options?: Options) {
  return rfetch<Response>('https://api.guildwars2.com/v1/maps.json', {
    params: options,
  });
}
