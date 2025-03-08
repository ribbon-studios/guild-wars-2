import { rfetch } from '@ribbon-studios/js-utils';

export type Options = {
  // TODO: Figure out a list of all the supported languages
  lang?: string;
};

export type MapName = {
  id: string;
  name: string;
};

export function mapNames(options?: Options) {
  return rfetch<MapName[]>('https://api.guildwars2.com/v1/map_names.json', {
    params: options,
  });
}
