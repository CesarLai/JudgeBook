// 使用哈希表

function twoSum(nums: number[], target: number): number[] {
  const hashMap = new Map<number, number>();

  for (let i = 0; i < nums.length; ++i) {
    const result = target - nums[i];
    if (hashMap.has(result)) {
      return [hashMap.get(result)!, i];
    }
    hashMap.set(nums[i], i);
  }

  return [];
}
