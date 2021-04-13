/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { PageCollectionService } from './providers/page-collection.service';

@Component({
  selector: 'clr-wizard-stepnav',
  template: `
    <div class="clr-wizard-stepnav-list">
      <div
        *ngFor="let page of pageService.pages; let i = index"
        clr-wizard-stepnav-item
        [page]="page"
        class="clr-wizard-stepnav-item"
      >
        {{ i + 1 }}
      </div>
    </div>
  `,
  host: { class: 'clr-wizard-stepnav' },
})
export class ClrWizardStepnav {
  constructor(public pageService: PageCollectionService) {}
}
