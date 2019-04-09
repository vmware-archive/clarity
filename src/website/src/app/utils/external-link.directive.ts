/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, ElementRef, HostBinding, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: 'a[href]',
})
export class ExternalLinkDirective {
  @HostBinding('attr.rel') noopener = '';
  @HostBinding('attr.target') target = '';

  constructor(private hostElement: ElementRef, @Inject(PLATFORM_ID) private platformId: string) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId) && this.isLinkExternal()) {
      // https://developers.google.com/web/tools/lighthouse/audits/noopener
      this.noopener = 'noopener';
      this.target = '_blank';
    }
  }

  private isLinkExternal() {
    const link = this.hostElement.nativeElement;
    // Don't match other subdomains.
    if (link.hostname.indexOf('clarity.design')) {
      return false;
    }
    return location.hostname !== link.hostname || link.hostname.length;
  }
}
