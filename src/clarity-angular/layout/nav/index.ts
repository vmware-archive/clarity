/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Type} from "@angular/core";

import {Header} from "./header";
import {NavLevelDirective} from "./navLevelDirective";

export * from "./header";
export * from "./navLevelDirective";

export const NAVIGATION_DIRECTIVES: Type<any>[] = [Header, NavLevelDirective];
