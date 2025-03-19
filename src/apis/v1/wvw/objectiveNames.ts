import type { NameIdentifier, SupportedLanguages } from '@/types/v1';
import type { V1 } from '..';

export type Options = {
  /**
   * Show localized texts in the specified language.
   * @default 'en'
   */
  lang?: SupportedLanguages;
};

export type Response = NameIdentifier[];

export function objectiveNames(this: V1.API, options?: Options) {
  return this.fetch<Response>('/v1/wvw/objective_names.json', {
    params: options,
  });
}
