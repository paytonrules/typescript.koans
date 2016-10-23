// # Lodash / Underscore in TypeScript
// Let's write our own version of Lodash in TypeScript!
// In this lesson we're going to learn about a couple of Typescript concepts (or
// type systems in general). Specifically, this is what you'll know as soon as
// all tests pass:

// 1. How to use interfaces.
// 2. How to use generic types (<T>).
// 3. How to use default and optional parameters.

// ## Collection functions

export interface Dictionary<T> {
  [index: string]: T;
}

interface ArrayForEachIteratee<T> {
  (value?: T, index?: number, collection?: Array<T>): any;
}

interface DictionaryForEachIteratee<T> {
  (value?: T, key?: string, collection?: Dictionary<T>): any;
}

export function forEach<T>(collection: Array<T>, iteratee: ArrayForEachIteratee<T>): void;
export function forEach<T>(collection: Dictionary<T>, iteratee: DictionaryForEachIteratee<T>): void;

export function forEach<T>(collection, iteratee) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      const value: T = collection[i];
      const exitEarly = iteratee(value, i, collection);
      if (exitEarly) {
        break;
      }
    }
  } else {
    const keys: string[] = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      const key: string = keys[i];
      const value: T = collection[key];
      const exitEarly = iteratee(value, key, collection);
      if (exitEarly) {
        break;
      }
    }
  }
}

interface EveryIteratee<T> {
  (value?: T, index?: number, collection?: Array<T>): boolean;
}

export function every<T>(collection: Array<T>, iteratee: EveryIteratee<T>): boolean {
  for (let i = 0; i < collection.length; i++) {
    if (!iteratee(collection[i], i, collection)) {
      return false;
    }
  }
  return true;
}

// Identical to EveryIteratee.
interface FilterIteratee<T> {
  (value?: T, index?: number, collection?: Array<T>): boolean;
}

export function filter<T>(collection: Array<T>, iteratee: FilterIteratee<T>): Array<T> {
  const results: Array<T> = [];
  for (let i = 0; i < collection.length; i++) {
    const value = collection[i];
    if (iteratee(value, i, collection)) {
      results.push(value);
    }
  }
  return results;
}

interface MapIteratee<T, TResult> {
  (value?: T, index?: number, collection?: Array<T>): TResult;
}

export function map<T, TResult>(collection: Array<T>, iteratee: MapIteratee<T, TResult>): Array<TResult> {
  const results = new Array<TResult>(collection.length);
  for (let i = 0; i < collection.length; i++) {
    results[i] = iteratee(collection[i], i, collection);
  }
  return results;
}

interface ReduceIteratee<T, TResult> {
  (accumulator: TResult, value?: T, index?: number, collection?: Array<T>);
}

export function reduce<T, TResult>(collection: Array<T>, iteratee: ReduceIteratee<T, TResult>, accumulator: TResult): TResult {
  for (let i = 0; i < collection.length; i++) {
    accumulator = iteratee(accumulator, collection[i], i, collection);
  }
  return accumulator;
}
