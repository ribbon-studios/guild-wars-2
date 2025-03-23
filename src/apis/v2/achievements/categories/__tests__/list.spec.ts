import { describe, it, expectTypeOf, vi, expect } from 'vitest';
import * as data from './examples/list';
import type { Response } from '../list';
import { rfetch } from '@ribbon-studios/js-utils';
import { GuildWars2 } from '@/index';
import { Schema } from '@/types/v2';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(list)', () => {
  it('should return the achievement group ids', async () => {
    fetchMock.get.mockResolvedValue(data.noIds);

    const api = new GuildWars2();

    const response = await api.v2.achievements.categories.list();

    expect(response).length(326);
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/achievements/categories', {
      params: {
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11, undefined>>();
  });

  it('should return the achievement categories', async () => {
    fetchMock.get.mockResolvedValue(data.ids);

    const api = new GuildWars2();

    const response = await api.v2.achievements.categories.list({
      ids: 1,
    });

    expect(response).length(1);
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/achievements/categories', {
      params: {
        ids: 1,
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11, number>>();
  });
});
