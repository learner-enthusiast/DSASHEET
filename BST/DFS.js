const depthFirstTraversalITR = (root) => {
  if (root === null) {
    return; //return message or empty
  }
  const values = [];
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    values.push(node.key);
    //If traverse left do right otherwise opposite
    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
  }
};

const recursuveDepthFirstTraversal = (root) => {
  if (root === null) {
    return;
  }
  const leftValues = recursuveDepthFirstTraversal(root.left);
  const rightValues = recursuveDepthFirstTraversal(root.right);
  // return [root.key,leftValues,rightValues]
  return [root.key, ...leftValues, ...rightValues];
};
