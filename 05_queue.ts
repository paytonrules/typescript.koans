// # Generics
// Let's look at a concept called "generics".
// To fully understand what generics are and how to use them, let's first look
// at a couple of simple examples.

// ## NumberQueue
// Let's say we want to implement a queue of numbers. We might end up writing
// something like this:

// TypeScript allows us to use interfaces. By convention we prefix them with "I",
// but it's not strictly required.
interface INumberQueue {
  // enqueue() adds an item to the number queue.
  enqueue(value: number): void;

  // dequeue() remove the first item from the number queue.
  dequeue(): number;

  // toArray allows us to serialize the queue. This is useful for testing.
  toArray(): Array<number>;
}

// INumberQueueItem is our queue item interface. Our queue is implemented in a
// recursive fashion, thus the methods look fairly similar.
interface INumberQueueItem {
  value: number;
  next: INumberQueueItem;

  // We use a nice trick here to avoid checking on every call of enqueue if we're
  // the last item in the queue.
  enqueue(value: number): INumberQueueItem;

  toArray(): Array<number>;
}

// TailNumberQueueItem is the last item in the linked queue. It implements the
// INumberQueueItem interface.
class TailNumberQueueItem implements INumberQueueItem {
  public value: number = null;

  // The tail item's successor is the tail item itself.
  public next: TailNumberQueueItem = this;

  enqueue (value: number): NumberQueueItem {
    // When we're the last item in the queue (which is the case here), enqueue wraps
    // our passed in value in a NumberQueueItem and returns it.
    return new NumberQueueItem(value);
  }

  // When the queue is empty, toArray() returns an empty array.
  toArray (): Array<number> {
    return [];
  }
}

// The NumebrQueueItem wraps a value of the queue.
class NumberQueueItem implements INumberQueueItem {
  public value: number;
  public next: TailNumberQueueItem = new TailNumberQueueItem();

  constructor (value: number) {
    this.value = value;
  }

  enqueue (value: number): NumberQueueItem {
    // When we add an item to the queue and we're the last "real" queue item
    // that holds a value, we need to update our reference to the next queue
    // item. Usually we would want to hold a reference to the last item, but to
    // keep the example simple and focused on the type system, we are o.k. with
    // O(1) here.
    this.next = this.next.enqueue(value);
    return this;
  }

  toArray (): Array<number> {
    // The time complexity of this isn't great. We could use generators for
    // this.
    return [this.value, ...this.next.toArray()];
  }
}

export class NumberQueue implements INumberQueue {
  // The head of the queue can initially be set to a new TailNumberQueueItem.
  private head: TailNumberQueueItem = new TailNumberQueueItem();

  enqueue (value: number): void {
    // The nice thing about the way we implemented the TailNumberQueueItem is
    // that we don't actually have to check whether or not our queue is empty. We
    // can always just enqueue() onto it.
    this.head = this.head.enqueue(value);
  }

  dequeue (): number {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  toArray (): Array<number> {
    // Same with toArray()...
    return this.head.toArray();
  }
}

// ## Queue
// But what if instead of having a queue of numbers, we want to have a queue of
// strings? We would either have to completely re-implement the above
// functionality or implement it using the "any" data type.
// Using "any" means we can no longer rely on the level of type safety that 
// TypeScript compiler guarantees, while re-implementing it i tedious, error-
// prone duplicates a lot of logic.

// That's why we need generics! Generics allow us to define a queue (or any data
// structure or parameter) using one of more abstract data types (often called
// `T` or `E`).

// TypeScript allows us to use interfaces. By convention we prefix them with "I",
// but it's not strictly required.
interface IQueue <T> {
  // enqueue() adds an item to the number queue.
  enqueue(value: T): void;

  // dequeue() remove the first item from the number queue.
  dequeue(): T;

  // toArray allows us to serialize the queue. This is useful for testing.
  toArray(): Array<T>;
}

// IQueueItem is our queue item interface. Our queue is implemented in a
// recursive fashion, thus the methods look farily similar.
interface IQueueItem <T> {
  value: T;
  next: IQueueItem<T>;

  // We use a nice trick here to avoid checking on every call of enqueue if we're
  // the last item in the queue.
  enqueue(value: T): IQueueItem<T>;

  toArray(): Array<T>;
}

// TailQueueItem is the last item in the linked queue. It implements the
// IQueueItem interface.
class TailQueueItem<T> implements IQueueItem<T> {
  public value: T = null;

  // The tail item's successor is the tail item itself.
  public next: TailQueueItem<T> = this;

  enqueue (value: T): QueueItem<T> {
    // When we're the last item in the queue (which is the case here), enqueue wraps
    // our passed in value in a QueueItem and returns it.
    return new QueueItem<T>(value);
  }

  // When the queue is empty, toArray() returns an empty array.
  toArray (): Array<T> {
    return [];
  }
}

// The NumebrQueueItem wraps a value of the queue.
class QueueItem<T> implements IQueueItem<T> {
  public value: T;
  public next: TailQueueItem<T> = new TailQueueItem<T>();

  constructor (value: T) {
    this.value = value;
  }

  enqueue (value: T): QueueItem<T> {
    // When we add an item to the queue and we're the last "real" queue item that
    // holds a value, we need to update our reference to the next queue item.
    this.next = this.next.enqueue(value);
    return this;
  }

  toArray (): Array<T> {
    // The time complexity of this isn't great. We could use generators for
    // this.
    return [this.value, ...this.next.toArray()];
  }
}

export class Queue<T> implements IQueue<T> {
  // The head of the queue can initially be set to a new TailQueueItem.
  private head: TailQueueItem<T> = new TailQueueItem<T>();

  enqueue (value: T): void {
    // The nice thing about the way we implemented the TailQueueItem is
    // that we don't actually have to check whether or not our queue is empty. We
    // can always just enqueue() onto it.
    this.head = this.head.enqueue(value);
  }

  dequeue (): T {
    const value: T = this.head.value;
    this.head = this.head.next;
    return value;
  }

  toArray (): Array<T> {
    // Same with toArray()...
    return this.head.toArray();
  }
}

// ### Example
// Now, in order to use our list, we can define a new queue of data type T,
// which can be anything: `Object`, `number`, `string`, `union types`, or even
// `any`!
//
// ```js
// const queue = new Queue<string>();
// queue.enqueue('first');
// queue.enqueue('second');
// queue.enqueue('third');
// ```
