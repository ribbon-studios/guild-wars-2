import { rfetch } from '@ribbon-studios/js-utils';

export type Response = {
  /**
   * The skin ids.
   */
  skins: number[];
};

export function skins() {
  return rfetch.get<Response>('https://api.guildwars2.com/v1/skins.json');
}
