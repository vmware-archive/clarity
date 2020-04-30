/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { ClrDatagridFilter } from '../../datagrid-filter';
import { ClrDatagridNumericFilterInterface } from '../../interfaces/numeric-filter.interface';
import { CustomFilter } from '../../providers/custom-filter';
import { FiltersProvider, RegisteredFilter } from '../../providers/filters';
import { DomAdapter } from '../../../../utils/dom-adapter/dom-adapter';
import { DatagridFilterRegistrar } from '../../utils/datagrid-filter-registrar';
import { DatagridNumericFilterImpl } from './datagrid-numeric-filter-impl';
import { ClrCommonStringsService } from '../../../../utils/i18n/common-strings.service';
import { ClrPopoverToggleService } from '../../../../utils/popover/providers/popover-toggle.service';

@Component({
  selector: 'clr-dg-numeric-filter',
  providers: [{ provide: CustomFilter, useExisting: DatagridNumericFilter }],
  template: `
    <clr-dg-filter [clrDgFilter]="registered" [(clrDgFilterOpen)]="open">
      <input
        class="datagrid-numeric-filter-input"
        #input_low
        type="number"
        name="low"
        [(ngModel)]="low"
        [placeholder]="commonStrings.keys.minValue"
        [attr.aria-label]="commonStrings.keys.minValue"
      />
      <span class="datagrid-filter-input-spacer"></span>
      <input
        class="datagrid-numeric-filter-input"
        #input_high
        type="number"
        name="high"
        [(ngModel)]="high"
        [placeholder]="commonStrings.keys.maxValue"
        [attr.aria-label]="commonStrings.keys.maxValue"
      />
    </clr-dg-filter>
  `,
})
export class DatagridNumericFilter<T = any> extends DatagridFilterRegistrar<T, DatagridNumericFilterImpl<T>>
  implements CustomFilter, AfterViewInit {
  constructor(
    filters: FiltersProvider<T>,
    private domAdapter: DomAdapter,
    public commonStrings: ClrCommonStringsService,
    private popoverToggleService: ClrPopoverToggleService
  ) {
    super(filters);
  }

  private subscriptions: Subscription[] = [];

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  /**
   * Customizable filter logic based on high and low values
   */
  @Input('clrDgNumericFilter')
  set customNumericFilter(
    value: ClrDatagridNumericFilterInterface<T> | RegisteredFilter<T, DatagridNumericFilterImpl<T>>
  ) {
    if (value instanceof RegisteredFilter) {
      this.setFilter(value);
    } else {
      this.setFilter(new DatagridNumericFilterImpl(value));
    }
    if (this.initFilterValues) {
      this.value = this.initFilterValues;
      // This initFilterValues should be used only once after the filter registration
      // So deleting this property value to prevent it from being used again
      // if this customStringFilter property is set again
      delete this.initFilterValues;
    }
  }

  /**
   * Indicates if the filter dropdown is open
   */
  public open = false;

  /**
   * We need the actual input element to automatically focus on it
   */
  @ViewChild('input_low') public input: ElementRef;

  /**
   * We grab the ClrDatagridFilter we wrap to register this StringFilter to it.
   */
  @ViewChild(ClrDatagridFilter) public filterContainer: ClrDatagridFilter<T>;
  ngAfterViewInit() {
    this.subscriptions.push(
      this.popoverToggleService.openChange.subscribe(openChange => {
        this.open = openChange;
        // The timeout in used because when this executes, the input isn't displayed.
        setTimeout(() => {
          this.domAdapter.focus(this.input.nativeElement);
        });
      })
    );
  }

  private initFilterValues: [number, number];
  /**
   * Common setter for the input values
   */
  public get value() {
    return [this.filter.low, this.filter.high];
  }

  @Input('clrFilterValue')
  public set value(values: [number, number]) {
    if (this.filter) {
      if (values && (values[0] !== this.filter.low || values[1] !== this.filter.high)) {
        if (typeof values[0] === 'number') {
          this.filter.low = values[0];
        } else {
          this.filter.low = null;
        }
        if (typeof values[1] === 'number') {
          this.filter.high = values[1];
        } else {
          this.filter.high = null;
        }
        this.filterValueChange.emit(values);
      }
    } else {
      this.initFilterValues = values;
    }
  }

  public get low() {
    if (typeof this.filter.low === 'number' && isFinite(this.filter.low)) {
      return this.filter.low;
    } else {
      // There's not a low limit
      return null;
    }
  }

  public set low(low: number | string) {
    if (typeof low === 'number' && low !== this.filter.low) {
      this.filter.low = low;
      this.filterValueChange.emit([this.filter.low, this.filter.high]);
    } else if (typeof low !== 'number') {
      this.filter.low = null;
      this.filterValueChange.emit([this.filter.low, this.filter.high]);
    }
  }

  public get high() {
    if (typeof this.filter.high === 'number' && isFinite(this.filter.high)) {
      return this.filter.high;
    } else {
      // There's not a high limit
      return null;
    }
  }

  public set high(high: number | string) {
    if (typeof high === 'number' && high !== this.filter.high) {
      this.filter.high = high;
      this.filterValueChange.emit([this.filter.low, this.filter.high]);
    } else if (typeof high !== 'number') {
      this.filter.high = null;
      this.filterValueChange.emit([this.filter.low, this.filter.high]);
    }
  }

  @Output('clrFilterValueChange') filterValueChange = new EventEmitter();
}
