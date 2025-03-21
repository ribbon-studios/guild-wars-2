import { Schema, Character } from '@/types/v2';
import type { V2 } from '..';

type CharacterNames = string | string[];

export type Options<V extends Schema, T extends CharacterNames> = V2.Options<V> & {
  /**
   * The character names to search by.
   * @example
   * // Returns every character attached to the account.
   * 'all'
   * // Returns the characters with the given names.
   * 'Nevii Sonar'
   * // Returns the characters with the given names.
   * ['Nevii Sonar', 'Cecilia Sanare']
   */
  ids: T;
};

export type Response<V extends Schema, T extends CharacterNames> = T extends undefined ? string[] : Character<V>;

export function list<V extends Schema, O extends Schema = V, T extends CharacterNames = undefined>(
  this: V2.API<V>,
  options?: Options<O, T>
) {
  return this.fetch<Response<V, T>>('/v2/characters', {
    token: true,
    params: options,
  });
}
