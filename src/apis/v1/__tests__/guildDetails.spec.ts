import { describe, it, expect, expectTypeOf, vi, beforeEach } from 'vitest';
import { Guild } from '@/types/v1';
import { rfetch } from '@ribbon-studios/js-utils';
import prismatica from './examples/guilds/prismatica.json';
import { GuildWars2 } from '@/index';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(guildDetails)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(prismatica);
  });

  it('should support finding a guild by its id', async () => {
    const api = new GuildWars2();

    const guild = await api.v1.guildDetails({
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
    const api = new GuildWars2();

    const guild = await api.v1.guildDetails({
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
