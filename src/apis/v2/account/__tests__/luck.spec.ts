import { describe, it, expectTypeOf, vi, expect } from 'vitest';
import * as data from './examples/get.json';
import { luck, type Response } from '../luck';
import { GuildWars2 } from '@/index';
import { Schema, Scopes } from '@/types/v2';
import { rfetch } from '@ribbon-studios/js-utils';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(get)', () => {
  it('should return the account info', async () => {
    fetchMock.get.mockResolvedValue(data);

    const api = new GuildWars2();

    const response = await api.v2.account.luck();

    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/account/luck', {
      params: {
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11>>();
  });

  it('should return the required scopes', async () => {
    expect(luck.scopes).toEqual([Scopes.ACCOUNT, Scopes.PROGRESSION, Scopes.UNLOCKS]);
  });
});
