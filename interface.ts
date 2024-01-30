

export interface ISortable {
    length: number;
    swap(leftPos: number, rightPos: number):void ;// logic };
    compare(leftPos: number, rightPos: number): boolean
}