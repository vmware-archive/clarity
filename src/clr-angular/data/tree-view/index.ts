/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Type} from "@angular/core";
import {TreeNode} from "./tree-node";

export * from "./tree-node";

export const TREE_VIEW_DIRECTIVES: Type<any>[] = [TreeNode];
