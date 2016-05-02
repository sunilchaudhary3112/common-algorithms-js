/*
  A JavaScript module which performs a breadth first search on a graph using the graph's adjacency matrix as input to determine whether or not the graph is connected.  If a connected graph's adjacency matrix is input, true is returned.  If a disconnected graph's adjacency matrix is input, false is returned.
*/
module.exports = exports = function(input) {
  var queue = [], visited = [], connected = true, f = 0, r = -1;
  for (var i = 0; i < input.length; i++) queue[i] = 0, visited[i] = 0;
  breadthFirstSearch(0, input.length, input, visited, f, r, queue);
  for (var i = 0; i < visited.length; i++) if (!visited[i]) connected = false;
  return connected;
};
function breadthFirstSearch(value, numberOfVertices, input, visited, f, r, queue) {
  for(var i = 0; i < numberOfVertices; i++) if (input[value][i] && !visited[i]) queue[++r] = i;
  if (f <= r) {
    visited[queue[f]] = 1;
    breadthFirstSearch(queue[f++], numberOfVertices, input, visited, f, r, queue);
  }
}
