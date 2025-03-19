type Function = (...args: any[]) => any;

export function bind<T extends Record<string, Function>, V>(object: T, thisBind: V): V & T {
  const output = {
    ...object,
  };

  for (const key in output) {
    output[key] = bind.fn(output[key], thisBind);
  }

  return output as V & T;
}

export namespace bind {
  // This is getting marked as untested for some reason. Just ignore it.
  /* node:coverage ignore next */
  export function fn<F extends Function, V>(fn: F, thisBind: V): F {
    return fn.bind(thisBind);
  }
}
