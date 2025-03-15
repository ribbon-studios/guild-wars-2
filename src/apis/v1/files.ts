import { RenderServiceIcon } from '@/types';
import { rfetch } from '@ribbon-studios/js-utils';

export type Response = Record<string, RenderServiceIcon>;

export function files() {
  return rfetch.get<Response>('https://api.guildwars2.com/v1/files.json');
}
