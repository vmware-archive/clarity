/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Type} from "@angular/core";
import {Signpost} from "./signpost";
import {SignpostContent} from "./signpost-content";
import {SignpostTriggerDirective} from "./signpost-trigger.directive";

export * from "./signpost";
export * from "./signpost-content";
export * from "./signpost-trigger.directive";

export const SIGNPOST_DIRECTIVES: Type<any>[] = [Signpost, SignpostContent, SignpostTriggerDirective];
