import { describe, it, expect, expectTypeOf, vi, beforeEach } from 'vitest';
import data from './examples/map_floors.json';
import { rfetch } from '@ribbon-studios/js-utils';
import { type Response } from '../mapFloor';
import { GuildWars2 } from '@/index';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(mapFloor)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(data);
  });

  it('should return the requested map floors', async () => {
    const api = new GuildWars2();

    const response = await api.v1.mapFloor({
      continent_id: '1',
      floor: '1',
    });

    expect(Object.keys(response.regions)).length(1);
    expect(Object.keys(response.regions['1'].maps)).length(1);
    expectTypeOf(response).toEqualTypeOf<Response>();
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/map_floor.json', {
      params: {
        continent_id: '1',
        floor: '1',
      },
    });
  });
});
