import { describe, it, expect, expectTypeOf, vi } from 'vitest';
import { itemDetails } from '../itemDetails';
import {
  ArmorItem,
  ArmorType,
  ConsumableItem,
  ConsumableType,
  GatheringItem,
  GatheringType,
  Item,
  ItemType,
  TrinketItem,
  TrinketType,
  UnlockType,
} from '@/types/v1';
import { rfetch } from '@ribbon-studios/js-utils';
import data from './examples/items';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(itemDetails)', () => {
  it('should invoke the correct endpoint', async () => {
    fetchMock.get.mockResolvedValue(data[ItemType.WEAPON]);

    await itemDetails({
      item_id: '100',
    });

    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/item_details.json', {
      params: {
        item_id: '100',
      },
    });
  });

  describe('Simple Types', () => {
    it.each([
      ItemType.BACK,
      ItemType.BAG,
      ItemType.CONTAINER,
      ItemType.CRAFTING_MATERIAL,
      ItemType.GIZMO,
      ItemType.MINI_PET,
      ItemType.TOOL,
      ItemType.TROPHY,
      ItemType.WEAPON,
    ])('should support "%s" items', async (type) => {
      fetchMock.get.mockResolvedValue(data[type]);

      const item = await itemDetails({
        item_id: '100',
      });

      expect(item.type).toEqual(type);
      expectTypeOf(item).toEqualTypeOf<Item>();
    });
  });

  describe('type(Armor)', () => {
    it.each([
      ArmorType.BOOTS,
      ArmorType.COAT,
      ArmorType.GLOVES,
      ArmorType.HELM,
      ArmorType.HELM_AQUATIC,
      ArmorType.LEGGINGS,
      ArmorType.SHOULDERS,
    ])('should support the ArmorType "%s"', async (type) => {
      fetchMock.get.mockResolvedValue(data[ItemType.ARMOR][type]);

      const item = await itemDetails({
        item_id: '100',
      });

      expect(item.type).toEqual(ItemType.ARMOR);
      expect((item as ArmorItem).armor.type).toEqual(type);
      expectTypeOf(item).toEqualTypeOf<Item>();
    });
  });

  describe('type(Consumable)', () => {
    it.each([
      ConsumableType.APPEARANCE_CHANGE,
      ConsumableType.BOOZE,
      ConsumableType.CONTRACT_NPC,
      ConsumableType.FOOD,
      ConsumableType.GENERIC,
      ConsumableType.HALLOWEEN,
      ConsumableType.IMMEDIATE,
      ConsumableType.TRANSMUTATION,
      ConsumableType.UN_TRANSMUTATION,
      ConsumableType.UPGRADE_REMOVAL,
      ConsumableType.UTILITY,
    ])('should support the ConsumableType "%s"', async (type) => {
      fetchMock.get.mockResolvedValue(data[ItemType.CONSUMABLE][type]);

      const item = await itemDetails({
        item_id: '100',
      });

      expect(item.type).toEqual(ItemType.CONSUMABLE);
      expect((item as ConsumableItem).consumable.type).toEqual(type);
      expectTypeOf(item).toEqualTypeOf<Item>();
    });

    describe('type(Unlock)', () => {
      it.each([
        UnlockType.BAG_SLOT,
        UnlockType.BANK_TAB,
        UnlockType.COLLECTIBLE_CAPACITY,
        UnlockType.CONTENT,
        UnlockType.CRAFTING_RECIPE,
        UnlockType.DYE,
        // Need to find an unknown type
        // UnlockType.UNKNOWN,
      ])('should support the UnlockType "%s"', async (type) => {
        fetchMock.get.mockResolvedValue(data[ItemType.CONSUMABLE][ConsumableType.UNLOCK][type]);

        const item = await itemDetails({
          item_id: '100',
        });

        expect(item.type).toEqual(ItemType.CONSUMABLE);
        expect((item as ConsumableItem).consumable.type).toEqual(ConsumableType.UNLOCK);
        expectTypeOf(item).toEqualTypeOf<Item>();
      });
    });
  });

  describe('type(Gathering)', () => {
    it.each([GatheringType.FORAGING, GatheringType.LOGGING, GatheringType.MINING])(
      'should support the GatheringType "%s"',
      async (type) => {
        fetchMock.get.mockResolvedValue(data[ItemType.GATHERING][type]);

        const item = await itemDetails({
          item_id: '100',
        });

        expect(item.type).toEqual(ItemType.GATHERING);
        expect((item as GatheringItem).gathering.type).toEqual(type);
        expectTypeOf(item).toEqualTypeOf<Item>();
      }
    );
  });

  describe('type(Trinket)', () => {
    it.each([TrinketType.ACCESSORY, TrinketType.AMULET, TrinketType.RING])(
      'should support the TrinketType "%s"',
      async (type) => {
        fetchMock.get.mockResolvedValue(data[ItemType.TRINKET][type]);

        const item = await itemDetails({
          item_id: '100',
        });

        expect(item.type).toEqual(ItemType.TRINKET);
        expect((item as TrinketItem).trinket.type).toEqual(type);
        expectTypeOf(item).toEqualTypeOf<Item>();
      }
    );
  });
});
