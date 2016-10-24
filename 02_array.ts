// # Lodash / Underscore in TypeScript
// Let's write our own version of Lodash in TypeScript!
// In this lesson we're going to learn about a couple of Typescript concepts (or
// type systems in general). Specifically, this is what you'll know as soon as
// all tests pass:

// 1. How to use interfaces.
// 2. How to use generic types (<T>).
// 3. How to use default and optional parameters.

// ## Array functions

// ### chunk
// chunk creates an array of elements split into groups the length of size. If
// array can't be split evenly, the final chunk will be the remaining elements.
// Two-dimensional arrays can be expressed using the T[][].
export function chunk() {
}

// ### compact
// compact accepts an array as an argument and returns an array.
// The returned array does not contain falsey values (such as 0, null,
// undefined, NaN).
export function compact() {
}

// ### head
// head takes in an array and returns its first item.
export function head() {
}

// ### initial
// initial returns a slice of the passed in array, excluding its last item.
export function initial() {
}

// ### last
// last takes in an array and returns its last item.
export function last() {
}

// ### drop
// drop takes in two arguments, an array and a count, and returns an array that
// has count items removed from the beginning.
// The count should be optional and default to 1.
export function drop() {
}

// ### dropRight
// dropRight works like drop, except that it removes items from the end of the 
// passed in array.
export function dropRight() {
}

interface DropWhilePredicate<T> {
  (value?: T, index?: number, collection?: Array<T>): boolean;
}

// ### dropWhile
// dropWhile works similar to drop. It removes items from the beginning of the
// array until the predicate returns false.
export function dropWhile<T>(collection: Array<T>, predicate: DropWhilePredicate<T>): Array<T> {
}

// ### dropRightWhile
// dropRightWhile works similar to dropWhile, except that it iterates over the
// passed in array in reversed order.
export function dropRightWhile() {
}

// ### fill
// fill mutates the passed in array. It fills collection[start] up to
// collection[end] with a specified value.
export function fill() {
}

// Here we define an interface for the predicate used in the findIndex function.
export interface FindIndexPredicate {
}

// ### findIndex
export function findIndex() {
}

// ### findLastIndex
// findLastIndex works line findIndex, but traverses the collection backwards.
export function findLastIndex() {
}

// ### nth
// Given an array, should return the nth item of the passed in array.
export function nth() {
}

// ### zip
export function zip() {
}
