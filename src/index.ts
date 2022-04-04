import getValueByKey from "get-value-key";
function sum(acc: number, curr: number): number {
  return Number(acc) + Number(curr);
}
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

export { sum };
