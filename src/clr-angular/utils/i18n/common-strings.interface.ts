/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';

import { COMMON_STRINGS_PROVIDER } from './common-strings.service';

@Injectable({
  providedIn: 'root',
  ...COMMON_STRINGS_PROVIDER,
})
export abstract class ClrCommonStrings {
  /**
   * Open button
   */
  open?: string;
  /**
   * Close button
   */
  close?: string;
  /**
   * Show button
   */
  show?: string;
  /**
   * Hide button
   */
  hide?: string;
  /**
   * Expandable components: expand caret
   */
  expand?: string;
  /**
   * Expandable components: collapse caret
   */
  collapse?: string;
  /**
   * Overflow menus: ellipsis button
   */
  more?: string;
  /**
   * Selectable components: checkbox or radio
   */
  select?: string;
  /**
   * Selectable components: checkbox to select all
   */
  selectAll?: string;
  /**
   * Pagination: previous button
   */
  previous?: string;
  /**
   * Pagination: next button
   */
  next?: string;
  /**
   * Pagination: go to current
   */
  current?: string;
  /**
   * Alert levels: info
   */
  info?: string;
  /**
   * Alert levels: success
   */
  success?: string;
  /**
   * Alert levels: warning
   */
  warning?: string;
  /**
   * Alert levels: danger
   */
  danger?: string;
  /**
   * Datagrid: row actions
   */
  rowActions?: string;
  /**
   * Datagrid: pick columns
   */
  pickColumns?: string;
  /**
   * Datagrid: show columns
   */
  showColumns?: string;
  /**
   * Datagrid: sort of columns
   */
  sortColumn?: string;
  /**
   * Datagrid: first page
   */
  firstPage?: string;
  /**
   * Datagrid: last page
   */
  lastPage?: string;
  /**
   * Datagrid: next page
   */
  nextPage?: string;
  /**
   * Datagrid: previous page
   */
  previousPage?: string;
  /**
   * Datagrid: previous page
   */
  currentPage?: string;
  /**
   * Datagird: total pages
   */
  totalPages?: string;
  /*
   * Datagrid numeric filter: min
   */
  minValue?: string;
  /**
   * Datagrid numeric filter: max
   */
  maxValue?: string;
  /**
   * Modal start of content
   */
  modalContentStart?: string;
  /**
   * Modal end of content
   */
  modalContentEnd?: string;
  /**
   * Datagrid Show columns menu description
   */
  showColumnsMenuDescription?: string;
  /**
   * Datagrid Show columns / All columns selected confirmation
   */
  allColumnsSelected?: string;
  /**
   * Signpost Toggle Button
   */
  signpostToggle?: string;
  /**
   * Signpost Close Button
   * (used inside signpost content components)
   */
  signpostClose?: string;
  /*
   * Loaders/Spinners
   */
  loading?: string;
}
