import { describe, expect, it } from 'vitest';
import { GuildWars2 } from '@/index';

describe('fn(list)', () => {
  it('should support retrieving a list of character names', async () => {
    const api = new GuildWars2({
      access_token: 'E98C78DA-9A36-A844-9A0E-56F9FDC8699A3D24DA21-B44B-4D5F-B02D-B47D769CF5CE',
    });

    const characters = await api.v2.characters.list();

    expect(characters).toEqual(['Nevii Sonar', 'Cecilia Sanare', 'Anna Kyisdottir', 'Belle Sanare']);
  });
});
