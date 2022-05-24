// @author: @guillermoriv
import { Tree } from "./tree";

function main() {
  const tree = new Tree();

  // A few values added to the tree
  tree.addValue(10);
  tree.addValue(5);
  tree.addValue(15);
  tree.addValue(7);
  tree.addValue(2);
  tree.addValue(9);
  tree.addValue(31);

  // This is to show the traversed tree
  tree.traverse();

  const result = tree.search(5);
  console.log(result);
}

main();
