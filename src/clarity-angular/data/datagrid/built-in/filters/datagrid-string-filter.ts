/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild} from "@angular/core";

import {DatagridFilter} from "../../datagrid-filter";
import {StringFilter} from "../../interfaces/string-filter";
import {CustomFilter} from "../../providers/custom-filter";
import {FiltersProvider, RegisteredFilter} from "../../providers/filters";
import {DomAdapter} from "../../render/dom-adapter";
import {DatagridFilterRegistrar} from "../../utils/datagrid-filter-registrar";

import {DatagridStringFilterImpl} from "./datagrid-string-filter-impl";

@Component({
    selector: "clr-dg-string-filter",
    providers: [{provide: CustomFilter, useExisting: DatagridStringFilter}],
    template: `
        <clr-dg-filter [clrDgFilter]="registered" [(clrDgFilterOpen)]="open">
            <!--
                Even though this *ngIf looks useless because the filter container already has one,
                it prevents NgControlStatus and other directives automatically added by Angular
                on inputs with NgModel from freaking out because of their host binding changing
                mid-change detection when the input is destroyed.
            -->
            <input #input type="text" name="search" [(ngModel)]="value" *ngIf="open"
                (keyup.enter)="close()" (keyup.escape)="close()"/>
        </clr-dg-filter>
    `
})
export class DatagridStringFilter extends DatagridFilterRegistrar<DatagridStringFilterImpl> implements CustomFilter,
                                                                                                       AfterViewInit {
    constructor(private renderer: Renderer2, filters: FiltersProvider, private domAdapter: DomAdapter) {
        super(filters);
    }

    /**
     * Customizable filter logic based on a search text
     */
    @Input("clrDgStringFilter")
    set customStringFilter(value: StringFilter<any>|RegisteredFilter<DatagridStringFilterImpl>) {
        if (value instanceof RegisteredFilter) {
            this.setFilter(value);
        } else {
            this.setFilter(new DatagridStringFilterImpl(<StringFilter<any>>value));
        }
    }

    /**
     * Indicates if the filter dropdown is open
     */
    public open: boolean = false;

    /**
     * We need the actual input element to automatically focus on it
     */
    @ViewChild("input") public input: ElementRef;

    /**
     * We grab the DatagridFilter we wrap to register this StringFilter to it.
     */
    @ViewChild(DatagridFilter) public filterContainer: DatagridFilter;
    ngAfterViewInit() {
        this.filterContainer.openChanged.subscribe((open: boolean) => {
            if (open) {
                // We need the timeout because at the time this executes, the input isn't
                // displayed yet.
                setTimeout(() => {
                    this.domAdapter.focus(this.input.nativeElement);
                });
            }
        });
    }

    /**
     * Common setter for the input value
     */
    public get value() {
        return this.filter.value;
    }
    @Input("clrFilterValue")
    public set value(value: string) {
        if (!this.filter) {
            return;
        }
        if (!value) {
            value = "";
        }
        if (value !== this.filter.value) {
            this.filter.value = value;
            this.filterValueChange.emit(value);
        }
    }

    @Output("clrFilterValueChange") filterValueChange = new EventEmitter();

    public close() {
        this.open = false;
    }
}
