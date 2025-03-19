import { describe, it, expect, expectTypeOf, vi, beforeEach } from 'vitest';
import { rfetch } from '@ribbon-studios/js-utils';
import item_ids from './examples/item_ids.json';
import { GuildWars2 } from '@/index';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(items)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(item_ids);
  });

  it('should return a list of every item id', async () => {
    const api = new GuildWars2();

    const response = await api.v1.items();

    expect(response.items).length(67809);
    expectTypeOf(response.items).toEqualTypeOf<number[]>();
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/items.json');
  });
});
