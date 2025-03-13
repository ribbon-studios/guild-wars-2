import { describe, it, expect, expectTypeOf, vi, beforeEach } from 'vitest';
import { Continent } from '@/types';
import data from './examples/continents.json';
import { rfetch } from '@ribbon-studios/js-utils';
import { continents } from '../continents';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(continents)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(data);
  });

  it('should support returning all continents', async () => {
    const response = await continents();

    expect(Object.keys(response.continents)).length(2);
    expectTypeOf(response.continents).toEqualTypeOf<Record<string, Continent>>();
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/continents.json', {
      params: undefined,
    });
  });
});
