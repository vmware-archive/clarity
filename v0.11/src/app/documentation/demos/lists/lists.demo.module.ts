/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "@clr/angular";

import {ListsUlDemo} from "./lists-ul";
import {ListsOlDemo} from "./lists-ol";
import {ListsUnstyledDemo} from "./lists-unstyled";
import {ListsCompactDemo} from "./lists-compact";
import {ListsMixedDemo} from "./lists-mixed";
import {ListsInCardsDemo} from "./lists-in-cards";
import {OldListsInCardsDemo} from "./old-lists-in-cards";
import {ListsDemo} from "./lists.demo";
import {RouterModule} from "@angular/router";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {UtilsModule} from "../../../utils/utils.module";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        DocWrapperModule,
        RouterModule.forChild([{path: "", component: ListsDemo}]),
        UtilsModule
    ],
    declarations: [
        ListsUlDemo,
        ListsOlDemo,
        ListsUnstyledDemo,
        ListsCompactDemo,
        ListsMixedDemo,
        ListsInCardsDemo,
        OldListsInCardsDemo,
        ListsDemo
    ],
    exports: [
        ListsDemo
    ]
})
export class ListsDemoModule {
}
