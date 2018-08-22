/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import RadioContainerSpecs from './radio-container.spec';
import RadioSpecs from './radio.spec';
import RadioWrapperSpecs from './radio-wrapper.spec';

describe('Radio component', function() {
  RadioContainerSpecs();
  RadioWrapperSpecs();
  RadioSpecs();
});
