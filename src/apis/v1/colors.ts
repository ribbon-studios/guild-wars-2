import type { SupportedLanguages, Color } from '@/types';
import { rfetch } from '@ribbon-studios/js-utils';

export type Options = {
  /**
   * Show localized texts in the specified language.
   * @default 'en'
   */
  lang?: SupportedLanguages;
};

export type Response = {
  colors: Record<string, Color>;
};

export function colors(options?: Options) {
  return rfetch.get<Response>('https://api.guildwars2.com/v1/colors.json', {
    params: options,
  });
}
