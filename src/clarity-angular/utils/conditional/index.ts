/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Type} from "@angular/core";
import {IfActiveDirective} from "./if-active.directive";
import {IfOpenDirective} from "./if-open.directive";

export * from "./if-active.directive";
export * from "./if-open.directive";

export const CONDITIONAL_DIRECTIVES: Type<any>[] = [IfActiveDirective, IfOpenDirective];
