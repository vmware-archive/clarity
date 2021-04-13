/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { MockPage } from '../wizard-page.mock';

export class NavServiceMock {
  currentPage: MockPage;
  currentPageIsLast = false;
  currentPageIsFirst = false;
  wizardStopNavigation = false;
  wizardDisableStepnav = false;
}
