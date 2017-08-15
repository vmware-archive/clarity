/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/*
 * If we someday want to be able to render the datagrid in a webworker,
 * this is where we would test if we're in headless mode. Right now it's not testing anything, but any access
 * to native DOM elements' methods and properties in the Datagrid happens here.
 */

import {Injectable} from "@angular/core";

@Injectable()
export class DomAdapter {
    userDefinedWidth(element: any): number {
        element.classList.add("datagrid-cell-width-zero");
        const userDefinedWidth = parseInt(getComputedStyle(element).getPropertyValue("width"), 10);
        element.classList.remove("datagrid-cell-width-zero");
        return userDefinedWidth;
    }

    scrollBarWidth(element: any) {
        return element.offsetWidth - element.clientWidth;
    }

    scrollWidth(element: any) {
        return element.scrollWidth || 0;
    }

    computedHeight(element: any): number {
        return parseInt(getComputedStyle(element).getPropertyValue("height"), 10);
    }

    clientRectRight(element: any): number {
        return parseInt(element.getBoundingClientRect().right, 10);
    }

    clientRectWidth(element: any): number {
        return parseInt(element.getBoundingClientRect().width, 10);
    }

    minWidth(element: any): number {
        return parseInt(getComputedStyle(element).getPropertyValue("min-width"), 10);
    }

    focus(element: any): void {
        element.focus();
    }
}