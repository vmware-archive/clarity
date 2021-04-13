/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ElementRef } from '@angular/core';
import { ActiveFragmentService } from './active-fragment.service';

@Directive({
  selector: '[fragment]',
})
export class FragmentLinkDirective {
  constructor(el: ElementRef, activeFragmentService: ActiveFragmentService) {
    activeFragmentService.fragmentLinks[el.nativeElement.getAttribute('fragment')] = el;
  }
}
