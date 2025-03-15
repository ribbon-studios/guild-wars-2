import { rfetch } from '@ribbon-studios/js-utils';

export type Response = {
  /**
   * The id of the current build.
   */
  build_id: number;
};

export function build() {
  return rfetch.get<Response>('https://api.guildwars2.com/v1/build.json');
}
