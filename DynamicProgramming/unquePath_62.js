function uniquePaths(m, n) {
  let obj = {};

  function dfs(r, c, obj) {
    let key = r + "," + c;

    if (key in obj) return obj[key];
    if (r === m - 1 && c === n - 1) return 1;
    if (r >= m || c >= n) return 0;

    obj[key] = dfs(r + 1, c, obj) + dfs(r, c + 1, obj);
    return obj[key];
  }
  return dfs(0, 0, obj);
}
