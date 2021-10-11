## 题目描述

给你两个  **非空** 的链表，表示两个非负的整数。它们每位数字都是按照  **逆序**  的方式存储的，并且每个节点只能存储  **一位**  数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0  开头。

**示例 1：**

```txt
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
```

**示例 2：**

```txt
输入：l1 = [0], l2 = [0]
输出：[0]
```

**示例 3：**

```txt
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
```

提示：

- 每个链表中的节点数在范围 `[1, 100]` 内
- `0 <= Node.val <= 9`
- 题目数据保证列表表示的数字不含前导零

## 解答

### 方法一

使用三个指针遍历链表 l1、l2 和 l3，并使用一个变量保存进位数，每次循环都使用 p1 和 p2 值的和计算进位数和余数。

```ts
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 && !l2) {
    return new ListNode();
  }

  let leaveNum = 0;
  let l3 = new ListNode();
  let p1 = l1;
  let p2 = l2;
  let p3 = l3;

  while (
    typeof p1?.val === "number" ||
    typeof p2?.val === "number" ||
    leaveNum
  ) {
    const count = (p1?.val ?? 0) + (p2?.val ?? 0) + leaveNum;
    leaveNum = Math.floor(count / 10);
    const resultVal = count - leaveNum * 10;
    p1 = p1?.next ?? null;
    p2 = p2?.next ?? null;
    p3.val = resultVal;

    if (
      typeof p1?.val === "number" ||
      typeof p2?.val === "number" ||
      leaveNum
    ) {
      p3.next = new ListNode();
      p3 = p3?.next;
    }
  }
  return l3;
}
```

## 来源

[LeetCode - add-two-numbers](https://leetcode-cn.com/problems/add-two-numbers)
