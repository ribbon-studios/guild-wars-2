import { SupportedLanguages } from '@/types/lang';
import { rfetch } from '@ribbon-studios/js-utils';

export type Options = {
  lang?: SupportedLanguages;
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
