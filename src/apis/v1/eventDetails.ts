import { Location, SupportedLanguages } from '@/types';
import { EventFlags } from '@/types';
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
  /**
   * The name of the event.
   */
  name: string;

  /**
   * The event level.
   */
  level: number;

  /**
   * The map where the event takes place.
   */
  map_id: number;

  /**
   * A list of flags containing information about the event.
   * @see {@link EventFlags}
   */
  flags: EventFlags[];

  /**
   * The location of the event.
   */
  location: Location;

  /**
   * The icon for the event.
   */
  icon?: {
    /**
     * The file id to be used with the render service.
     */
    file_id: number;

    /**
     * The file signature to be used with the render service.
     */
    signature: string;
  };
};

export type Response = {
  /**
   * Dictionary of events where the key is the event id.
   */
  events: Record<string, Event>;
};

export function eventDetails(options?: Options) {
  return rfetch<Response>('https://api.guildwars2.com/v1/event_details.json', {
    params: options,
  });
}
