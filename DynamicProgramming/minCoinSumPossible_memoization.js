function minCount(target, coins, memo = {}) {
  if (target in memo) return memo[target];
  if (target == 0) return 0;
  if (target < 0) return -1;
  let min = Infinity;

  for (const num of coins) {
    let result = minCount(target - num, coins, memo);
    if (result !== -1) {
      min = Math.min(min, result + 1);
    }
  }
  memo[amount] = min === Infinity ? -1 : min;
  return memo[target];
}
