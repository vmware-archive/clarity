/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, ViewContainerRef } from '@angular/core';

import { WrappedFormControl } from '../common/wrapped-control';

import { ClrCheckboxContainer } from './checkbox-container';

@Directive({ selector: '[clrCheckbox]' })
export class ClrCheckboxNext extends WrappedFormControl<ClrCheckboxContainer> {
  // Once again, several more elegant solutions were foiled by severity 3+ bugs on Angular that have been opened
  // for 6 months to a year. So that's how we do it. Inheritance and ridiculous constructors. :-(
  constructor(vcr: ViewContainerRef) {
    super(ClrCheckboxContainer, vcr);
  }
}
