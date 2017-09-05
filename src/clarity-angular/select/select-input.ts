/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnDestroy, Output} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

import {IfOpenService} from "./../utils/conditional/if-open.service";
import {RootSelectService} from "./providers/select.service";
import {Select} from "./select";


@Directive({selector: "[clrSelectInput]"})
export class SelectInput implements OnDestroy {
    private el: HTMLElement;
    private _subOpen: Subscription;
    private _subInput: Subscription;

    constructor(private select: Select, private selectService: RootSelectService, el: ElementRef,
                private ifOpenService: IfOpenService) {
        this.el = el.nativeElement;
        this._subOpen = ifOpenService.openChange.subscribe((value: boolean) => {
            if (value === true) {
                this.el.focus();
            }
        });

        this._subInput = selectService.input.subscribe((value: string) => {
            if (value !== (<HTMLInputElement>this.el).value) {
                (<HTMLInputElement>this.el).value = value;
            }
        });
    }

    @HostListener("keyup", ["$event"])
    onKeyUp(e: KeyboardEvent) {
        if (e.code.indexOf("Arrow") !== -1 || e.code.indexOf("Enter") !== -1) {
            this.selectService.specialKey = e.code;
        } else {
            this.selectService.input = (<HTMLInputElement>this.el).value;
        }
    }

    @HostListener("keydown", ["$event"])
    onKeyDown(e: KeyboardEvent) {
        if (e.code.indexOf("ArrowUp") !== -1 || e.code.indexOf("ArrowDown") !== -1 || e.code.indexOf("Enter") !== -1) {
            e.preventDefault();
        }
    }

    ngOnDestroy() {
        this._subOpen.unsubscribe();
    }
}