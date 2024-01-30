import { NumberGroup } from "./NumberGroup";
import { CharacterGroup } from "./StringGroup";
import { LinkedListGroup } from "./linkedlist";
import { SortUtil } from "./sarah";

const numberGroup = new NumberGroup([ 30, 12, 5, 3]);
const sorter1 = new SortUtil(numberGroup);
sorter1.sort();
console.log(numberGroup.data);
console.log("-------------");

const charachterGroup = new CharacterGroup("Xaeyb");
const sorter2 = new SortUtil(charachterGroup);
sorter2.sort();
console.log(charachterGroup.data);
console.log("-------------");

const linkedList = new LinkedListGroup();
linkedList.add(520);
linkedList.add(-18);
linkedList.add(-1);
linkedList.add(2);

const sorter3 = new SortUtil(linkedList);
sorter3.sort();
linkedList.print();

