function combinationSum(target, candidates, memo = {}) {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (const num of candidates) {
    if (combinationSum(target - num, candidates, memo)) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
}
console.log(combinationSum(300, [7, 14]));
console.log(combinationSum(100, [3, 34, 4, 12, 5, 2]));
