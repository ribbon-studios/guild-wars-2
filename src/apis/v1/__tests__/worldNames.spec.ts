import { describe, it, expect, expectTypeOf, vi, beforeEach } from 'vitest';
import { worldNames } from '..';
import { NameIdentifier } from '@/types/v1';
import { rfetch } from '@ribbon-studios/js-utils';
import names from './examples/names/worlds.json';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(worldNames)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(names);
  });

  it('should return a list of the world names', async () => {
    const names = await worldNames();

    expectTypeOf(names).toEqualTypeOf<NameIdentifier[]>();
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/world_names.json', {
      params: undefined,
    });
  });

  it('should support other languages', async () => {
    await worldNames({
      lang: 'fr',
    });

    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/world_names.json', {
      params: {
        lang: 'fr',
      },
    });
  });
});
