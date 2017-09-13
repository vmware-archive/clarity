/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {DOCUMENT} from "@angular/common";
import {AfterViewInit, Directive, ElementRef, HostListener, Injector, OnDestroy} from "@angular/core";

@Directive({selector: "[clrFocusTrap]"})
export class FocusTrapDirective implements AfterViewInit, OnDestroy {
    private _previousActiveElement: HTMLElement;
    private document: Document;

    constructor(public elementRef: ElementRef, injector: Injector) {
        this.document = injector.get(DOCUMENT);
    }

    @HostListener("document:focusin", ["$event"])
    onFocusIn(event: any) {
        const nativeElement: HTMLElement = this.elementRef.nativeElement;

        if (!nativeElement.contains(event.target)) {
            nativeElement.focus();
        }
    }

    ngAfterViewInit() {
        this._previousActiveElement = <HTMLElement>document.activeElement;
        const nativeElement: HTMLElement = this.elementRef.nativeElement;
        nativeElement.setAttribute("tabindex", "0");
    }

    public setPreviousFocus(): void {
        this._previousActiveElement.focus();
    }

    ngOnDestroy() {
        this.setPreviousFocus();
    }
}
