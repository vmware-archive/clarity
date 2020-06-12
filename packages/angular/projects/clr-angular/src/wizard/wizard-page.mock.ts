/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { TemplateRef } from '@angular/core';

export class MockPage {
  constructor(pageIndex: number) {
    this.id = 'this-is-my-page-id-' + pageIndex++;
  }

  public id: string;
  public disabled = false;
  public current = false;
  public completed = false;
  public readyToComplete = false;
  public hasError = false;

  public reset(): void {
    this.disabled = false;
    this.current = false;
    this.completed = false;
    this.readyToComplete = false;
    this.hasError = false;
  }

  public navTitle: TemplateRef<any>;
}
