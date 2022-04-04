import { sum, average } from "../src/index.ts";

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
      expect(typeof sum.on()).toBe("function");
    });

    it("sums an array of objects", () => {
      const expected = 111;
      const actual = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 32 },
        { name: "Candice", age: 54 },
      ].reduce(sum.on("age"));

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
      expect(typeof average.on()).toBe("function");
    });

    it("averages an array of objects", () => {
      const expected = 37;
      const actual = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 32 },
        { name: "Candice", age: 54 },
      ].reduce(average.on("age"));

      expect(actual).toEqual(expected);
    });
  });
});