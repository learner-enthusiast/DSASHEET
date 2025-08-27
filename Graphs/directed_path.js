graph = {
  A: ["B", "C", "D"],
  B: ["A", "E", "F"],
  C: ["A", "G", "H"],
  D: ["A", "I", "J"],
  E: ["B", "K", "L"],
  F: ["B", "M"],
  G: ["C", "N", "O"],
  H: ["C", "P"],
  I: ["D", "Q"],
  J: ["D", "R", "S"],
  K: ["E", "T"],
  L: ["E", "U"],
  M: ["F", "V"],
  N: ["G"],
  O: ["G", "W"],
  P: ["H", "X"],
  Q: ["I", "Y"],
  R: ["J", "Z"],
  S: ["J"],
  T: ["K"],
  U: ["L"],
  V: ["M"],
  W: ["O"],
  X: ["P"],
  Y: ["Q"],
  Z: ["R"],
};
const directedGraph = {
  A: ["B", "C", "D"],
  B: ["E", "F"],
  C: ["G", "H"],
  D: ["I", "J"],
  E: ["K", "L"],
  F: ["M"],
  G: ["N", "O"],
  H: ["P"],
  I: ["Q"],
  J: ["R", "S"],
  K: ["T"],
  L: ["U"],
  M: ["V"],
  N: [],
  O: ["W"],
  P: ["X"],
  Q: ["Y"],
  R: ["Z"],
  S: [],
  T: [],
  U: [],
  V: [],
  W: [],
  X: [],
  Y: [],
  Z: [],
};

function hasPath_DFS(graph, start, dest, visted = new Set()) {
  let stack = [start];

  while (stack.length > 0) {
    let node = stack.pop();
    if (node === dest) return true;

    if (!visted.has(node)) {
      visted.add(node);

      for (const neighbour of graph[node]) {
        stack.push(neighbour);
      }
    }
  }
  return false;
}

function hasPath_BFS(graph, start, dest, visited = new Set()) {
  let queue = [start];

  while (queue.length > 0) {
    let node = queue.shift();

    if (node == dest) return true;

    if (!visited.has(node)) {
      visited.add(node);
      for (const element of graph[node]) {
        queue.push(element);
      }
    }
  }
  return false;
}

function hasPath_recursive(graph, start, dest, visted = new Set()) {
  if (start === dest) return true;

  if (visted.has(start)) return false;

  visted.add(start);
  for (const element of graph[start]) {
    if (hasPath_recursive(graph, element, dest, visted)) {
      return true;
    }
  }
  return false;
}

// DFS Iterative
console.log(
  "hasPath_DFS A→Z:",
  hasPath_DFS(graph, "A", "Z"),
  "=> expected true"
);
console.log(
  "hasPath_DFS A→X:",
  hasPath_DFS(graph, "A", "X"),
  "=> expected true"
);
console.log(
  "hasPath_DFS B→W:",
  hasPath_DFS(graph, "B", "W"),
  "=> expected true"
);
console.log(
  "hasPath_DFS M→Z:",
  hasPath_DFS(graph, "M", "Z"),
  "=> expected true"
);
console.log(
  "hasPath_DFS T→A:",
  hasPath_DFS(graph, "T", "A"),
  "=> expected false"
);

// BFS Iterative
console.log(
  "hasPath_BFS A→Z:",
  hasPath_BFS(graph, "A", "Z"),
  "=> expected true"
);
console.log(
  "hasPath_BFS C→V:",
  hasPath_BFS(graph, "C", "V"),
  "=> expected true"
);
console.log(
  "hasPath_BFS K→X:",
  hasPath_BFS(graph, "K", "X"),
  "=> expected false"
);
console.log(
  "hasPath_BFS L→U:",
  hasPath_BFS(graph, "L", "U"),
  "=> expected true"
);

// Recursive DFS
console.log(
  "hasPath_recursive A→Y:",
  hasPath_recursive(graph, "A", "Y"),
  "=> expected true"
);
console.log(
  "hasPath_recursive F→X:",
  hasPath_recursive(graph, "F", "X"),
  "=> expected true"
);
console.log(
  "hasPath_recursive V→A:",
  hasPath_recursive(graph, "V", "A"),
  "=> expected false"
);
console.log(
  "hasPath_recursive G→W:",
  hasPath_recursive(graph, "G", "W"),
  "=> expected true"
);

//directed graph

console.log(
  "hasPath_DFS A→Z:",
  hasPath_DFS(directedGraph, "A", "Z"),
  "=> expected true"
);
// Path: A → D → J → R → Z

console.log(
  "hasPath_DFS T→A:",
  hasPath_DFS(directedGraph, "T", "A"),
  "=> expected false"
);
// No reverse edges, can't go back up.

console.log(
  "hasPath_DFS M→U:",
  hasPath_DFS(directedGraph, "M", "U"),
  "=> expected false"
);
// M → V is dead end, can't reach U.

console.log(
  "hasPath_DFS X→W:",
  hasPath_DFS(directedGraph, "X", "W"),
  "=> expected false"
);
// X is terminal, can't move to W.

console.log(
  "hasPath_DFS N→V:",
  hasPath_DFS(directedGraph, "N", "V"),
  "=> expected false"
);
// N has no children.

console.log(
  "hasPath_DFS Q→S:",
  hasPath_DFS(directedGraph, "Q", "S"),
  "=> expected false"
);
// Q → Y is dead end, no way to S.

console.log(
  "hasPath_BFS A→X:",
  hasPath_BFS(directedGraph, "A", "X"),
  "=> expected true"
);
// A → C → H → P → X

console.log(
  "hasPath_BFS K→Z:",
  hasPath_BFS(directedGraph, "K", "Z"),
  "=> expected false"
);
// K → T is dead end, no way to Z.

console.log(
  "hasPath_BFS L→U:",
  hasPath_BFS(directedGraph, "L", "U"),
  "=> expected true"
);
// L → U

console.log(
  "hasPath_BFS V→W:",
  hasPath_BFS(directedGraph, "V", "W"),
  "=> expected false"
);
// V has no outgoing edges.
