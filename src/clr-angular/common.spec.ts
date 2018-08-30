/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { TestBed } from '@angular/core/testing';
import { COMMON_STRINGS_PROVIDER } from './utils/i18n/common-strings.service';

/*
 * We use this file to set up utilities and providers that will be needed in
 * every single one of our specs.
 */

beforeEach(() => {
  TestBed.configureTestingModule({ providers: [COMMON_STRINGS_PROVIDER] });
});
