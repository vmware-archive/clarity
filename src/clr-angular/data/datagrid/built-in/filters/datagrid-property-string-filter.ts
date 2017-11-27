/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {StringFilter} from "../../interfaces/string-filter";
import {NestedProperty} from "../nested-property";

export class DatagridPropertyStringFilter implements StringFilter<any> {
    private nestedProp: NestedProperty;

    constructor(public prop: string, public exact = false) {
        this.nestedProp = new NestedProperty(prop);
    }

    accepts(item: any, search: string): boolean {
        const propValue = this.nestedProp.getPropValue(item);
        if (typeof propValue === "undefined") {
            return false;
        } else if (this.exact) {
            return ("" + propValue).toLowerCase() === search;
        } else {
            return ("" + propValue).toLowerCase().indexOf(search) >= 0;
        }
    }
}
