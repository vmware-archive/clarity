/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * This file is just my OCD coding in my place.
 *
 * The goal is to have the tests properly grouped in the reporter, instead of having them all
 * over the place because we load them asynchronously.
 */
import { describeIgnore } from '../../../../tests/tests.helpers';

import DomHelperSpecs from './dom-helpers.spec';
import VirtualForOfSpecs from './virtual-for-of.spec';

// Skipping IE for virtual scrolling, as a number of the calculations are not being made exactly as tests expect
// @TODO Fix IE testing for virtual scrolling
describeIgnore(['ie'], 'Virtual Scroll', function() {
  DomHelperSpecs();
  VirtualForOfSpecs();
});
