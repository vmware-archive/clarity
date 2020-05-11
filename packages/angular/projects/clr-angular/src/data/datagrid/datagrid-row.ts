/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';

import { IfExpandService } from '../../utils/conditional/if-expanded.service';
import { HostWrapper } from '../../utils/host-wrapping/host-wrapper';
import { LoadingListener } from '../../utils/loading/loading-listener';

import { ClrDatagridCell } from './datagrid-cell';
import { DatagridDisplayMode } from './enums/display-mode.enum';
import { DisplayModeService } from './providers/display-mode.service';
import { ExpandableRowsCount } from './providers/global-expandable-rows';
import { RowActionService } from './providers/row-action-service';
import { Selection } from './providers/selection';
import { WrappedRow } from './wrapped-row';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { SelectionType } from './enums/selection-type';
import { DatagridIfExpandService } from './datagrid-if-expanded.service';
import { ClrExpandableAnimation } from '../../utils/animations/expandable-animation/expandable-animation';
import { DetailService } from './providers/detail.service';

let nbRow = 0;

@Component({
  selector: 'clr-dg-row',
  templateUrl: './datagrid-row.html',
  host: {
    '[class.datagrid-row]': 'true',
    '[class.datagrid-selected]': 'selected',
    '[attr.aria-owns]': 'id',
    role: 'rowgroup',
  },
  providers: [
    DatagridIfExpandService,
    { provide: IfExpandService, useExisting: DatagridIfExpandService },
    { provide: LoadingListener, useExisting: DatagridIfExpandService },
  ],
})
export class ClrDatagridRow<T = any> implements AfterContentInit, AfterViewInit {
  public id: string;
  public radioId: string;
  public checkboxId: string;
  public expandableId: string;

  /* reference to the enum so that template can access */
  public SELECTION_TYPE = SelectionType;

  @ViewChild(ClrExpandableAnimation) expandAnimation: ClrExpandableAnimation;

  /**
   * Model of the row, to use for selection
   */
  @Input('clrDgItem') item: T;

  public replaced: boolean;

  public expandAnimationTrigger = false;

  constructor(
    public selection: Selection<T>,
    public rowActionService: RowActionService,
    public globalExpandable: ExpandableRowsCount,
    public expand: DatagridIfExpandService,
    public detailService: DetailService,
    private displayMode: DisplayModeService,
    private vcr: ViewContainerRef,
    private renderer: Renderer2,
    private el: ElementRef,
    public commonStrings: ClrCommonStringsService
  ) {
    nbRow++;
    this.id = 'clr-dg-row' + nbRow;
    this.radioId = 'clr-dg-row-rd' + nbRow;
    this.checkboxId = 'clr-dg-row-cb' + nbRow;
    this.expandableId = expand.expandableId;

    this.subscriptions.push(
      combineLatest(this.expand.replace, this.expand.expandChange).subscribe(
        ([expandReplaceValue, expandChangeValue]) => {
          if (expandReplaceValue && expandChangeValue) {
            // replaced and expanding
            this.replaced = true;
            this.renderer.addClass(this.el.nativeElement, 'datagrid-row-replaced');
          } else {
            this.replaced = false;
            // Handles these cases: not replaced and collapsing & replaced and
            // collapsing and not replaced and expanding.
            this.renderer.removeClass(this.el.nativeElement, 'datagrid-row-replaced');
          }
        }
      )
    );
  }

  private _selected = false;
  /**
   * Indicates if the row is selected
   */
  public get selected() {
    if (this.selection.selectionType === SelectionType.None) {
      return this._selected;
    } else {
      return this.selection.isSelected(this.item);
    }
  }

  @Input('clrDgSelected')
  public set selected(value: boolean) {
    if (this.selection.selectionType === SelectionType.None) {
      this._selected = value;
    } else {
      this.selection.setSelected(this.item, value);
    }
  }

