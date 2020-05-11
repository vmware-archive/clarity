/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
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
    { key: 'firstPage', role: 'Datagrid: pagination first page button text' },
    { key: 'lastPage', role: 'Datagrid: pagination last page button text' },
    { key: 'nextPage', role: 'Datagrid: pagination next page button text' },
    { key: 'previousPage', role: 'Datagrid: pagination previous page button text' },
    { key: 'currentPage', role: 'Datagrid: pagination current page button text' },
    { key: 'totalPages', role: 'Datagrid: pagination total pages button text' },
    { key: 'minValue', role: 'Datagrid: minimum value (numeric filters)' },
    { key: 'maxValue', role: 'Datagrid: maximum value (numeric filters)' },
    {
      key: 'showColumnsMenuDescription',
      role: 'Datagrid: screen reader only description of the Show/Hide columns menu',
    },
    {
      key: 'allColumnsSelected',
      role: 'Datagrid: screen reader only confirmation that all columns were selected',
    },
    { key: 'loading', role: 'Display loading text (Default: Loading)' },
    { key: 'datepickerToggle', role: 'The open/close button for a datepicker' },
    {
      key: 'datepickerPreviousMonth',
      role: 'The button that navigates daypicker to a monthpicker',
    },
    {
      key: 'datepickerCurrentMonth',
      role: 'The button that navigates a daypicker to current month',
    },
    { key: 'allColumnsSelected', role: 'Datagrid: screen reader only confirmation that all columns were selected' },
    { key: 'loading', role: 'Display loading text (Default: Loading)' },
    { key: 'singleSelectionAriaLabel', role: 'Datagrid: aria label for header single selection header column' },
    { key: 'singleActionableAriaLabel', role: 'Datagrid: aria label for row action header column' },
    { key: 'detailExpandableAriaLabel', role: 'Datagrid: aria label for expandable row toggle button' },
    { key: 'alertCloseButtonAriaLabel', role: 'Alert: aria label for closing alert' },
    { key: 'datepickerOpen', role: 'The open/close button for a datepicker' },
    { key: 'datepickerPreviousMonth', role: 'The button that navigates daypicker to a monthpicker' },
    { key: 'datepickerCurrentMonth', role: 'The button that navigates a daypicker to current month' },
    {
      key: 'datepickerNextMonth',
      role: 'The button that navigates a daypicker to the next month',
    },
    {
      key: 'datepickerPreviousDecade',
      role: 'The button that navigates a yearpicker to previous decade',
    },
    {
      key: 'datepickerNextDecade',
      role: 'The button that navigates a yearpicker to next decade',
    },
    {
      key: 'datepickerCurrentDecade',
      role: 'The button that navigates the yearpicker to current decade',
    },
    {
      key: 'datepickerSelectMonthText',
      role:
        'Populates aria-label and title for monthpicker button. Is concatenated with the (localized) value for calendarMonth as well as this value',
    },
    {
      key: 'datepickerSelectYearText',
      role:
        'Populates aria-label and title for yearpicker button. Is concatenated with the (localized) value for calendarYear as well as this value',
    },
    {
      key: 'daypickerSRCurrentMonthPhrase',
      role:
        'Used in an aria-live region. Makes up one part of a phrase that is read to screen reader users when the month changes.',
    },
    {
      key: 'daypickerSRCurrentYearPhrase',
      role:
        'Used in an aria-live region. Makes up one part of a phrase that is read to screen reader users when the year changes.',
    },
    {
      key: 'daypickerSRCurrentDecadePhrase',
      role:
        'Used in an aria-live region. Makes up one part of a phrase that is read to screen reader users when the decade changes.',
    },
    { key: 'stackViewChanged', role: 'Stack View: describes a particular stack block has changed' },
    {
      key: 'verticalNavToggle',
      role:
        'Applies expanded/collapsed state to an aria-expanded attribute for screen readers when vertical nav button  expands/collapses the entire menu',
    },
    {
      key: 'verticalNavGroupToggle',
      role:
        'Applies the expanded/collapsed state to an aria-expanded attribute for screen readers whenever vertical nav group buttons are expanded/collapsed',
    },
    {
      key: 'signpostToggle',
      role: 'Applies the aria-label value to the signpost trigger.',
    },
    { key: 'timelineStepNotStarted', role: 'Used in the aria-label for the not started step icon' },
    { key: 'timelineStepCurrent', role: 'Used in the aria-label for the current step icon' },
    { key: 'timelineStepSuccess', role: 'Used in the aria-label for the success step icon' },
    { key: 'timelineStepError', role: 'Used in the aria-label for the error step icon' },
    { key: 'timelineStepProcessing', role: 'Used in the aria-label for the processing step icon' },
    {
      key: 'dategridExpandableBeginningOf',
      role: 'Beginning of expandable row',
    },
    {
      key: 'dategridExpandableEndOf',
      role: 'End of expandable row',
    },
    {
      key: 'dategridExpandableRowContent',
      role: 'Describe expandable content region',
    },
    {
      key: 'dategridExpandableRowsHelperText',
      role: 'Provide helper text related to expandable rows Accessibility limitation inside the Datagrid',
    },
  ];
}
