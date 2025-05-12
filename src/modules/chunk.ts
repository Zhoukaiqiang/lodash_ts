import { slice } from "./setup";

export default function chunk<T>(array: T[], size: number = 1) {
  if (size === null || size < 1) return [];
  
  const result: T[][] = [];
  let i = 0, length = array.length;
  while (i < length) {
    result.push(slice.call(array, i, i + size));
    i += size;
  }
  return result;
}


