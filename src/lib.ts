export const insertItem = <T>(array: T[], index: number, item: T) => [
  ...array.slice(0, index),
  item,
  ...array.slice(index),
];

export const removeItem = <T>(array: T[], index: number) => [
  ...array.slice(0, index),
  ...array.slice(index + 1),
];

export const arrayToObject = (arr: any[], idField = 'id') => {
  return arr.reduce((acc, curr) => {
    acc[curr[idField]] = curr;
    return acc;
  }, {});
};
