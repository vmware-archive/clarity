/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
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
    // Ugh
    this.ignore = this.toggleService.originalEvent;
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
  private hostClickListener: () => void;
  private documentClickListener: () => void;
  private documentESCListener: () => void;
  private ignoredElementClickListener: () => void;
  private ignore: any;

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

  private attachOutsideClickListener() {
    if (this.closeOnOutsideClick) {
      this.hostClickListener = this.renderer.listen(this.el.nativeElement, 'click', event => (this.ignore = event));
      if (this.ignoredElement) {
        this.ignoredElementClickListener = this.renderer.listen(
          this.ignoredElement,
          'click',
          event => (this.ignore = event)
        );
      }
      this.documentClickListener = this.renderer.listen('document', 'click', event => {
        if (event === this.ignore) {
          delete this.ignore;
        } else {
          this.toggleService.open = false;
        }
      });
    }
  }

  private detachOutsideClickListener() {
    if (this.closeOnOutsideClick) {
      if (this.hostClickListener) {
        this.hostClickListener();
        delete this.hostClickListener;
      }
      if (this.ignoredElementClickListener) {
        this.ignoredElementClickListener();
        delete this.ignoredElementClickListener;
      }
      if (this.documentClickListener) {
        this.documentClickListener();
        delete this.documentClickListener;
      }
    }
  }
}
