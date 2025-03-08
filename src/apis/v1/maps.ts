import { rfetch } from '@ribbon-studios/js-utils';
import { SupportedLanguages, Coordinate } from '@/types';

export type Options = {
  map_id?: number;
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
