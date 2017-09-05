/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output} from "@angular/core";
import {Observable} from "rxjs/Observable";

import {IfOpenService} from "../utils/conditional/if-open.service";

import {RootSelectService} from "./providers/select.service";
import {Select} from "./select";


@Directive({selector: "[clrSelectMenuTrigger]"})
export class SelectMenuTrigger {
    private el: HTMLElement;

    constructor(private select: Select, private selectService: RootSelectService, el: ElementRef,
                public ifOpenService: IfOpenService) {
        this.el = el.nativeElement;
    }

    @HostListener("click", ["$event"])
    onClick(e: Event) {
        this.ifOpenService.toggleWithEvent(e);
    }
}