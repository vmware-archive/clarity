/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClrForm } from './forms/common/form';
import { ClrDatagrid } from './data/datagrid/datagrid';
import { ClrDatagridColumnToggle } from './data/datagrid/datagrid-column-toggle';
import { ClrDatagridColumnToggleTitle } from './data/datagrid/datagrid-column-toggle-title';
import { ClrDatagridColumnToggleButton } from './data/datagrid/datagrid-column-toggle-button';
import { ClrWizard } from './wizard/wizard';

describe('Deprecations', () => {
  // When we deprecate some code, we should write a test to verify it is still in the bundle
  // and keep track of when it was deprecated, and when we plan to remove it.

  describe('2.0', () => {
    it('should deprecate the column toggle title and button components', () => {
      expect(ClrDatagridColumnToggle).toBeTruthy();
      expect(ClrDatagridColumnToggleTitle).toBeTruthy();
      expect(ClrDatagridColumnToggleButton).toBeTruthy();
    });
    it('should deprecate but still support clrDgRowSelection', () => {
      const propTest = Object.getOwnPropertyDescriptor(ClrDatagrid.prototype, 'rowSelectionMode');
      expect(propTest.set).toBeDefined();
    });
    it('should handle ClrForm.markAsDirty as ClrForm.markAsTouched', () => {
      spyOn(ClrForm.prototype, 'markAsTouched');
      ClrForm.prototype.markAsDirty(true);
      expect(ClrForm.prototype.markAsTouched).toHaveBeenCalled();
    });
    it('should replace $clr-default prefixed SASS variables with $clr-global prefixed variables');
    it('should no longer have the $clr-font-weights typography SASS map');
    it('should replace $clr-app-font-color-primary SASS variable with $clr-global-font-color');
    it('should replace $clr-button prefixed SASS variables with $clr-btn prefixed variables');
    it(
      'should replace old naming convention that tied SASS color variable names (like $clr-blue) to specific colors with utility-based names like $clr-color-action-400'
    );
    it('should replace $clr-tooltip-font-color SASS variable with $clr-tooltip-color');
    it('should replace $clr-signpost-innerBlock SASS variable with $clr-signpost-content-bg-color');
    it('should replace $clr-signpost-outerBorder SASS variable with $clr-signpost-content-border-color');
    it('should replace $clr-dropdown-item-text-color SASS variable with $clr-dropdown-item-color');
    it('should replace $clr-header-textColor SASS variable with $clr-header-font-color');
    it('should replace $card-text-fontsize SASS variable with $clr-card-text-font-size');
    it('should replace $clr-table-bordercolor SASS variable with $clr-table-border-color');
  });
  describe('3.0', () => {
    it('should deprecate inline wizard inputs', () => {
      const propTest = Object.getOwnPropertyDescriptor(ClrWizard.prototype, 'stopModalAnimations');
      expect(propTest.get).toBeDefined();
    });
    it('should not do aria-live by default');
    it('should replace dummy clr-tab-overflow-content with simple div');
  });
});
