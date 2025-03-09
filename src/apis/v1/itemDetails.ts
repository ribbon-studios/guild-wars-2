import { Item, SupportedLanguages } from '@/types';
import { rfetch } from '@ribbon-studios/js-utils';

export type Options = {
  /**
   * The item to query for.
   */
  item_id: string;

  /**
   * Show localized texts in the specified language.
   * @default 'en'
   */
  lang?: SupportedLanguages;
};

export function itemDetails(options: Options) {
  return rfetch<Item>('https://api.guildwars2.com/v1/item_details.json', {
    params: options,
  });
}
