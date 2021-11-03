function majorityElement(arr: number[]): number[] {
  const hashTable = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (hashTable.has(item)) {
      hashTable.set(item, hashTable.get(item)! + 1);
    } else {
      hashTable.set(item, 1);
    }
  }

  const limit = Math.floor(arr.length / 3);
  const filteredMajorityEls: number[] = [];
  hashTable.forEach((count, key) => {
    if (count > limit) {
      filteredMajorityEls.push(key);
    }
  });

  return filteredMajorityEls;
}
