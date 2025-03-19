import type { V2 } from '.';

export type Response = {
  /**
   * The id of the current build.
   */
  id: number;
};

/**
 * Returns the current build id of the game.
 * @see https://wiki.guildwars2.com/wiki/API:2/build
 */
export function build(this: V2.API<any>) {
  return this.fetch<Response>('/v2/build');
}
