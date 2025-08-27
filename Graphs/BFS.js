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

function BFSIterative(graph, start, visited = new Set()) {
  let queue = [start];

  while (queue.length > 0) {
    const node = queue.shift();

    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbour of graph[node]) {
        if (!visited.has(neighbour)) {
          queue.push(neighbour);
        }
      }
    }
  }
  return visited;
}

console.log(BFSIterative(graph, "A"));
