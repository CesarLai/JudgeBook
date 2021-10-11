/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

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
