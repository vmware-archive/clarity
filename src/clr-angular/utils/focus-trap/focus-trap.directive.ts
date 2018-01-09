/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {DOCUMENT, isPlatformBrowser} from "@angular/common";
import {
    AfterViewInit,
    Directive,
    ElementRef,
    HostListener,
    Inject,
    Injector,
    OnDestroy,
    PLATFORM_ID
} from "@angular/core";

import {FocusTrapTracker} from "./focus-trap-tracker.service";

@Directive({selector: "[clrFocusTrap]"})
export class FocusTrapDirective implements AfterViewInit, OnDestroy {
    private _previousActiveElement: HTMLElement;
    private document: Document;

    constructor(public elementRef: ElementRef, injector: Injector, private focusTrapsTracker: FocusTrapTracker,
                @Inject(PLATFORM_ID) private platformId: Object) {
        this.document = injector.get(DOCUMENT);
        this.focusTrapsTracker.current = this;
    }

    @HostListener("document:focusin", ["$event"])
    onFocusIn(event: any) {
        const nativeElement: HTMLElement = this.elementRef.nativeElement;

        if (this.focusTrapsTracker.current === this && !nativeElement.contains(event.target)) {
            nativeElement.focus();
        }
    }

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this._previousActiveElement = <HTMLElement>document.activeElement;
            const nativeElement: HTMLElement = this.elementRef.nativeElement;
            nativeElement.setAttribute("tabindex", "0");
        }
    }

    public setPreviousFocus(): void {
        if (this._previousActiveElement && this._previousActiveElement.focus) {
            this._previousActiveElement.focus();
        }
    }

    ngOnDestroy() {
        this.setPreviousFocus();
        this.focusTrapsTracker.activatePreviousTrapper();
    }
}
