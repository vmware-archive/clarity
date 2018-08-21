/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/*
 * Do NOT Angular this up. It assumes we're in the DOM, plays with native elements, ...
 * It could potentially be used as part of @clr/ui as a vanilla Javascript helper.
 */

import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { PopoverOptions } from './popover-options.interface';
export enum Point {
  RIGHT_CENTER,
  RIGHT_TOP,
  RIGHT_BOTTOM,
  TOP_CENTER,
  TOP_RIGHT,
  TOP_LEFT,
  BOTTOM_CENTER,
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
  LEFT_CENTER,
  LEFT_TOP,
  LEFT_BOTTOM,
}

const POSITION_RELATIVE = 'relative';
const POSITION_ABSOLUTE = 'absolute';
const POSITION_FIXED = 'fixed';

const OVERFLOW_SCROLL = 'scroll';
const OVERFLOW_AUTO = 'auto';

export class Popover {
  private _scroll: Subject<void>;

  constructor(private element: any) {
    // Browsers don't agree with what to do if some of these are not specified, so we set them all to be safe.
    element.style.position = POSITION_ABSOLUTE;
    element.style.top = 0;
    element.style.bottom = 'auto';
    element.style.left = 0;
    element.style.right = 'auto';
  }

  // TODO: need a way to account for parameters that change dynamically (positioning).
  public anchor(
    anchor: any,
    anchorAlign: Point,
    popoverAlign: Point,
    { offsetX = 0, offsetY = 0, useAnchorParent = false }: PopoverOptions = {}
  ): Observable<any> {
    // TODO: we are assuming here that the popover is inside or next to the anchor.
    // We'd need to go up the popover tree too otherwise

    this.addScrollEventListeners(anchor);
    if (useAnchorParent) {
      anchor = anchor.parentNode;
    }
    // explicitly override anchor's style to static
    anchor.style.position = 'static';

    const anchorRect = anchor.getBoundingClientRect();
    const popoverRect = this.element.getBoundingClientRect();

    // position of left top corner of anchor + the offset
    let leftDiff: number = anchorRect.left - popoverRect.left + offsetX;
    let topDiff: number = anchorRect.top - popoverRect.top + offsetY;

    // first, adjust positioning based on anchor's align point
    switch (anchorAlign) {
      case Point.LEFT_TOP:
      case Point.TOP_LEFT:
        break;
      case Point.TOP_CENTER:
        leftDiff += anchorRect.width / 2;
        break;
      case Point.TOP_RIGHT:
        leftDiff += anchorRect.width;
        break;
      case Point.RIGHT_TOP:
        leftDiff += anchorRect.width;
        break;
      case Point.LEFT_BOTTOM:
        topDiff += anchorRect.height;
        break;
      case Point.BOTTOM_LEFT:
        topDiff += anchorRect.height;
        break;
      case Point.BOTTOM_CENTER:
        topDiff += anchorRect.height;
        leftDiff += anchorRect.width / 2;
        break;
      case Point.BOTTOM_RIGHT:
        topDiff += anchorRect.height;
        leftDiff += anchorRect.width;
        break;
      case Point.RIGHT_BOTTOM:
        topDiff += anchorRect.height;
        leftDiff += anchorRect.width;
        break;
      case Point.LEFT_CENTER:
        topDiff += anchorRect.height / 2;
        break;
      case Point.RIGHT_CENTER:
        topDiff += anchorRect.height / 2;
        leftDiff += anchorRect.width;
        break;
      default:
    }

    // second, adjust positioning based on popover's align point
    switch (popoverAlign) {
      case Point.LEFT_TOP:
      case Point.TOP_LEFT:
        break;
      case Point.TOP_CENTER:
        leftDiff -= popoverRect.width / 2;
        break;
      case Point.TOP_RIGHT:
        leftDiff -= popoverRect.width;
        break;
      case Point.RIGHT_TOP:
        leftDiff -= popoverRect.width;
        break;
      case Point.LEFT_BOTTOM:
        topDiff -= popoverRect.height;
        break;
      case Point.BOTTOM_LEFT:
        topDiff -= popoverRect.height;
        break;
      case Point.BOTTOM_CENTER:
        topDiff -= popoverRect.height;
        leftDiff -= popoverRect.width / 2;
        break;
      case Point.BOTTOM_RIGHT:
        topDiff -= popoverRect.height;
        leftDiff -= popoverRect.width;
        break;
      case Point.RIGHT_BOTTOM:
        topDiff -= popoverRect.height;
        leftDiff -= popoverRect.width;
        break;
      case Point.LEFT_CENTER:
        topDiff -= popoverRect.height / 2;
        break;
      case Point.RIGHT_CENTER:
        topDiff -= popoverRect.height / 2;
        leftDiff -= popoverRect.width;
        break;
      default:
    }

    // Third, adjust with popover's margins based on the two align points.
    // Here, we make an assumption that popover is primarily positioned outside the
    // anchor with minor offset. Without this assumption, it's impossible to apply
    // the popover's margins in a predictable way. For example, assume that a popover
    // and its anchor are exactly the same size. if a popover is positioned inside the
    // anchor (which is technically possible), then it becomes impossible to know what to do
    // if the popover has a non-zero margin value all around (because applying the margin in
    // all four directions will result in no margin visually, which isn't what we want).
    // Therefore, our logic makes assumptions about margins of interest given the points,
    // and only covers the cases where popover is outside the anchor.

    const popoverComputedStyle = getComputedStyle(this.element);
    const marginLeft = parseInt(popoverComputedStyle.marginLeft, 10);
    const marginRight = parseInt(popoverComputedStyle.marginRight, 10);
    const marginTop = parseInt(popoverComputedStyle.marginTop, 10);
    const marginBottom = parseInt(popoverComputedStyle.marginBottom, 10);

    switch (anchorAlign) {
      case Point.LEFT_TOP:
      case Point.TOP_LEFT:
      case Point.TOP_RIGHT:
      case Point.RIGHT_TOP:
        if (popoverAlign === Point.BOTTOM_RIGHT || popoverAlign === Point.RIGHT_BOTTOM) {
          topDiff -= marginBottom;
          leftDiff -= marginRight;
        }
        if (popoverAlign === Point.BOTTOM_LEFT || popoverAlign === Point.LEFT_BOTTOM) {
          topDiff -= marginTop;
          leftDiff += marginLeft;
        }
        if (popoverAlign === Point.TOP_LEFT || popoverAlign === Point.LEFT_TOP) {
          topDiff += marginTop;
          leftDiff += marginLeft;
        }
        if (popoverAlign === Point.TOP_RIGHT || popoverAlign === Point.RIGHT_TOP) {
          topDiff += marginTop;
          leftDiff -= marginRight;
        }
        break;
      case Point.LEFT_BOTTOM:
      case Point.BOTTOM_LEFT:
      case Point.BOTTOM_RIGHT:
      case Point.RIGHT_BOTTOM:
        if (popoverAlign === Point.BOTTOM_LEFT || popoverAlign === Point.LEFT_BOTTOM) {
          topDiff -= marginBottom;
          leftDiff += marginLeft;
        }
        if (popoverAlign === Point.BOTTOM_RIGHT || popoverAlign === Point.RIGHT_BOTTOM) {
          topDiff -= marginBottom;
          leftDiff -= marginRight;
        }
        if (popoverAlign === Point.TOP_LEFT || popoverAlign === Point.LEFT_TOP) {
          topDiff += marginTop;
          leftDiff += marginLeft;
        }
        if (popoverAlign === Point.TOP_RIGHT || popoverAlign === Point.RIGHT_TOP) {
          topDiff += marginTop;
          leftDiff -= marginRight;
        }
        break;
      case Point.TOP_CENTER:
        topDiff -= marginBottom;
        leftDiff += marginLeft;
        leftDiff -= marginRight;
        break;
      case Point.BOTTOM_CENTER:
        topDiff += marginTop;
        leftDiff += marginLeft;
        leftDiff -= marginRight;
        break;
      case Point.LEFT_CENTER:
        topDiff += marginTop;
        topDiff -= marginBottom;
        leftDiff -= marginRight;
        break;
      case Point.RIGHT_CENTER:
        topDiff += marginTop;
        topDiff -= marginBottom;
        leftDiff += marginLeft;
        break;
      default:
    }

    this.element.style.transform = `translateX(${Math.round(leftDiff)}px) translateY(${Math.round(topDiff)}px)`;
    return this._scroll.asObservable();
  }

