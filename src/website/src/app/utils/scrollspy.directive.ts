/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/*
 * Hack while waiting for https://github.com/angular/angular/issues/6595 to be fixed.
 */

import { Directive, Input, OnDestroy, OnInit, ContentChildren, QueryList, ElementRef, Renderer2 } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[scrollspy]',
})
export class ScrollSpy implements OnDestroy, OnInit {
  constructor(private renderer: Renderer2) {}

  @Input('scrollspy') scrollable: any;

  anchors = [];

  sub: Subscription;

  @ContentChildren(RouterLinkWithHref, { descendants: true })
  set links(routerLinks: QueryList<RouterLinkWithHref>) {
    this.anchors = routerLinks.map(routerLink => '#' + routerLink.fragment);
    this.sub = routerLinks.changes.subscribe(() => {
      this.anchors = routerLinks.map(routerLink => '#' + routerLink.fragment);
    });
  }

  @ContentChildren(RouterLinkWithHref, { descendants: true, read: ElementRef })
  linkElements: QueryList<ElementRef>;

  throttle = false;
  scrollPosition: number;

  handleEvent() {
    this.scrollPosition = this.scrollable.scrollTop;
    if (!this.throttle) {
      window.requestAnimationFrame(() => {
        const currentLinkIndex = this.findCurrentAnchor() || 0;
        this.linkElements.forEach((link: ElementRef, index: number) => {
          if (index === currentLinkIndex) {
            this.renderer.addClass(link.nativeElement, 'active');
          } else {
            this.renderer.removeClass(link.nativeElement, 'active');
          }
        });
        this.throttle = false;
      });
    }
    this.throttle = true;
  }

  findCurrentAnchor() {
    for (let i = this.anchors.length - 1; i >= 0; i--) {
      const anchor = this.anchors[i];
      if (
        this.scrollable.querySelector(anchor) &&
        this.scrollable.querySelector(anchor).offsetTop <= this.scrollPosition
      ) {
        return i;
      }
    }
  }

  ngOnInit() {
    this.scrollable.addEventListener('scroll', this);
  }

  ngOnDestroy() {
    if (this.scrollable) {
      this.scrollable.removeEventListener('scroll', this);
    }
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
