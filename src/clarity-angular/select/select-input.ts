import {NgModule} from "@angular/core";
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output} from "@angular/core";
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

        this._subInput = selectService.inputChange.subscribe((value: string) => {
            if (value !== (<HTMLInputElement>this.el).value && value !== undefined && value !== null) {
                (<HTMLInputElement>this.el).value = value;
            }
        });
    }
    /**
     * Notifies about keyup events for up down and enter
     *
     * @param {KeyboardEvent} e
     * @memberof SelectInput
     */
    @HostListener("keyup", ["$event"])
    onKeyUp(e: KeyboardEvent) {
        if (e.code.indexOf("Arrow") !== -1 || e.code.indexOf("Enter") !== -1) {
            this.selectService.specialKey = e.code;
            if (e.code === "ArrowUp") {
                if (this.ifOpenService.open) {
                    this.selectService.focusPrevious();
                }
            } else if (e.code === "ArrowDown") {
                if (!this.ifOpenService.open) {
                    this.ifOpenService.open = true;
                }
                this.selectService.focusNext();
            } else if (e.code === "Enter") {
                if (this.ifOpenService.open && this.selectService.highlighted != null) {
                    this.selectService.selectCurrentFocused();
                    this.ifOpenService.open = false;
                }
            }
        }
    }
    /**
     * This HostListener exists to surpress the normal input behaviour on up down and enter.
     *
     * @param {KeyboardEvent} e
     * @memberof SelectInput
     */
    @HostListener("keydown", ["$event"])
    onKeyDown(e: KeyboardEvent) {
        if (e.code.indexOf("ArrowUp") !== -1 || e.code.indexOf("ArrowDown") !== -1 || e.code.indexOf("Enter") !== -1) {
            e.preventDefault();
        }
    }
    /**
     * Pushes value changes
     *
     * @param {Event} changes
     * @memberof SelectInput
     */
    @HostListener("input", ["$event"])
    onChange(changes: Event): void {
        this.selectService.input = (<HTMLInputElement>changes.target).value;
    }

    ngOnDestroy() {
        this._subOpen.unsubscribe();
        this._subInput.unsubscribe();
    }
}