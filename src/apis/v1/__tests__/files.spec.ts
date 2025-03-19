import { describe, it, expect, expectTypeOf, vi, beforeEach } from 'vitest';
import names from './examples/names/maps.json';
import { rfetch } from '@ribbon-studios/js-utils';
import { type Response } from '../files';
import { GuildWars2 } from '@/index';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(files)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(names);
  });

  it('should return the current files', async () => {
    const api = new GuildWars2();

    const response = await api.v1.files();

    expectTypeOf(response).toEqualTypeOf<Response>();
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/files.json');
  });
});
