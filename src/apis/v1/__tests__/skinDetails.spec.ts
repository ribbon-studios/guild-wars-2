import { describe, it, expect, expectTypeOf, vi } from 'vitest';
import { rfetch } from '@ribbon-studios/js-utils';
import { skinDetails, type Response } from '../skinDetails';
import { Skin } from '@/types/v1/skin';
import { skin_details } from './examples/skin_details';

vi.mock('@ribbon-studios/js-utils');

const fetchMock = vi.mocked(rfetch, true);

describe('fn(skinDetails)', () => {
  it.each([
    [Skin.Type.ARMOR, '1350'],
    [Skin.Type.WEAPON, '9000'],
  ])('should return the skin detail for the "%s" type', async (type, id) => {
    fetchMock.get.mockResolvedValue(skin_details[type]);

    const response = await skinDetails({
      skin_id: id,
    });

    expect(response.skin_id).toEqual(id);
    expect(response.type).toEqual(type);
    expectTypeOf(response).toEqualTypeOf<Response>();
    expect(fetchMock.get).toHaveBeenCalledWith('https://api.guildwars2.com/v1/skin_details.json', {
      params: {
        skin_id: id,
      },
    });
  });
});
