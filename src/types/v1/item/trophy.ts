import { BaseItem, ItemType } from './base';

export type TrophyItem = BaseItem & {
  type: ItemType.TROPHY;
};
