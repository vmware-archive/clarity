/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/*
 * Hack while waiting for https://github.com/angular/angular/issues/6595 to be fixed.
 */

import { Directive, OnDestroy, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[hash-listener]',
  host: {
    // '[style.position]': "'relative'",
  },
})
export class HashListener implements OnDestroy, OnInit {
  constructor(private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Record<string, any>) {
    this.sub = this.route.fragment.subscribe(f => {
      this.scrollToAnchor(f, false);
    });
  }

  sub: Subscription;

  ngOnInit() {
    this.scrollToAnchor(this.route.snapshot.fragment, false);
  }

  scrollToAnchor(hash: string, smooth = true) {
    if (hash && isPlatformBrowser(this.platformId)) {
      const element = document.querySelector('#' + hash);
      if (element) {
        element.scrollIntoView({
          behavior: smooth ? 'smooth' : 'auto',
          block: 'start',
        });
      }
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
