import { describe, it, expectTypeOf, vi, expect } from 'vitest';
import * as data from './examples/groups';
import type { Response } from '../groups';
import { rfetch } from '@ribbon-studios/js-utils';
import { GuildWars2 } from '@/index';
import { Schema } from '@/types/v2';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(groups)', () => {
  it('should return the achievement ids', async () => {
    fetchMock.get.mockResolvedValue(data.noIds);

    const api = new GuildWars2();

    const response = await api.v2.achievements.groups();

    expect(response).length(18);
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/achievements/groups', {
      params: {
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11, undefined>>();
  });

  it('should return the achievements', async () => {
    fetchMock.get.mockResolvedValue(data.ids);

    const api = new GuildWars2();

    const response = await api.v2.achievements.groups({
      ids: '18DB115A-8637-4290-A636-821362A3C4A8',
    });

    expect(response).length(18);
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/achievements/groups', {
      params: {
        ids: '18DB115A-8637-4290-A636-821362A3C4A8',
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11, string>>();
  });
});
