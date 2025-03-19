import type { V1 } from '.';

export type Response = {
  /**
   * The id of the current build.
   */
  build_id: number;
};

export function build(this: V1.API) {
  return this.fetch<Response>('/v1/build.json');
}
