/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  Component,
  EventEmitter,
  Input,
  Output,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
  ElementRef,
} from '@angular/core';

import { ClrDatagridFilterInterface } from './interfaces/filter.interface';
import { CustomFilter } from './providers/custom-filter';
import { FiltersProvider, RegisteredFilter } from './providers/filters';
import { DatagridFilterRegistrar } from './utils/datagrid-filter-registrar';
import { ClrPopoverPosition } from '../../utils/popover/interfaces/popover-position.interface';
import { ClrAxis } from '../../utils/popover/enums/axis.enum';
import { ClrSide } from '../../utils/popover/enums/side.enum';
import { ClrAlignment } from '../../utils/popover/enums/alignment.enum';
import { UNIQUE_ID, UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { Subscription } from 'rxjs';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { isPlatformBrowser } from '@angular/common';

/**
 * Custom filter that can be added in any column to override the default object property string filter.
 * The reason this is not just an input on DatagridColumn is because we need the filter's template to be projected,
 * since it can be anything (not just a text input).
 */
@Component({
  selector: 'clr-dg-filter',
  // We register this component as a CustomFilter, for the parent column to detect it.
  providers: [{ provide: CustomFilter, useExisting: ClrDatagridFilter }, UNIQUE_ID_PROVIDER],
  template: `
    <button
      class="datagrid-filter-toggle"
      type="button"
      #anchor
      [attr.aria-label]="commonStrings.keys.datagridFilterAriaLabel"
      [attr.aria-expanded]="ariaExpanded"
      [attr.aria-controls]="popoverId"
      clrPopoverAnchor
      clrPopoverOpenCloseButton
      [class.datagrid-filter-open]="open"
      [class.datagrid-filtered]="active"
    >
      <clr-icon [attr.shape]="active ? 'filter-grid-circle' : 'filter-grid'" class="is-solid"></clr-icon>
    </button>

    <div
      class="datagrid-filter"
      [id]="popoverId"
      clrFocusTrap
      *clrPopoverContent="open; at: smartPosition; outsideClickToClose: true; scrollToClose: true"
    >
      <div class="datagrid-filter-close-wrapper">
        <button type="button" class="close" clrPopoverCloseButton>
          <clr-icon shape="close" [attr.title]="commonStrings.keys.close"></clr-icon>
        </button>
      </div>

      <ng-content></ng-content>
    </div>
  `,
})
export class ClrDatagridFilter<T = any> extends DatagridFilterRegistrar<T, ClrDatagridFilterInterface<T>>
  implements CustomFilter, OnDestroy {
  private subs: Subscription[] = [];
  public ariaExpanded = false;

  constructor(
    _filters: FiltersProvider<T>,
    public commonStrings: ClrCommonStringsService,
    private smartToggleService: ClrPopoverToggleService,
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(UNIQUE_ID) public popoverId: string
  ) {
    super(_filters);
    this.subs.push(
      smartToggleService.openChange.subscribe(change => {
        this.open = change;
        this.ariaExpanded = change;
      })
    );
  }

  @ViewChild('anchor', { read: ElementRef })
  anchor: ElementRef;

  // Smart Popover
  public smartPosition: ClrPopoverPosition = {
    axis: ClrAxis.VERTICAL,
    side: ClrSide.AFTER,
    anchor: ClrAlignment.END,
    content: ClrAlignment.END,
  };

  private _open = false;
  public get open() {
    return this._open;
  }

  @Input('clrDgFilterOpen')
  public set open(open: boolean) {
    open = !!open;
    if (this.open !== open) {
      this.smartToggleService.open = open;
      this.openChange.emit(open);
      if (!open && isPlatformBrowser(this.platformId)) {
        this.anchor.nativeElement.focus();
      }
      // keep track of the state
      this._open = open;
    }
  }

  @Output('clrDgFilterOpenChange') public openChange = new EventEmitter<boolean>(false);

  @Input('clrDgFilter')
  public set customFilter(filter: ClrDatagridFilterInterface<T> | RegisteredFilter<T, ClrDatagridFilterInterface<T>>) {
    this.setFilter(filter);
  }

  /**
   * Indicates if the filter is currently active
   */
  public get active() {
    return !!this.filter && this.filter.isActive();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
