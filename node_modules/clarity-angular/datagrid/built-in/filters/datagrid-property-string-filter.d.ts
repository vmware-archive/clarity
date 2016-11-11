import { StringFilter } from "../../interfaces/string-filter";
export declare class DatagridPropertyStringFilter implements StringFilter<any> {
    prop: string;
    exact: boolean;
    private nestedProp;
    constructor(prop: string, exact?: boolean);
    accepts(item: any, search: string): boolean;
}
