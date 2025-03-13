import { describe, it, expect, expectTypeOf, vi, beforeEach } from 'vitest';
import { Map } from '@/types';
import { maps } from '../maps';
import data from './examples/maps.json';
import { rfetch } from '@ribbon-studios/js-utils';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(maps)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(data);
  });

  it('should return the requested map', async () => {
    await maps({
      map_id: 15,
    });

    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/maps.json', {
      params: {
        map_id: 15,
      },
    });
  });

  it('should support returning all maps', async () => {
    const response = await maps();

    expect(Object.keys(response.maps)).length(1016);
    expectTypeOf(response.maps).toEqualTypeOf<Record<string, Map>>();
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/maps.json', {
      params: undefined,
    });
  });
});
