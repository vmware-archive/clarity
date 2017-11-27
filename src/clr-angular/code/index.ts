/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Type} from "@angular/core";
import {CodeHighlight} from "./syntax-highlight/syntax-highlight";

export * from "./syntax-highlight/syntax-highlight";
export const CODE_HIGHLIGHT_DIRECTIVES: Type<any>[] = [CodeHighlight];
