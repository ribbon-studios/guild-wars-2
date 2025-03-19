import { describe, it, expect, expectTypeOf, vi, beforeEach } from 'vitest';
import names from './examples/names/maps.json';
import { rfetch } from '@ribbon-studios/js-utils';
import { type Response } from '../build';
import { GuildWars2 } from '@/index';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(build)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(names);
  });

  it('should return the current build', async () => {
    const api = new GuildWars2();

    const response = await api.v1.build();

    expectTypeOf(response).toEqualTypeOf<Response>();
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/build.json');
  });
});
