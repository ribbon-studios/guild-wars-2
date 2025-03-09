import { describe, it, expect, expectTypeOf, vi, beforeEach } from 'vitest';
import { items } from '../items';
import { rfetch } from '@ribbon-studios/js-utils';
import item_ids from './examples/item_ids.json';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(items)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(item_ids);
  });

  it('should return a list of every item id', async () => {
    const response = await items();

    expect(response.items).length(67809);
    expectTypeOf(response.items).toEqualTypeOf<number[]>();
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/items.json');
  });
});
