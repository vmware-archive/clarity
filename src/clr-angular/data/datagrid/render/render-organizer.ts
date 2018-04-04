/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { DatagridRenderStep } from '../enums/render-step.enum';

@Injectable()
export class DatagridRenderOrganizer {
  protected _renderStep: Subject<DatagridRenderStep> = new Subject<DatagridRenderStep>();
  public get renderStep(): Observable<DatagridRenderStep> {
    return this._renderStep.asObservable();
  }

  public filterRenderSteps(step: DatagridRenderStep) {
    return this.renderStep.pipe(filter(testStep => step === testStep));
  }

  private alreadySized = false;

  public widths: { px: number; strict: boolean }[] = [];

  public resize() {
    this.widths.length = 0;
    this._renderStep.next(DatagridRenderStep.CALCULATE_MODE_ON);
    if (this.alreadySized) {
      this._renderStep.next(DatagridRenderStep.CLEAR_WIDTHS);
    }
    this._renderStep.next(DatagridRenderStep.DETECT_STRICT_WIDTHS);
    this._renderStep.next(DatagridRenderStep.COMPUTE_COLUMN_WIDTHS);
    this._renderStep.next(DatagridRenderStep.ALIGN_COLUMNS);
    this.alreadySized = true;
    this._renderStep.next(DatagridRenderStep.CALCULATE_MODE_OFF);
    this._renderStep.next(DatagridRenderStep.UPDATE_ROW_WIDTH);
  }
}
