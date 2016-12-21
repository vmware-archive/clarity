/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Comparator} from "../../interfaces/comparator";
import {NestedProperty} from "../nested-property";

export class DatagridPropertyComparator implements Comparator<any> {

    private nestedProp: NestedProperty;

    constructor(public prop: string) {
        this.nestedProp = new NestedProperty(prop);
    }

    public compare(a: any, b: any): number {
        let propA = this.nestedProp.getPropValue(a);
        let propB = this.nestedProp.getPropValue(b);
        if (typeof propA === "undefined") {
            if (typeof propB === "undefined") {
                return 0;
            } else {
                return 1;
            }
        } else {
            if (typeof propB === "undefined") {
                return -1;
            } else if (propA < propB) {
                return -1;
            } else if (propA > propB) {
                return 1;
            } else {
                return 0;
            }
        }
    }
}