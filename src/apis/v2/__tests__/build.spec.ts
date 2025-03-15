import { describe, it, expectTypeOf, vi, beforeEach, expect } from 'vitest';
import data from './examples/build.json';
import { build, type Response } from '../build';
import { rfetch } from '@ribbon-studios/js-utils';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(build)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(data);
  });

  it('should return the current build', async () => {
    const response = await build();

    expect(response.id).toEqual(115267);
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/build');
    expectTypeOf(response).toEqualTypeOf<Response>();
  });
});
