import { NameIdentifier, SupportedLanguages } from '@/types/v1';
import { rfetch } from '@ribbon-studios/js-utils';

export type Options = {
  /**
   * Show localized texts in the specified language.
   * @default 'en'
   */
  lang?: SupportedLanguages;
};

export function mapNames(options?: Options) {
  return rfetch.get<NameIdentifier[]>('https://api.guildwars2.com/v1/map_names.json', {
    params: options,
  });
}
