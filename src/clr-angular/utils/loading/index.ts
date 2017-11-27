/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Type} from "@angular/core";
import {Loading} from "./loading";

export * from "./loading";
export * from "./loading-listener";

export const LOADING_DIRECTIVES: Type<any>[] = [Loading];
