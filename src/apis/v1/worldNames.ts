import { rfetch } from '@ribbon-studios/js-utils';
import { SupportedLanguages } from '@/types';

export type Options = {
  /**
   * Show localized texts in the specified language.
   * @default 'en'
   */
  lang?: SupportedLanguages;
};

export type WorldName = {
  /**
   * The world id.
   */
  id: string;

  /**
   * The name of the world in the specified language.
   */
  name: string;
};

export function worldNames(options?: Options) {
  return rfetch<WorldName[]>('https://api.guildwars2.com/v1/world_names.json', {
    params: options,
  });
}
