import { describe, it, expect } from 'vitest';
import { GuildWars2 } from '../index';
import { Schema } from '@/types/v2';
import { SupportedLanguages } from '@/types/v1';

describe('class(GuildWars2)', () => {
  it('should have all of the v1 apis', () => {
    const gw2 = new GuildWars2();

    expect(Object.keys(gw2)).toEqual(['config', 'v1', 'v2']);

    expect(Object.keys(gw2.v1)).toEqual([
      'config',
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
      'skinDetails',
      'skins',
      'worldNames',
    ]);
    expect(Object.keys(gw2.v1.wvw)).toEqual(['matchDetails', 'matches', 'objectiveNames']);

    expect(Object.keys(gw2.v2)).toEqual(['config', 'account', 'achievements', 'build', 'tokeninfo']);
    expect(Object.keys(gw2.v2.account)).toEqual(['achievements']);
    expect(Object.keys(gw2.v2.achievements)).toEqual(['categories', 'groups', 'get', 'list']);
  });

  it('should set default config values', () => {
    const gw2 = new GuildWars2();

    expect(gw2.config).toEqual({
      v: Schema.LATEST,
      lang: SupportedLanguages.ENGLISH,
    });
  });

  it('should support overriding the config values', () => {
    const gw2 = new GuildWars2({
      v: Schema.V9,
      lang: SupportedLanguages.CHINESE,
    });

    expect(gw2.config).toEqual({
      v: Schema.V9,
      lang: SupportedLanguages.CHINESE,
    });
  });
});
