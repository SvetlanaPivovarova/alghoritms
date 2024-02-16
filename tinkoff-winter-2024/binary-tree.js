class BinaryTreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.parent = parent;
        this.value = value;
    }

    get height() {
        let leftHeight = this.left ? this.left.height + 1 : 0;
        let rightHeight = this.right ? this.right.height + 1 : 0;
        return Math.max(leftHeight, rightHeight);
    }

    setLeft(node) {
        if (this.left) {
            this.left.parent = null;
        }
        if (node) {
            this.left = node;
            this.left.parent = this;
        }
    }

    setRight(node) {
        if (this.right) {
            this.right.parent = null;
        }
        if (node) {
            this.right = node;
            this.right.parent = this;
        }
    }
}

//let tree = new BinaryTreeNode('a');

let aNode = new BinaryTreeNode('a');

let bNode = new BinaryTreeNode('b');
aNode.setLeft(bNode);

let cNode = new BinaryTreeNode('c');
aNode.setRight(cNode);

let dNode = new BinaryTreeNode('d');
bNode.setRight(dNode);

let eNode = new BinaryTreeNode('e');
cNode.setLeft(eNode);

let fNode = new BinaryTreeNode('f');
cNode.setRight(fNode);