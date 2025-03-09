import { BaseItem, ItemType } from './base';

export type MiniPetItem = BaseItem & {
  type: ItemType.MINI_PET;
};
