/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    Component, Input, ViewChild, ElementRef, Renderer, AfterViewInit, EventEmitter, Output
} from "@angular/core";
import {StringFilter} from "../../interfaces/string-filter";
import {CustomFilter} from "../../providers/custom-filter";
import {DatagridFilter} from "../../datagrid-filter";
import {DatagridStringFilterImpl} from "./datagrid-string-filter-impl";
import {DatagridFilterRegistrar} from "../../utils/datagrid-filter-registrar";
import {FiltersProvider, RegisteredFilter} from "../../providers/filters";

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
export class DatagridStringFilter extends DatagridFilterRegistrar<DatagridStringFilterImpl>
    implements CustomFilter, AfterViewInit {

    constructor(private renderer: Renderer, filters: FiltersProvider) {
        super(filters);
    }

    /**
     * Customizable filter logic based on a search text
     */
    @Input("clrDgStringFilter") set customStringFilter(value: StringFilter<any>
        | RegisteredFilter<DatagridStringFilterImpl>) {
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
                    this.renderer.invokeElementMethod(this.input.nativeElement, "focus");
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
        if (!this.filter) { return; }
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
