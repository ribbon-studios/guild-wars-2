import { describe, it, expect } from 'vitest';
import { mapNames } from '../';

describe('fn(mapNames)', () => {
  it('should return a list of the map names', async () => {
    const names = await mapNames();

    expect(names.length).greaterThan(1);

    const queensdale = names.find(({ id }) => id === '15');

    expect(queensdale).toEqual({
      id: '15',
      name: 'Queensdale',
    });
  });

  it('should support other languages', async () => {
    const names = await mapNames({
      lang: 'fr',
    });

    expect(names.length).greaterThan(1);

    const queensdale = names.find(({ id }) => id === '15');

    expect(queensdale).toEqual({
      id: '15',
      name: 'La Vallée de la reine',
    });
  });
});
