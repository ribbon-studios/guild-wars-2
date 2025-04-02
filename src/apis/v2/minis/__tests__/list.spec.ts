import { describe, it, expectTypeOf, vi, expect } from 'vitest';
import * as data from './examples/list';
import type { Response } from '../list';
import { rfetch } from '@ribbon-studios/js-utils';
import { GuildWars2 } from '@/index';
import { Schema } from '@/types/v2';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(list)', () => {
  it('should return the mini ids', async () => {
    fetchMock.get.mockResolvedValue(data.noIds);

    const api = new GuildWars2();

    const response = await api.v2.minis.list();

    expect(response).length(115);
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/minis', {
      params: {
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11, undefined>>();
  });

  it('should return the minis', async () => {
    fetchMock.get.mockResolvedValue(data.ids);

    const api = new GuildWars2();

    const response = await api.v2.minis.list({
      ids: [1, 2],
    });

    expect(response).toEqual([
      {
        id: 598,
        name: 'Mini Blue Raptor Hatchling',
        unlock: '<c=@reminder>This mini can only be crafted in the Mystic Forge.</c>',
        icon: 'https://render.guildwars2.com/file/37BD63B06A92F2340B3995C4792B31ADE336B30E/1821087.png',
        order: 551,
        item_id: 85057,
      },
      {
        id: 599,
        name: 'Mini Spooky Skimmer',
        unlock: 'Found only in Black Lion Chests during specific times of the year.',
        icon: 'https://render.guildwars2.com/file/EF38900B0ED226A72130A4B108AD245396C2556E/1861679.png',
        order: 566,
        item_id: 85467,
      },
    ]);
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/minis', {
      params: {
        ids: [1, 2],
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11, number[]>>();
  });

  it('should support disabling corrections', async () => {
    fetchMock.get.mockResolvedValue(data.ids);

    const api = new GuildWars2({
      apply_corrections: false,
    });

    const response = await api.v2.minis.list({
      ids: [1, 2],
    });

    expect(response).toEqual([
      {
        id: 598,
        name: 'Mini Blue Raptor Hatchling',
        unlock: '<c=@reminder>This mini can only be crafted in the Mystic Forge.</c>',
        icon: 'https://render.guildwars2.com/file/37BD63B06A92F2340B3995C4792B31ADE336B30E/1821087.png',
        order: 551,
        item_id: 85057,
      },
      {
        id: 599,
        name: '((208738))',
        unlock: 'Found only in Black Lion Chests during specific times of the year.',
        icon: 'https://render.guildwars2.com/file/EF38900B0ED226A72130A4B108AD245396C2556E/1861679.png',
        order: 566,
        item_id: 6,
      },
    ]);
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/minis', {
      params: {
        ids: [1, 2],
        v: Schema.LATEST,
      },
    });
    expectTypeOf(response).toEqualTypeOf<Response<Schema.V11, number[]>>();
  });
});
