import { rfetch } from '@ribbon-studios/js-utils';

export type Response = {
  /**
   * The id of the current build.
   */
  id: number;
};

export function build() {
  return rfetch.get<Response>('https://api.guildwars2.com/v2/build');
}
