import { describe, it, expectTypeOf, vi, expect } from 'vitest';
import * as data from './examples/get.json';
import type { Response } from '../get';
import { GuildWars2 } from '@/index';
import { Race, Schema } from '@/types/v2';
import { rfetch } from '@ribbon-studios/js-utils';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(get)', () => {
  it('should return the race', async () => {
    fetchMock.get.mockResolvedValue(data);

    const api = new GuildWars2();

    const response = await api.v2.races.get(Race.Type.ASURA);

    expect(response.id).toEqual(Race.Type.ASURA);
    expect(fetchMock.get).toHaveBeenCalledWith(`https://api.guildwars2.com/v2/races/${Race.Type.ASURA}`, {
      params: {
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11>>();
  });
});
