import { describe, it, expect, expectTypeOf, vi, beforeEach } from 'vitest';
import { NameIdentifier, SupportedLanguages } from '@/types/v1';
import { rfetch } from '@ribbon-studios/js-utils';
import names from './examples/names/worlds.json';
import { GuildWars2 } from '@/index';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(worldNames)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(names);
  });

  it('should return a list of the world names', async () => {
    const api = new GuildWars2();

    await api.v1.worldNames();

    expectTypeOf(names).toEqualTypeOf<NameIdentifier[]>();
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/world_names.json', {
      params: undefined,
    });
  });

  it('should support other languages', async () => {
    const api = new GuildWars2();

    await api.v1.worldNames({
      lang: SupportedLanguages.FRENCH,
    });

    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/world_names.json', {
      params: {
        lang: SupportedLanguages.FRENCH,
      },
    });
  });
});
