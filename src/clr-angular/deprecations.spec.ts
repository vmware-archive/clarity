/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

describe('Deprecations', () => {
  // When we deprecate some code, we should write a test to verify it is still in the bundle
  // and keep track of when it was deprecated, and when we plan to remove it.

  describe('1.0', () => {
    it('should no longer support clr-checkbox in button-groups');
  });

  describe('2.0', () => {
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
});
