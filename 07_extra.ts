// Wow! You're fast! If you've reached this lesson, it's time for some more
// Lodash magic!
// Obviously Lodash has much more functions than we worked on so far, so now
// it's your turn to implement a couple more non-trivial examples.
// It's helpful to keep the [Lodash Docs](https://lodash.com/docs/4.16.4) at
// hand in case you get confused about how certain corner cases should be
// handled.

import { slice } from "./02_array";

// ### join
// Converts all elements in array into a string separated by separator.
export function join(arr: any[], separator: string = ','): string {
  let [result, ...tail] = arr;
  for (const chunk of tail) {
    result += separator;
    result += chunk;
  }
  return result;
}

// ### ary
// ary creates a new function. The returned function invokes func - first
// argument - with n - second argument - arguments, discarding any superfluous
// arguments.
export function ary<T>(func: (...args: any[]) => T, n: number = func.length): (...args: any[]) => T {
  return (...args: any[]): T => func(...slice(args, 0, n));
}
