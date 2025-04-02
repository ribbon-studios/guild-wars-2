import { describe, it, expectTypeOf, vi, expect } from 'vitest';
import data from './examples/get.json';
import type { Response } from '../get';
import { GuildWars2 } from '@/index';
import { Schema } from '@/types/v2';
import { rfetch } from '@ribbon-studios/js-utils';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(get)', () => {
  it('should return the race', async () => {
    fetchMock.get.mockResolvedValue(data);

    const api = new GuildWars2();

    const response = await api.v2.minis.get(2);

    expect(response).toEqual({
      id: 747,
      name: 'Mini Shrine Guardian',
      icon: 'https://render.guildwars2.com/file/27B0562AEE087B15B32A90EFB8A5A3E6C847197F/2100320.png',
      order: 680,
      item_id: 90009,
    });
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/minis/2', {
      params: {
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11>>();
  });

  it('should support disabling corrections', async () => {
    fetchMock.get.mockResolvedValue(data);

    const api = new GuildWars2({
      apply_corrections: false,
    });

    const response = await api.v2.minis.get(2);

    expect(response).toEqual({
      id: 747,
      name: '((208738))',
      icon: 'https://render.guildwars2.com/file/27B0562AEE087B15B32A90EFB8A5A3E6C847197F/2100320.png',
      order: 680,
      item_id: 6,
    });
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/minis/2', {
      params: {
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11>>();
  });
});
