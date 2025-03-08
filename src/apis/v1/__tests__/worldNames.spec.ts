import { describe, it, expect } from 'vitest';
import { worldNames } from '..';
import { SupportedLanguages } from '@/types';

describe('fn(worldNames)', () => {
  it.each([
    ['en', 'Anvil Rock'],
    ['fr', "Rocher de l'enclume"],
    ['de', 'Amboss-Stein'],
    ['es', 'Roca del Yunque'],
  ] as [SupportedLanguages, string][])('should return a list of the map names in "%s"', async (lang, expectedName) => {
    const names = await worldNames({
      lang,
    });

    expect(names);
    expect(names.length).greaterThan(1);

    const kaineng = names.find(({ id }) => id === '1001');

    expect(kaineng).toEqual({
      id: '1001',
      name: expectedName,
    });
  });
});
