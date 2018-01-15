/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
    ComponentFactory, ComponentFactoryResolver, Directive, ElementRef, Optional,
    ViewContainerRef
} from "@angular/core";
import {ClrDatepickerContainer} from "./datepicker-container";
import {EmptyAnchor} from "../../utils/host-wrapping/empty-anchor";

@Directive({
    selector: "[clrDatepicker]"
})
export class ClrDatepicker {

    constructor(
        @Optional() private container: ClrDatepickerContainer,
        private vcr: ViewContainerRef,
        private el: ElementRef,
        private cfr: ComponentFactoryResolver) {
            if (!container) {
                // We need a new anchor, since we're projecting the current one.
                this.vcr.createComponent(this.cfr.resolveComponentFactory(EmptyAnchor));
                const factory: ComponentFactory<ClrDatepickerContainer>
                    = this.cfr.resolveComponentFactory(ClrDatepickerContainer);
                this.vcr.createComponent(
                    factory, undefined, undefined, [[this.el.nativeElement]]
                );
                // We can now remove the useless anchor
                this.vcr.remove(0);
            }
    }
}
