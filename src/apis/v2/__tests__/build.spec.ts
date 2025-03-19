import { describe, it, expectTypeOf, vi, beforeEach, expect } from 'vitest';
import data from './examples/build.json';
import { type Response } from '../build';
import { rfetch } from '@ribbon-studios/js-utils';
import { GuildWars2 } from '@/index';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(build)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(data);
  });

  it('should return the current build', async () => {
    const api = new GuildWars2();

    const response = await api.v2.build();

    expect(response.id).toEqual(115267);
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/build');
    expectTypeOf(response).toEqualTypeOf<Response>();
  });
});
