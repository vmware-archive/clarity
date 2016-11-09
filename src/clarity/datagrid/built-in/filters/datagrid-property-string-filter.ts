import {StringFilter} from "../../interfaces/string-filter";
import {NestedProperty} from "../nested-property";

export class DatagridPropertyStringFilter implements StringFilter<any> {

    private nestedProp: NestedProperty;

    constructor(public prop: string, public exact = false) {
        this.nestedProp = new NestedProperty(prop);
    }

    accepts(item: any, search: string): boolean {
        let propValue = this.nestedProp.getPropValue(item);
        if (typeof propValue === "undefined") {
            return false;
        } else if (this.exact) {
            return ("" + propValue).toLowerCase() === search;
        } else {
            return ("" + propValue).toLowerCase().indexOf(search) >= 0;
        }
    }

}