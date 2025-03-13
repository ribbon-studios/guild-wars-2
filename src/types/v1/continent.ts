import type { Dimension } from './dimension';

export type Continent = {
  name: string;
  continent_dims: Dimension;
  min_zoom: number;
  max_zoom: number;
  floors: number[];
};
