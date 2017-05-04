/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity-angular/clarity.module";
import {ROUTING} from "./tables.demo.routing";
import {TablesDemo} from "./tables.demo";
import {TablesBasicDemo} from "./tables-basic";
import {TablesLeftcellDemo} from "./tables-leftcell";
import {TablesMultilineDemo} from "./tables-multiline";
import {TablesNoborderDemo} from "./tables-noborder";
import {TablesCompactDemo} from "./tables-compact";
import {TablesCompactNoborderDemo} from "./tables-compact-noborder";
import {TablesVerticalDemo} from "./tables-vertical";
import {TablesVerticalNoborderCompactDemo} from "./tables-vertical-noborder-compact";
import {TablesWidthDemo} from "./tables-width";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        TablesDemo,
        TablesBasicDemo,
        TablesLeftcellDemo,
        TablesMultilineDemo,
        TablesNoborderDemo,
        TablesCompactDemo,
        TablesCompactNoborderDemo,
        TablesVerticalDemo,
        TablesVerticalNoborderCompactDemo,
        TablesWidthDemo
    ],
    exports: [
        TablesDemo,
        TablesBasicDemo,
        TablesLeftcellDemo,
        TablesMultilineDemo,
        TablesNoborderDemo,
        TablesCompactDemo,
        TablesCompactNoborderDemo,
        TablesVerticalDemo,
        TablesVerticalNoborderCompactDemo,
        TablesWidthDemo
    ]
})
export default class TablesDemoModule {
}
