import { describe, it, expect, expectTypeOf, vi, beforeEach } from 'vitest';
import { mapNames } from '../';
import { NameIdentifier } from '@/types/v1';
import names from './examples/names/maps.json';
import { rfetch } from '@ribbon-studios/js-utils';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(mapNames)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(names);
  });

  it('should return a list of the map names', async () => {
    const names = await mapNames();

    expect(names).length(1016);
    expectTypeOf(names).toEqualTypeOf<NameIdentifier[]>();
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/map_names.json', {
      params: undefined,
    });
  });
});
