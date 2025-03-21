import { describe, it, expectTypeOf, vi, expect } from 'vitest';
import * as data from './examples/list';
import type { Response } from '../list';
import { rfetch } from '@ribbon-studios/js-utils';
import { GuildWars2 } from '@/index';
import { Schema } from '@/types/v2';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(list)', () => {
  it('should return the achievement ids', async () => {
    fetchMock.get.mockResolvedValue(data.noIds);

    const api = new GuildWars2();

    const response = await api.v2.achievements.list();

    expect(response).length(6557);
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/achievements', {
      params: {
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11, undefined>>();
  });

  it('should return the achievements', async () => {
    fetchMock.get.mockResolvedValue(data.ids);

    const api = new GuildWars2();

    const response = await api.v2.achievements.list({
      ids: 1234,
    });

    expect(response).length(200);
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/achievements', {
      params: {
        ids: 1234,
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11, number>>();
  });
});
