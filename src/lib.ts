export const insertItem = <T>(array: T[], index: number, item: T) => [
  ...array.slice(0, index),
  item,
  ...array.slice(index),
];

export const removeItem = <T>(array: T[], index: number) => [
  ...array.slice(0, index),
  ...array.slice(index + 1),
];

export const arrayToObject = (arr: any[], idField = 'id') =>
  arr.reduce((acc, curr) => {
    acc[curr[idField]] = curr;
    return acc;
  }, {});

export const deleteKeys = (obj: { [k: string]: any }, keys: string[]) => {
  const result: any = {};

  for (const key in obj) {
    if (keys.includes(key) && obj.hasOwnProperty(key)) {
      continue;
    }
    result[key] = obj[key];
  }

  return result;
};
