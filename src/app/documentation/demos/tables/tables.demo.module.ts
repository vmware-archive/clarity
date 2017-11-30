/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from '@clr/angular';

import {TablesBasicDemo} from "./tables-basic";
import {TablesLeftcellDemo} from "./tables-leftcell";
import {TablesMultilineDemo} from "./tables-multiline";
import {TablesNoborderDemo} from "./tables-noborder";
import {TablesCompactDemo} from "./tables-compact";
import {TablesCompactNoborderDemo} from "./tables-compact-noborder";
import {TablesVerticalDemo} from "./tables-vertical";
import {TablesVerticalNoborderCompactDemo} from "./tables-vertical-noborder-compact";
import {TablesWidthDemo} from "./tables-width";
import {TablesDemo} from "./tables.demo";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {RouterModule} from "@angular/router";
import {UtilsModule} from "../../../utils/utils.module";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        DocWrapperModule,
        RouterModule.forChild([{path: "", component: TablesDemo}]),
        UtilsModule
    ],
    declarations: [
        TablesBasicDemo,
        TablesLeftcellDemo,
        TablesMultilineDemo,
        TablesNoborderDemo,
        TablesCompactDemo,
        TablesCompactNoborderDemo,
        TablesVerticalDemo,
        TablesVerticalNoborderCompactDemo,
        TablesWidthDemo,
        TablesDemo
    ],
    exports: [
        TablesDemo
    ]
})
export class TablesDemoModule {
}
