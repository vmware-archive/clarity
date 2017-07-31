/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {Page} from "./providers/page";

@Component({
    selector: "clr-dg-pagination",
    template: `
        <ul class="pagination" *ngIf="page.last > 1">
            <li *ngIf="page.current > 1">
                <button 
                    class="pagination-previous" 
                    (click)="page.previous()"
                    type="button"></button>
            </li>
            <li *ngIf="page.current > 2">
                <button (click)="page.current = 1" type="button">1</button>
            </li>
            <li *ngIf="page.current > 3">...</li>
            <li *ngFor="let pageNum of middlePages" [class.pagination-current]="pageNum === page.current">
                <button 
                    *ngIf="pageNum !== page.current; else noButton" 
                    (click)="page.current = pageNum"
                    type="button">{{pageNum}}</button>
                <ng-template #noButton>{{pageNum}}</ng-template>
            </li>
            <li *ngIf="page.current < page.last - 2">...</li>
            <li *ngIf="page.current < page.last - 1">
                <button 
                    (click)="page.current = page.last"
                    type="button">{{page.last}}</button>
            </li>
            <li *ngIf="page.current < page.last">
                <button 
                    class="pagination-next" 
                    (click)="page.next()"
                    type="button"></button>
            </li>
        </ul>
    `,
    // IE10 comes to pollute even our components declaration
    styles: [`:host { display: block; }`]
})
export class DatagridPagination implements OnDestroy, OnInit {
    constructor(public page: Page) {
        /*
         * Default page size is 10.
         * The reason we set it in this constructor and not in the provider itself is because
         * we don't want pagination (page size 0) if this component isn't present in the datagrid.
         */
        page.size = 10;
    }

    /**********
     * Subscription to the Page service for page changes.
     * Note: this only emits after the datagrid is initialized/stabalized and the page changes.
     */
    ngOnInit() {
        this._pageSubscription = this.page.change.subscribe(current => this.currentChanged.emit(current));
    }

    /**
     * Subscription to the page service changes
     */
    private _pageSubscription: Subscription;
    ngOnDestroy() {
        this._pageSubscription.unsubscribe();
    }

    /**
     * Page size
     */
    public get pageSize(): number {
        return this.page.size;
    }
    @Input("clrDgPageSize")
    public set pageSize(size: number) {
        if (typeof size === "number") {
            this.page.size = size;
        }
    }

    /**
     * Total items (needed to guess the last page)
     */
    public get totalItems(): number {
        return this.page.totalItems;
    }
    @Input("clrDgTotalItems")
    public set totalItems(total: number) {
        if (typeof total === "number") {
            this.page.totalItems = total;
        }
    }

    /**
     * Last page
     */
    public get lastPage(): number {
        return this.page.last;
    }
    @Input("clrDgLastPage")
    public set lastPage(last: number) {
        if (typeof last === "number") {
            this.page.last = last;
        }
    }

    /**
     * Current page
     */
    public get currentPage(): number {
        return this.page.current;
    }
    @Input("clrDgPage")
    public set currentPage(page: number) {
        if (typeof page === "number") {
            this.page.current = page;
        }
    }

    @Output("clrDgPageChange") currentChanged = new EventEmitter<number>(false);

    /**
     * Moves to the previous page if it exists
     */
    public previous() {
        this.page.previous();
    }

    /**
     * Moves to the next page if it exists
     */
    public next() {
        this.page.next();
    }

    /**
     * Index of the first item displayed on the current page, starting at 0
     */
    public get firstItem(): number {
        return this.page.firstItem;
    }

    /**
     * Index of the last item displayed on the current page, starting at 0
     */
    public get lastItem(): number {
        return this.page.lastItem;
    }

    /**
     * Conditionally adds page numbers before and after the current page
     * @returns {number[]}
     */
    public get middlePages(): number[] {
        const middlePages: number[] = [];
        if (this.page.current > 1) {
            middlePages.push(this.page.current - 1);
        }
        middlePages.push(this.page.current);
        if (this.page.current < this.page.last) {
            middlePages.push(this.page.current + 1);
        }
        return middlePages;
    }
}
