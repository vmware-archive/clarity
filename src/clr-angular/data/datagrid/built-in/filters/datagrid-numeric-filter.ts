/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { ClrDatagridFilter } from '../../datagrid-filter';
import { ClrDatagridNumericFilterInterface } from '../../interfaces/numeric-filter.interface';
import { CustomFilter } from '../../providers/custom-filter';
import { FiltersProvider, RegisteredFilter } from '../../providers/filters';
import { DomAdapter } from '../../../../utils/dom-adapter/dom-adapter';
import { DatagridFilterRegistrar } from '../../utils/datagrid-filter-registrar';
import { DatagridNumericFilterImpl } from './datagrid-numeric-filter-impl';

@Component({
  selector: 'clr-dg-numeric-filter',
  providers: [{ provide: CustomFilter, useExisting: DatagridNumericFilter }],
  // TODO: Fancy up this template
  template: `
        <clr-dg-filter [clrDgFilter]="registered" [(clrDgFilterOpen)]="open">
            <!--
                Even though this *ngIf looks useless because the filter container already has one,
                it prevents NgControlStatus and other directives automatically added by Angular
                on inputs with NgModel from freaking out because of their host binding changing
                mid-change detection when the input is destroyed.
            -->
            <!-- TODO: Make this look better -->
            <input #input type="number" name="low" [(ngModel)]="low" *ngIf="open"
                (keyup.enter)="close()" (keyup.escape)="close()"/>
                -
                <input #input type="number" name="high" [(ngModel)]="high" *ngIf="open"
                    (keyup.enter)="close()" (keyup.escape)="close()"/>
        </clr-dg-filter>
    `,
})
export class DatagridNumericFilter<T = any> extends DatagridFilterRegistrar<T, DatagridNumericFilterImpl<T>>
  implements CustomFilter, AfterViewInit {
  constructor(filters: FiltersProvider<T>, private domAdapter: DomAdapter) {
    super(filters);
  }

  /**
   * Customizable filter logic based on high and low values
   */
  @Input('clrDgNumericFilter')
  set customStringFilter(
    value: ClrDatagridNumericFilterInterface<T> | RegisteredFilter<T, DatagridNumericFilterImpl<T>>
  ) {
    if (value instanceof RegisteredFilter) {
      // TODO: What is this?
      this.setFilter(value);
    } else {
      this.setFilter(new DatagridNumericFilterImpl(value));
    }
  }

  /**
   * Indicates if the filter dropdown is open
   */
  public open: boolean = false;

  /**
   * We need the actual input element to automatically focus on it
   */
  @ViewChild('low') public input: ElementRef;

  /**
   * We grab the ClrDatagridFilter we wrap to register this StringFilter to it.
   */
  @ViewChild(ClrDatagridFilter) public filterContainer: ClrDatagridFilter<T>;
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
   * Common setter for the input values
   */
  public get values() {
    return [this.filter.low, this.filter.high];
  }
  @Input('clrFilterValue')
  public set values(values: [number, number]) {
    if (!this.filter) {
      return;
    }
    if (values[0] !== this.filter.low || values[1] !== this.filter.high) {
      this.filter.low = values[0];
      this.filter.high = values[1];
      this.filterValueChange.emit(values);
    }
  }

  @Output('clrFilterValueChange') filterValueChange = new EventEmitter();

  public close() {
    this.open = false;
  }
}
