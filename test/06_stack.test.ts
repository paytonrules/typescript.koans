import { expect } from "chai";
import * as _ from "../src/06_stack";

describe("06_stack", function () {
  describe("push", function () {
    it("should add an item to the top of the stack", function () {
      const stack = new _.Stack<number>();
      stack.push(0);
      stack.push(1);
      stack.push(2);
      expect(stack.toArray()).to.deep.equal([2, 1, 0]);
    });
  });

  describe("pop", function () {
    it("should remove an item from the top of the stack", function () {
      const stack = new _.Stack<number>();
      stack.push(0);
      stack.push(1);
      stack.push(2);

      stack.pop();
      expect(stack.toArray()).to.deep.equal([1, 0]);

      stack.pop();
      expect(stack.toArray()).to.deep.equal([0]);

      stack.pop();
      expect(stack.toArray()).to.deep.equal([]);
    });

    it("should return removed item", function () {
      const stack = new _.Stack<number>();
      stack.push(0);
      stack.push(1);
      stack.push(2);

      expect(stack.pop()).to.be.equal(2);
      expect(stack.pop()).to.be.equal(1);
      expect(stack.pop()).to.be.equal(0);
    });

    context("when stack is empty", function () {
      it("should return null", function () {
        const stack = new _.Stack<number>();
        stack.pop();
        expect(stack.toArray()).to.deep.equal([]);
      });
    });
  });

  describe("peek", function () {
    it("should return top of stack", function () {
      const stack = new _.Stack<number>();

      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.peek()).to.be.equal(3);
      expect(stack.pop()).to.be.equal(3);

      expect(stack.peek()).to.be.equal(2);
      expect(stack.pop()).to.be.equal(2);

      expect(stack.peek()).to.be.equal(1);
      expect(stack.pop()).to.be.equal(1);
    });

    context("when stack is empty", function () {
      it("should return null", function () {
        const stack = new _.Stack<number>();
        expect(stack.peek()).to.be.equal(null);
      });
    });
  });

  describe("size", function () {
    context("when stack is empty", function () {
      it("should be 0", function () {
        const stack = new _.Stack<number>();
        expect(stack.size).to.be.equal(0);
      });
    });

    context("when stack has been emptied", function () {
      it("should be 0", function () {
        const stack = new _.Stack<number>();
        stack.push(1);
        stack.push(2);
        stack.pop();
        stack.pop();
        expect(stack.size).to.be.equal(0);
      });
    });

    context("when stack is already empty", function () {
      it("should not become negative", function () {
        const stack = new _.Stack<number>();
        stack.push(1);
        stack.push(2);
        stack.pop();
        stack.pop();

        // Stack is already empty.
        stack.pop();

        expect(stack.size).to.be.equal(0);
      });
    });

    context("when adding items to the stack", function () {
      it("should increase", function () {
        const stack = new _.Stack<number>();
        expect(stack.size).to.be.equal(0);

        stack.push(1);
        expect(stack.size).to.be.equal(1);

        stack.push(1);
        expect(stack.size).to.be.equal(2);
      });
    });

    context("when removing items from the stack", function () {
      it("should decrease", function () {
        const stack = new _.Stack<number>();
        stack.push(1);
        stack.push(1);
        stack.push(1);
        expect(stack.size).to.be.equal(3);

        stack.pop();
        expect(stack.size).to.be.equal(2);

        stack.pop();
        expect(stack.size).to.be.equal(1);

        stack.pop();
        expect(stack.size).to.be.equal(0);
      });
    });
  });
});
