import { expect } from "chai";
import { addNumbers, addStrings } from "./00_intro";

describe("00_intro", () => {
  describe("addNumbers", () => {
    it("should add two numbers", () => {
      expect(addNumbers(1, 2)).to.be.equal(3);
    });
  });

  describe("addStrings", () => {
    it("should add two strings", () => {
      expect(addStrings("hello", "world")).to.be.equal("helloworld");
    });
  });
});
