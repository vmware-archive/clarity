/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  Renderer2,
  NgZone,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActiveFragmentService } from './active-fragment.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';

//noinspection TypeScriptCheckImport
import jump from 'jump.js';

@Component({
  selector: 'fragment-content',
  template: `<div [attr.id]="fragmentLink" class="fragment-content" #fragmentContent><ng-content></ng-content></div>`,
  styleUrls: ['./fragment-content.component.scss'],
})
export class FragmentContentComponent implements AfterViewInit, OnDestroy {
  constructor(
    public el: ElementRef,
    private _ngZone: NgZone,
    private _renderer: Renderer2,
    private _route: ActivatedRoute,
    private _activeFragmentService: ActiveFragmentService,
    @Inject(PLATFORM_ID) private platformId: Record<string, any>
  ) {}

  private subscriptions: Subscription[] = [];

  @Input() fragmentLink: string;

  @Input() fragmentOffsetTop: number;

  @ViewChild('fragmentContent', { static: true })
  fragmentContent: ElementRef;

  fragmentContentElState: any;
  activeFragmentLinkEl: any;
  activeFragment: string;

  windowScroll: Function;
  windowResize: Function;
  fragmentClick: Function;

  ngAfterViewInit() {
    this.fragmentLinkClickHandler();
    this.fragmentWindowResizeHandler();
    this.fragmentScrollHandler();

    const scrollSpySubscription = this._activeFragmentService.activeFragment
      .pipe(distinctUntilChanged())
      .subscribe(fragment => {
        if (fragment) {
          if (this.activeFragmentLinkEl) {
            this._renderer.removeClass(this.activeFragmentLinkEl, 'active');
          }

          this.activeFragment = fragment;
          this.activeFragmentLinkEl = this._activeFragmentService.fragmentLinks[this.activeFragment].nativeElement;
          this._renderer.addClass(this.activeFragmentLinkEl, 'active');
        }
      });

    this.setInitialScrollPosition();

    this.subscriptions.push(scrollSpySubscription);
  }

  ngOnDestroy() {
    if (this.activeFragmentLinkEl) {
      this.activeFragmentLinkEl.classList.remove('active');
    }

    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());

    // unregister all render events.
    if (isPlatformBrowser(this.platformId)) {
      this.windowScroll();
      this.windowResize();
      this.fragmentClick();

      window.scrollTo(0, 0);
    }
  }

  updateElementState() {
    this.fragmentContentElState = this.fragmentContent.nativeElement.getBoundingClientRect();
    this.fragmentContentElState.xCordOnDoc = this.coordinatesOnDoc(this.fragmentContent.nativeElement).left;
    this.fragmentContentElState.yCordOnDoc = this.coordinatesOnDoc(this.fragmentContent.nativeElement).top;

    // Get the window screen height
    this.fragmentContentElState.screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

  coordinatesOnDoc(el: any) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - document.body.clientTop;
    const left = el.getBoundingClientRect().left + window.pageXOffset - document.body.clientLeft;

    return { top: top, left: left };
  }

  fragmentLinkClickHandler() {
    const fragmentLinkEl = this._activeFragmentService.fragmentLinks[this.fragmentLink].nativeElement;
    this.fragmentClick = this._renderer.listen(fragmentLinkEl, 'click', () => {
      this.updateElementState();

      if (this.fragmentContentElState.yCordOnDoc < -this.fragmentOffsetTop) {
        this.fragmentOffsetTop = -this.fragmentContentElState.yCordOnDoc;
      }

      jump(this.fragmentContent.nativeElement, {
        offset: this.fragmentOffsetTop,
        duration: 500,
      });
    });
  }

  isScrollWithinActiveZone() {
    // this.fragmentContentElState.top is the relative scroll position of the fragment content on the document.
    // It checks if this.fragmentContentElState.top comes within 300px from the top.
    // 180px is the minimum space for activating the page.

    return this.fragmentContentElState.top < 300;
  }

  isScrollPositive() {
    // If the document scrolltop passes the fragment content's top,
    // this.fragmentContentElState.top gets negative value.

    return this.fragmentContentElState.top >= 0;
  }

  fragmentScrollHandler() {
    if (isPlatformBrowser(this.platformId)) {
      this.windowScroll = this._renderer.listen(window, 'scroll', () => {
        this._ngZone.runOutsideAngular(() => {
          this.updateElementState();

          if (this.isScrollWithinActiveZone() && this.isScrollPositive()) {
            this._activeFragmentService.activeFragment.next(this.fragmentLink);
          }
        });
      });
    }
  }

  fragmentWindowResizeHandler() {
    if (isPlatformBrowser(this.platformId)) {
      this.windowResize = this._renderer.listen(window, 'resize', () => {
        this._ngZone.runOutsideAngular(() => {
          this.updateElementState();
        });
      });
    }
  }

  // Setting the initial scroll position depending on which fragment is clicked on
  setInitialScrollPosition() {
    if (isPlatformBrowser(this.platformId) && this._route.snapshot.fragment === this.fragmentLink) {
      setTimeout(() => {
        this.updateElementState();

        if (this.fragmentContentElState.yCordOnDoc < -this.fragmentOffsetTop) {
          this.fragmentOffsetTop = -this.fragmentContentElState.yCordOnDoc;
        }

        jump(this.fragmentContent.nativeElement, {
          offset: this.fragmentOffsetTop,
          duration: 500,
          callback: () => {
            if (this.isScrollWithinActiveZone() && this.isScrollPositive()) {
              this._activeFragmentService.activeFragment.next(this.fragmentLink);
            }
          },
        });
      });
    }
  }
}
