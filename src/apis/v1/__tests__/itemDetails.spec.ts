import { describe, it, expect } from 'vitest';
import { itemDetails } from '../itemDetails';
import { ItemType } from '@/types';

describe('fn(itemDetails)', () => {
  it.each([
    [ItemType.ARMOR, '100'],
    [ItemType.BAG, '9480'],
    [ItemType.CONSUMABLE, '10000'],
    [ItemType.CONTAINER, '36520'],
    [ItemType.CRAFTING_MATERIAL, '13000'],
    // [ItemType.GATHERING, '20324'],
    [ItemType.GIZMO, '22335'],
    [ItemType.MINI_PET, '20211'],
    // [ItemType.TRINKET, '13500'],
    [ItemType.TROPHY, '43555'],
    [ItemType.UPGRADE_COMPONENT, '49424'],
  ])('should support the "%s" item type', async (type, id) => {
    const item = await itemDetails({
      item_id: id,
    });

    expect(item.type).toEqual(type);
  });
});
