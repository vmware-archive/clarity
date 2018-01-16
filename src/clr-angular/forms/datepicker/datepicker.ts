/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
    ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, HostBinding, HostListener,
    OnDestroy,
    Optional,
    ViewContainerRef
} from "@angular/core";
import {ClrDatepickerContainer} from "./datepicker-container";
import {EmptyAnchor} from "../../utils/host-wrapping/empty-anchor";
import {DateIOService} from "./providers/date-io.service";
import {Subscription} from "rxjs/Subscription";

@Directive({
    selector: "[clrDatepicker]"
})
export class ClrDatepicker implements OnDestroy {

    private _sub: Subscription;

    constructor(@Optional() private container: ClrDatepickerContainer,
                private vcr: ViewContainerRef,
                private elRef: ElementRef,
                private cfr: ComponentFactoryResolver,
                @Optional() private _dateIOService: DateIOService) {
        if (!container) {
            const compRef: ComponentRef<ClrDatepickerContainer> = this.wrapContainer();
            this.populateContainerServices(compRef);
            this.initializeSubscriptions();
        }
    }

    /**
     * Wraps the Datepicker directive by the Datepicker container.
     * @returns {ComponentRef<ClrDatepickerContainer>}
     */
    private wrapContainer(): ComponentRef<ClrDatepickerContainer> {
        // We need a new anchor, since we're projecting the current one.
        this.vcr.createComponent(this.cfr.resolveComponentFactory(EmptyAnchor));
        const factory: ComponentFactory<ClrDatepickerContainer>
            = this.cfr.resolveComponentFactory(ClrDatepickerContainer);
        const componentRef: ComponentRef<ClrDatepickerContainer>
            = this.vcr.createComponent(
            factory, undefined, undefined, [[this.elRef.nativeElement]]
        );
        // We can now remove the useless anchor
        this.vcr.remove(0);
        return componentRef;
    }

    /**
     * Populates references to the DatepickerContainer services.
     * @param {ComponentRef<ClrDatepickerContainer>} componentRef
     */
    private populateContainerServices(componentRef: ComponentRef<ClrDatepickerContainer>): void {
        this._dateIOService = componentRef.injector.get(DateIOService);
    }

    private initializeSubscriptions(): void {
        this._sub = this._dateIOService.dateChanged.subscribe((date) => {
            const inputValue: string = this._dateIOService.toLocaleDisplayFormatString(date);
            this.elRef.nativeElement.value = inputValue;
        });
    }

    @HostBinding("attr.placeholder")
    get placeholderText(): string {
        return this._dateIOService.placeholderText;
    }

    @HostListener("input")
    onValueChange() {
        //Is there a better way to retrieve this other than use the elementRef?
        const value: string = this.elRef.nativeElement.value;
        if (value) {
            this._dateIOService.inputDate = value.trim();
        } else {
            this._dateIOService.inputDate = "";
        }
    }

    ngOnDestroy() {
        if(this._sub) {
            this._sub.unsubscribe();
        }
    }
}
