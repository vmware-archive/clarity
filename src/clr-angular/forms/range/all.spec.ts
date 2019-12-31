/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import RangeSpecs from './range.spec';
import RangeContainerSpecs from './range-container.spec';

describe('Radio component', function() {
  RangeContainerSpecs();
  RangeSpecs();
});
