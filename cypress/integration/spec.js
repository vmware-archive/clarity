/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ButtonSpecs } from './buttons';
import { CheckboxesSpec } from './checkboxes';
import { ColorSpec } from './color';
import { ListsSpec } from './lists';
import { TogglesSpec } from './toggles';

// Organized this way to make one batch for all of the tests in Applitools,
// otherwise it treats each file as a different batch and makes it hard to
// see a single run as one unit.
describe(`Clarity - ${Cypress.env('CLARITY_THEME')}`, () => {
  // ButtonSpecs();
  CheckboxesSpec();
  ColorSpec();
  // ListsSpec();
  TogglesSpec();
});
