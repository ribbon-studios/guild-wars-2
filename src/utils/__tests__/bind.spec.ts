import { describe, it, expect } from 'vitest';
import { bind } from '../bind';

function example(this: { doStuff: boolean }) {
  return this.doStuff;
}

namespace example {
  export const test = 'test';
}

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
      class MyThing {
        static doStuff = true;
        static example = bind.fn(example, MyThing);
      }

      expect(MyThing.example()).toEqual(true);
      expect(MyThing.example.test).toEqual('test');
    });
  });
});
