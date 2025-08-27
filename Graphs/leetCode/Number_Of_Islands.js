// “You are given a graph represented as an adjacency list. Each connected component represents an island. Count the total number of islands.”
const graph = {
  A: ["B", "C"],
  B: ["A"],
  C: ["A"],
  D: [],
};

const graph2 = {
  X: ["Y"],
  Y: ["X"],
  Z: [],
  P: ["Q"],
  Q: ["P", "R"],
  R: ["Q"],
};

const graph3 = {
  M: ["N", "O"],
  N: ["M", "P"],
  O: ["M", "P"],
  P: ["N", "O"],
};

function DFS(graph, visited, node) {
  size = 1;
  if (!visited.has(node)) {
    visited.add(node);
    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) size += DFS(graph, visited, neighbour);
    }
  }
  return size;
}

function countIslands(graph) {
  let visited = new Set();
  let count = 0;
  let largest = 0;
  for (const node in graph) {
    if (!visited.has(node)) {
      largest = Math.max(largest, DFS(graph, visited, node));
      count++;
    }
  }
  return largest;
}

console.log(countIslands(graph)); //2
console.log(countIslands(graph2)); //3
console.log(countIslands(graph3)); //1
