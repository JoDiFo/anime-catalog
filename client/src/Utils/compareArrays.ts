export default function compareArrays(arr1: string[], arr2: string[]): boolean {
  if (arr2 && arr2.length === 0) {
    return true;
  }

  let result = true;
  arr2.map((item) => {
    if (!arr1?.includes(item)) {
      result = false;
    }
  });

  return result;
}
