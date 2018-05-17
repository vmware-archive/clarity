/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/*
 * This version of the DomAdapter is for use on non-browser platforms, where there are no
 * nativeElements to use for calculations.
 */

import {Injectable} from "@angular/core";
import {DomAdapter} from "./dom-adapter";

@Injectable()
export class NoopDomAdapter implements DomAdapter {
    userDefinedWidth(element: any): number {
        return 0;
    }

    scrollBarWidth(element: any) {
        return 0;
    }

    scrollWidth(element: any) {
        return 0;
    }

    computedHeight(element: any): number {
        return 0;
    }

    clientRectHeight(element: any): number {
        return 0;
    }

    clientRectRight(element: any): number {
        return 0;
    }

    clientRectWidth(element: any): number {
        return 0;
    }

    minWidth(element: any): number {
        return 0;
    }

    focus(element: any): void {}
}
