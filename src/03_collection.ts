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

export function forEach() {
}

interface EveryIteratee<T> {
  (value?: T, index?: number, collection?: Array<T>): boolean;
}

export function every() {
}

export function filter() {
}

export function map() {
}

export function reduce() {
}
