/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  AfterContentInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  Output,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

import { Observable } from 'rxjs';

import { ClrFocusDirection } from './enums/focus-direction.enum';

@Directive({
  selector: '[clrKeyFocus]',
})
export class ClrKeyFocus implements OnInit, AfterContentInit {
  constructor(private elementRef: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  private _direction: ClrFocusDirection = ClrFocusDirection.VERTICAL;
  @Input('clrDirection')
  set direction(direction: ClrFocusDirection) {
    if (!!direction) {
      this._direction = direction;
    }
  }
  get direction(): ClrFocusDirection {
    return this._direction;
  }
  @Input('clrFocusOnLoad') focusOnLoad: boolean = false;
  @Input('clrItemSelector') selector: string;

  private _focusChange: EventEmitter<void> = new EventEmitter();

  @Output('clrFocusChange')
  get focusChange(): Observable<void> {
    return this._focusChange.asObservable();
  }

  private _current: number = 0;
  get current() {
    return this._current;
  }

  ngOnInit() {
    if (this.focusOnLoad && isPlatformBrowser(this.platformId)) {
      this.getCurrentItem().focus();
      this._focusChange.next();
    }
  }

  ngAfterContentInit() {
    this.initializeFocus();
  }

  private initializeFocus() {
    this.getChildren().map(button => {
      this.setTabIndex(button, -1);
    });
    this.setTabIndex(this.getCurrentItem(), 0);
  }

  @HostListener('keydown', ['$event'])
  handleKeyboardEvent(event: any) {
    if (this.prevClicked(event) && this.currentFocusIsNotFirstItem()) {
      // go to previous unless at first item
      this.keyAction(() => {
        this._current--;
      });
    } else if (this.nextClicked(event) && this.currentFocusIsNotLastItem()) {
      // go to next unless at last item
      this.keyAction(() => {
        this._current++;
      });
    } else if (event.key === 'Home') {
      this.keyAction(() => {
        this._current = 0;
      });
    } else if (event.key === 'End') {
      this.keyAction(() => {
        this._current = this.getChildren().length - 1;
      });
    }
  }

  @HostListener('click', ['$event'])
  handleClickEvent(event: any) {
    const position = this.getPositionOf(event.srcElement as HTMLElement);
    if (position > -1) {
      this._current = position;
      this.initializeFocus();
    }
  }

  getPositionOf(element: HTMLElement) {
    const children = this.getChildren();
    return children.indexOf(element);
  }

  moveTo(position: number, force: boolean = false) {
    if (isPlatformBrowser(this.platformId) && this.positionInRange(position) && (force || position !== this._current)) {
      this._current = position;
      this.getCurrentItem().focus();
      this._focusChange.next();
    }
  }

  private positionInRange(position: number) {
    return position >= 0 && position < this.getChildren().length;
  }

  private keyAction(action: Function) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.setTabIndex(this.getCurrentItem(), -1);
    action.call(this);
    this.setTabIndex(this.getCurrentItem(), 0);
    this.getCurrentItem().focus();
    this._focusChange.next();
    // Prevent window scroll on arrow key pressed
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  private currentFocusIsNotFirstItem() {
    return this._current - 1 >= 0;
  }

  private currentFocusIsNotLastItem() {
    return this._current + 1 < this.getChildren().length;
  }

  // Using indexOf because in IE11 event.key is without "Arrow"
  private prevClicked(event: any) {
    switch (this.direction) {
      case ClrFocusDirection.VERTICAL:
        return event.key.indexOf('Up') > -1;
      case ClrFocusDirection.HORIZONTAL:
        return event.key.indexOf('Left') > -1;
      case ClrFocusDirection.BOTH:
        return event.key.indexOf('Up') > -1 || event.key.indexOf('Left') > -1;
      default:
        return false;
    }
  }

  // Using indexOf because in IE11 event.key is without "Arrow"
  private nextClicked(event: any) {
    switch (this.direction) {
      case ClrFocusDirection.VERTICAL:
        return event.key.indexOf('Down') > -1;
      case ClrFocusDirection.HORIZONTAL:
        return event.key.indexOf('Right') > -1;
      case ClrFocusDirection.BOTH:
        return event.key.indexOf('Down') > -1 || event.key.indexOf('Right') > -1;
      default:
        return false;
    }
  }

  private getChildren(): HTMLElement[] {
    return Array.from(this.elementRef.nativeElement.querySelectorAll(this.selector)) || [];
  }

  private getCurrentItem(): HTMLElement {
    const children = this.getChildren();
    if (this._current >= children.length) {
      return null;
    }
    return children[this._current];
  }

  private setTabIndex(element: HTMLElement, value: number) {
    if (isPlatformBrowser(this.platformId)) {
      element.setAttribute('tabIndex', `${value}`);
    }
  }
}
