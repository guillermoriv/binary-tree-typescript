// @author: @guillermoriv

export class NodeBase {
  value: number;
  right: NodeBase;
  left: NodeBase;

  constructor(value: number) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  addNode(node: NodeBase): void {
    if (node.value < this.value) {
      if (this.left == null) {
        this.left = node;
      } else {
        this.left.addNode(node);
      }
    } else if (node.value > this.value) {
      if (this.right == null) {
        this.right = node;
      } else {
        this.right.addNode(node);
      }
    }
  }

  search(value: number): NodeBase {
    if (value == this.value) {
      return this;
    } else {
      if (value < this.value) return this.left.search(value);
      if (value > this.value) return this.right.search(value);
    }

    return null;
  }

  visit(): void {
    if (this.left != null) this.left.visit();
    console.log(this.value);
    if (this.right != null) this.right.visit();
  }
}
