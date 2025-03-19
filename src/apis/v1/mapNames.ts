import { NameIdentifier, SupportedLanguages } from '@/types/v1';
import type { V1 } from '.';

export type Options = {
  /**
   * Show localized texts in the specified language.
   * @default 'en'
   */
  lang?: SupportedLanguages;
};

export function mapNames(this: V1.API, options?: Options) {
  return this.fetch<NameIdentifier[]>('/v1/map_names.json', {
    params: options,
  });
}
