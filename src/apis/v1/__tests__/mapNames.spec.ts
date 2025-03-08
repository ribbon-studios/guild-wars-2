import { describe, it, expect } from 'vitest';
import { mapNames } from '../';
import { SupportedLanguages } from '@/types';

describe('fn(mapNames)', () => {
  it.each([
    ['en', 'Queensdale'],
    ['fr', 'La Vallée de la reine'],
    ['de', 'Königintal'],
    ['es', 'Valle de la Reina'],
  ] as [SupportedLanguages, string][])('should return a list of the map names in "%s"', async (lang, expectedName) => {
    const names = await mapNames({
      lang,
    });

    expect(names.length).greaterThan(1);

    const queensdale = names.find(({ id }) => id === '15');

    expect(queensdale).toEqual({
      id: '15',
      name: expectedName,
    });
  });
});
