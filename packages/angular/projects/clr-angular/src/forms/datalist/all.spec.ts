/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import DatalistContainerSpecs from './datalist-container.spec';
import DatalistInputSpecs from './datalist-input.spec';
import DatalistIdServiceSpecs from './providers/datalist-id.service.spec';
import DatalistSpec from './datalist.spec';

describe('ClrDatalist', function () {
  DatalistIdServiceSpecs();
  DatalistContainerSpecs();
  DatalistInputSpecs();
  DatalistSpec();
});
