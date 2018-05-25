/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  AfterViewInit,
  Directive,
  EmbeddedViewRef,
  Input,
  NgZone,
  Renderer2,
  RendererFactory2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import {
  getScrollTop,
  offsetHeight,
  preserveScrollAfterAppend,
  preserveScrollAfterPrepend,
  ratioBottomReady,
  ratioTopReady,
  setScrollTop,
  startListening,
  stopListening,
} from './dom-helpers';
import { isNonNgIterable, NonNgIterable } from './non-ng-iterable';

enum Side {
  START = -1,
  END = 1,
}

// Number of viewport heights we preload on each side. This could very well become an input.
const PRELOAD_MARGIN = 1;

/*
 * INTERNAL, do not use outside of Clarity itself.
 *
 * TODO:
 * - support trackBy
 * - support "snap scroll"
 * - export index
 * - export firstDisplayed and LastDisplayed
 */
@Directive({ selector: '[clrVirtualForOf]' })
export class VirtualForOf<T> implements AfterViewInit {
  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<{ $implicit: T }>,
    renderer: Renderer2,
    private rendererFactory: RendererFactory2,
    private ngZone: NgZone
  ) {
    this.containerEl = <HTMLElement>renderer.parentNode(viewContainer.element.nativeElement);
  }

  private containerEl: HTMLElement;

  // Until we have a way to tell Angular not to iterate over the whole iterable as soon as it's passed as an input,
  // we can't accept an NgIterable here so we have this weird Array | NonNgIterable type.
  private _items: Array<T> | NonNgIterable<T>;
  @Input('clrVirtualForOf')
  set items(value: Array<T> | NonNgIterable<T>) {
    this._items = value;
    // Sadly, I couldn't figure out a way to make this removal synchronous.
    // The removeSynchronously() trick doesn't work because change detection has already called begin() once.
    this.viewContainer.clear();
    this.start = -1;
    this.end = 0;
    this.rendererFactory.whenRenderingDone().then(() => this.fill());
  }

  private start = -1;
  private end = 0;

  /**
   * Computes the offset height of the first/last item in the view
   * @param {Side} side: indicates which item to measure, first or last
   */
  private computeHeight(side: Side) {
    const index = side === Side.START ? 0 : this.viewContainer.length - 1;
    return offsetHeight((<EmbeddedViewRef<{ $implicit: T }>>this.viewContainer.get(index)).rootNodes);
  }

  /**
   * Removes the first/last item from the view
   * @param {Side} side: indicates which item to remove, first or last
   */
  private remove(side: Side) {
    const index = side === Side.START ? 0 : this.viewContainer.length - 1;
    this.viewContainer.remove(index);
    if (side === Side.START) {
      this.start++;
    } else {
      this.end--;
    }
  }

  /**
   * Adds another item from the list to the view
   * @param {Side} side: indicates whether to prepend or append
   * @returns {boolean}: returns true while there are more items, false when the iterator is done
   */
  private add(side: Side): boolean {
    const index = side === Side.START ? this.start : this.end;
    let added;
    if (!this._items) {
      return false;
    }
    if (isNonNgIterable(this._items)) {
      added = this._items.get(index);
    } else {
      added = this._items[index];
    }
    if (typeof added === 'undefined') {
      return false;
    }
    if (side === Side.START) {
      this.start--;
    } else {
      this.end++;
    }
    // We have to detect changes immediately for the height to be correct before adding more items.
    this.viewContainer
      .createEmbeddedView(this.template, { $implicit: added }, side === Side.START ? 0 : undefined)
      .detectChanges();
    return true;
  }

  /**
   * Removes items on one side that are too far from the viewport
   */
  private trimSide(side: Side) {
    let alreadyRemoved = 0;
    while (this.viewContainer.length > 0) {
      const toRemove = this.computeHeight(side);
      const offset = alreadyRemoved + toRemove;
      const ratioReady = side === Side.START ? ratioTopReady : ratioBottomReady;
      if (ratioReady(this.containerEl, offset) < PRELOAD_MARGIN) {
        break;
      }
      this.remove(side);
      alreadyRemoved += toRemove;
    }
  }

  /**
   * Removes all items that are too far from the viewport
   */
  private trim() {
    this.trimSide(Side.START);
    this.trimSide(Side.END);
  }

  /**
   * Adds item on one side of the viewport
   */
  private fillSide(side: Side) {
    const ratioReady = side === Side.START ? ratioTopReady : ratioBottomReady;
    const preserveScroll = side === Side.START ? preserveScrollAfterPrepend : preserveScrollAfterAppend;
    // We load "one viewport" ahead
    while (ratioReady(this.containerEl) < PRELOAD_MARGIN) {
      if (!preserveScroll(this.containerEl, () => this.add(side))) {
        break;
      }
    }
  }

  /**
   * Adds item in and around the viewport
   */
  private fill() {
    this.fillSide(Side.END);
    this.fillSide(Side.START);
  }

  /**
   * Since our update on scroll re-triggers a scroll event, we ignore events where the scrollTop hasn't changed.
   */
  private ignoreScrollTop: number;

  /**
   * Named scroll listener so we can remove it on destroy.
   */
  private scrollListener = () => {
    if (this.ignoreScrollTop === getScrollTop(this.containerEl)) {
      return;
    }
    this.removeSynchronously(() => this.trim());
    this.fill();
    /*
             * Yes, we're using a dirty hack. It fixes an OSX bug with the inertia scrolling that breaks Chrome itself.
             */
    // The scrollTop might have changed so we need to get it a second time here, we can't use the value from
    // above.
    const currentScrollTop = getScrollTop(this.containerEl);
    if (currentScrollTop > 0) {
      this.ngZone.runOutsideAngular(() => {
        requestAnimationFrame(() => {
          this.ignoreScrollTop = currentScrollTop - 1;
          setScrollTop(this.containerEl, currentScrollTop - 1);
          requestAnimationFrame(() => {
            this.ignoreScrollTop = currentScrollTop;
            setScrollTop(this.containerEl, currentScrollTop);
          });
        });
      });
    }
  };

  ngAfterViewInit() {
    // This is called too often on iOS and trackpads, so we need to run it outside of the NgZone
    // and add the event listener directly on the native element rather than use the renderer.
    this.ngZone.runOutsideAngular(() => {
      startListening(this.containerEl, 'scroll', this.scrollListener);
    });
  }

  ngOnDestroy() {
    stopListening(this.containerEl, 'scroll', this.scrollListener);
  }

  /**
   * Allows us to force the renderer to properly update the DOM before moving on.
   */
  private removeSynchronously<R>(operation: () => R): R {
    if (this.rendererFactory.begin) {
      this.rendererFactory.begin();
    }
    const result = operation();
    if (this.rendererFactory.end) {
      this.rendererFactory.end();
    }
    return result;
  }
}
