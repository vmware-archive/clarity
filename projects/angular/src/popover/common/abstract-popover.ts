/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  AfterViewChecked,
  ElementRef,
  HostBinding,
  Injector,
  OnDestroy,
  Renderer2,
  SkipSelf,
  Directive,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';

import { Point, Popover } from './popover';
import { PopoverOptions } from './popover-options.interface';

// Literally any annotation would work here, but writing our own @HoneyBadger annotation feels overkill.
@Directive()
export abstract class AbstractPopover implements AfterViewChecked, OnDestroy {
  constructor(injector: Injector, @SkipSelf() protected parentHost: ElementRef) {
    this.el = injector.get(ElementRef);
    this.toggleService = injector.get(ClrPopoverToggleService);
    this.renderer = injector.get(Renderer2);
    // Default anchor is the parent host
    this.anchorElem = parentHost.nativeElement;

    this.popoverInstance = new Popover(this.el.nativeElement);
    this.subscription = this.toggleService.openChange.subscribe(change => {
      if (change) {
        this.anchor();
        this.attachESCListener();
      } else {
        this.release();
        this.detachESCListener();
      }
    });
    if (this.toggleService.open) {
      this.anchor();
      this.attachESCListener();
    }
  }

  protected el: ElementRef;
  protected toggleService: ClrPopoverToggleService;
  protected renderer: Renderer2;

  private popoverInstance: Popover;
  private subscription: Subscription;

  private updateAnchor = false;

  protected anchorElem: any;
  protected anchorPoint: Point;
  protected popoverPoint: Point;
  protected popoverOptions: PopoverOptions = {};

  protected ignoredElement: any;

  protected anchor() {
    this.updateAnchor = true;
  }

  protected release() {
    this.detachOutsideClickListener();
    this.popoverInstance.release();
  }

  ngAfterViewChecked() {
    if (this.updateAnchor) {
      this.updateAnchor = false;
      this.popoverInstance
        .anchor(this.anchorElem, this.anchorPoint, this.popoverPoint, this.popoverOptions)
        .subscribe(() => {
          // if a scroll event is detected, close the popover
          this.toggleService.open = false;
        });
      this.attachOutsideClickListener();
    }
  }

  ngOnDestroy() {
    this.release();
    this.detachESCListener();
    this.subscription.unsubscribe();
  }

  /*
   * Fallback to hide when *clrIfOpen is not being used
   */

  @HostBinding('class.is-off-screen')
  get isOffScreen() {
    return this.toggleService.open ? false : true;
  }

  /*
   * Until https://github.com/angular/angular/issues/8785 is supported, we don't have any way to instantiate
   * a separate directive on the host. So let's do dirty but performant for now.
   */
  public closeOnOutsideClick = false;
  private documentESCListener: () => void;

  private attachESCListener(): void {
    if (!this.popoverOptions.ignoreGlobalESCListener) {
      this.documentESCListener = this.renderer.listen('document', 'keydown', event => {
        if (event && event.key) {
          if (event.key === 'Escape' || event.key === 'Esc') {
            this.toggleService.open = false;
          }
        }
      });
    }
  }

  private detachESCListener(): void {
    if (this.documentESCListener) {
      this.documentESCListener();
      delete this.documentESCListener;
    }
  }

  private closeOnOutsideClickCallback = event => {
    // The anchor element containing the click event origin means, the click wasn't triggered outside.
    if (this.anchorElem.contains(event.target)) {
      return;
    }
    this.toggleService.open = false;
  };

  private attachOutsideClickListener() {
    if (this.closeOnOutsideClick && this.toggleService.open) {
      if (document && document.addEventListener) {
        // To listen outside click, the listener should catch the event during the capturing phase.
        // We have to do this ugly document check as Renderer2.listen doesn't allow passive/useCapture listen.
        document.addEventListener('click', this.closeOnOutsideClickCallback, true);
      }
    }
  }

  private detachOutsideClickListener() {
    if (this.closeOnOutsideClick) {
      if (document && document.removeEventListener) {
        document.removeEventListener('click', this.closeOnOutsideClickCallback, true);
      }
    }
  }
}