  public release() {
    this.element.style.transform = '';
    this.removeScrollEventListeners();
  }

  private isPositioned(container: any) {
    const position = getComputedStyle(container).position;
    return position === POSITION_RELATIVE || position === POSITION_ABSOLUTE || position === POSITION_FIXED;
  }

  /*
     * Containers up to the first positioned one will have an event on scroll
     */

  private scrollableElements: HTMLElement[] = [];

  private emitScrollEvent() {
    this._scroll.next();
  }

  private boundOnScrollListener: any = this.emitScrollEvent.bind(this);

  private addScrollEventListeners(e: any) {
    this._scroll = new Subject<void>();
    const anchor: any = e;
    let current: any = e;
    while (current && current !== document) {
      if (this.scrolls(current)) {
        current.addEventListener('scroll', this.boundOnScrollListener);
        this.scrollableElements.push(current);
      }
      if (current !== anchor && this.isPositioned(current)) {
        break;
      }
      current = current.parentNode;
    }
  }

  private removeScrollEventListeners() {
    for (const elem of this.scrollableElements) {
      elem.removeEventListener('scroll', this.boundOnScrollListener);
    }
    this.scrollableElements.length = 0;
    if (this._scroll) {
      this._scroll.complete();
      delete this._scroll;
    }
  }

  private scrolls(container: any): boolean {
    const computedStyles = getComputedStyle(container);
    return (
      computedStyles.overflowX === OVERFLOW_SCROLL ||
      computedStyles.overflowX === OVERFLOW_AUTO ||
      computedStyles.overflowY === OVERFLOW_SCROLL ||
      computedStyles.overflowY === OVERFLOW_AUTO
    );
  }
}
