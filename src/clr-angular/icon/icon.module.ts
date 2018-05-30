/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {isDevMode, NgModule, Type} from "@angular/core";

import {ClrIconCustomTag} from "./icon";

export const CLR_ICON_DIRECTIVES: Type<any>[] = [ClrIconCustomTag];

// TODO: remove this warning in v0.13
export const DEPRECATED_SHAPE_WARNING =
    `Starting in Clarity Icons v0.12, some icons have been deprecated in their respective sets and moved to other sets:
    ******************************************************************************************************
    "wand" has been moved to essential-shapes from media-shapes.
    "angle-double" has been moved to core-shapes from essential-shapes.
    "calendar" and "event" have been moved to core-shapes from social-shapes. 
    "bar-chart" and "line-chart" have been moved to chart-shapes from technology-shapes.
    ******************************************************************************************************
    `;


let warningThrownOnce = false;

@NgModule({imports: [CommonModule], declarations: [CLR_ICON_DIRECTIVES], exports: [CLR_ICON_DIRECTIVES]})
export class ClrIconModule {
    constructor() {
        if (isDevMode() && !warningThrownOnce) {
            console.warn(DEPRECATED_SHAPE_WARNING);
            warningThrownOnce = true;
        }
    }
}

/* tslint:disable variable-name */
/** @deprecated since 0.11 */
export interface IconCustomTag extends ClrIconCustomTag {}
/** @deprecated since 0.11 */
export const IconCustomTag = ClrIconCustomTag;
/* tslint:enable variable-name */
/** @deprecated since 0.11 */
export const ICON_DIRECTIVES = CLR_ICON_DIRECTIVES;
