import { Location } from './location';
import { RenderServiceIcon } from './render';

export enum EventFlags {
  GROUP_EVENT = 'group_event',
  MAP_WIDE = 'map_wide',
  META_EVENT = 'meta_event',
  DUNGEON_EVENT = 'dungeon_event',
}

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
  icon?: RenderServiceIcon;
};
