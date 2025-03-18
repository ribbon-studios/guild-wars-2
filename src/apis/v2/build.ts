import { rfetch } from '@ribbon-studios/js-utils';

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
export function build() {
  console.log(this);

  return rfetch.get<Response>('https://api.guildwars2.com/v2/build');
}
