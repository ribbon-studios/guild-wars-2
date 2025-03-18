import { SupportedLanguages } from '@/types/v1';
import { Skin } from '@/types/v1/skin';
import { rfetch } from '@ribbon-studios/js-utils';

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

export function skinDetails(options: Options) {
  return rfetch.get<Response>('https://api.guildwars2.com/v1/skin_details.json', {
    params: options,
  });
}
