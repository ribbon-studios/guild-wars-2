import { Item, SupportedLanguages } from '@/types/v1';
import type { V1 } from '.';

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

export function itemDetails(this: V1.API, options: Options) {
  return this.fetch<Item>('/v1/item_details.json', {
    params: options,
  });
}
