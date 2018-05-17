/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {AfterContentInit, Component, ContentChild, ElementRef, HostListener, ViewChild} from "@angular/core";

import {POPOVER_HOST_ANCHOR} from "../../popover/common/popover-host-anchor.token";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {TAB} from "../../utils/key-codes/key-codes";
import {ClrOptions} from "./options";

@Component({
    selector: "clr-select",
    templateUrl: "select.html",
    providers: [IfOpenService, {provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef}],
    host: {"[class.clr-select]": "true"}
})
export class ClrSelect implements AfterContentInit {
    @ViewChild("input") input: ElementRef;
    @ContentChild(ClrOptions) options: ClrOptions;

    constructor(private ifOpenService: IfOpenService) {}

    private registerPopoverIgnoredInput() {
        if (this.input) {
            this.ifOpenService.registerIgnoredElement(this.input);
        }
    }

    toggleOptionsMenu(event: MouseEvent): void {
        this.ifOpenService.toggleWithEvent(event);
    }

    @HostListener("click")
    focusInput() {
        if (this.input) {
            this.input.nativeElement.focus();
        }
    }

    closeMenuOnTabPress(event: KeyboardEvent) {
        if (event && event.keyCode === TAB) {
            this.ifOpenService.open = false;
        }
    }

    // Lifecycle methods
    ngAfterContentInit() {
        this.registerPopoverIgnoredInput();
    }
}
