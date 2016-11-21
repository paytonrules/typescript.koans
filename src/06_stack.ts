// In this lesson we're going to implement a basic stack.
// The interfaces are given. Make sure the size cannot be modified from the
// outside.

// In JavaScript / TypeScript, we can declare getter functions using the
// following syntax:
//
// ```ts
// class MyClass {
//   get myProp (): number {
//     return 123;
//   }
// }
// ```
//
// The same works for setters, but we don't need them for this exercise.

interface IStack <T> {
  size: number;

  push (value: T): void;
  pop (): T;
  peek (): T;
  toArray (): Array<T>;
}

export class Stack {
}

interface IStackFrame <T> {
  value: T;
  next: IStackFrame<T>;
  toArray (): Array<T>;
}

class StackFrame {
}

class LastStackFrame {
}
