// 循环查找

function twoSum(nums: number[], target: number): number[] {
  const numsLength = nums.length;

  for (let i = 0; i < numsLength - 1; ++i) {
    for (let j = i + 1; j < numsLength; ++j) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}
