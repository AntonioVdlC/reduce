import { describe, it, expect } from "vitest";

import { sum, average, groupBy } from "../src";

describe("sum", () => {
  it("is a function", () => {
    expect(typeof sum).toBe("function");
  });

  it("sums an array of numbers", () => {
    const expected = 6;
    const actual = [1, 2, 3].reduce(sum);

    expect(actual).toEqual(expected);
  });

  it("sums an array of numbers in string format", () => {
    const expected = 6;
    const actual = ["1", "2", 3].reduce(sum);

    expect(actual).toEqual(expected);
  });

  it("returns NaN if array has other types", () => {
    const expected = NaN;
    const actual = [1, "hello", 3].reduce(sum);

    expect(actual).toEqual(expected);
  });

  describe("sum.on", () => {
    it("is a function", () => {
      expect(typeof sum.on).toBe("function");
    });

    it("returns a function", () => {
      expect(typeof sum.on("")).toBe("function");
    });

    it("sums an array of objects (with no initialization value)", () => {
      const expected = 111;
      const actual = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 32 },
        { name: "Candice", age: 54 },
      ]
        // @ts-ignore
        .reduce(sum.on("age"));

      expect(actual).toEqual(expected);
    });

    it("sums an array of objects (with initialization value)", () => {
      const expected = 111;
      const actual = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 32 },
        { name: "Candice", age: 54 },
      ].reduce(sum.on("age"), 0);

      expect(actual).toEqual(expected);
    });
  });
});

describe("average", () => {
  it("is a function", () => {
    expect(typeof average).toBe("function");
  });

  it("averages an array of numbers", () => {
    const expected = 2;
    const actual = [1, 2, 3].reduce(average);

    expect(actual).toEqual(expected);
  });

  it("averages an array of numbers in string format", () => {
    const expected = 2;
    const actual = ["1", "2", 3].reduce(average);

    expect(actual).toEqual(expected);
  });

  it("returns NaN if array has other types", () => {
    const expected = NaN;
    const actual = [1, "hello", 3].reduce(average);

    expect(actual).toEqual(expected);
  });

  describe("average.on", () => {
    it("is a function", () => {
      expect(typeof average.on).toBe("function");
    });

    it("returns a function", () => {
      expect(typeof average.on("")).toBe("function");
    });

    it("averages an array of objects (with no initialization value)", () => {
      const expected = 37;
      const actual = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 32 },
        { name: "Candice", age: 54 },
      ]
        // @ts-ignore
        .reduce(average.on("age"));

      expect(actual).toEqual(expected);
    });

    it("averages an array of objects (with initialization value)", () => {
      const expected = 37;
      const actual = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 32 },
        { name: "Candice", age: 54 },
      ].reduce(average.on("age"), 0);

      expect(actual).toEqual(expected);
    });
  });
});

describe("groupBy", () => {
  it("is a function", () => {
    expect(typeof groupBy).toBe("function");
  });

  it("returns a function", () => {
    expect(typeof groupBy("")).toBe("function");
  });

  it("groups by a key value (with no initialization value)", () => {
    const arr = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 32 },
      { name: "Candice", age: 54 },
      { name: "Tom", age: 25 },
    ];

    const expected = {
      25: [
        { age: 25, name: "Alice" },
        { age: 25, name: "Tom" },
      ],
      32: [{ age: 32, name: "Bob" }],
      54: [{ age: 54, name: "Candice" }],
    };
    // @ts-ignore
    const actual = arr.reduce(groupBy("age"));

    expect(actual).toEqual(expected);
  });

  it("groups by a key value (with initialization value)", () => {
    const arr = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 32 },
      { name: "Candice", age: 54 },
      { name: "Tom", age: 25 },
    ];

    const expected = {
      25: [
        { age: 25, name: "Alice" },
        { age: 25, name: "Tom" },
      ],
      32: [{ age: 32, name: "Bob" }],
      54: [{ age: 54, name: "Candice" }],
    };
    const actual = arr.reduce(groupBy("age"), {});

    expect(actual).toEqual(expected);
  });
});
