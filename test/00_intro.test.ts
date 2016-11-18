import * as _ from "./00_intro";
import { expect } from "chai";

describe("00_intro", function () {
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
});
