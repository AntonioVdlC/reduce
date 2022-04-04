import getValueByKey from "get-value-key";

/**
 * Calculates the sum of values in an array
 * @param acc
 * @param curr
 * @returns Sum
 */
function sum(acc: number, curr: number): number {
  return Number(acc) + Number(curr);
}
/**
 * Calculate the sum of values from a specific field in an array of objects
 * @param key
 * @returns
 */
sum.on = (key: string) => {
  return (
    acc: Record<string, any> | number,
    curr: Record<string, any>
  ): number => {
    return (
      Number(typeof acc === "number" ? acc : getValueByKey(acc, key)) +
      Number(getValueByKey(curr, key))
    );
  };
};

/**
 * Calculates the average of values in an array
 * @param acc
 * @param curr
 * @returns Average
 */
function average(
  acc: number,
  curr: number,
  i: number,
  arr: Array<number>
): number {
  return (
    (i === 1 ? Number(acc) / arr.length : Number(acc)) +
    Number(curr) / arr.length
  );
}
/**
 * Calculate the average of values from a specific field in an array of objects
 * @param key
 * @returns
 */
average.on = (key: string) => {
  return (
    acc: Record<string, any> | number,
    curr: Record<string, any>,
    _: never,
    arr: Array<Record<string, any>>
  ): number => {
    return (
      Number(
        typeof acc === "number"
          ? acc
          : Number(getValueByKey(acc, key)) / arr.length
      ) +
      Number(getValueByKey(curr, key)) / arr.length
    );
  };
};

/**
 *
 * @param key
 * @returns
 */
function groupBy(key: string) {
  return (acc: Record<string, any>, curr: Record<string, any>, i: number) => {
    if (i === 1) {
      const k = String(getValueByKey(acc, key));
      acc = {
        [k]: [acc],
      };
    }

    const k = String(getValueByKey(curr, key));
    if (!acc[k]) {
      acc[k] = [];
    }
    acc[k].push(curr);

    return acc;
  };
}

export { sum, average, groupBy };
