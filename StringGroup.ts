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
        let tempLeft = this.data[leftPos];
        stringArray[leftPos] = stringArray[rightPos];
        stringArray[rightPos] = tempLeft;
        // stringArray.sort(function(a, b) {
        //     return a.toLowerCase().localeCompare(b.toLowerCase());
        // });

    }
    // ademi
    compare(leftPos: number, rightPos: number): boolean {
        return this.data[leftPos].toLowerCase() > this.data[rightPos].toLowerCase();
    }

}