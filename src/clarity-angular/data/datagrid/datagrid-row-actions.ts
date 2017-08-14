/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
    Component, ElementRef, Injector, HostListener, SkipSelf, AfterViewInit, Input, Output, EventEmitter
} from "@angular/core";
import {AbstractPopover} from "../../popover/common/abstract-popover";
import {Point} from "../../popover/common/popover";
import {IfOpenService} from "../../utils/conditional/if-open.service";

@Component({
    selector: "clr-dg-row-actions, clr-dg-action-overflow",
    template: `
        <ng-content></ng-content>
    `,
    host: {
        // CSS only toggler
        "[class.active]": "ifOpenService.open",
    }
})
export class DatagridRowActions extends AbstractPopover implements AfterViewInit {

    protected anchorPoint = Point.RIGHT_CENTER;
    protected popoverPoint = Point.LEFT_CENTER;
    public closeOnOutsideClick = true;

    // Listen for clicks, and close the popover
    @HostListener("click", ["$event"])
    onDropdownTriggerClick(event: Event): void {
        this.ifOpenService.toggleWithEvent(event);
    }

    constructor(injector: Injector, @SkipSelf() parentHost: ElementRef, public ifOpenService: IfOpenService) {
        super(injector, parentHost);

        this.ifOpenService.openChange.subscribe(change => this.openChanged.emit(change));
    }

    ngAfterViewInit() {
        // Need to anchor directly to the trigger element
        this.anchorElem = this.parentHost.nativeElement.querySelector(".datagrid-action-toggle");
    }

    @Output("clrDgActionOverflowOpenChange") public openChanged = new EventEmitter<boolean>(false);

    @Input("clrDgActionOverflowOpen")
    public set open(open: boolean) {
        if (open !== this.ifOpenService.open) {
            this.ifOpenService.open = open;
        }
    }

    public get open() {
        return this.ifOpenService.open;
    }
}
