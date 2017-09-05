/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    Component,
    ContentChildren,
    ElementRef,
    Injector,
    Input,
    OnDestroy,
    Optional,
    QueryList,
    SkipSelf
} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {AbstractPopover} from "../popover/common/abstract-popover";
import {Point} from "../popover/common/popover";

import {Option} from "./option";
import {RootSelectService} from "./providers/select.service";

@Component({
    selector: "clr-select-menu",
    template: `
    <ul>
        <ng-content></ng-content>
    </ul>
    `
})
export class SelectMenu extends AbstractPopover {
    constructor(injector: Injector, @SkipSelf() parentHost: ElementRef, public el: ElementRef) {
        super(injector, parentHost);

        this.anchorPoint = Point.BOTTOM_LEFT;
        this.popoverPoint = Point.LEFT_TOP;

        this.popoverOptions.allowMultipleOpen = true;
        this.closeOnOutsideClick = true;
    }
}
