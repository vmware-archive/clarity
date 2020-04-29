/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, OnDestroy } from '@angular/core';
import { uniqueIdFactory } from '../id-generator/id-generator.service';

export enum ClrAriaLivePoliteness {
  off = 'off',
  polite = 'polite',
  assertive = 'assertive',
}

/**
 * Time in milliseconds before inserting the content into the container
 */
const ARIA_LIVE_TICK = 100;

/**
 * This service handle `aria-live` accessibility attribute. The issue is that you need
 * to have the DOM Element with attribute `aria-live` before you could insert content
 * and SR (Screen Reader) pick the change and announce it.
 *
 * ```typescript
 * import { ClrAriaLiveService } from 'src/clr-angular/utils/a11y/aria-live.service';
 *
 * @Component({
 * selector: 'clr-demo-component',
 * providers: [ClrAriaLiveService],
 * template: `
 *   <ng-content></ng-content>
 * `,
 * })
 * export class DemoComponent {
 *  constructor(ariaLiveService: ClrAriaLiveService) {}
 *
 *  public actionThatWillTriggerChange() {
 *    this.ariaLiveService.announce('message that I want to announce to SR');
 *  }
 * }
 * ```
 *
 */
@Injectable({
  providedIn: 'root',
})
export class ClrAriaLiveService implements OnDestroy {
  private ariaLiveElement: HTMLElement;
  private document: Document;
  private previousTimeout: ReturnType<typeof setTimeout>;

  constructor(private ngZone: NgZone, @Inject(DOCUMENT) _document: any, @Inject(PLATFORM_ID) private platformId: any) {
    this.document = _document;
  }

  private _id = `clr-aria-live-element-${uniqueIdFactory()}`;
  /**
   * get access to the internal HTML `id` that gonna be used for the AriaLive container.
   * @return ID of the DOM Element as string.
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Append text content inside the AriaLive Container. This method will check if the
   * DOM Element is existing if not it will create one for us and the will apply the text.
   *
   * ```typescript
   * this.ariaLiveService.announce(this.el.nativeElement);
   * // or
   * this.ariaLiveService.announce('Message to announce to SR');
   * ```
   *
   * @remark
   * When second argument is `AriaLivePoliteness.off` we won't create aria container or update it.
   * The reason for that is that we don't want to do additional work if the SR will ignore it.
   *
   * @param message - This could be simple string or HTMLElement
   * @param politeness - 'polite', 'assertive' or 'off'
   */
  public announce(
    message: string | HTMLElement,
    politeness: ClrAriaLivePoliteness = ClrAriaLivePoliteness.polite
  ): void {
    if (politeness === ClrAriaLivePoliteness.off) {
      return;
    }

    if (!this.ariaLiveElement && isPlatformBrowser(this.platformId)) {
      this.ariaLiveElement = this.createContainer();
    }

    message = typeof message !== 'string' && isPlatformBrowser(this.platformId) ? message.textContent : message;

    // when there is no message do NOTHING!
    if (!message) {
      return;
    }

    this.ariaLiveElement.setAttribute('aria-live', politeness);

    // This 100ms timeout is necessary for some browser + screen-reader combinations:
    // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
    // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
    //   second time without clearing and then using a non-zero delay.
    // (using JAWS 17 at time of this writing).
    this.ngZone.runOutsideAngular(() => {
      // This clearTimeout will stop all older messages from announcing
      // in the case where the messages are comming too fast we gonna try to append only
      // the last one. That's what the SR will try to do anyway.
      clearTimeout(this.previousTimeout);
      this.previousTimeout = setTimeout(() => {
        this.ariaLiveElement.textContent = message as string;
      }, ARIA_LIVE_TICK);
    });
  }

  /**
   * onDestroy life cycle - must stop all active setTimeouts and remove the AriaLive
   * container from the document.
   */
  public ngOnDestroy() {
    clearTimeout(this.previousTimeout);
    if (isPlatformBrowser(this.platformId) && this.ariaLiveElement) {
      this.document.body.removeChild(this.ariaLiveElement);
      this.ariaLiveElement = null;
    }
  }

  /**
   * Create AriaLive DOM element as a last child of the document.
   * After the element is created, we gonna apply Clarity class to hide it from
   * the screen and set the `aria-live` politness.
   *
   * `clr-sr-only` is the CSS class that is used to hide the element from the screen.
   *
   * @remark
   * Calling this method multiple times will create multiple DOM Elements, that
   * won't be tracked and will be GC after the service is destroyed.
   *
   * @return AriaLive container as HTMLElement
   *
   */
  private createContainer(): HTMLElement {
    const ariaLiveElement = this.document.createElement('div');

    ariaLiveElement.setAttribute('id', this.id);
    // Use clarity screen reader class to hide the dom element
    // and fix the scrollbar shake
    ariaLiveElement.classList.add('clr-sr-only');

    ariaLiveElement.setAttribute('aria-atomic', 'true');
    ariaLiveElement.setAttribute('aria-live', ClrAriaLivePoliteness.polite);

    this.document.body.appendChild(ariaLiveElement);

    return ariaLiveElement;
  }
}
