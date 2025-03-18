import type { NameIdentifier, SupportedLanguages } from '@/types/v1';
import { rfetch } from '@ribbon-studios/js-utils';

export type Options = {
  /**
   * Show localized texts in the specified language.
   * @default 'en'
   */
  lang?: SupportedLanguages;
};

export type Response = NameIdentifier[];

export function objectiveNames(options?: Options) {
  return rfetch.get<Response>('https://api.guildwars2.com/v1/wvw/objective_names.json', {
    params: options,
  });
}
