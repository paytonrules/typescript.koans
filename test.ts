import { expect } from "chai";
import * as sinon from "sinon";
import * as _ from ".";

describe("addNumbers", function () {
  it("should add two numbers", function () {
    expect(_.addNumbers(1, 2)).to.be.equal(3);
  });
});

describe("addStrings", function () {
  it("should add two strings", function () {
    expect(_.addStrings("hello", "world")).to.be.equal("helloworld");
  });
});

describe("compact", function () {
  it("should return array with undefined removed", function () {
    expect(_.compact([1, undefined, 2, undefined, 3])).to.deep.equal([1, 2, 3]);
  });

  it("should return array with NaN removed", function () {
    expect(_.compact([1, NaN, 2, NaN, 3])).to.deep.equal([1, 2, 3]);
  });

  it("should return array with null removed", function () {
    expect(_.compact([1, null, 2, null, 3])).to.deep.equal([1, 2, 3]);
  });

  it("should return array with 0 removed", function () {
    expect(_.compact([1, 0, 2, 0, 3])).to.deep.equal([1, 2, 3]);
  });

  it("should return array with undefined, NaN, null, 0 removed", function () {
    expect(_.compact([1, undefined, NaN, null, 0, 2, 3])).to.deep.equal([1, 2, 3]);
  });
});

describe("head", function () {
  it("should return the first element of an array", function () {
    expect(_.head([1, 2, 3])).to.be.equal(1);
  });

  it("should return undefined if the array is empty", function () {
    expect(_.head([])).to.be.equal(undefined);
  });
});

describe("last", function () {
  it("should return the first element of an array", function () {
    expect(_.last([1, 2, 3])).to.be.equal(3);
  });

  it("should return undefined if the array is empty", function () {
    expect(_.last([])).to.be.equal(undefined);
  });
});

describe("drop", function () {
  it("should remove count items from the beginning of passed in array", function () {
    expect(_.drop([1, 2, 3, 4], 2)).to.deep.equal([3, 4]);
  });

  it("should default to one item", function () {
    expect(_.drop([1, 2, 3, 4])).to.deep.equal([2, 3, 4]);
  });
});

describe("dropRight", function () {
  it("should remove count items from the end of passed in array", function () {
    expect(_.dropRight([1, 2, 3, 4], 2)).to.deep.equal([1, 2]);
  });

  it("should default to one item", function () {
    expect(_.dropRight([1, 2, 3, 4])).to.deep.equal([1, 2, 3]);
  });
});

describe("dropWhile", function () {
  it("should ignore items until predicate returns true", function () {
    expect(_.dropWhile([ 1, 2, 3, 4, 5, 1 ], value => value < 3)).to.deep.equal([ 3, 4, 5, 1 ]);
  });
});

describe("dropRightWhile", function () {
  it("should ignore items until predicate returns true in reversed order", function () {
    expect(_.dropRightWhile([ 5, 4, 3, 2, 1 ], value => value < 3)).to.deep.equal([ 5, 4, 3 ]);
  });
});

describe("fill", function () {
  it("should fill array slots between start and end with value", function () {
    expect(_.fill([ 4, 6, 8, 10 ], '*', 1, 3)).to.deep.equal([ 4, '*', '*', 10 ]);
  });
});

describe("forEach", function () {
  context("when collection is an array", function () {
    it("should iterate over all items of array", function () {
      const collection = ["first", "second", "third"];
      const iteratee = sinon.spy();
      _.forEach(collection, iteratee);
      sinon.assert.calledWithExactly(iteratee, "first", 0, collection);
      sinon.assert.calledWithExactly(iteratee, "second", 1, collection);
      sinon.assert.calledWithExactly(iteratee, "third", 2, collection);
    });
  });

  context("when collection is an object", function () {
    it("should iterate over all items of object", function () {
      const collection: _.Dictionary<string> = {
        "0": "first",
        "1": "second",
        "2": "third"
      };
      const iteratee = sinon.spy();
      _.forEach(collection, iteratee);
      sinon.assert.calledWithExactly(iteratee, "first", "0", collection);
      sinon.assert.calledWithExactly(iteratee, "second", "1", collection);
      sinon.assert.calledWithExactly(iteratee, "third", "2", collection);
    });
  });
});
