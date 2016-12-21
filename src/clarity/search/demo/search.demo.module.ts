/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { FormsModule } from "@angular/forms";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./search.demo.routing";
import {SearchDemo} from "./search.demo";
import {Search} from "../search";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING,
        FormsModule
    ],
    declarations: [
        SearchDemo,
        Search
    ],
    exports: [
        SearchDemo
    ]
})
export default class SearchDemoModule {
}