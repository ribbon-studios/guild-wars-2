import { describe, it, expect, expectTypeOf, vi, beforeEach } from 'vitest';
import names from './examples/names/maps.json';
import { rfetch } from '@ribbon-studios/js-utils';
import { files, type Response } from '../files';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(files)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(names);
  });

  it('should return the current files', async () => {
    const response = await files();

    expectTypeOf(response).toEqualTypeOf<Response>();
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/files.json');
  });
});
