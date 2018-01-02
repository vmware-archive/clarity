/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component} from "@angular/core";

@Component({templateUrl: "./modals.component.html"})
export class KSModals {
    opened1: boolean = false;
    opened2: boolean = false;
    small: boolean = false;
    large: boolean = false;
    extraLarge: boolean = false;
}
