import { describe, it, expect } from 'vitest';
import { GuildWars2 } from '../index';
import { Schema } from '@/types/v2';
import { SupportedLanguages } from '@/types/v1';

describe('class(GuildWars2)', () => {
  it('should have all of the apis', () => {
    const gw2 = new GuildWars2();

    expect(gw2).toHaveProperty(['v1']);
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
