/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Type} from "@angular/core";
import {StackView, StackViewCustomTags} from "./stack-view";
import {StackHeader} from "./stack-header";
import {StackBlock} from "./stack-block";
import {StackInput} from "./stack-input";
import {StackSelect} from "./stack-select";

export * from "./stack-view";
export * from "./stack-header";
export * from "./stack-block";
export * from "./stack-input";
export * from "./stack-select";

export const STACK_VIEW_DIRECTIVES: Type<any>[] = [
    StackView,
    StackHeader,
    StackBlock,
    StackViewCustomTags,
    /**
     * Undocumented experimental feature: inline editing.
     */
    StackInput,
    StackSelect
    /**
     * End of undocumented experimental feature.
     */
];