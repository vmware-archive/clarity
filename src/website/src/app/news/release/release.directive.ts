/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[clrRelease]',
})
export class Release {
  @Input() clrRelease = '0.9.2';

  constructor(public templateRef: TemplateRef<any>) {}
}
