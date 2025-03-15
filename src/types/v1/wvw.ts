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
}
