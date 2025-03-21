import { describe, it, expect, expectTypeOf, vi, beforeEach } from 'vitest';
import data from './examples/match_details.json';
import { rfetch } from '@ribbon-studios/js-utils';
import { type Response } from '../matchDetails';
import { GuildWars2 } from '@/index';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(matchDetails)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(data);
  });

  it('should return the current matchDetails', async () => {
    const api = new GuildWars2();

    const response = await api.v1.wvw.matchDetails({
      match_id: '1-4',
    });

    expectTypeOf(response).toEqualTypeOf<Response>();
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/wvw/match_details.json', {
      params: {
        match_id: '1-4',
      },
    });
  });
});
