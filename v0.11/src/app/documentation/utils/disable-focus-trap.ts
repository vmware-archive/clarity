/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class DisableFocusTrap {
    constructor() {
        try {
            (<HTMLElement>document.activeElement).blur();
        } catch (e) {
            // Ignore because we're on a platform that doesn't have DOM access like a server
        }
    }
    get current() { return; }
    set current(value: any) {}
    activatePreviousTrapper() {}
}