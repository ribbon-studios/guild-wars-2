import type { Dimension, Rectangle, Region, SupportedLanguages } from '@/types/v1';
import type { V1 } from '.';

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

export function mapFloor(this: V1.API, options?: Options) {
  return this.fetch<Response>('/v1/map_floor.json', {
    params: options,
  });
}
