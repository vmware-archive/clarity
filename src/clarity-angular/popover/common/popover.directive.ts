/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, ElementRef, Input} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {IfOpenService} from "../../utils/conditional/if-open.service";

import {Point, Popover, PopoverOptions} from "./popover";

@Directive({selector: "[clrPopoverAnchor]"})
export class PopoverDirective {
    private _popoverInstance: Popover;
    private _subscription: Subscription;

    @Input("clrPopoverAnchor") anchorElem: any;
    @Input("clrPopoverAnchorPoint") anchorPoint: Point;
    @Input("clrPopoverPopoverPoint") popoverPoint: Point;
    @Input("clrPopoverOptions") popoverOptions: PopoverOptions = {};

    constructor(private el: ElementRef, public ifOpenService: IfOpenService) {}

    ngOnInit() {
        this.ifOpenService.openChange.subscribe((change) => {
            this.updateView(change);
        });
    }

    private updateView(open: boolean) {
        if (open) {
            this.createPopover();
        } else {
            this.destroyPopover();
        }
    }

    createPopover() {
        // we take the first child element; usually there should only be one anyways
        this._popoverInstance = new Popover(this.el.nativeElement);
        this._subscription =
            this._popoverInstance.anchor(this.anchorElem, this.anchorPoint, this.popoverPoint, this.popoverOptions)
                .subscribe(() => {
                    // if a scroll event is detected, close the popover
                    this.ifOpenService.open = false;
                });
    }

    destroyPopover() {
        if (this._popoverInstance) {
            this._subscription.unsubscribe();
            this._popoverInstance.release();
            delete this._popoverInstance;
        }
    }

    ngOnDestroy() {
        this.destroyPopover();
    }
}
