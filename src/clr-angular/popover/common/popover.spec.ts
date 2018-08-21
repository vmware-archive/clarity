/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Point, Popover } from './popover';

describe('Popover', function() {
  let container: HTMLElement;
  let anchor: HTMLElement;
  let popover: HTMLElement;
  let popoverInstance: Popover;
  const padding: number = 60;
  const anchorHeight: number = 150;
  const anchorWidth: number = 150;
  const popoverHeight: number = 50;
  const popoverWidth: number = 50;
  const popoverMargin: number = 5;

  beforeEach(() => {
    container = document.createElement('div');
    container.id = 'container';
    container.style.position = 'relative';
    container.style.overflow = 'scroll';
    container.style.padding = `${padding}px`;

    anchor = document.createElement('div');
    anchor.id = 'anchor';
    anchor.style.position = 'relative';
    anchor.style.height = `${anchorHeight}px`;
    anchor.style.width = `${anchorWidth}px`;

    popover = document.createElement('div');
    popover.id = 'popover';
    popover.style.height = `${popoverHeight}px`;
    popover.style.width = `${popoverWidth}px`;
    popover.style.margin = `${popoverMargin}px`;

    document.body.appendChild(container);
    document.getElementById('container').appendChild(anchor);
    document.getElementById('anchor').appendChild(popover);

    popoverInstance = new Popover(popover);
  });

  it('adds a scroll event handler to its first positioned container', function() {
    popoverInstance.anchor(anchor, null, null);
    expect(container.onscroll).toBeDefined();
  });

  it('removes scroll event handler of its first positioned container when released', function() {
    popoverInstance.anchor(anchor, null, null);
    popoverInstance.release();
    expect(container.onscroll).toBeNull();
  });

  it('positions the popover according to align points specified', function() {
    let x: number;
    let y: number;

    // popovers above the anchor
    y = 0;

    popoverInstance.anchor(anchor, Point.TOP_LEFT, Point.BOTTOM_RIGHT);
    x = 0;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.TOP_LEFT, Point.BOTTOM_LEFT);
    x = padding;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.TOP_CENTER, Point.BOTTOM_RIGHT);
    x = padding + anchorWidth / 2 - popoverWidth - popoverMargin;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.TOP_CENTER, Point.BOTTOM_CENTER);
    x = padding + anchorWidth / 2 - popoverWidth / 2 - popoverMargin;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.TOP_CENTER, Point.BOTTOM_LEFT);
    x = padding + anchorWidth / 2 - popoverMargin;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.TOP_RIGHT, Point.BOTTOM_RIGHT);
    x = padding + anchorWidth - popoverWidth - popoverMargin * 2;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.TOP_RIGHT, Point.BOTTOM_LEFT);
    x = padding + anchorWidth;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    // popovers on the right side of the anchor
    x = padding + anchorWidth;

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.RIGHT_TOP, Point.LEFT_BOTTOM);
    y = 0;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.RIGHT_TOP, Point.LEFT_TOP);
    y = padding;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.RIGHT_CENTER, Point.LEFT_BOTTOM);
    y = padding + anchorHeight / 2 - popoverHeight - popoverMargin;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.RIGHT_CENTER, Point.LEFT_CENTER);
    y = padding + anchorHeight / 2 - popoverHeight / 2 - popoverMargin;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.RIGHT_CENTER, Point.LEFT_TOP);
    y = padding + anchorHeight / 2 - popoverMargin;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.RIGHT_BOTTOM, Point.LEFT_BOTTOM);
    y = padding + anchorHeight - popoverHeight - popoverMargin * 2;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.RIGHT_BOTTOM, Point.LEFT_TOP);
    y = padding + anchorHeight;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    // popovers below the anchor
    y = padding + anchorHeight;

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.BOTTOM_RIGHT, Point.TOP_LEFT);
    x = padding + anchorWidth;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.BOTTOM_RIGHT, Point.TOP_RIGHT);
    x = padding + anchorWidth - popoverWidth - popoverMargin * 2;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    x = padding + anchorWidth / 2 - popoverMargin;
    popoverInstance.anchor(anchor, Point.BOTTOM_CENTER, Point.TOP_LEFT);
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.BOTTOM_CENTER, Point.TOP_CENTER);
    x = padding + anchorWidth / 2 - popoverWidth / 2 - popoverMargin;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.BOTTOM_CENTER, Point.TOP_RIGHT);
    x = padding + anchorWidth / 2 - popoverWidth - popoverMargin;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.BOTTOM_LEFT, Point.TOP_LEFT);
    x = padding;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.BOTTOM_LEFT, Point.TOP_RIGHT);
    x = 0;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    // popovers on the left side of the anchor (some are covered already by above, so omitted)
    x = 0;

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.LEFT_BOTTOM, Point.BOTTOM_RIGHT);
    y = padding + anchorHeight - popoverHeight - popoverMargin * 2;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.LEFT_CENTER, Point.RIGHT_TOP);
    y = padding + anchorHeight / 2 - popoverMargin;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.LEFT_CENTER, Point.RIGHT_CENTER);
    y = padding + anchorHeight / 2 - popoverHeight / 2 - popoverMargin;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.LEFT_CENTER, Point.RIGHT_BOTTOM);
    y = padding + anchorHeight / 2 - popoverHeight - popoverMargin;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);

    popover.style.transform = 'none';
    popoverInstance.anchor(anchor, Point.LEFT_TOP, Point.TOP_RIGHT);
    y = padding;
    expect(popover.style.transform).toEqual(`translateX(${Math.round(x)}px) translateY(${Math.round(y)}px)`);
  });

  afterEach(() => {
    /* tslint:disable:no-unused-expression */
    // Polyfill for IE11 `.remove()`
    (function() {
      function remove() {
        this.parentNode && this.parentNode.removeChild(this);
      }
      if (!Element.prototype.remove) {
        Element.prototype.remove = remove;
      }
    })();
    /* tslint:enable:no-unused-expression */

    document.getElementById('container').remove();
  });
});
