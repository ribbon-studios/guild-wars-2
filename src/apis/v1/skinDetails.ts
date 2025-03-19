import { SupportedLanguages } from '@/types/v1';
import { Skin } from '@/types/v1/skin';
import type { V1 } from '.';

export type Options = {
  /**
   * The skin id.
   */
  skin_id: string;

  /**
   * Show localized texts in the specified language.
   * @default 'en'
   */
  lang?: SupportedLanguages;
};

export type Response = Skin;

export function skinDetails(this: V1.API, options: Options) {
  return this.fetch<Response>('/v1/skin_details.json', {
    params: options,
  });
}
