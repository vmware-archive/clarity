import { Comparator } from "../../interfaces/comparator";
export declare class DatagridPropertyComparator implements Comparator<any> {
    prop: string;
    private nestedProp;
    constructor(prop: string);
    compare(a: any, b: any): number;
}
