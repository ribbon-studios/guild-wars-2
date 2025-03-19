import type { V1 } from '.';

export type Response = {
  items: number[];
};

export function items(this: V1.API) {
  return this.fetch<Response>('/v1/items.json');
}
