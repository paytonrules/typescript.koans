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

export class Stack <T> implements IStack<T> {
  private head: IStackFrame<T> = new LastStackFrame<T>();
  private _size: number = 0;

  push (value: T): void {
    this.head = new StackFrame<T>(value, this.head);
    this._size++;
  }

  pop (): T {
    const prevHead = this.head;
    this.head = this.head.next;
    if (this.head !== prevHead) {
      this._size--;
    }
    return prevHead.value;
  }

  peek (): T {
    return this.head.value;
  }

  toArray (): Array<T> {
    return this.head.toArray();
  }

  get size (): number {
    return this._size;
  }
}

interface IStackFrame <T> {
  value: T;
  next: IStackFrame<T>;
  toArray (): Array<T>;
}

class StackFrame <T> implements IStackFrame <T> {
  constructor (public value: T, public next: IStackFrame <T>) {
  }

  toArray () : Array<T> {
    return [this.value, ...this.next.toArray()];
  }
}

class LastStackFrame <T> implements IStackFrame <T> {
  value: T = null;
  next: LastStackFrame <T> = this;

  toArray () : Array<T> {
    return []
  }
}
