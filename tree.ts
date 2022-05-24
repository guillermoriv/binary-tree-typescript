// @author: @guillermoriv
import { NodeBase } from "./node";

export class Tree {
  root: NodeBase;

  constructor() {
    this.root = null;
  }

  addValue(value: number) {
    const newNode = new NodeBase(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.root.addNode(newNode);
    }
  }

  traverse(): void {
    this.root.visit();
  }

  search(value: number): NodeBase {
    return this.root.search(value);
  }
}
