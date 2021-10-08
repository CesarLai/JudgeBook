## 题目描述

给定一个整数数组 `nums`  和一个整数目标值 `target`，请你在该数组中找出 **和为目标值** *`target`*  的那  **两个**  整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

示例 1：

```txt
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

示例 2：

```txt
输入：nums = [3,2,4], target = 6
输出：[1,2]
```

示例 3：

```txt
输入：nums = [3,3], target = 6
输出：[0,1]
```

示例 4：

```txt
输入：nums = [0,4,3,0], target = 0
输出：[0,3]
```

示例 5：

```txt
输入：nums = [-3,4,3,90], target = 0
输出：[0,2]
```

提示：

1. $2 <= nums.length <= 10^4$
2. $-10^9 <= nums[i] <= 10^9$
3. $-10^9 <= target <= 10^9$
4. **只会存在一个有效答案**

## 解答

### 方法一

双重循环，遍历每一个组合，直到找到 **和等于 target** 的组合，或遍历完所有组合。

```ts
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
```

### 方法二

使用哈希表，遍历数组并查找哈希表中是否存在 **与当前循环数字之和等于 target** 的值，如果有就返回结果，没有就将当前循环的数字插入哈希表。

```ts
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
```

## 来源

[LeetCode - two-sum](https://leetcode-cn.com/problems/two-sum)
