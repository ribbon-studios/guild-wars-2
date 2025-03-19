import { describe, it, expect, expectTypeOf, vi, beforeEach } from 'vitest';
import data from './examples/skins.json';
import { rfetch } from '@ribbon-studios/js-utils';
import { type Response } from '../skins';
import { GuildWars2 } from '@/index';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(skins)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(data);
  });

  it('should return all the skins', async () => {
    const api = new GuildWars2();

    const response = await api.v1.skins();

    expect(response.skins).length(9555);
    expectTypeOf(response).toEqualTypeOf<Response>();
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/skins.json');
  });
});
