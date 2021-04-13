/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';

import { DatagridDisplayMode } from './../enums/display-mode.enum';
import { DatagridRenderOrganizer } from './../render/render-organizer';
import { DisplayModeService } from './display-mode.service';

@Injectable()
export class MockDisplayModeService extends DisplayModeService {
  constructor(renderOrganizer: DatagridRenderOrganizer) {
    super(renderOrganizer);
  }

  public updateView(mode: DatagridDisplayMode) {
    this._view.next(mode);
  }
}

export const MOCK_DISPLAY_MODE_PROVIDER = {
  provide: DisplayModeService,
  useClass: MockDisplayModeService,
};
