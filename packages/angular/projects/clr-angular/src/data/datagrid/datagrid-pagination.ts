/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Page } from './providers/page';
import { ClrDatagridPageSize } from './datagrid-page-size';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { DetailService } from './providers/detail.service';

@Component({
  selector: 'clr-dg-pagination',
  template: `
    <ng-container *ngIf="!detailService.isOpen">
      <div class="pagination-size" *ngIf="_pageSizeComponent">
        <ng-content select="clr-dg-page-size"></ng-content>
      </div>
      <div class="pagination-description">
        <ng-content></ng-content>
      </div>
      <div class="pagination-list" *ngIf="page.last > 1">
        <button
          type="button"
          class="pagination-first"
          [disabled]="page.current <= 1"
          (click)="page.current = 1"
          [attr.aria-label]="commonStrings.keys.firstPage"
        >
          <clr-icon shape="step-forward-2 down"></clr-icon>
        </button>
        <button
          type="button"
          class="pagination-previous"
          [disabled]="page.current <= 1"
          (click)="page.current = page.current - 1"
          [attr.aria-label]="commonStrings.keys.previousPage"
        >
          <clr-icon shape="angle left"></clr-icon>
        </button>
        <input
          *ngIf="!disableCurrentPageInput; else readOnly"
          #currentPageInput
          type="text"
          class="pagination-current clr-input"
          [size]="page.last.toString().length"
          [value]="page.current"
          (keydown.enter)="updateCurrentPage($event)"
          (blur)="updateCurrentPage($event)"
          [attr.aria-label]="commonStrings.keys.currentPage"
        />
        <ng-template #readOnly>
          <span>{{ page.current }}</span>
        </ng-template>

        &nbsp;/&nbsp;<span [attr.aria-label]="commonStrings.keys.totalPages">{{ page.last }}</span>
        <button
          type="button"
          class="pagination-next"
          [disabled]="page.current >= page.last"
          (click)="page.current = page.current + 1"
          [attr.aria-label]="commonStrings.keys.nextPage"
        >
          <clr-icon shape="angle right"></clr-icon>
        </button>
        <button
          type="button"
          class="pagination-last"
          [disabled]="page.current >= page.last"
          (click)="page.current = page.last"
          [attr.aria-label]="commonStrings.keys.lastPage"
        >
          <clr-icon shape="step-forward-2 up"></clr-icon>
        </button>
      </div>
    </ng-container>
    <ng-container *ngIf="detailService.isOpen">
      <div class="pagination-description-compact">
        {{ page.firstItem + 1 }}-{{ page.lastItem + 1 }} / {{ page.totalItems }}
      </div>
      <div class="pagination-list">
        <button
          type="button"
          class="pagination-previous"
          [disabled]="page.current <= 1"
          (click)="page.current = page.current - 1"
          [attr.aria-label]="commonStrings.keys.previousPage"
        >
          <clr-icon shape="angle left"></clr-icon>
        </button>
        <span>{{ page.current }}</span>
        <button
          type="button"
          class="pagination-next"
          [disabled]="page.current >= page.last"
          (click)="page.current = page.current + 1"
          [attr.aria-label]="commonStrings.keys.nextPage"
        >
          <clr-icon shape="angle right"></clr-icon>
        </button>
      </div>
    </ng-container>
  `,
  host: { '[class.pagination]': 'true' },
})
export class ClrDatagridPagination implements OnDestroy, OnInit {
  @ContentChild(ClrDatagridPageSize) _pageSizeComponent: ClrDatagridPageSize;
  @ViewChild('currentPageInput') currentPageInputRef: ElementRef;

  constructor(public page: Page, public commonStrings: ClrCommonStringsService, public detailService: DetailService) {
    this.page.activated = true;
  }

  /**********
   * Subscription to the Page service for page changes.
   * Note: this only emits after the datagrid is initialized/stabalized and the page changes.
   */
  ngOnInit() {
    /*
     * Default page size is 10.
     * The reason we set it here and not in the provider itself is because
     * we don't want pagination if this component isn't present in the datagrid.
     */
    if (!this.page.size) {
      this.page.size = 10;
    }
    this._pageSubscription = this.page.change.subscribe(current => this.currentChanged.emit(current));
  }

  /**
   * Subscription to the page service changes
   */
  private _pageSubscription: Subscription;

  ngOnDestroy() {
    this.page.resetPageSize(true);
    if (this._pageSubscription) {
      this._pageSubscription.unsubscribe();
    }
  }

  @Input('clrDgPageInputDisabled') public disableCurrentPageInput: boolean;

  /**
   * Page size
   */
  public get pageSize(): number {
    return this.page.size;
  }

  @Input('clrDgPageSize')
  public set pageSize(size: number) {
    if (typeof size === 'number') {
      this.page.size = size;
    }
  }

  /**
   * Total items (needed to guess the last page)
   */
  public get totalItems(): number {
    return this.page.totalItems;
  }

  @Input('clrDgTotalItems')
  public set totalItems(total: number) {
    if (typeof total === 'number') {
      this.page.totalItems = total;
    }
  }

  /**
   * Last page
   */
  public get lastPage(): number {
    return this.page.last;
  }

  @Input('clrDgLastPage')
  public set lastPage(last: number) {
    if (typeof last === 'number') {
      this.page.last = last;
    }
  }

  /**
   * Current page
   */
  public get currentPage(): number {
    return this.page.current;
  }

  @Input('clrDgPage')
  public set currentPage(page: number) {
    if (typeof page === 'number') {
      this.page.current = page;
    }
  }

  @Output('clrDgPageChange') currentChanged = new EventEmitter<number>(false);

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
   * Index of the first item displayed on the current page, starting at 0, -1 if none displayed
   */
  public get firstItem(): number {
    return this.page.firstItem;
  }

  /**
   * Index of the last item displayed on the current page, starting at 0, -1 if none displayed
   */
  public get lastItem(): number {
    return this.page.lastItem;
  }

  /**
   * Conditionally adds page numbers before and after the current page
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

  /**
   * We only update the pagination's current page on blur of the input field, or
   * when they press enter.
   */
  public updateCurrentPage(event: any): void {
    const parsed = parseInt(event.target.value, 10);

    // if the input value, is not a number, we don't update the page
    if (!isNaN(parsed)) {
      if (parsed < 1) {
        this.page.current = 1;
      } else if (parsed > this.page.last) {
        this.page.current = this.page.last;
      } else {
        this.page.current = parsed;
      }
    }

    /**
     * Set the input's value to the new current page. This is needed because the code
     * above may have changed the value from what the user entered in.
     */
    this.currentPageInputRef.nativeElement.value = this.page.current;
  }
}
