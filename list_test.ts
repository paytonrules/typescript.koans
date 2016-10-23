import { expect } from "chai";
import { NumberList } from "./list";

describe("NumberList", function () {
  describe("push", function () {
    it("should add items to the end of the list", function () {
      const list = new NumberList();
      list.push(1);
      list.push(2);
      list.push(3);

      expect(list.toArray()).to.deep.equal([1, 2, 3]);
    });
  });
});
