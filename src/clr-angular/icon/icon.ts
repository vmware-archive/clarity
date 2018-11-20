/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: 'clr-icon' })
export class ClrIconCustomTag {
  @Input() shape: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.shape) {
      this.renderer.setAttribute(this.el.nativeElement, 'shape', this.shape);
    }
  }
}
