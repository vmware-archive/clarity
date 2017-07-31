/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {AfterViewInit, Directive, ElementRef, HostListener} from "@angular/core";

@Directive({selector: "[clrFocusTrap]"})
export class FocusTrapDirective implements AfterViewInit {
    constructor(public elementRef: ElementRef) {}

    @HostListener("document:focusin", ["$event"])
    onFocusIn(event: any) {
        const nativeElement: HTMLElement = this.elementRef.nativeElement;

        if (!nativeElement.contains(event.target)) {
            nativeElement.focus();
        }
    }

    ngAfterViewInit() {
        const nativeElement: HTMLElement = this.elementRef.nativeElement;
        nativeElement.setAttribute("tabindex", "0");
    }
}
