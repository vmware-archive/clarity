/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Type} from "@angular/core";

import {Tooltip} from "./tooltip";
import {TooltipContent} from "./tooltip-content";
import {TooltipTrigger} from "./tooltip-trigger";


export * from "./tooltip";
export * from "./tooltip-trigger";
export * from "./tooltip-content";
export const TOOLTIP_DIRECTIVES: Type<any>[] = [Tooltip, TooltipTrigger, TooltipContent];
