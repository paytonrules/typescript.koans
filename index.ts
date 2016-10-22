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
    return filter(collection, v => !!v)
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

export interface Dictionary<T> {
    [index: string]: T;
}

interface ForEachIteratee<T> {
    (value?: T, indexOrKey?: number | string, collection?: Array<T> | Dictionary<T>): any;
}

export function forEach<T>(collection: Array<T> | Dictionary<T>, iteratee: ForEachIteratee<T>): void {
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
