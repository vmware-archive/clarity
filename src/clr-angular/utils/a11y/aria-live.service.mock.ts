/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { ClrAriaLiveService } from './aria-live.service';

/** @deprecated since 3.0, remove in 4.0 */

/** This mock won't be needed after deprecation of the ClrAriaLiveService internal usage */
@Injectable()
export class MockAriaLiveService extends ClrAriaLiveService {
  announce(message) {
    return message;
  }
}

export const MOCK_ARIA_LIVE_SERVICE_PROVIDER = {
  provider: ClrAriaLiveService,
  useClass: MockAriaLiveService,
};
