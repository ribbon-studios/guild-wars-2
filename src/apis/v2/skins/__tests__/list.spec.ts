import { describe, it, expectTypeOf, vi, expect } from 'vitest';
import * as data from './examples/list';
import type { Response } from '../list';
import { GuildWars2 } from '@/index';
import { Schema } from '@/types/v2';
import { rfetch } from '@ribbon-studios/js-utils';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(list)', () => {
  it('should return the skins', async () => {
    fetchMock.get.mockResolvedValue(data.noIds);

    const api = new GuildWars2();

    const response = await api.v2.skins.list();

    expect(response).length(897);
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/skins', {
      params: {
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11, undefined>>();
  });

  it('should return the specific skins', async () => {
    fetchMock.get.mockResolvedValue(data.ids);

    const api = new GuildWars2();

    const response = await api.v2.skins.list({
      ids: [100, 9480],
    });

    expect(response).length(2);
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/skins', {
      params: {
        ids: [100, 9480],
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11, number[]>>();
  });
});
