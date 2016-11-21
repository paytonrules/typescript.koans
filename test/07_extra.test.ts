import { expect } from "chai";
import * as sinon from "sinon";
import * as _ from "../src/07_extra";

describe("07_extra", function () {
  describe("join", function () {
    context("when called without separator", function () {
      it("should join using \",\"", function () {
        expect(_.join(["hello", "world", "!"])).to.be.equal("hello,world,!");
      });
    });

    context("when called with separator", function () {
      it("should join using separator", function () {
        expect(_.join(["hello", "world", "!"], " beautiful ")).to.be.equal("hello beautiful world beautiful !");
      });
    });
  });

  describe("ary", function () {
    context("when called with exactly n arguments", function () {
      it("should call function with n arguments", function () {
        const func = sinon.stub().returns("yeah");
        expect(_.ary(func, 3)(1, 2, 3)).to.be.equal("yeah");
        sinon.assert.callCount(func, 1);
        sinon.assert.calledWithExactly(func, 1, 2, 3);
      });
    });

    context("when called with > n arguments", function () {
      it("should call function with n arguments", function () {
        const func = sinon.stub().returns("yeah");
        expect(_.ary(func, 3)(1, 2, 3, 4)).to.be.equal("yeah");
        sinon.assert.callCount(func, 1);
        sinon.assert.calledWithExactly(func, 1, 2, 3);
      });
    });
  });
});
