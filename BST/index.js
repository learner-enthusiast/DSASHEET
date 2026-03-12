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

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }
  deleteNode(rootNode, key) {
    if (rootNode === null) {
      return null;
    }
    if (key < rootNode.key) {
      rootNode.left = this.deleteNode(rootNode.left, key); //HAs to modify the left side of node
    } else if (key > rootNode.key) {
      rootNode.right = this.deleteNode(rootNode.right, key); //Has to modify the right side of node
    } else {
      //Now we found the key

      if (rootNode.left === null && rootNode.right === null) {
        //Leaf node case
        return null;
      } else if (
        (rootNode.right && !rootNode.left) ||
        (!rootNode.right && rootNode.left)
      ) {
        return rootNode.right ? rootNode.right : rootNode.left;
      } else {
        //2child present
        let tempNode = this.findMinNode(rootNode.right); //In order successor
        rootNode.key = tempNode.key;
        rootNode.right = this.deleteNode(rootNode.right, tempNode.key);
      }
    }
    return rootNode;
  }
  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
}
