class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(key) {
    const newNode = BSTNode(key);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(root, newNode);
    }
  }

  insertNode(rootNode, newNode) {
    if (newNode.key < rootNode.key) {
      if (rootNode.left === null) {
        rootNode.left = newNode;
      } else {
        this.insertNode(rootNode.left, newNode);
      }
    } else {
      if (rootNode.right === null) {
        rootNode.right = newNode;
      } else {
        this.insertNode(rootNode.right, newNode);
      }
    }
  }
}
