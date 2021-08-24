const { cleanUp } = require("./clean-up");

test("should return clean", () => {
  expect(
    cleanUp(
      [
        ["_", "_", "_", "_"],
        ["_", "_", "_", "@"],
        ["_", "_", "@", "_"],
      ],
      2,
      2
    )
  ).toEqual("Clean");
});
test("should return cr@p", () => {
  expect(
    cleanUp(
      [
        ["_", "_", "_", "_"],
        ["_", "_", "_", "@"],
        ["_", "_", "@", "_"],
      ],
      1,
      1
    )
  ).toEqual("Cr@p");
});
test("should return dog", () => {
  expect(
    cleanUp(
      [
        ["_", "_"],
        ["D", "_"],
        ["_", "_"],
      ],
      2,
      2
    )
  ).toEqual("Dog!!");
});
test("should return clean", () => {
  expect(
    cleanUp(
      [
        ["_", "_", "_", "_"],
        ["_", "_", "_", "_"],
        ["_", "_", "_", "_"],
      ],
      2,
      2
    )
  ).toEqual("Clean");
});
test("should return cr@p", () => {
  expect(
    cleanUp(
      [
        ["@", "@"],
        ["@", "@"],
        ["@", "@"],
      ],
      2,
      2
    )
  ).toEqual("Cr@p");
});
test("should return dog", () => {
  expect(
    cleanUp(
      [
        ["_", "_", "_", "_", "D", "_", "_", "_", "_"],
        ["_", "_", "_", "_", "@", "@", "_", "_", "_"],
        ["_", "_", "_", "_", "_", "_", "D", "_", "_"],
      ],
      9,
      5
    )
  ).toEqual("Dog!!");
});
test("should return clean", () => {
  expect(cleanUp([["_", "_", "_", "_", "_"]], 6, 9)).toEqual("Clean");
});
test("should return dog", () => {
  expect(
    cleanUp(
      [
        ["_", "_", "D", "_", "_", "_", "_", "_", "D"],
        ["_", "_", "D", "_", "_", "_", "_", "_", "_"],
        ["_", "_", "_", "_", "_", "@", "_", "_", "_"],
      ],
      4,
      4
    )
  ).toEqual("Dog!!");
});
test("should return cr@p", () => {
  expect(
    cleanUp(
      [
        ["_", "@", "@"],
        ["_", "@", "@"],
      ],
      1,
      2
    )
  ).toEqual("Cr@p");
});
test("should return dog", () => {
  expect(
    cleanUp(
      [
        ["_", "_", "_", "_", "_", "_", "_", "@"],
        ["_", "_", "_", "@", "D", "_", "_", "_"],
        ["_", "_", "_", "_", "_", "_", "D", "_"],
        ["_", "_", "_", "_", "D", "_", "_", "_"],
        ["_", "_", "_", "_", "D", "@", "_", "_"],
      ],
      1,
      6
    )
  ).toEqual("Dog!!");
});
test("should return clean", () => {
  expect(
    cleanUp(
      [
        ["_", "_", "_", "_", "_", "_", "_", "@", "_"],
        ["_", "_", "_", "_", "_", "_", "_", "@", "_"],
      ],
      4,
      3
    )
  ).toEqual("Clean");
});
test("should return clean", () => {
  expect(cleanUp([["_", "_", "_", "_", "_"]], 6, 0)).toEqual("Clean");
});
test("should return cr@p", () => {
  expect(
    cleanUp([["_", "@", "@", "_", "_", "@", "_", "_", "_"]], 4, 0)
  ).toEqual("Cr@p");
});
test("should return dog", () => {
  expect(
    cleanUp(
      [
        ["D", "_", "_", "_"],
        ["_", "_", "_", "_"],
        ["_", "_", "_", "_"],
        ["_", "_", "@", "_"],
        ["_", "_", "_", "_"],
      ],
      7,
      8
    )
  ).toEqual("Dog!!");
});
test("should return cr@p", () => {
  expect(
    cleanUp(
      [
        ["_", "@", "_"],
        ["_", "@", "_"],
      ],
      0,
      8
    )
  ).toEqual("Cr@p");
});
