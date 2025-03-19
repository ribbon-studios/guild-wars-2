import { describe, it, expect, expectTypeOf, vi, beforeEach } from 'vitest';
import { Map } from '@/types/v1';
import data from './examples/maps.json';
import { rfetch } from '@ribbon-studios/js-utils';
import { GuildWars2 } from '@/index';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(maps)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(data);
  });

  it('should return the requested map', async () => {
    const api = new GuildWars2();

    await api.v1.maps({
      map_id: 15,
    });

    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/maps.json', {
      params: {
        map_id: 15,
      },
    });
  });

  it('should support returning all maps', async () => {
    const api = new GuildWars2();

    const response = await api.v1.maps();

    expect(Object.keys(response.maps)).length(1016);
    expectTypeOf(response.maps).toEqualTypeOf<Record<string, Map>>();
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/maps.json', {
      params: undefined,
    });
  });
});
