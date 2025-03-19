import type { SupportedLanguages, Color } from '@/types/v1';
import type { V1 } from '.';

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

export function colors(this: V1.API, options?: Options) {
  return this.fetch<Response>('/v1/colors.json', {
    params: options,
  });
}
