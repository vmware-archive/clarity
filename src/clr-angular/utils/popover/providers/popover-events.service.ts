/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { ElementRef, Injectable, Renderer2, Inject, OnDestroy } from '@angular/core';
import { ClrPopoverToggleService } from './popover-toggle.service';
import { Observable, fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

// https://github.com/angular/angular/issues/20351#issuecomment-344009887
/** @dynamic */
@Injectable()
export class ClrPopoverEventsService implements OnDestroy {
  public outsideClickClose = true;
  public scrollToClose = true;
  private documentClickListener: () => void;
  public ignoredEvent: any;
  private subscriptions: Subscription[] = [];

  constructor(
    private renderer: Renderer2,
    private smartOpenService: ClrPopoverToggleService,
    @Inject(DOCUMENT) private document: HTMLDocument
  ) {
    this.subscriptions.push(
      smartOpenService.openChange.subscribe(open => {
        if (open) {
          this.addEscapeListener();
          this.addClickListener();
          this.addScrollListener();
        } else {
          this.removeAllEventListeners();
        }
      }),
      smartOpenService.getEventChange().subscribe(event => {
        // Remember the event that was used to open the content
        this.ignoredEvent = event;
      })
    );
  }

  private scrollSubscription: Subscription;
  public addScrollListener() {
    if (this.scrollToClose) {
      this.documentScroller = fromEvent(this.document, 'scroll', { capture: true });
      this.scrollSubscription = this.documentScroller
        .pipe(filter(this.testForSmartPopoverContentContainer))
        .subscribe(() => {
          this.smartOpenService.open = false;
          this.setAnchorFocus();
        });
    } else {
      // I think this is where dynamic re-positioning will be added
      // Instead of testing like we do in the close pipe below
      // we need to switch positioning to use an observable and then
      // debounce the scroll events to recalculate content position in a performant way
      // For now, ignore scrolling events.
      return;
    }
  }

  public removeScrollListener() {
    if (this.documentScroller) {
      this.scrollSubscription.unsubscribe();
      delete this.documentScroller;
    }
  }

  private testForSmartPopoverContentContainer(event: Event): boolean {
    // Filter for the documentScroller observable event targets
    let target = event.target as HTMLElement;

    // Walk up the DOM tree until we get to the element that is a direct child of the body.
    while (target.classList && target.parentElement.localName !== 'body') {
      target = target.parentElement;
    }

    // Target is the child element of body where the scroll events originated.
    // Return false and prevent the popover content container from closing for any scroll events inside a popover
    // content container.
    if (target.classList) {
      // check scroll events to see if they are happening in popover content or elsewhere
      return target.classList.contains('clr-popover-content') ? false : true;
    } else {
      // prevents it from closing right after first opening
      return false;
    }
  }

  public addClickListener() {
    if (this.outsideClickClose) {
      this.documentClickListener = this.renderer.listen(this.document, 'click', (event: MouseEvent) => {
        if (event === this.ignoredEvent) {
          // Here we ignore the opening click event (w/o this content opens and immediately closes.
          delete this.ignoredEvent;
        } else {
          this.smartOpenService.open = false;
          // Rather than a complex change to the focus trap I put focus on the element that was clicked
          const clickedElement = event.target as HTMLElement;
          clickedElement.focus();
        }
      });
    }
  }

  public removeClickListener() {
    if (this.outsideClickClose) {
      delete this.ignoredEvent;
      if (this.documentClickListener) {
        this.documentClickListener();
        delete this.documentClickListener;
      }
    }
  }

  private escapeListener: () => void;
  public addEscapeListener() {
    this.escapeListener = this.renderer.listen(this.document, 'keydown.escape', () => {
      this.smartOpenService.open = false;
      this.setAnchorFocus();
    });
  }

  public removeEscapeListener() {
    if (this.escapeListener) {
      this.escapeListener();
      delete this.escapeListener;
    }
  }

  private _anchorButtonRef: ElementRef;
  public set anchorButtonRef(ref: ElementRef) {
    this._anchorButtonRef = ref;
  }
  public get anchorButtonRef(): ElementRef {
    return this._anchorButtonRef;
  }

  private _closeButtonRef: ElementRef;
  public set closeButtonRef(ref: ElementRef) {
    this._closeButtonRef = ref;
  }
  public get closeButtonRef(): ElementRef {
    return this._closeButtonRef;
  }

  public setCloseFocus(): void {
    this._closeButtonRef.nativeElement.focus();
  }

  public setAnchorFocus(): void {
    this.anchorButtonRef.nativeElement.focus();
  }

  private _contentRef: ElementRef;
  public set contentRef(host: ElementRef) {
    this._contentRef = host;
  }
  public get contentRef(): ElementRef {
    return this._contentRef;
  }

  private documentScroller: Observable<Event>;

  private removeAllEventListeners() {
    this.removeScrollListener();
    this.removeClickListener();
    this.removeEscapeListener();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.removeAllEventListeners();
  }
}
