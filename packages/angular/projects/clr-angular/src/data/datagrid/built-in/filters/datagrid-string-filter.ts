/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClrDatagridFilter } from '../../datagrid-filter';
import { ClrDatagridStringFilterInterface } from '../../interfaces/string-filter.interface';
import { CustomFilter } from '../../providers/custom-filter';
import { FiltersProvider, RegisteredFilter } from '../../providers/filters';
import { DomAdapter } from '../../../../utils/dom-adapter/dom-adapter';
import { DatagridFilterRegistrar } from '../../utils/datagrid-filter-registrar';

import { DatagridStringFilterImpl } from './datagrid-string-filter-impl';
import { ClrPopoverToggleService } from '../../../../utils/popover/providers/popover-toggle.service';

@Component({
  selector: 'clr-dg-string-filter',
  providers: [{ provide: CustomFilter, useExisting: DatagridStringFilter }],
  template: `
    <clr-dg-filter [clrDgFilter]="registered" [(clrDgFilterOpen)]="open">
      <input #input type="text" name="search" [(ngModel)]="value" class="clr-input" />
    </clr-dg-filter>
  `,
})
export class DatagridStringFilter<T = any> extends DatagridFilterRegistrar<T, DatagridStringFilterImpl<T>>
  implements CustomFilter, AfterViewInit, OnDestroy {
  private subs: Subscription[] = [];
  constructor(
    filters: FiltersProvider<T>,
    private domAdapter: DomAdapter,
    private smartToggleService: ClrPopoverToggleService
  ) {
    super(filters);
  }

  /**
   * Customizable filter logic based on a search text
   */
  @Input('clrDgStringFilter')
  set customStringFilter(
    value: ClrDatagridStringFilterInterface<T> | RegisteredFilter<T, DatagridStringFilterImpl<T>>
  ) {
    if (value instanceof RegisteredFilter) {
      this.setFilter(value);
    } else {
      this.setFilter(new DatagridStringFilterImpl(value));
    }
    if (this.initFilterValue) {
      this.value = this.initFilterValue;
      // This initFilterValue should be used only once after the filter registration
      // So deleting this property value to prevent it from being used again
      // if this customStringFilter property is set again
      delete this.initFilterValue;
    }
  }

  /**
   * Indicates if the filter dropdown is open
   */
  public open = false;

  /**
   * We need the actual input element to automatically focus on it
   */
  @ViewChild('input') public input: ElementRef;

  /**
   * We grab the ClrDatagridFilter we wrap to register this StringFilter to it.
   */
  @ViewChild(ClrDatagridFilter) public filterContainer: ClrDatagridFilter<T>;
  ngAfterViewInit() {
    this.subs.push(
      this.smartToggleService.openChange.subscribe(openChange => {
        this.open = openChange;
        // The timeout in used because when this executes, the input isn't displayed.
        setTimeout(() => {
          this.domAdapter.focus(this.input.nativeElement);
        });
      })
    );
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.subs.forEach(sub => sub.unsubscribe());
  }

  private initFilterValue: string;

  /**
   * Common setter for the input value
   */
  public get value() {
    return this.filter.value;
  }
  @Input('clrFilterValue')
  public set value(value: string) {
    if (this.filter) {
      if (!value) {
        value = '';
      }
      if (value !== this.filter.value) {
        this.filter.value = value;
        this.filterValueChange.emit(value);
      }
    } else {
      this.initFilterValue = value;
    }
  }

  @Output('clrFilterValueChange') filterValueChange = new EventEmitter();
}
