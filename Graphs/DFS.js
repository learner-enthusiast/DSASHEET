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

function DFSIterative(graph, start, visited = new Set()) {
  let stack = [start];

  while (stack.length > 0) {
    let node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbour of graph[node]) {
        if (!visited.has(neighbour)) stack.push(neighbour);
      }
    }
  }
  return visited;
}

function DFSRecursive(graph, start, visited = new Set()) {
  if (!visited.has(start)) {
    visited.add(start);
    for (const neighbour of graph[start]) {
      DFSRecursive(graph, neighbour, visited);
    }
  }
  return visited;
}

console.log(DFSIterative(graph, "A"));
console.log(DFSRecursive(graph, "A"));
