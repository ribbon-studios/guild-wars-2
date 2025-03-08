import { describe, it, expect } from 'vitest';
import { GuildWars2 } from '../index';

describe('class(GuildWars2)', () => {
  it('should ...', () => {
    const gw2 = new GuildWars2();

    expect(gw2).toHaveProperty(['v1']);
    expect(gw2.v1).toHaveProperty(['mapNames']);
  });
});
