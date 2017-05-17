/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClrIconModule} from "../../icon/icon.module";
import {TREE_VIEW_DIRECTIVES} from "./index";
import {ClrIfExpandModule} from "../../utils/expand/if-expand.module";
import {ClrFormsModule} from "../../forms/forms.module";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        ClrIconModule,
        FormsModule,
        ClrFormsModule
    ],
    declarations: [
        TREE_VIEW_DIRECTIVES
    ],
    exports: [
        TREE_VIEW_DIRECTIVES,
        ClrIfExpandModule
    ]
})
export class ClrTreeViewModule {
}
