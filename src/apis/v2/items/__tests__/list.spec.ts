import { describe, it, expectTypeOf, vi, expect } from 'vitest';
import * as data from './examples/list';
import type { Response } from '../list';
import { GuildWars2 } from '@/index';
import { Schema } from '@/types/v2';
import { rfetch } from '@ribbon-studios/js-utils';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(list)', () => {
  it('should return the items', async () => {
    fetchMock.get.mockResolvedValue(data.noIds);

    const api = new GuildWars2();

    const response = await api.v2.items.list();

    expect(response).length(44);
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/items', {
      params: {
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11, undefined>>();
  });

  it('should return the specific items', async () => {
    fetchMock.get.mockResolvedValue(data.ids);

    const api = new GuildWars2();

    const response = await api.v2.items.list({
      ids: [101460, 100, 48809, 72249, 98089, 101568, 91026, 67004, 9480, 36520, 13000, 22335],
    });

    expect(response).length(12);
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/items', {
      params: {
        ids: [101460, 100, 48809, 72249, 98089, 101568, 91026, 67004, 9480, 36520, 13000, 22335],
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11, number[]>>();
  });
});
