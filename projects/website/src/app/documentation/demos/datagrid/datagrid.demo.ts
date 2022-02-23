/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ClarityDocComponent } from '../clarity-doc';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { multicast } from 'rxjs/operators';

@Component({
  selector: 'clr-datagrid-demo',
  templateUrl: './datagrid.demo.html',
  styleUrls: ['./datagrid.demo.main.scss'],
  host: {
    '[class.content-area]': 'true',
    '[class.dox-content-panel]': 'true',
  },
})
export class DatagridDemo extends ClarityDocComponent implements OnInit, OnDestroy {
  @ViewChild('demoView', { static: true })
  demoView;

  constructor(private route: ActivatedRoute, private router: Router) {
    super('datagrid');
  }

  private _subscriptions: Subscription[] = [];

  childRoutes: Route[];

  previous: boolean = false;
  next: boolean = false;

  previousRoute: Route;
  nextRoute: Route;

  parentRoute: string = '';
  apis = [
    {
      name: 'ClrDatagrid',
      selector: 'clr-datagrid',
      props: [
        {
          name: '[clrDgCLoading]',
          type: 'Boolean',
          defaultValue: 'false',
          description: 'Freezes the datagrid while data is loading',
        },
        {
          name: '(clrDgRefresh)',
          type: 'ClrDatagridStateInterface<T>',
          defaultValue: 'n/a',
          description: 'Output emitted whenever the data needs to be refreshed, based on user action or external ones',
        },
        {
          name: '[(clrDgSelected)]',
          type: 'T[]',
          defaultValue: '[]',
          description: 'An array of all selected items',
        },
        {
          name: '[(clrDgSingleSelected)]',
          type: 'T',
          defaultValue: 'undefined',
          description: 'Selected item in single-select mode.',
        },
        {
          name: '[clrDgSingleSelectionAriaLabel]',
          type: 'string',
          defaultValue: 'Single selection header',
          description: 'Change / over-ride the text for single selection column header',
        },
        {
          name: '[clrDgSingleActionableAriaLabel]',
          type: 'string',
          defaultValue: 'Single actionable header',
          description: 'Change / over-ride the text for single action column header',
        },
        {
          name: '[clrDetailExpandableAriaLabel]',
          type: 'string',
          defaultValue: 'Toggle more row content',
          description: 'Change / over-ride the text for expandable row button.',
        },
        {
          name: '[clrDgDisablePageFocus]',
          type: 'Boolean',
          defaultValue: 'false',
          description: 'Set true to enable focus on the datagrid table container element after page change.',
        },
        {
          name: '[clrDgPreserveSelection]',
          type: 'boolean',
          defaultValue: 'false',
          description:
            'Set to true to preserve selected rows between data changes. E.g - page changes or filter changes.',
        },
      ],
    },
    {
      name: 'ClrDatagridRow',
      selector: 'clr-dg-row',
      props: [
        {
          name: '[clrDgItem]',
          type: 'T',
          defaultValue: '',
          description: 'A model of the row, used for selection, filtering, sorting and pagination.',
        },
        {
          name: '[(clrDgSelected)]',
          type: 'boolean',
          defaultValue: 'false',
          description: 'Select or de-select an item.',
        },
        {
          name: '[clrDgSelectable]',
          type: 'boolean',
          defaultValue: 'true',
          description:
            "Set this to false if you don't want the row to be selectable (single or multicast select modes).",
        },
        {
          name: '[clrDgDetailOpenLabel]',
          type: 'string',
          defaultValue: 'Open',
          description: 'A string for the aria-label on the detail pane open button',
        },
        {
          name: '[clrDgDetailCloseLabel]',
          type: 'string',
          defaultValue: 'Close',
          description: 'A string for the aria-label on the detail pane open button',
        },
        {
          name: '[clrDgRowAriaLabel]',
          type: 'string',
          defaultValue: '',
          description: 'A model of the row, used for selection, filtering, sorting and pagination.',
        },
      ],
    },
    {
      name: 'ClrDatagridFilter',
      selector: 'clr-dg-filter',
      props: [
        {
          name: '[(clrDgFilterOpen)]',
          type: 'boolean',
          defaultValue: 'false',
          description: 'Input / Output that sets or emits the open state of a filter.',
        },
        {
          name: '[clrDgFilter]',
          type: 'ClrDatagridFilterInterface<T> | RegisteredFilter<T, ClrDatagridFilterInterface<T>>',
          defaultValue: 'n/a',
          description: 'Bind a custom filter to a column.',
        },
        {
          name: '',
          type: '',
          defaultValue: '',
          description: '',
        },
      ],
    },
    {
      name: 'ClrDatagridColumn',
      selector: 'clr-dg-column',
      props: [
        {
          name: '[clrDgColType]',
          type: 'string | number',
          defaultValue: 'string',
          description: 'Designates usage of the built in string or number filters for a column filter.',
        },
        {
          name: 'clrDgField',
          type: 'string',
          defaultValue: 'undefined',
          description: 'Set the model property that represents data in the column.',
        },
        {
          name: 'clrDgSortBy',
          type: 'ClrDatagridComparatorInterface<T> | string',
          defaultValue: 'undefined',
          description:
            'Bind to a custom sorting comparator or designate  astring to be used with the build in DatagridPropertyComparator.',
        },
        {
          name: '',
          type: '',
          defaultValue: '',
          description: '',
        },
      ],
    },
    {
      name: 'ClrDatagridHideableColumn',
      selector: '[clrDgHideableColumn]',
      props: [
        {
          name: '[clrDgHideableColumn]',
          type: '{hidden: boolean}',
          defaultValue: 'false',
          description: 'Designate a column to hide-able and pass its visibility state.',
        },
        {
          name: '[(clrDgHidden)]',
          type: 'boolean',
          defaultValue: 'false',
          description: 'Input/Output for the hidden state of a column.',
        },
      ],
    },
    {
      name: 'ClrIfDetail',
      selector: '[clrIfDetail]',
      props: [
        {
          name: '[(clrIfDetail)]',
          type: 'T',
          defaultValue: 'Row model <T>',
          description:
            'Use this to pass the row model context to the structural directive that toggles the detail pane for a row.',
        },
        {
          name: '',
          type: '',
          defaultValue: '',
          description: '',
        },
      ],
    },
    {
      name: 'ClrDatagridItems',
      selector: '[clrDgItems][clrDgItemsOf]',
      props: [
        {
          name: '[clrDgItemsOf]',
          type: 'T[]',
          defaultValue: 'undefined',
          description:
            'A structural directive / iterator that uses a list of item models for each of the visible rows in a datagrid.',
        },
        {
          name: '[clrDgItemsTrackBy]',
          type: 'TrackByFunction<T>',
          defaultValue: 'undefined',
          description: 'Use this to pass a TrackBy function for each row item.',
        },
      ],
    },
    {
      name: 'ClrDatagridPageSize',
      selector: 'clr-dg-page-size',
      props: [
        {
          name: '[clrPageSizeOptions]',
          type: 'number',
          defaultValue: '0',
          description: 'Set the size of items for a page.',
        },
        {
          name: '[clrDgItemsTrackBy]',
          type: 'TrackByFunction<T>',
          defaultValue: 'undefined',
          description: 'Use this to pass a TrackBy function for each row item.',
        },
      ],
    },
    {
      name: 'ClrDatagridPagination',
      selector: 'clr-dg-pagination',
      props: [
        {
          name: '[clrDgPageInputDisabled]',
          type: 'boolean',
          defaultValue: 'false',
          description: 'Disable user input for the text input element.',
        },
        {
          name: '[clrDgPageSize]',
          type: 'number',
          defaultValue: '0',
          description: 'Sets the number of row items per page.',
        },
        {
          name: '[clrDgTotalItems]',
          type: 'number',
          defaultValue: 'undefined',
          description: 'A value representing the total number of items in the full dataset.',
        },
        {
          name: '[clrDgLastPage]',
          type: 'number',
          defaultValue: 'undefined',
          description: 'Designate a specific page number as the last page for a dataset.',
        },
        {
          name: '[clrDgPage]',
          type: 'number',
          defaultValue: '1',
          description: 'Sets the current page for a paginated dataset.',
        },
      ],
    },
  ];

