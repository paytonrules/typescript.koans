import * as basic from "./basic";
import { expect } from "chai";

describe("basic", function () {
  describe("addNumbers", function () {
    it("should add two numbers", function () {
      expect(basic.addNumbers(1, 2)).to.be.equal(3);
    });
  });

  describe("addStrings", function () {
    it("should add two strings", function () {
      expect(basic.addStrings("hello", "world")).to.be.equal("helloworld");
    });
  });
});
