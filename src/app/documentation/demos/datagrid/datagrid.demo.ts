/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {ClarityDocComponent} from "../clarity-doc";

@Component({
    selector: "clr-datagrid-demo",
    templateUrl: "./datagrid.demo.html",
    host: {
        "[class.content-area]": "true",
        "[class.dox-content-panel]": "true"
    }
})
export class DatagridDemo extends ClarityDocComponent {
    constructor() {
        super("datagrid");
    }

    demos: string[] = [
        "Basic Structure",
        "Custom Cell Rendering",
        "Smart Iterator",
        "Binding Model Properties to Columns",
        "Custom Sort",
        "Custom Filters",
        "Built-in Filter",
        "Pagination",
        "Selection",
        "Single Selection",
        "Selection Batch Action",
        "Single Row Action",
        "Server-driven Datagrid",
        "Placeholder",
        "Expandable Rows",
        "Full Demo"
    ];
    model: string = this.demos[0];
}
