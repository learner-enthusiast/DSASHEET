function grid_Island(grid) {
  let col = grid[0].length;
  let row = grid.length;
  let count = 0;
  let visited = new Set();

  function dfs(row, col) {
    let pos = row + "," + col;
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      grid[row][col] === "0" ||
      visited.has(row + "," + col)
    ) {
      return;
    }
    visited.add(row + "," + col);

    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col - 1);
    dfs(row, col + 1);
  }

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (grid[r][c] === "1" && !visited.has(r + "," + c)) {
        count++;
        dfs(r, c);
      }
    }
  }
  return count;
}

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

console.log(grid_Island(grid));
