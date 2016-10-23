// # Lodash / Underscore in TypeScript
// Let's write our own version of Lodash in TypeScript!
// In this lesson we're going to learn about a couple of Typescript concepts (or
// type systems in general). Specifically, this is what you'll know as soon as
// all tests pass:

// 1. How to use interfaces.
// 2. How to use generic types (<T>).
// 3. How to use default and optional parameters.

// ## Util functions
// Let's start with the util function, since they don't require too much
// knowledge of the TypeScript's type system.

// ### identity
// identity returns the first argument it receives.
export function identity<T>(value?: T): T {
  return value;
}

// ## attempt
// attempt applies the passed in function with the supplied arguments. If the
// function throws an error, the error is being returned. If the function does
// not throw an error, the result is being returned.
export function attempt<T>(func: (...args: any[]) => T, ...args: any[]): T|Error {
  try {
    return func.apply(null, args);
  } catch (e) {
    return e;
  }
}

// ### constant
// constant returns a function that returns a the passed in value.
export function constant<T>(value: T): () => T {
  return () => value;
}

// ### noop
// noop can be called with arbitrary arguments, it will always return
// `undefined`.
export function noop(...args: any[]): void {
}

// ### times
// times invokes the passed in iteratee (2nd argument) n times. It returns an
// array of results.
export function times<T>(n: number, iteratee: (n: number) => T): T[] {
  const results = [];
  for (let i = 0; i < n; i++) {
    results[i] = iteratee(i);
  }
  return results;
}
