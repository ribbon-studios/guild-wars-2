import { SupportedLanguages } from '@/types';
import { Event } from '@/types';
import { rfetch } from '@ribbon-studios/js-utils';

export type Options = {
  /**
   * The id of the specific event you want to request.
   */
  event_id?: string;

  /**
   * Show localized texts in the specified language.
   * @default 'en'
   */
  lang?: SupportedLanguages;
};

export type Response = {
  /**
   * Dictionary of events where the key is the event id.
   */
  events: Record<string, Event>;
};

export function eventDetails(options?: Options) {
  return rfetch.get<Response>('https://api.guildwars2.com/v1/event_details.json', {
    params: options,
  });
}
