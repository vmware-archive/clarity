/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

const previewClasses: any = {
  'is-solid': false,
  'has-alert': false,
  'has-badge': false,
};

@Injectable()
export class IconsViewService {
  /**
   * This service class is used to transfer values from IconsComponent to IconsSetsComponent.
   */

  previewClasses: BehaviorSubject<any> = new BehaviorSubject<any>(previewClasses);

  searchValue: Subject<string> = new Subject<string>();
}
