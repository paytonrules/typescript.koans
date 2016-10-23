// # Generics
// Let's look at a different concept called "generics".
// To fully understand what generics are and how to use them, let's first look
// at a couple of very simple examples.

// ## NumberList
// Let's say we want to implement a linked list of numbers. We might end up
// writing something like this:

// TypeScript allows us to use interfaces. By convention we prefix them with "I",
// but it's not strictly required.
interface INumberList {
  push(value: number): void;
  toArray(): Array<number>;
}

// INumberListItem is our list item interface. Our list is implemented in a
// recursive fashion, thus the methods look farily similar.
interface INumberListItem {
  // We use a nice trick here to avoid checking on every call of push if we're
  // the last item in the list.
  push(value: number): INumberListItem;

  // toArray allows us to serialize the list. This is useful for testing.
  toArray(): Array<number>;
}

// TailNumberListItem is the last item in the linked list. It implements the
// INumberListItem interface.
class TailNumberListItem implements INumberListItem {
  push (value: number): NumberListItem {
    // When we're the last item in the list (which is the case here), push wraps
    // our passed in value in a NumberListItem and returns it.
    return new NumberListItem(value);
  }

  // When the list is empty, toArray() returns an empty array.
  toArray (): Array<number> {
    return [];
  }
}

export class NumberList implements INumberList {
  // The head of the list can initially be set to a new TailNumberListItem.
  private head: INumberListItem = new TailNumberListItem();

  push (value: number) : void {
    // The nice thing about the way we implemented the TailNumberListItem is
    // that we don't actually have to check whether or not our list is empty. We
    // can always just push() onto it.
    this.head = this.head.push(value);
  }

  toArray (): Array<number> {
    // Same with toArray()...
    return this.head.toArray();
  }
}


// The NumebrListItem wraps a value of the list.
class NumberListItem implements INumberListItem {
  public value: number;
  private next: INumberListItem = new TailNumberListItem();

  constructor (value: number) {
    this.value = value;
  }

  push (value: number): NumberListItem {
    // When we add an item to the list and we're the last "real" list item that
    // holds a value, we need to update our reference to the next list item.
    this.next = this.next.push(value);
    return this;
  }

  toArray (): Array<number> {
    // The time complexity of this isn't great. We could use generators for
    // this.
    return [this.value, ...this.next.toArray()];
  }
}

