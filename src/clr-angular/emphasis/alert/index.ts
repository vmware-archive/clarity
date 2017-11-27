/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Type} from "@angular/core";
import {Alert} from "./alert";
import {AlertItem} from "./alert-item";
import {Alerts} from "./alerts";
import {AlertsPager} from "./alerts-pager";

export * from "./alert";
export * from "./alert-item";
export * from "./alerts";
export * from "./alerts-pager";

export const ALERT_DIRECTIVES: Type<any>[] = [Alert, AlertItem, Alerts, AlertsPager];
