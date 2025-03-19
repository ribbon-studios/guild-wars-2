import { describe, it, expect, expectTypeOf, vi, beforeEach } from 'vitest';
import data from './examples/objective_names.json';
import { rfetch } from '@ribbon-studios/js-utils';
import { type Response } from '../objectiveNames';
import { GuildWars2 } from '@/index';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(objectiveNames)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(data);
  });

  it('should return the current objectiveNames', async () => {
    const api = new GuildWars2();

    const response = await api.v1.wvw.objectiveNames();

    expectTypeOf(response).toEqualTypeOf<Response>();
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/wvw/objective_names.json', {
      params: undefined,
    });
  });
});
