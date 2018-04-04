/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { DatagridDisplayMode } from '../enums/display-mode.enum';
import { DatagridRenderStep } from '../enums/render-step.enum';
import { DatagridRenderOrganizer } from '../render/render-organizer';

@Injectable()
export class DisplayModeService {
  protected _view: BehaviorSubject<DatagridDisplayMode> = new BehaviorSubject<DatagridDisplayMode>(
    DatagridDisplayMode.DISPLAY
  );

  constructor(renderOrganizer: DatagridRenderOrganizer) {
    renderOrganizer
      .filterRenderSteps(DatagridRenderStep.CALCULATE_MODE_ON)
      .subscribe(() => this._view.next(DatagridDisplayMode.CALCULATE));
    renderOrganizer
      .filterRenderSteps(DatagridRenderStep.CALCULATE_MODE_OFF)
      .subscribe(() => this._view.next(DatagridDisplayMode.DISPLAY));
  }

  public get view(): Observable<DatagridDisplayMode> {
    return this._view.asObservable();
  }
}
