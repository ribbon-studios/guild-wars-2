import { rfetch } from '@ribbon-studios/js-utils';
import { NameIdentifier, SupportedLanguages } from '@/types';

export type Options = {
  /**
   * Show localized texts in the specified language.
   * @default 'en'
   */
  lang?: SupportedLanguages;
};

export function worldNames(options?: Options) {
  return rfetch.get<NameIdentifier[]>('https://api.guildwars2.com/v1/world_names.json', {
    params: options,
  });
}
