/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { PageCollectionService } from './providers/page-collection.service';

@Component({
  selector: 'clr-wizard-stepnav',
  template: `
        <ol class="clr-wizard-stepnav-list" role="tablist">
            <li *ngFor="let page of pageService.pages" clr-wizard-stepnav-item 
            [page]="page" class="clr-wizard-stepnav-item"></li>
        </ol>
    `,
  host: { class: 'clr-wizard-stepnav' },
})
export class ClrWizardStepnav {
  constructor(public pageService: PageCollectionService) {}
}
