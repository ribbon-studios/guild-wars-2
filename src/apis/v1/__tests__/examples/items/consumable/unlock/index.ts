import { UnlockType } from '@/types';
import bagSlot from './bag-slot.json';
import bankTab from './bank-tab.json';
import collectableCapacity from './collectible-capacity.json';
import content from './content.json';
import recipe from './recipe.json';
import dye from './dye.json';

export default {
  [UnlockType.BAG_SLOT]: bagSlot,
  [UnlockType.BANK_TAB]: bankTab,
  [UnlockType.COLLECTIBLE_CAPACITY]: collectableCapacity,
  [UnlockType.CONTENT]: content,
  [UnlockType.CRAFTING_RECIPE]: recipe,
  [UnlockType.DYE]: dye,
  [UnlockType.UNKNOWN]: undefined,
};
