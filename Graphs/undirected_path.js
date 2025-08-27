const Globaledges = [
  ["A", "B"],
  ["A", "C"],
  ["A", "D"],
  ["B", "E"],
  ["B", "F"],
  ["C", "G"],
  ["C", "H"],
  ["D", "I"],
  ["D", "J"],
  ["E", "K"],
  ["E", "L"],
  ["F", "M"],
  ["G", "N"],
  ["G", "O"],
  ["H", "P"],
  ["I", "Q"],
  ["J", "R"],
  ["J", "S"],
  ["K", "T"],
  ["L", "U"],
  ["M", "V"],
  ["O", "W"],
  ["P", "X"],
  ["Q", "Y"],
  ["R", "Z"],
];
//edges to create adjacency list
function createGraph(edges = Globaledges) {
  let graph = {};

  for (const [u, v] of edges) {
    if (!(u in graph)) graph[u] = [];
    if (!(v in graph)) graph[v] = [];
    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
}

console.log(createGraph());
