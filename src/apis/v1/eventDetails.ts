import { SupportedLanguages } from '@/types/v1';
import { Event } from '@/types/v1';
import type { V1 } from '.';

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

export function eventDetails(this: V1.API, options?: Options) {
  return this.fetch<Response>('/v1/event_details.json', {
    params: options,
  });
}
