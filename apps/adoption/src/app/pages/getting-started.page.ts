/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { CodesandboxService } from '../components/codesandbox/codesandbox.service';
import { StackblitzService } from '../components/stackblitz/stackblitz.service';
import { SupportedTemplates } from '../templates/types';

@Component({
  selector: 'app-home',
  templateUrl: './getting-started.page.html',
  providers: [StackblitzService, CodesandboxService],
})
export class GettingStartedPage {
  constructor(private stackblitz: StackblitzService, private codesandbox: CodesandboxService) {}

  openCodesandbox(template: SupportedTemplates, event: MouseEvent): void {
    this.codesandbox.open(template, {});

    if (event) {
      event.preventDefault();
    }
  }

  openStackblitz(template: SupportedTemplates, event: MouseEvent): void {
    this.stackblitz.open(template);

    if (event) {
      event.preventDefault();
    }
  }
}
