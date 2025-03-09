import { rfetch } from '@ribbon-studios/js-utils';

export type Response = {
  items: number[];
};

export function items() {
  return rfetch.get<Response>('https://api.guildwars2.com/v1/items.json');
}
