import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { V2 } from '../index';
import { Schema } from '@/types/v2';
import { SupportedLanguages } from '@/types/v1';
import { rfetch } from '@ribbon-studios/js-utils';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('class(V2)', () => {
  let realProcess: NodeJS.Process;

  beforeEach(() => {
    realProcess = global.process;
  });

  afterEach(() => {
    global.process = realProcess;
  });

  describe('fn(fetch)', () => {
    it('should support passing the api key via a header', async () => {
      const expectedToken = 'expected-token';

      const v2 = new V2({
        v: Schema.V11,
        lang: SupportedLanguages.ENGLISH,
        access_token: expectedToken,
      });

      await v2.fetch('/v2/test.json', {
        token: true,
      });

      expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/test.json', {
        params: {
          v: Schema.V11,
        },
        headers: {
          Authorization: `Bearer ${expectedToken}`,
        },
      });
    });

    it('should support passing the api key via a query param', async () => {
      delete global.process;

      const expectedToken = 'expected-token';

      const v2 = new V2({
        v: Schema.V11,
        lang: SupportedLanguages.ENGLISH,
        access_token: expectedToken,
      });

      await v2.fetch('/v2/test.json', {
        token: true,
      });

      expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/test.json', {
        mode: 'cors',
        params: {
          access_token: expectedToken,
          v: Schema.V11,
        },
      });
    });

    it('should support passing an override api key', async () => {
      delete global.process;

      const expectedToken = 'expected-token';

      const v2 = new V2({
        v: Schema.V11,
        lang: SupportedLanguages.ENGLISH,
        access_token: 'my-main-token',
      });

      await v2.fetch('/v2/test.json', {
        token: true,
        params: {
          access_token: expectedToken,
        },
      });

      expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v2/test.json', {
        mode: 'cors',
        params: {
          access_token: expectedToken,
          v: Schema.V11,
        },
      });
    });
  });
});
