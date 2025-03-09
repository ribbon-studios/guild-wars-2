import { describe, it, expect, expectTypeOf, vi, beforeEach } from 'vitest';
import { guildDetails } from '../guildDetails';
import { Guild } from '@/types';
import { rfetch } from '@ribbon-studios/js-utils';
import prismatica from './examples/guilds/prismatica.json';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(guildDetails)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(prismatica);
  });

  it('should support finding a guild by its id', async () => {
    const guild = await guildDetails({
      guild_id: 'A75A2574-FA76-4E2B-A6F5-7B3F23F0A605',
    });

    expectTypeOf(guild).toEqualTypeOf<Guild>();
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/guild_details.json', {
      params: {
        guild_id: 'A75A2574-FA76-4E2B-A6F5-7B3F23F0A605',
      },
    });
  });

  it('should support finding a guild by its name', async () => {
    const guild = await guildDetails({
      guild_name: 'Prismatica',
    });

    expectTypeOf(guild).toEqualTypeOf<Guild>();
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/guild_details.json', {
      params: {
        guild_name: 'Prismatica',
      },
    });
  });
});
