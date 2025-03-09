import { describe, it, expect } from 'vitest';
import { guildDetails } from '../guildDetails';

describe('fn(guildDetails)', () => {
  it('should support finding a guild by its id', async () => {
    const guild = await guildDetails({
      guild_id: 'A75A2574-FA76-4E2B-A6F5-7B3F23F0A605',
    });

    expect(guild).toEqual(
      expect.objectContaining({
        guild_name: 'Prismatica',
      })
    );
  });

  it('should support finding a guild by its name', async () => {
    const guild = await guildDetails({
      guild_name: 'Prismatica',
    });

    expect(guild).toEqual(
      expect.objectContaining({
        guild_id: 'A75A2574-FA76-4E2B-A6F5-7B3F23F0A605',
      })
    );
  });
});
