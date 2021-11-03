## 题目描述

给定一个大小为 *n*  的整数数组，找出其中所有出现超过 `⌊ n/3 ⌋` 次的元素。

示例 1：

```txt
输入：[3,2,3]
输出：[3]
```

示例 2：

```txt
输入：nums = [1]
输出：[1]
```

示例 3：

```txt
输入：[1,1,1,3,3,2,2,2]
输出：[1,2]
```

提示：

- $1 <= nums.length <= 5 * 10^4$
- $-10^9 <= nums[i] <= 10^9$

## 解答

### 方法一

使用字典结构记录每一个数字的出现次数，并进行过滤。

```ts
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
```

## 来源

[LeetCode - majority-element-ii](https://leetcode-cn.com/problems/majority-element-ii)
