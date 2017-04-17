import { expect } from "chai";
import * as sinon from "sinon";
import * as _ from "../src/01_intro";

describe("01_intro", function () {
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

  describe("identity", function () {
    it("should return the first argument it receives", function () {
      expect(_.identity<number>(1)).to.be.equal(1);
      expect(_.identity<number>(2)).to.be.equal(2);
      expect(_.identity<string>('hello world')).to.be.equal('hello world');
      expect(_.identity<Object>({})).to.deep.equal({});
    });

    context("when called without arguments", function () {
      it("should return undefined ", function () {
        expect(_.identity()).to.be.equal(undefined);
      });
    });
  });

  describe("attempt", function () {
    context("when function throws an error", function () {
      it("should return error", function () {
        const err = new Error();
        const func = sinon.stub().throws(err);
        expect(_.attempt(func)).to.be.equal(err);
      });
    });

    context("when function does not throw an error", function () {
      it("should return result", function () {
        const result = 123;
        const func = sinon.stub().returns(result);
        expect(_.attempt(func)).to.be.equal(result);
      });
    });

    it("should apply function with passed in arguments", function () {
      const func = sinon.spy();
      _.attempt(func, 1, 2, 3);
      sinon.assert.calledWithExactly(func, 1, 2, 3);
      _.attempt(func, {}, 'Hackages', 'HvA', 3);
      sinon.assert.calledWithExactly(func, {}, 'Hackages', 'HvA', 3);
    });
  });

  describe("noop", function () {
    it("should return undefined", function () {
      expect(_.noop()).to.be.equal(undefined);
    });

    context("when called with arguments", function () {
      it("should return undefined", function () {
        expect(_.noop(1, 2, 3)).to.be.equal(undefined);
      });
    });
  });

  describe("times", function () {
    it("should invoke iteratee n times", function () {
      const iteratee = sinon.spy();
      _.times<number>(10, iteratee);
      sinon.assert.callCount(iteratee, 10);
    });

    it("should call iteratee with current count", function () {
      const iteratee = sinon.spy();
      _.times<number>(3, iteratee);
      expect(iteratee.getCall(0).args).to.deep.equal([0]);
      expect(iteratee.getCall(1).args).to.deep.equal([1]);
      expect(iteratee.getCall(2).args).to.deep.equal([2]);
    });

    it("should return array of iteratee results", function () {
      expect(_.times<number>(3, n => n + 1)).to.deep.equal([1, 2, 3]);
    });
  });

  describe("constant", function () {
    it("should return a function that returns the supplied value", function () {
      expect(_.constant<number>(1)()).to.be.equal(1);
      expect(_.constant<string>("hello")()).to.be.equal("hello");
    });
  });
});
