/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ElementRef, HostListener, Inject, Optional} from "@angular/core";
import {POPOVER_HOST_ANCHOR} from "../../popover/common/popover-host-anchor.token";
import {IfOpenService} from "../../utils/conditional/if-open.service";

@Component({selector: "clr-option", templateUrl: "option.html", host: {"[class.clr-option]": "true"}})
export class ClrOption {
    constructor(private ifOpenService: IfOpenService, @Optional() @Inject(POPOVER_HOST_ANCHOR) parentHost: ElementRef) {
        if (!parentHost) {
            throw new Error("clr-option should only be used inside of a clr-select");
        }
    }

    /**
     * This behavior is only for single select. Multi select will keep the menu open on option click.
     * We will handle that later.
     */
    @HostListener("click")
    closeMenuOnClick() {
        this.ifOpenService.open = false;
    }
}
