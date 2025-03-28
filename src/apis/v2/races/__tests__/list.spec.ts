import { describe, it, expectTypeOf, vi, expect } from 'vitest';
import * as data from './examples/list';
import type { Response } from '../list';
import { rfetch } from '@ribbon-studios/js-utils';
import { GuildWars2 } from '@/index';
import { Race, Schema } from '@/types/v2';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(list)', () => {
  it('should return the races ids', async () => {
    fetchMock.get.mockResolvedValue(data.noIds);

    const api = new GuildWars2();

    const response = await api.v2.races.list();

    expect(response).length(5);
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/races', {
      params: {
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11, undefined>>();
  });

  it('should return the races', async () => {
    fetchMock.get.mockResolvedValue(data.ids);

    const api = new GuildWars2();

    const response = await api.v2.races.list({
      ids: Race.Type.ASURA,
    });

    expect(response).length(1);
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/races', {
      params: {
        ids: Race.Type.ASURA,
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11, Race.Type>>();
  });
});
