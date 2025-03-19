import { describe, it, expect } from 'vitest';
import { bind } from '../bind';

describe('Bind Utils', () => {
  describe('fn(bind)', () => {
    it('should support binding a map of functions while retaining their type information', () => {
      const myThing = {
        doStuff: true,
      };

      const bindings = bind(
        {
          myFunction: function (this: typeof myThing) {
            return this.doStuff;
          },
        },
        myThing
      );

      expect(bindings.myFunction()).toEqual(true);
    });
  });

  describe('fn(bind.fn)', () => {
    it('should support binding functions while retaining their type information', () => {
      const myThing: {
        doStuff: boolean;
        fn?: () => boolean;
      } = {
        doStuff: true,
      };

      myThing.fn = bind.fn(function (this: typeof myThing) {
        return this.doStuff;
      }, myThing);

      expect(myThing.fn()).toEqual(true);
    });
  });
});
