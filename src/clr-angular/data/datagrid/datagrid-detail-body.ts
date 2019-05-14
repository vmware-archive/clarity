/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { DetailService } from './providers/detail.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'clr-dg-detail-body',
  template: `
    <ng-content></ng-content>
  `,
  host: {
    '[class.datagrid-detail-body]': 'true',
  },
})
export class ClrDatagridDetailBody {}
