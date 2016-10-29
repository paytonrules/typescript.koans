import { expect } from "chai";
import { NumberQueue, Queue } from "./05_queue";

describe("05_queue", () => {
  describe("NumberQueue", () => {
    describe("enqueue", () => {
      it("should add an item to the end of the queue", () => {
        const queue = new NumberQueue();

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.toArray()).to.deep.equal([1, 2, 3]);
      });
    });

    describe("dequeue", () => {
      it("should remove the first item of the queue", () => {
        const queue = new NumberQueue();

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.dequeue()).to.be.equal(1);
        expect(queue.toArray()).to.deep.equal([2, 3]);
      });
    });
  });

  describe("Queue", () => {
    describe("enqueue", () => {
      it("should add an item to the end of the queue", () => {
        const queue = new Queue<string>();

        queue.enqueue("first");
        queue.enqueue("second");
        queue.enqueue("third");

        expect(queue.toArray()).to.deep.equal(["first", "second", "third"]);
      });
    });

    describe("dequeue", () => {
      it("should remove the first item of the queue", () => {
        const queue = new Queue<string>();

        queue.enqueue("first");
        queue.enqueue("second");
        queue.enqueue("third");

        expect(queue.dequeue()).to.be.equal("first");
        expect(queue.toArray()).to.deep.equal(["second", "third"]);
      });
    });
  });

});
