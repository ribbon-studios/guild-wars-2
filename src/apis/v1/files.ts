import { RenderServiceIcon } from '@/types/v1';
import type { V1 } from '.';

export type Response = Record<string, RenderServiceIcon>;

export function files(this: V1.API) {
  return this.fetch<Response>('/v1/files.json');
}
