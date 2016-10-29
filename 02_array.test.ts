import { expect } from "chai";
import * as sinon from "sinon";
import * as _ from "./02_array";

describe("02_array", () => {
  describe("chunk", () => {
    it("should split array into groups of size", () => {
      expect(_.chunk(["a", "b", "c", "d"], 2)).to.deep.equal([["a", "b"], ["c", "d"]]);
      expect(_.chunk(["a", "b", "c", "d"], 3)).to.deep.equal([["a", "b", "c"], ["d"]]);
    });

    it("should default to size 1", () => {
      expect(_.chunk(["a", "b", "c"])).to.deep.equal([["a"], ["b"], ["c"]]);
    });
  });

  describe("compact", () => {
    it("should return array with undefined removed", () => {
      expect(_.compact([1, undefined, 2, undefined, 3])).to.deep.equal([1, 2, 3]);
    });

    it("should return array with NaN removed", () => {
      expect(_.compact([1, NaN, 2, NaN, 3])).to.deep.equal([1, 2, 3]);
    });

    it("should return array with null removed", () => {
      expect(_.compact([1, null, 2, null, 3])).to.deep.equal([1, 2, 3]);
    });

    it("should return array with 0 removed", () => {
      expect(_.compact([1, 0, 2, 0, 3])).to.deep.equal([1, 2, 3]);
    });

    it("should return array with undefined, NaN, null, 0 removed", () => {
      expect(_.compact([1, undefined, NaN, null, 0, 2, 3])).to.deep.equal([1, 2, 3]);
    });
  });

  describe("head", () => {
    it("should return the first element of an array", () => {
      expect(_.head([1, 2, 3])).to.be.equal(1);
    });

    it("should return undefined if the array is empty", () => {
      expect(_.head([])).to.be.equal(undefined);
    });
  });

  describe("initial", () => {
    it("should return a slice of array without its last item", () => {
      expect(_.initial<number>([1, 2, 3])).to.deep.equal([1, 2]);
    });
  });

  describe("last", () => {
    it("should return the first element of an array", () => {
      expect(_.last([1, 2, 3])).to.be.equal(3);
    });

    it("should return undefined if the array is empty", () => {
      expect(_.last([])).to.be.equal(undefined);
    });
  });

  describe("drop", () => {
    it("should remove count items from the beginning of passed in array", () => {
      expect(_.drop([1, 2, 3, 4], 2)).to.deep.equal([3, 4]);
    });

    it("should default to one item", () => {
      expect(_.drop([1, 2, 3, 4])).to.deep.equal([2, 3, 4]);
    });
  });

  describe("dropRight", () => {
    it("should remove count items from the end of passed in array", () => {
      expect(_.dropRight([1, 2, 3, 4], 2)).to.deep.equal([1, 2]);
    });

    it("should default to one item", () => {
      expect(_.dropRight([1, 2, 3, 4])).to.deep.equal([1, 2, 3]);
    });
  });

  describe("dropWhile", () => {
    it("should ignore items until predicate returns true", () => {
      expect(_.dropWhile([ 1, 2, 3, 4, 5, 1 ], value => value < 3)).to.deep.equal([ 3, 4, 5, 1 ]);
    });
  });

  describe("dropRightWhile", () => {
    it("should ignore items until predicate returns true in reversed order", () => {
      expect(_.dropRightWhile([ 5, 4, 3, 2, 1 ], value => value < 3)).to.deep.equal([ 5, 4, 3 ]);
    });
  });

  describe("fill", () => {
    it("should fill array slots between start and end with value", () => {
      expect(_.fill<any>([ 4, 6, 8, 10 ], "*", 1, 3)).to.deep.equal([ 4, "*", "*", 10 ]);
    });
  });

  describe("findIndex", () => {
    context("when predicate always returns false", () => {
      it("should return -1", () => {
        expect(_.findIndex([ 4, 6, 8, 10 ], () => false)).to.be.equal(-1);
      });
    });

    context("when predicate returns true", () => {
      it("should return index", () => {
        expect(_.findIndex([ 4, 6, 8, 10 ], value => value === 6)).to.be.equal(1);
      });
    });

    context("when startIndex > index of first match", () => {
      it("should return index of second match", () => {
        expect(_.findIndex([ 4, 6, 6, 8, 10 ], value => value === 6, 2)).to.be.equal(2);
      });
    });
  });

  describe("findLastIndex", () => {
    context("when predicate always returns false", () => {
      it("should return -1", () => {
        expect(_.findLastIndex([ 4, 6, 8, 10 ], () => false)).to.be.equal(-1);
      });
    });

    context("when predicate returns true", () => {
      it("should return index", () => {
        expect(_.findLastIndex([ 4, 6, 8, 10 ], value => value === 6)).to.be.equal(1);
      });
    });

    context("when startIndex > index of first match", () => {
      it("should return index of second match", () => {
        expect(_.findLastIndex([ 4, 6, 6, 8, 10 ], value => value === 6, 1)).to.be.equal(1);
      });
    });
  });

  describe("nth", () => {
    it("should return nth item", () => {
      expect(_.nth<number>([1, 2, 3], 0)).to.be.equal(1);
      expect(_.nth<number>([1, 2, 3], 1)).to.be.equal(2);
      expect(_.nth<number>([1, 2, 3], 2)).to.be.equal(3);
    });

    it("should default to first item", () => {
      expect(_.nth<number>([1, 2, 3])).to.be.equal(1);
    });
  });

  describe("zip", () => {
    it("should group array items", () => {
      // We can also use something called "union types" here.
      expect(_.zip<string | number | boolean>(["a", "b"], [1, 2], [true, false])).to.deep.equal([["a", 1, true], ["b", 2, false]]);
    });
  });
});
