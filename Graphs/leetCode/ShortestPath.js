const edges = [
  ["A", "B"],
  ["A", "D"],
  ["A", "E"],
  ["B", "C"],
  ["B", "F"],
  ["C", "G"],
  ["C", "H"],
  ["D", "I"],
  ["E", "I"],
  ["F", "G"],
  ["G", "H"],
  ["H", "J"],
  ["I", "J"],
];

const createAdjacencyList = (edges) => {
  let graph = {};

  for (const [u, v] of edges) {
    if (!(u in graph)) graph[u] = [];
    if (!(v in graph)) graph[v] = [];
    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
};

//We do not use DFS beacuse its worse case scenario is very bad
function shortestPathBFS(edges, start, dest) {
  let graph = createAdjacencyList(edges);
  let visited = new Set();
  let queue = [[start, 0]];

  while (queue.length > 0) {
    let [node, dist] = queue.shift();
    if (node == dest) {
      return dist;
    }
    if (!visited.has(node)) {
      visited.add(node);

      for (const neighbour of graph[node]) {
        if (!visited.has(neighbour)) {
          queue.push([neighbour, dist + 1]);
        }
      }
    }
  }
}

console.log(shortestPathBFS(edges, "A", "J"));
// Output: [ 'A', 'D', 'I', 'J' ]  (shortest path)

console.log(shortestPathBFS(edges, "B", "H"));
// Output: [ 'B', 'C', 'H' ]

console.log(shortestPathBFS(edges, "E", "G"));
// Output: [ 'E', 'A', 'B', 'F', 'G' ]
