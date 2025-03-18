import { describe, it, vi, beforeEach, expectTypeOf } from 'vitest';
import data from './examples/tokeninfo.json';
import { rfetch } from '@ribbon-studios/js-utils';
import { Schema, TokenInfo } from '@/types/v2';
import { GuildWars2 } from '@/index';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(tokeninfo)', () => {
  beforeEach(() => {
    fetchMock.get.mockResolvedValue(data);
  });

  it.each([Schema.V0, Schema.V1, Schema.V2, Schema.V3] as const)('should support "%s"', async (schema) => {
    const api = new GuildWars2({
      v: schema,
    });

    const response = await api.v2.tokeninfo();

    expectTypeOf(response).toEqualTypeOf<TokenInfo.V0>();
  });

  it.each([Schema.V4, Schema.V5, Schema.V6, Schema.V7, Schema.V8, Schema.V9, Schema.V10, Schema.V11] as const)(
    'should support "%s"',
    async (schema) => {
      const api = new GuildWars2({
        v: schema,
      });

      const response = await api.v2.tokeninfo();

      expectTypeOf(response).toEqualTypeOf<TokenInfo.V1>();
    }
  );
});
