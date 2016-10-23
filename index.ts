// Let's start with something simple:
// Add sums up two numbers and returns the result.
export function addNumbers(x: number, y: number): number {
    return x + y;
}

// We might also want to "add" strings:
export function addStrings(x: string, y: string): string {
    return x + y;
}

// compact accepts an array as an argument and returns an array.
// The returned array does not contain falsey values (such as 0, null, undefined,
// NaN).
export function compact(collection: Array<any>): Array<any> {
    return filter(collection, v => !!v);
}

// head takes in an array and returns its first item.
export function head<T>(collection: Array<T>): T {
    return collection[0];
}

// last takes in an array and returns its last item.
export function last<T>(collection: Array<T>): T {
    return collection[collection.length - 1];
}

// drop takes in two arguments, an array and a count, and returns an array that
// has count items removed from the beginning.
// The count should be optional and default to 1.
export function drop<T>(collection: Array<T>, count: number = 1): Array<T> {
    return collection.slice(count);
}

// dropRight works like drop, except that it removes items from the end of the 
// passed in array.
export function dropRight<T>(collection: Array<T>, count: number = 1): Array<T> {
    return collection.slice(0, collection.length - count);
}

interface DropWhilePredicate<T> {
    (value?: T, index?: number, collection?: Array<T>): boolean;
}

// dropWhile works similar to drop. It removes items from the beginning of the
// array until the predicate returns false.
export function dropWhile<T>(collection: Array<T>, predicate: DropWhilePredicate<T>): Array<T> {
    let index = 0;
    while (index < collection.length && predicate(collection[index], index, collection)) {
        index++;
    }
    return collection.slice(index);
}

// dropRightWhile works similar to dropWhile, except that it iterates over the
// passed in array in reversed order.
export function dropRightWhile<T>(collection: Array<T>, predicate: DropWhilePredicate<T>): Array<T> {
    let index = collection.length - 1;
    while (index >= 0 && predicate(collection[index], index, collection)) {
        index--;
    }
    return collection.slice(0, index + 1);
}

// fill mutates the passed in array. It fills collection[start] up to
// collection[end] with a specified value.
export function fill<T>(collection: Array<T>, value: T, start: number = 0, end: number = collection.length) : Array<T> {
    for (let i = start; i < end; i++) {
        collection[i] = value;
    }
    return collection;
}

export interface FindIndexPredicate<T> {
    (value?: T, index?: number, collection?: Array<T>): boolean;
}

export function findIndex<T>(collection: Array<T>, predicate: FindIndexPredicate<T>, fromIndex: number = 0): number {
    for (let i = fromIndex; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
            return i;
        }
    }
    return -1;
}

// findLastIndex works line findIndex, but traverses the collection backwards.
export function findLastIndex<T>(collection: Array<T>, predicate: FindIndexPredicate<T>, fromIndex: number = collection.length - 1): number {
    for (let i = fromIndex; i > 0; i--) {
        if (predicate(collection[i], i, collection)) {
            return i;
        }
    }
    return -1;
}

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
