import { describe, it, expectTypeOf, vi, expect } from 'vitest';
import data from './examples/achievements.json';
import type { Response } from '../achievements';
import { rfetch } from '@ribbon-studios/js-utils';
import { GuildWars2 } from '@/index';
import { Schema } from '@/types/v2';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(achievements)', () => {
  it('should return the accounts achievement progress', async () => {
    fetchMock.get.mockResolvedValue(data);

    const api = new GuildWars2();

    const response = await api.v2.account.achievements();

    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/account/achievements', {
      params: {
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11>>();
  });
});
