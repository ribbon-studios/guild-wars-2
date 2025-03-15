import { describe, it, expect } from 'vitest';
import { GuildWars2 } from '../index';

describe('class(GuildWars2)', () => {
  it('should have all of the apis', () => {
    const gw2 = new GuildWars2();

    expect(gw2).toHaveProperty(['v1']);
    expect(Object.keys(gw2.v1)).toEqual([
      'wvw',
      'build',
      'colors',
      'continents',
      'eventDetails',
      'files',
      'guildDetails',
      'itemDetails',
      'items',
      'mapFloor',
      'mapNames',
      'maps',
      'worldNames',
    ]);

    expect(Object.keys(gw2.v1.wvw)).toEqual(['matches']);
  });
});
