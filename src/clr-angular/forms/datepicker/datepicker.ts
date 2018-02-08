/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
    ComponentFactory,
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener, Input,
    OnDestroy,
    Optional,
    Output,
    ViewContainerRef
} from "@angular/core";
import {NgModel} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

import {EmptyAnchor} from "../../utils/host-wrapping/empty-anchor";

import {ClrDatepickerContainer} from "./datepicker-container";
import {DateIOService} from "./providers/date-io.service";
import {DatepickerActiveService} from "./providers/datepicker-active.service";

@Directive({selector: "[clrDatepicker]", host: {"[class.datepicker]": "true"}})
export class ClrDatepicker implements OnDestroy {
    /**
     * Subscriptions to all the services and queries changes
     */
    private _subscriptions: Subscription[] = [];

    constructor(@Optional() private container: ClrDatepickerContainer, private vcr: ViewContainerRef,
                private elRef: ElementRef, private cfr: ComponentFactoryResolver, @Optional() private _ngModel: NgModel,
                @Optional() private _dateIOService: DateIOService,
                @Optional() private _datepickerActiveService: DatepickerActiveService) {
        if (!container) {
            const compRef: ComponentRef<ClrDatepickerContainer> = this.wrapContainer();
            this.populateContainerServices(compRef);
        }
        this.initializeSubscriptions();
    }

    /**
     * Wraps the Datepicker directive by the Datepicker container.
     */
    private wrapContainer(): ComponentRef<ClrDatepickerContainer> {
        // We need a new anchor, since we're projecting the current one.
        this.vcr.createComponent(this.cfr.resolveComponentFactory(EmptyAnchor));
        const factory: ComponentFactory<ClrDatepickerContainer> =
            this.cfr.resolveComponentFactory(ClrDatepickerContainer);
        const componentRef: ComponentRef<ClrDatepickerContainer> =
            this.vcr.createComponent(factory, undefined, undefined, [[this.elRef.nativeElement]]);
        // We can now remove the useless anchor
        this.vcr.remove(0);
        return componentRef;
    }

    /**
     * Populates references to the DatepickerContainer services.
     */
    private populateContainerServices(componentRef: ComponentRef<ClrDatepickerContainer>): void {
        this._dateIOService = componentRef.injector.get(DateIOService);
        this._datepickerActiveService = componentRef.injector.get(DatepickerActiveService);
    }

    /**
     * Initialize DateIO Subscriptions
     */
    private initializeSubscriptions(): void {
        if (this._dateIOService) {
            this._subscriptions.push(this._dateIOService.dateStrUpdated.subscribe((dateStr) => {
                this.elRef.nativeElement.value = dateStr;
                // This makes sure that ngModelChange is fired
                // TODO: Check if there is a better way to do this.
                if (this._ngModel) {
                    this._ngModel.control.setValue(dateStr);
                }
            }));
            this._subscriptions.push(this._dateIOService.dateUpdated.subscribe((date) => {
                this._dateUpdated.emit(date);
            }));
        }
    }

    @HostBinding("attr.placeholder")
    get placeholderText(): string {
        return this._dateIOService.placeholderText;
    }

    @HostListener("change", ["$event.target"])
    onValueChange(target: HTMLInputElement) {
        const value: string = target.value;
        if (value) {
            this.inputDate = value.trim();
        } else {
            this.inputDate = "";
        }
    }

    @HostBinding("attr.type")
    get isActive(): string {
        return this._datepickerActiveService.active ? "text" : "date";
    }

    set inputDate(value: string) {
        this._dateIOService.inputDate = value;
    }

    @Input("clrDatepicker")
    set date(value: Date) {
        if (value) {
            const dateStr: string = this._dateIOService.processDate(value);
            this.elRef.nativeElement.value = dateStr;
        }
    }

    @Output("clrDatepickerChange") _dateUpdated: EventEmitter<Date> = new EventEmitter<Date>(false);

    ngOnDestroy() {
        this._subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }
}
