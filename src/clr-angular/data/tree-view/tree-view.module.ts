/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {ClrFormsModule} from "../../forms/forms.module";
import {ClrIconModule} from "../../icon/icon.module";
import {ClrIfExpandModule} from "../../utils/expand/if-expand.module";

import {TREE_VIEW_DIRECTIVES} from "./index";

@NgModule({
    imports: [CommonModule, ClrIconModule, FormsModule, ClrFormsModule],
    declarations: [TREE_VIEW_DIRECTIVES],
    exports: [TREE_VIEW_DIRECTIVES, ClrIfExpandModule]
})
export class ClrTreeViewModule {}
