var rob = function (nums, i = 0, memo = {}) {
  if (i in memo) return memo[i];
  if (i > nums.length) return 0;

  let take = nums[i] + rob(nums, i + 2, memo);
  let skip = rob(nums, i + 1, memo);
  memo[i] = Math.max(skip, take);
  return memo[i];
};
