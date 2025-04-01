import { describe, it, expectTypeOf, vi, expect } from 'vitest';
import * as data from './examples/get.json';
import type { Response } from '../get';
import { GuildWars2 } from '@/index';
import { Schema } from '@/types/v2';
import { rfetch } from '@ribbon-studios/js-utils';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(get)', () => {
  it('should return the race', async () => {
    fetchMock.get.mockResolvedValue(data);

    const api = new GuildWars2();

    const response = await api.v2.titles.get(2);

    expect(response.id).toEqual(2);
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/titles/2', {
      params: {
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11>>();
  });
});
