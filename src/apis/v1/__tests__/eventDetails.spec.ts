import { describe, it, expect, expectTypeOf, beforeEach, vi } from 'vitest';
import { Event } from '@/types/v1';
import events from './examples/events.json';
import { rfetch } from '@ribbon-studios/js-utils';
import { GuildWars2 } from '@/index';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(eventDetails)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(events);
  });

  it('should return a list of the map names', async () => {
    const api = new GuildWars2();

    await api.v1.eventDetails({
      event_id: 'EED8A79F-B374-4AE6-BA6F-B7B98D9D7142',
    });

    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/event_details.json', {
      params: {
        event_id: 'EED8A79F-B374-4AE6-BA6F-B7B98D9D7142',
      },
    });
  });

  it('should support returning all events', async () => {
    const api = new GuildWars2();

    const response = await api.v1.eventDetails();

    expect(Object.keys(response.events)).length(5417);
    expectTypeOf(response.events).toEqualTypeOf<Record<string, Event>>();
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/event_details.json', {
      params: undefined,
    });
  });
});
