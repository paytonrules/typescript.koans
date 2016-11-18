import { expect } from "chai";
import * as _ from "./04_export";

describe("04_export", () => {
  const names = [
    "addNumbers",
    "addStrings",
    "identity",
    "attempt",
    "constant",
    "noop",
    "times",
    "chunk",
    "compact",
    "head",
    "initial",
    "last",
    "drop",
    "dropRight",
    "dropWhile",
    "dropRightWhile",
    "fill",
    "findIndex",
    "findLastIndex",
    "nth",
    "zip",
    "forEach",
    "every",
    "filter",
    "map",
    "reduce"
  ];

  for (const name of names) {
    it(`should export ${name}`, () => {
      expect(typeof _[name]).to.be.equal("function");
    });
  }
});
