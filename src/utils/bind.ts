type Function = (...args: any[]) => any;

export function bind<T extends bind.BindMap, V>(object: T, thisBind: V): bind.Bound<T, V> {
  const output: T = {
    ...object,
  };

  for (const key in output) {
    // Typescript is acting really weird here and not typeguarding this correctly.
    // Probably worth looking into, but this enables nested objects to retain their type info.
    output[key] = (
      typeof output[key] === 'function' ? bind.fn(output[key], thisBind) : bind(output[key], thisBind)
    ) as (typeof output)[typeof key];
  }

  return output as bind.Bound<T, V>;
}

export namespace bind {
  // This is getting marked as untested for some reason. Just ignore it.
  /* node:coverage ignore next */
  export function fn<F extends Function, V>(fn: F, thisBind: V): F {
    return fn.bind(thisBind);
  }

  export type Bound<T, V> = {
    [key in keyof T]: T[key] extends Function ? T[key] : Bound<T[key], V>;
  } & V;

  export type BindMap = {
    [key: string]: Function | BindMap;
  };
}
