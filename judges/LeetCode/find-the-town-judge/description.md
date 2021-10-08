## 题目描述

在一个小镇里，按从 `1` 到 `n` 为 `n` 个人进行编号。传言称，这些人中有一个是小镇上的秘密法官。

如果小镇的法官真的存在，那么：

1. 小镇的法官不相信任何人。
1. 每个人（除了小镇法官外）都信任小镇的法官。
1. 只有一个人同时满足条件 1 和条件 2 。

给定数组  `trust`，该数组由信任对 `trust[i] = [a, b]`  组成，表示编号为 `a` 的人信任编号为 `b` 的人。

如果小镇存在秘密法官并且可以确定他的身份，请返回该法官的编号。否则，返回 `-1`。

示例 1：

```txt
输入：n = 2, trust = [[1,2]]
输出：2
```

示例 2：

```txt
输入：n = 3, trust = [[1,3],[2,3]]
输出：3
```

示例 3：

```txt
输入：n = 3, trust = [[1,3],[2,3],[3,1]]
输出：-1
```

示例 4：

```txt
输入：n = 3, trust = [[1,2],[2,3]]
输出：-1
```

示例 5：

```txt
输入：n = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
输出：3
```

提示：

1. `1 <= n <= 1000`
1. `0 <= trust.length <= 10^4`
1. `trust[i].length == 2`
1. `trust[i]` 互不相同
1. `trust[i][0] != trust[i][1]`
1. `1 <= trust[i][0], trust[i][1] <= n`

## 解答

### 方法一

根据序号长度，遍历每一个序号，并判断当前序号的人是否为秘密法官。

判断依据：

1. 当前序号 `i + 1` 不应该出现在所有信任对的第一位（法官不相信任何人）；
1. 当前序号的被信任次数应该为 `n - 1` （所有人都信任法官）。

```ts
function findJudge(n: number, trust: number[][]): number {
  let result = -1;
  for (let i = 0; i < n; i++) {
    let hasRecord = false;
    let trustedCount = 0;
    for (let pair of trust) {
      if (pair[0] === i + 1) {
        hasRecord = true;
        break;
      }

      if (pair[1] === i + 1) {
        trustedCount++;
      }
    }

    if (!hasRecord && trustedCount === n - 1) {
      result = i + 1;
      break;
    }
  }

  return result;
}
```

## 来源

[LeetCode - find-the-town-judge](https://leetcode-cn.com/problems/find-the-town-judge)
