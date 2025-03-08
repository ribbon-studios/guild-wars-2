import { SupportedLanguages } from '@/types';
import { EventFlags } from '@/types/event-flags';
import { LocationType } from '@/types/location-type';
import { rfetch } from '@ribbon-studios/js-utils';

export type Options = {
  /**
   * The id of the specific event you want to request.
   */
  event_id?: string;

  /**
   * Show localized texts in the specified language.
   */
  lang?: SupportedLanguages;
};

export type Event = {
  name: string;
  level: number;
  map_id: number;
  flags: EventFlags[];
  location: {
    type: LocationType;
  };
  icon?: {
    file_id: number;
    signature: string;
  };
};

export type Response = {
  /**
   * Map of events where the key is the event id.
   */
  events: Record<string, Event>;
};

export function eventDetails(options?: Options) {
  return rfetch<Response>('https://api.guildwars2.com/v1/event_details.json', {
    params: options,
  });
}
