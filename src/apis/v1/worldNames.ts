import { rfetch } from '@ribbon-studios/js-utils';
import { SupportedLanguages } from '@/types';

export type Options = {
  lang?: SupportedLanguages;
};

export type WorldName = {
  id: string;
  name: string;
};

export function worldNames(options?: Options) {
  return rfetch<WorldName[]>('https://api.guildwars2.com/v1/world_names.json', {
    params: options,
  });
}
