/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/*
 * Do NOT Angular this up. It assumes we're in the DOM, plays with native elements, ...
 * It could potentially be used as part of clarity-ui as a vanilla Javascript helper.
 *
 * WARNING: This is a quick prototype version, use at your own risks.
 */

export enum Direction {
    RIGHT
}

export interface PopoverOptions {
    offsetX?: number;
    offsetY?: number;
    userAnchorParent?: boolean;
}

const POSITION_RELATIVE = "relative";
const POSITION_ABSOLUTE = "absolute";
const POSITION_FIXED = "fixed";

const OVERFLOW_SCROLL = "scroll";
const OVERFLOW_AUTO = "auto";

interface InlineOverflow {
    both: string;
    x: string;
    y: string;
}

const OVERFLOW_HIDDEN: InlineOverflow = {
    both: "hidden",
    x: "hidden",
    y: "hidden"
};

export class Popover {
    constructor(private element: any) {
        // Browsers don't agree with what to do if some of these are not specified, so we set them all to be safe.
        element.style.position = POSITION_ABSOLUTE;
        element.style.top = 0;
        element.style.left = 0;
    }

    public anchor(anchor: any, direction: Direction,
                  {offsetX = 0, offsetY = 0, userAnchorParent = false}: PopoverOptions = {}) {
        // TODO: we are assuming here that the popover is inside or next to the anchor.
        // We'd need to go up the popover tree too otherwise
        this.preventScrolling(anchor);
        if (userAnchorParent) {
            anchor = anchor.parentNode;
        }
        let anchorRect = anchor.getBoundingClientRect();
        let popoverRect = this.element.getBoundingClientRect();
        let leftDiff: number;
        let topDiff: number;
        // TODO: obviously, handle direction
        switch (direction) {
            case Direction.RIGHT:
                leftDiff = anchorRect.left + anchorRect.width - popoverRect.left + offsetX;
                topDiff = anchorRect.top + anchorRect.height / 2 - popoverRect.top - popoverRect.height / 2 + offsetY;
                break;
            default:
        }
        this.element.style.transform = `translateX(${leftDiff}px) translateY(${topDiff}px)`;
    }

    public destroy() {
        this.resumeScrolling();
    }

    private isPositioned(container: any) {
        let position = getComputedStyle(container).position;
        return position === POSITION_RELATIVE || position === POSITION_ABSOLUTE || position === POSITION_FIXED;
    }

    /*
     * We prevent the containers up to the first positioned one from scrolling
     */

    private originalOverflows: {e: any, overflow: InlineOverflow}[] = [];

    private preventScrolling(e: any) {
        let current: any = e;
        while (current && current !== document) {
            if (this.scrolls(current)) {
                this.originalOverflows.push({
                    e: current,
                    overflow: this.getInlineOverflow(current)
                });
                this.setInlineOverflow(current, OVERFLOW_HIDDEN);
            }
            if (this.isPositioned(current)) {
                break;
            }
            current = current.parentNode;
        }
    }

    private resumeScrolling() {
        for (let container of this.originalOverflows) {
            this.setInlineOverflow(container.e, container.overflow);
        }
        this.originalOverflows.length = 0;
    }

    private getInlineOverflow(container: any): InlineOverflow {
        return {
            both: container.style.overflow,
            x: container.style.overflowX,
            y: container.style.overflowY
        };
    }

    private setInlineOverflow(container: any, overflow: InlineOverflow) {
        container.style.overflow = overflow.both;
        container.style.overflowX = overflow.x;
        container.style.overflowY = overflow.y;
    }

    private scrolls(container: any): boolean {
        let computedStyles = getComputedStyle(container);
        return computedStyles.overflowX === OVERFLOW_SCROLL || computedStyles.overflowX === OVERFLOW_AUTO
            || computedStyles.overflowY === OVERFLOW_SCROLL || computedStyles.overflowY === OVERFLOW_AUTO;
    }
}