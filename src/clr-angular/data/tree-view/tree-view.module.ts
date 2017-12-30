/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule, Type} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {ClrFormsModule} from "../../forms/forms.module";
import {ClrIconModule} from "../../icon/icon.module";
import {ClrIfExpandModule} from "../../utils/expand/if-expand.module";
import {ClrTreeNode} from "./tree-node";

export const CLR_TREE_VIEW_DIRECTIVES: Type<any>[] = [ClrTreeNode];

@NgModule({
    imports: [CommonModule, ClrIconModule, FormsModule, ClrFormsModule],
    declarations: [CLR_TREE_VIEW_DIRECTIVES],
    exports: [CLR_TREE_VIEW_DIRECTIVES, ClrIfExpandModule]
})
export class ClrTreeViewModule {}

/* tslint:disable variable-name */
/** @deprecated since 0.11 */
export interface TreeNode extends ClrTreeNode {}
/** @deprecated since 0.11 */
export const TreeNode = ClrTreeNode;
/* tslint:enable variable-name */
/** @deprecated since 0.11 */
export const TREE_VIEW_DIRECTIVES = CLR_TREE_VIEW_DIRECTIVES;
