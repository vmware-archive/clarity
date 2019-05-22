/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClarityDocComponent } from '../clarity-doc';

@Component({
  templateUrl: './i18n.demo.html',
  host: {
    '[class.content-area]': 'true',
    '[class.dox-content-panel]': 'true',
  },
})
export class I18nDemo extends ClarityDocComponent {
  newLayout = true;
  constructor() {
    super('internationalization');
  }

  // List of the string keys and what they mean
  strings = [
    { key: 'open', role: 'Open button text' },
    { key: 'close', role: 'Close button text' },
    { key: 'show', role: 'Show button text' },
    { key: 'hide', role: 'Hide button text' },
    { key: 'expand', role: 'Expandable components: expand caret' },
    { key: 'collapse', role: 'Expandable components: collapse caret' },
    { key: 'more', role: 'Overflow menus: ellipsis button' },
    { key: 'select', role: 'Selectable components: checkbox or radio' },
    { key: 'selectAll', role: 'Selectable components: checkbox to select all' },
    { key: 'previous', role: 'Pagination: previous button' },
    { key: 'next', role: 'Pagination: next button' },
    { key: 'current', role: 'Pagination: go to current' },
    { key: 'info', role: 'Alert levels: info' },
    { key: 'success', role: 'Alert levels: success' },
    { key: 'warning', role: 'Alert levels: warning' },
    { key: 'danger', role: 'Alert levels: danger' },
    { key: 'rowActions', role: 'Datagrid: row actions icon alt text' },
    { key: 'pickColumns', role: 'Datagrid: show and hide columns icon alt text' },
    { key: 'showColumns', role: 'Datagrid: show columns title' },
    { key: 'sortColumn', role: 'Datagrid: sort columns title' },
    { key: 'minValue', role: 'Datagrid: minimum value (numeric filters)' },
    { key: 'maxValue', role: 'Datagrid: maximum value (numeric filters' },
  ];
}
