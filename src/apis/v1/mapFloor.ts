import type { Dimension, Rectangle, Region, SupportedLanguages } from '@/types/v1';
import { rfetch } from '@ribbon-studios/js-utils';

export type Options = {
  /**
   * The id of the continent.
   */
  continent_id: string;

  /**
   * The map floor.
   */
  floor: string;

  /**
   * Show localized texts in the specified language.
   * @default 'en'
   */
  lang?: SupportedLanguages;
};

export type Response = {
  texture_dims: Dimension;
  clamped_view?: Rectangle;
  regions: Record<string, Region>;
};

export function mapFloor(options?: Options) {
  return rfetch.get<Response>('https://api.guildwars2.com/v1/map_floor.json', {
    params: options,
  });
}
