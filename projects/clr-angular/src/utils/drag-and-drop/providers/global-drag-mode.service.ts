/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable, Renderer2 } from '@angular/core';

// This service class adds and removes the "in-drag" class to the document body element
// through its public enter() and exit() methods.
@Injectable()
export class GlobalDragModeService {
  constructor(private renderer: Renderer2) {}

  enter(): void {
    this.renderer.addClass(document.body, 'in-drag');
  }

  exit(): void {
    this.renderer.removeClass(document.body, 'in-drag');
  }
}
