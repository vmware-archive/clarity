/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef, HostListener, Input, OnDestroy, ViewChild} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {DetailWrapper} from "./../../app/datagrid/expandable-rows/detail-wrapper";
import {ListsCompactDemo} from "./../../app/lists/lists-compact";
import {RootSelectService} from "./providers/select.service";
import {Select} from "./select";

@Component({
    selector: "clr-option",
    host: {
        "[class.clr-option]": "true",
        "[class.highlight]": "_highlight",
        "[class.selected]": "_selected",
        "role": "option"
    },
    template: `<ng-content *ngIf="visible"></ng-content>`
})
export class Option implements OnDestroy {
    private _value: String;
    private _visible: boolean = true;
    public _highlight: boolean = false;
    public _selected: boolean = false;
    private _subHighlighted: Subscription;
    private _subSelected: Subscription;
    private _subInput: Subscription;  // TODO: implement bold as hint
    private _index: number;
    constructor(public selectService: RootSelectService, public el: ElementRef) {}

    ngAfterViewInit() {
        this._subHighlighted = this.selectService.highlightedChange.subscribe((option: Option) => {
            if (option && option === this) {
                this.highlight = true;
            } else {
                this.highlight = false;
            }
        });
        this._subSelected = this.selectService.selectedChange.subscribe((value: Option) => {
            if (value && value === this) {
                this.selected = true;
            } else {
                this.selected = false;
            }
        });
    }
    /**
     * [clrValue] defines the value which will be set to ngModel once selected
     *
     * @memberof Option
     */
    @Input("clrValue")
    set clrValue(value: any) {
        this._value = value;
    }
    get clrValue(): any {
        return this._value;
    }

    toString(): string {
        const element = this.el.nativeElement
        return element.innerText || element.textContent;
    }

    /**
     * Internal attribute for highlight and select mapping
     *
     * @memberof Option
     */
    set clrIndex(value: number) {
        this._index = value;
    }
    get clrIndex() {
        return this._index;
    }
    /**
     * Hides a Option in the select menu
     * used to hide a Option if in regards to the current filter the option isn't needed
     *
     * @memberof Option
     */
    set visible(visible: boolean) {
        this._visible = visible;
    }
    get visible(): boolean {
        return this._visible;
    }

    /**
     * Highlights the option grey
     *
     * @memberof Option
     */
    set highlight(highlight: boolean) {
        if (!this._selected) {
            this._highlight = highlight;
        }
    }
    get highlight(): boolean {
        return this._highlight;
    }

    /**
     * Highlights the option light blue (selected)
     *
     * @memberof Option
     */
    set selected(selected: boolean) {
        this._selected = selected;
    }
    get selected(): boolean {
        return this._selected;
    }

    @HostListener("mouseover", ["$event"])
    onHover(e: Event) {
        this.selectService.highlighted = this;
    }

    ngOnDestroy() {
        this._subSelected.unsubscribe();
        this._subHighlighted.unsubscribe();
    }
}