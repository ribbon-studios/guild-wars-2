import { describe, it, expect } from 'vitest';
import { SupportedLanguages } from '@/types';
import { eventDetails } from '../eventDetails';

describe('fn(eventDetails)', () => {
  it.each([
    ['en', 'Defeat the renegade charr.'],
    ['fr', 'Battre le Charr renégat.'],
    ['de', 'Besiegt den abtrünnigen Charr.'],
    ['es', 'Derrota al charr renegado.'],
  ] as [SupportedLanguages, string][])('should return a list of the map names in "%s"', async (lang, expectedName) => {
    const response = await eventDetails({
      event_id: 'EED8A79F-B374-4AE6-BA6F-B7B98D9D7142',
      lang,
    });

    expect(Object.keys(response.events)).length(1);
    expect(response.events).toEqual({
      'EED8A79F-B374-4AE6-BA6F-B7B98D9D7142': expect.objectContaining({
        name: expectedName,
      }),
    });
  });

  it('should support returning all events', async () => {
    const response = await eventDetails();

    expect(Object.keys(response.events).length).greaterThanOrEqual(5417);
  });
});