  ngOnInit() {
    const tempArr: any[] = this.route.routeConfig.children;
    if (tempArr.length > 1) {
      this.childRoutes = tempArr.slice(1);
    }
    this._subscriptions.push(
      this.router.events.subscribe((change: any) => {
        if (change instanceof NavigationEnd) {
          if (change.url.includes('datagrid')) {
            this.initializePagination(change.url);
          }
        }
      })
    );
    this.initializePagination('/documentation/datagrid/' + this.route.children[0].routeConfig.path);
  }

  initializePagination(url: string): void {
    const tempArr: string[] = url.split('/');
    this.parentRoute = url.substr(0, url.indexOf('datagrid')) + 'datagrid/';
    if (tempArr.length > 1) {
      const subRoute: string = tempArr[tempArr.length - 1];
      if (subRoute === 'datagrid') {
        this.nextRoute = this.childRoutes[1];
        this.next = true;
      } else {
        for (let i = 0; i < this.childRoutes.length; i++) {
          if (this.childRoutes[i].path === subRoute) {
            if (i === 0) {
              this.previous = false;
            } else {
              this.previousRoute = this.childRoutes[i - 1];
              this.previous = true;
            }

            if (i < this.childRoutes.length - 1) {
              this.nextRoute = this.childRoutes[i + 1];
              this.next = true;
            } else {
              this.next = false;
            }
            break;
          }
        }
      }
    }
  }

  scrollToDemoView() {
    if (this.demoView) {
      this.demoView.nativeElement.scrollIntoView();
    }
  }

  moveNext() {
    if (this.nextRoute) {
      const tempPath = this.parentRoute + this.nextRoute.path;
      this.router.navigate(['./' + tempPath]);
      this.scrollToDemoView();
    }
  }

  movePrevious() {
    if (this.previousRoute) {
      const tempPath = this.parentRoute + this.previousRoute.path;
      this.router.navigate([tempPath]);
      this.scrollToDemoView();
    }
  }

  ngOnDestroy() {
    this._subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
