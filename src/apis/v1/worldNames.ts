import { NameIdentifier, SupportedLanguages } from '@/types/v1';
import type { V1 } from '.';

export type Options = {
  /**
   * Show localized texts in the specified language.
   * @default 'en'
   */
  lang?: SupportedLanguages;
};

export function worldNames(this: V1.API, options?: Options) {
  return this.fetch<NameIdentifier[]>('/v1/world_names.json', {
    params: options,
  });
}
