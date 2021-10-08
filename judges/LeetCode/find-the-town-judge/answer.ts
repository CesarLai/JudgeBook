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
