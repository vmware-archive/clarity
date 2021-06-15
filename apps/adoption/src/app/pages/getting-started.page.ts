/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { StackblitzService } from '../components/stackblitz/stackblitz.service';
import { SupportedTemplates } from '../templates';

@Component({
  selector: 'app-home',
  templateUrl: './getting-started.page.html',
  providers: [StackblitzService],
})
export class GettingStartedPage {
  constructor(private stackblitz: StackblitzService) {}

  openStackblitz(template: SupportedTemplates, event: MouseEvent): void {
    this.stackblitz.open(template);

    if (event) {
      event.preventDefault();
    }
  }
}