  // By default every item is selectable
  @Input('clrDgSelectable')
  public set clrDgSelectable(value: boolean) {
    this.selection.lockItem(this.item, value === false);
  }

  public get clrDgSelectable() {
    return !this.selection.isLocked(this.item);
  }

  @Output('clrDgSelectedChange') selectedChanged = new EventEmitter<boolean>(false);

  public toggle(selected = !this.selected) {
    if (selected !== this.selected) {
      this.selected = selected;
      this.selectedChanged.emit(selected);
    }
  }

  public get expanded() {
    return this.expand.expanded;
  }

  @Input('clrDgExpanded')
  public set expanded(value: boolean) {
    this.expand.expanded = value;
  }

  @Output('clrDgExpandedChange') expandedChange = new EventEmitter<boolean>(false);

  public toggleExpand() {
    if (this.expand.expandable) {
      this.expandAnimation.updateStartHeight();
      this.expanded = !this.expanded;
      this.expandedChange.emit(this.expanded);
    }
  }

  @ViewChild('detailButton') detailButton: HTMLButtonElement;

  private _detailOpenLabel = '';
  @Input()
  set clrDgDetailOpenLabel(label: string) {
    this._detailOpenLabel = label;
  }
  get clrDgDetailOpenLabel(): string {
    return this._detailOpenLabel ? this._detailOpenLabel : this.commonStrings.keys.open;
  }
  private _detailCloseLabel = '';
  @Input()
  set clrDgDetailCloseLabel(label: string) {
    this._detailCloseLabel = label;
  }
  get clrDgDetailCloseLabel(): string {
    return this._detailCloseLabel ? this._detailCloseLabel : this.commonStrings.keys.close;
  }

  /*****
   * property dgCells
   *
   * @description
   * A Query List of the ClrDatagrid cells in this row.
   *
   */
  @ContentChildren(ClrDatagridCell) dgCells: QueryList<ClrDatagridCell>;

  ngAfterContentInit() {
    this.dgCells.changes.subscribe(() => {
      this.dgCells.forEach(cell => {
        if (!cell._view.destroyed) {
          this._scrollableCells.insert(cell._view);
        }
      });
    });
  }

  ngAfterViewInit() {
    this.subscriptions.push(
      this.displayMode.view.subscribe(viewChange => {
        // Listen for view changes and move cells around depending on the current displayType
        // remove cell views from display view
        for (let i = this._scrollableCells.length; i > 0; i--) {
          this._scrollableCells.detach();
        }
        // remove cell views from calculated view
        for (let i = this._calculatedCells.length; i > 0; i--) {
          this._calculatedCells.detach();
        }
        if (viewChange === DatagridDisplayMode.CALCULATE) {
          this.displayCells = false;
          this.dgCells.forEach(cell => {
            if (!cell._view.destroyed) {
              this._calculatedCells.insert(cell._view);
            }
          });
        } else {
          this.displayCells = true;
          this.dgCells.forEach(cell => {
            if (!cell._view.destroyed) {
              this._scrollableCells.insert(cell._view);
            }
          });
        }
      }),
      this.expand.animate.subscribe(() => {
        this.expandAnimationTrigger = !this.expandAnimationTrigger;
      })
    );
  }

  private subscriptions: Subscription[] = [];

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  public displayCells = false;

  @ViewChild('stickyCells', { read: ViewContainerRef })
  _stickyCells: ViewContainerRef;
  @ViewChild('scrollableCells', { read: ViewContainerRef })
  _scrollableCells: ViewContainerRef;
  @ViewChild('calculatedCells', { read: ViewContainerRef })
  _calculatedCells: ViewContainerRef;

  private wrappedInjector: Injector;

  ngOnInit() {
    this.wrappedInjector = new HostWrapper(WrappedRow, this.vcr);
  }

  public get _view() {
    return this.wrappedInjector.get(WrappedRow, this.vcr).rowView;
  }
}
