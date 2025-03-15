export namespace WvW {
  export type Matches = {
    /**
     * The WvW match id.
     */
    wvw_match_id: string;

    /**
     * The world id of the red world.
     */
    red_world_id: number;

    /**
     * The world id of the blue world.
     */
    blue_world_id: number;

    /**
     * The world id of the green world.
     */
    green_world_id: number;

    /**
     * A timestamp of when the match started.
     */
    start_time: string;

    /**
     * A timestamp of when the match ends.
     */
    end_time: string;
  };

  export type MatchDetails = {
    /**
     * The WvW match id.
     */
    match_id: string;

    /**
     * The current scores. [red, blue, green]
     */
    scores: [number, number, number];

    /**
     * A list detailed information about each of the four maps.
     */
    maps: [Map, Map, Map, Map];
  };

  export type Map = {
    /**
     * The identifier for the map.
     */
    type: MapType;

    /**
     * The scores for this map.
     */
    scores: [number, number, number];

    /**
     * The objectives for this map.
     */
    objectives: Objective[];

    /**
     * The bonuses being granted by this map.
     */
    bonuses: Bonus[];
  };

  export type Objective = {
    /**
     * The objective id.
     */
    id: number;

    /**
     * The current owner of the objective.
     */
    owner: Owner;

    /**
     * The guild id of the guild currently claiming the objective.
     */
    owner_guild?: string;
  };

  export type Bonus = {
    /**
     * A shorthand name for the bonus.
     */
    type: string;

    /**
     * The current owner of the bonus.
     */
    owner: Exclude<Owner, Owner.NEUTRAL>;
  };

  export enum Owner {
    RED = 'Red',
    BLUE = 'Blue',
    GREEN = 'Green',
    NEUTRAL = 'Neutral',
  }

  export enum MapType {
    /**
     * Red Borderlands
     */
    RED_HOME = 'RedHome',

    /**
     * Blue Borderlands
     */
    BLUE_HOME = 'BlueHome',

    /**
     * Green Borderlands
     */
    GREEN_HOME = 'GreenHome',

    /**
     * Eternal Battlegrounds
     */
    CENTER = 'Center',
  }
}
