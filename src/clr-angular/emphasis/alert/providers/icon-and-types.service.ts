/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';

import { AlertInfoObject } from '../utils/alert-info-object';
import { ALERT_TYPES } from '../utils/alert-types';
import { ClrCommonStrings } from '../../../utils/i18n/common-strings.interface';

@Injectable()
export class AlertIconAndTypesService {
  constructor(private commonStrings: ClrCommonStrings) {}

  private defaultIconShape = 'info-circle';
  private _alertIconShape = '';
  private _alertType = 'info';

  get alertType(): string {
    return this._alertType;
  }
  set alertType(val: string) {
    if (ALERT_TYPES.indexOf(val) > -1) {
      this._alertType = val;
    }
  }

  get alertIconShape(): string {
    if ('' === this._alertIconShape) {
      return this.iconInfoFromType(this._alertType).shape;
    }
    return this._alertIconShape;
  }
  set alertIconShape(val: string) {
    if (!val) {
      this._alertIconShape = '';
    } else if (val !== this._alertIconShape) {
      this._alertIconShape = val;
    }
  }

  get alertIconTitle(): string {
    return this.iconInfoFromType(this._alertType).title;
  }

  public iconInfoFromType(type: string): AlertInfoObject {
    const returnObj = { shape: '', cssClass: '', title: '' };

    switch (type) {
      case 'warning':
        returnObj.shape = 'exclamation-triangle';
        returnObj.cssClass = 'alert-warning';
        returnObj.title = this.commonStrings.warning;
        break;
      case 'danger':
        returnObj.shape = 'exclamation-circle';
        returnObj.cssClass = 'alert-danger';
        returnObj.title = this.commonStrings.danger;
        break;
      case 'success':
        returnObj.shape = 'check-circle';
        returnObj.cssClass = 'alert-success';
        returnObj.title = this.commonStrings.success;
        break;
      default:
        returnObj.shape = this.defaultIconShape;
        returnObj.cssClass = 'alert-info';
        returnObj.title = this.commonStrings.info;
        break;
    }

    return returnObj;
  }
}
