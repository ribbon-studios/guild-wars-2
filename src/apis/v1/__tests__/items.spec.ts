import { describe, it, expect } from 'vitest';
import { items } from '../items';

describe('fn(items)', () => {
  it('should return a list of every item id', async () => {
    const response = await items();

    expect(response.items).length(67809);
  });
});
