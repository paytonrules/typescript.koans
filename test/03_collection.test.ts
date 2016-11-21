import { expect } from "chai";
import * as sinon from "sinon";
import * as _ from "../src/03_collection";

describe("03_collection", function () {
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

  describe("every", function () {
    context("when collection is an array", function () {
      context("when iteratee always returns true", function () {
        it("should return true", function () {
          const collection = [null, null, null];
          const iteratee = sinon.stub().returns(true);
          expect(_.every<null>(collection, iteratee)).to.be.equal(true);
        });
      });

      context("when iteratee returns false", function () {
        it("should return false and exit early", function () {
          const collection = [null, null, null];
          const iteratee = sinon.stub().returns(false);
          expect(_.every<null>(collection, iteratee)).to.be.equal(false);
          sinon.assert.calledOnce(iteratee);
        });
      });

      it("should iterate over all items", function () {
        const collection = ["first", "second", "third"];
        const iteratee = sinon.stub().returns(true);
        _.every<string>(collection, iteratee);
        sinon.assert.calledWithExactly(iteratee, "first", 0, collection);
        sinon.assert.calledWithExactly(iteratee, "second", 1, collection);
        sinon.assert.calledWithExactly(iteratee, "third", 2, collection);
      });
    });

    context("when collection is an object", function () {
      context("when iteratee always returns true", function () {
        it("should return true", function () {
          const collection: _.Dictionary<number> = {
            'a': 1,
            'b': 2,
            'c': 3
          };
          const iteratee = sinon.stub().returns(true);
          expect(_.every<number>(collection, iteratee)).to.be.equal(true);
        });
      });

      context("when iteratee returns false", function () {
        it("should return false and exit early", function () {
          const collection: _.Dictionary<number> = {
            'a': 1,
            'b': 2,
            'c': 3
          };
          const iteratee = sinon.stub().returns(false);
          expect(_.every<number>(collection, iteratee)).to.be.equal(false);
          sinon.assert.calledOnce(iteratee);
        });
      });

      it("should iterate over all items", function () {
        const collection: _.Dictionary<string> = {
          "0": "first",
          "1": "second",
          "2": "third"
        };
        const iteratee = sinon.stub().returns(true);
        _.every<string>(collection, iteratee);
        sinon.assert.calledWithExactly(iteratee, "first", "0", collection);
        sinon.assert.calledWithExactly(iteratee, "second", "1", collection);
        sinon.assert.calledWithExactly(iteratee, "third", "2", collection);
      });
    });
  });

  describe("filter", function () {
    context("when collection is an array", function () {
      context("when iteratee always returns true", function () {
        it("should return copy of array", function () {
          const collection = [1, 2, 3];
          const iteratee = sinon.stub().returns(true);
          expect(_.filter<number>(collection, iteratee)).to.deep.equal([1, 2, 3]);
        });
      });

      context("when iteratee returns false", function () {
        it("should ignore item", function () {
          const collection = [1, 2, 3, 4, 1, 2];
          const iteratee = x => x < 3;
          expect(_.filter<number>(collection, iteratee)).to.deep.equal([1, 2, 1, 2]);
        });
      });
    });

    context("when collection is an object", function () {
      context("when iteratee always returns true", function () {
        it("should return true", function () {
          const collection: _.Dictionary<number> = {
            'a': 1,
            'b': 2,
            'c': 3
          };
          const iteratee = (v, k) => !(v === 2 && k === 'b');
          expect(_.filter<number>(collection, iteratee)).to.deep.equal({
            'a': 1,
            'c': 3
          });
        });
      });
    });
  });
});
