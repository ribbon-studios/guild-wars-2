import { describe, it, expect } from 'vitest';
import { SupportedLanguages } from '@/types';
import { maps } from '../maps';

describe('fn(maps)', () => {
  it.each([
    ['en', 'Queensdale'],
    ['fr', 'La Vallée de la reine'],
    ['de', 'Königintal'],
    ['es', 'Valle de la Reina'],
  ] as [SupportedLanguages, string][])('should return the requested map in "%s"', async (lang, expectedName) => {
    const response = await maps({
      map_id: 15,
      lang,
    });

    expect(response.maps['15'].map_name).toEqual(expectedName);
  });

  it('should return a list of the maps', async () => {
    const response = await maps();

    expect(Object.keys(response.maps).length).greaterThanOrEqual(1016);
  });
});
