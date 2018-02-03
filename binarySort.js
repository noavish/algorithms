//Binary tree sort
function Node (value) {
    this.data = value;
    this.left = null;
    this.right = null;
}

function BinaryTree () {
    this.root = null;
}

BinaryTree.prototype.addToTree = function(newNode, beginNode) {
    if (this.root === null) {
        this.root = newNode;
        return;
    }    
    if (beginNode === undefined) {
        beginNode = this.root;
    }
    if (newNode.data < beginNode.data) {
        if (beginNode.left == null) {
            beginNode.left = newNode;
            return;
        }
        this.addToTree(newNode, beginNode.left);
    } else if (newNode.data >= beginNode.data) {
        if (beginNode.right == null) {
            beginNode.right = newNode;
            return;
        }
        this.addToTree(newNode, beginNode.right);
    }
}

BinaryTree.prototype.print = function(beginNode, sortedNodes) {
    if (sortedNodes === undefined) {
        var sortedNodes = [];
    }
    if (beginNode === undefined) {
        beginNode = this.root;
    }
    if (beginNode.left !== null) {
        this.print(beginNode.left, sortedNodes);
    }
    sortedNodes.push(beginNode.data);
    if (beginNode.right !== null) {
        this.print(beginNode.right, sortedNodes);
    }
    return sortedNodes;
}


var sort = (array) => {
    var myTree = new BinaryTree();
    for (var i=0; i<array.length; i++) {
        myTree.addToTree(new Node(array[i]));
    }
    return myTree.print();
}

var points = function() {
    var points = [];
    for (var i=0; i<50; i++) {
        points.push(Math.floor(Math.random()*1000));
    }
    return points;
}

sort(points()).forEach(element => console.log(element));