import type { V1 } from '.';

export type Response = {
  /**
   * The skin ids.
   */
  skins: number[];
};

export function skins(this: V1.API) {
  return this.fetch<Response>('/v1/skins.json');
}
