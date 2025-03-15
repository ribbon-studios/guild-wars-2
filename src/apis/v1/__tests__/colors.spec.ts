import { describe, it, expect, expectTypeOf, vi, beforeEach } from 'vitest';
import data from './examples/colors.json';
import { rfetch } from '@ribbon-studios/js-utils';
import { colors, type Response } from '../colors';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(build)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(data);
  });

  it('should return all the colors', async () => {
    const response = await colors();

    expectTypeOf(response).toEqualTypeOf<Response>();
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/colors.json', {
      params: undefined,
    });
  });
});
