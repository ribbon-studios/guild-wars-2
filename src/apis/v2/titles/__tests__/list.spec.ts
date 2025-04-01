import { describe, it, expectTypeOf, vi, expect } from 'vitest';
import * as data from './examples/list';
import type { Response } from '../list';
import { rfetch } from '@ribbon-studios/js-utils';
import { GuildWars2 } from '@/index';
import { Schema } from '@/types/v2';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(list)', () => {
  it('should return the title ids', async () => {
    fetchMock.get.mockResolvedValue(data.noIds);

    const api = new GuildWars2();

    const response = await api.v2.titles.list();

    expect(response).length(35);
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/titles', {
      params: {
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11, undefined>>();
  });

  it('should return the titles', async () => {
    fetchMock.get.mockResolvedValue(data.ids);

    const api = new GuildWars2();

    const response = await api.v2.titles.list({
      ids: [1, 2],
    });

    expect(response).length(2);
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/titles', {
      params: {
        ids: [1, 2],
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11, number[]>>();
  });
});
