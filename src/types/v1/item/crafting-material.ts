import { BaseItem, ItemType } from './base';

export type CraftingMaterialItem = BaseItem & {
  type: ItemType.CRAFTING_MATERIAL;
};
