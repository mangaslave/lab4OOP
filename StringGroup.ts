import { ISortable } from "./interface";

export class CharacterGroup implements ISortable{
    data: string;

    constructor(data: string){
        this.data = data;
    }

    get length(): number {
        return this.data.length;
    }
    swap(leftPos: number, rightPos: number): void {
        const stringArray = this.data.split("");
        let tempLeft = stringArray[leftPos];
        stringArray[leftPos] = stringArray[rightPos];
        stringArray[rightPos] = tempLeft;
        let newString = stringArray.join('');
        this.data = newString;

        // stringArray.sort(function(a, b) {
        //     return a.toLowerCase().localeCompare(b.toLowerCase());
        // });

    }
    // ademi
    compare(leftPos: number, rightPos: number): boolean {
        return this.data[leftPos].toLowerCase() > this.data[rightPos].toLowerCase();
    }

}