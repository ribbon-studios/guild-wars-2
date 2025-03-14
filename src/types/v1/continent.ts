import type { Dimension } from './dimension';

export type Continent = {
  /**
   * The name of the continent.
   */
  name: string;

  /**
   * The width and height dimensions of the continent.
   */
  continent_dims: Dimension;

  /**
   * The minimal zoom level for use with the map tile service.
   */
  min_zoom: number;

  /**
   * The maximum zoom level for use with the map tile service.
   */
  max_zoom: number;

  /**
   * A list of floors available for this continent.
   */
  floors: number[];
};
