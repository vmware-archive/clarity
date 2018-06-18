/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable} from "@angular/core";

// TODO: Shijir is moving the DOM Adapter outside of the Datagrid. While rebase, move the functions
// from this class to there.

@Injectable()
export class SelectDomAdapter {
    clearChildren(element: any): void {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    cloneNode(element: any): any {
        return element.cloneNode(true);
    }

    focus(element: any): void {
        element.focus();
    }
}
