import { Coordinate2D, Rectangle } from './coordinate';
import { RenderServiceIcon } from './render';

export type Region = {
  /**
   * The region name.
   */
  name: string;

  /**
   * The coordinates of the region label.
   */
  label_coord: Coordinate2D;

  /**
   * Maps within the region.
   */
  maps: Record<string, RegionMap>;
};

export type RegionMap = {
  /**
   * The map name.
   */
  name: string;

  /**
   * The minimal level of this map.
   */
  min_level: number;

  /**
   * The maximum level of this map.
   */
  max_level: number;

  /**
   * The default floor of the map.
   */
  default_floor: number;

  /**
   * The dimensions of the map, given as the coordinates of the lower-left (SW) and upper-right (NE) corners.
   */
  map_rect: Rectangle;

  /**
   * The dimensions of the map within the continent coordinate system, given as the coordinates of the upper-left (NW) and lower-right (SE) corners.
   */
  continent_rect: Rectangle;

  /**
   * The Points of Interest (landmarks, waypoints, and vistas)
   */
  points_of_interest: PointOfInterest[];

  /**
   * The god shrines.
   */
  god_shrines: GodShrine[];

  /**
   * A list of renown hearts.
   */
  tasks: Task[];

  /**
   * A list of skill (hero) challenges.
   */
  skill_challenges: SkillChallenge[];

  /**
   * A list of areas within the map.
   */
  sectors: Sector[];

  /**
   * A list of mastery insights within the map.
   */
  training_points: TrainingPoint[];

  /**
   * A list of adventures within the map.
   */
  adventures: Adventure[];
};

export type PointOfInterest = {
  /**
   * The point of interest id.
   */
  poi_id: number;

  /**
   * The point of interest name
   */
  name: string;

  /**
   * The Point of Interest type. (landmark, waypoint, or vista)
   */
  type: PointOfInterest.Type;

  /**
   * The floor of this object.
   */
  floor: number;

  /**
   * The coordinates of this object.
   */
  coord: Coordinate2D;

  /**
   * The icon for the point of interest.
   */
  icon?: RenderServiceIcon;
};

export namespace PointOfInterest {
  export enum Type {
    LANDMARK = 'landmark',
    WAYPOINT = 'waypoint',
    VISTAS = 'vistas',
  }
}

export type GodShrine = {
  /**
   * The god shrine id.
   */
  id: number;

  /**
   * The name of the god shrine.
   */
  name: string;

  /**
   * The name of the god shrine when contested.
   */
  name_contested?: string;

  /**
   * The icon for the god shrine.
   */
  icon?: RenderServiceIcon;

  /**
   * The icon for the god shrine when contested.
   */
  icon_contested?: RenderServiceIcon;

  /**
   * The id for the poi of the god shrine.
   */
  poi_id: number;

  /**
   * The coordinates of the god shrine.
   */
  coord: Coordinate2D;
};

export type Task = {
  /**
   * The renown heart id.
   */
  task_id: number;

  /**
   * The objective or name of the heart.
   */
  objective: string;

  /**
   * The level of the heart.
   */
  level: number;

  /**
   * The coordinates of the heart.
   */
  coord: Coordinate2D;

  /**
   * The boundary of the heart.
   */
  bounds: Coordinate2D[];
};

export type SkillChallenge = {
  /**
   * The location of the skill challenge.
   * Expansions beyond HoT don't have this value. (aka just Cantha)
   */
  expac?: SkillChallenge.Expac;

  /**
   * The id of the skill challenge.
   * Expansions beyond HoT don't have this value. (aka just Cantha)
   */
  idx?: number;

  /**
   * The coordinates of this skill challenge.
   */
  coord: Coordinate2D;
};

export namespace SkillChallenge {
  export enum Expac {
    /**
     * Core Tyria & LWS2 Maps
     */
    TYRIA = 0,

    /**
     * Core Tyria & LWS2 Maps
     */
    HEART_OF_THORNS = 1,

    /**
     * End of Dragons Maps
     */
    CANTHA = undefined,
  }
}

export type Sector = {
  /**
   * The area id.
   */
  sector_id: number;

  /**
   * The name of the area.
   */
  name: string;

  /**
   * The level of the area
   */
  level: number;

  /**
   * The coordinates of this area. (this is usually the center position)
   */
  coord: Coordinate2D;

  /**
   * The boundary of the area.
   */
  bounds: Coordinate2D[];
};

export type TrainingPoint = {
  /**
   * The mastery insight id.
   */
  id: number;

  /**
   * The name of the mastery insight. (usually blank)
   */
  name: string;

  /**
   * The description of the mastery insight. (usually blank)
   */
  description: string;

  /**
   * The coordinates of the mastery insight marker.
   */
  coord: Coordinate2D;

  /**
   * The location of the mastery insight.
   */
  type: TrainingPoint.Type;
};

export namespace TrainingPoint {
  export enum Type {
    /**
     * Core Tyria
     */
    TYRIA = 'Tyria',

    /**
     * Heart of Thorns & Living World Season 3
     */
    MAGUUMA = 'Maguuma',

    /**
     * Path of Fire & Living World Season 4
     */
    DESERT = 'Desert',

    /**
     * The Icebrood Saga
     */
    TUNDRA = 'Tundra',

    /**
     * End of Dragons
     */
    JADE = 'Jade',

    /**
     * Secrets of the Obscure
     */
    SKY = 'Sky',

    /**
     * Janthir Wilds
     */
    UNKNOWN = 'Unknown',
  }
}

export type Adventure = {
  /**
   * The adventure id.
   */
  guid: string;

  /**
   * The coordinates of the marker.
   */
  coord: Coordinate2D;

  /**
   * The name of the adventure.
   */
  name: string;

  leaderboard: AdventureLeaderboard;
};

export type AdventureLeaderboard = {
  /**
   * The leaderboard id.
   */
  guid: string;

  /**
   * The title of the leaderboard.
   */
  title: string;

  /**
   * The description of the leaderboard.
   */
  description: string;
};
