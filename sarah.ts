import { NumberGroup } from "./NumberGroup";
import { CharacterGroup } from "./StringGroup";
import { LinkedListGroup } from "./linkedlist";

class SortUtil {
    collection: NumberGroup | CharacterGroup | LinkedListGroup;
  
    constructor(collection: NumberGroup | CharacterGroup | LinkedListGroup) {
      this.collection = collection;
    }
  
    sort(): void {
      const { length } = this.collection;
      let isSorted = false;
      let lastUnsorted = length - 1;
      while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < lastUnsorted; i++) {
          // HANDLE LINKED LIST LOGIC HERE 
              if (this.collection.compare(i, i+1)) {
                this.collection.swap(i, i++);
                isSorted = false;
              }
            }
          }
  
          // HANDLE STRING LOGIC HERE
        }
        lastUnsorted--;
      }
    }
  
  const sortUtil = new SortUtil([10, 3, -5, 0]);
  sortUtil.sort();
  console.log(sorter.collection);