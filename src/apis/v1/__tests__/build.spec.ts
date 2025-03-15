import { describe, it, expect, expectTypeOf, vi, beforeEach } from 'vitest';
import names from './examples/names/maps.json';
import { rfetch } from '@ribbon-studios/js-utils';
import { build, type Response } from '../build';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(build)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(names);
  });

  it('should return the current build', async () => {
    const response = await build();

    expectTypeOf(response).toEqualTypeOf<Response>();
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/build.json');
  });
});
