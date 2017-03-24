/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Popover} from "./popover.js";
import {Point} from "./popover";

describe("Popover", function () {
    let container: HTMLElement;
    let anchor: HTMLElement;
    let popover: HTMLElement;
    let popoverInstance: Popover;

    beforeEach(() => {
        container = document.createElement("div");
        container.id = "container";
        container.style.position = "relative";
        container.style.overflow = "scroll";
        container.style.padding = "60px";

        anchor = document.createElement("div");
        anchor.id = "anchor";
        anchor.style.position = "relative";
        anchor.style.height = "150px";
        anchor.style.width = "150px";

        popover = document.createElement("div");
        popover.id = "popover";
        popover.style.height = "50px";
        popover.style.width = "50px";
        popover.style.margin = "5px";

        document.body.appendChild(container);
        document.getElementById("container").appendChild(anchor);
        document.getElementById("anchor").appendChild(popover);

        popoverInstance = new Popover(popover);
    });

    it("prevents scrolling of its first positioned container", function () {
        popoverInstance.anchor(anchor, null, null);
        expect(container.style.overflow).toEqual("hidden");
    });

    it("resumes scrolling of its first positioned container when destroyed", function () {
        popoverInstance.anchor(anchor, null, null);
        popoverInstance.destroy();
        expect(container.style.overflow).toEqual("scroll");
    });

    // TODO: when time permits, calculate expected values based on values for the elements
    // rather than hard code as we have here; then use string interpolation for the expected value
    it("positions the popover according to align points specified", function () {
        // popovers above the anchor
        popoverInstance.anchor(anchor, Point.TOP_LEFT, Point.BOTTOM_RIGHT);
        expect(popover.style.transform).toEqual("translateX(0px) translateY(0px)");

        popoverInstance.anchor(anchor, Point.TOP_LEFT, Point.BOTTOM_LEFT);
        expect(popover.style.transform).toEqual("translateX(60px) translateY(0px)");

        popoverInstance.anchor(anchor, Point.TOP_CENTER, Point.BOTTOM_RIGHT);
        expect(popover.style.transform).toEqual("translateX(80px) translateY(0px)");

        popoverInstance.anchor(anchor, Point.TOP_CENTER, Point.BOTTOM_CENTER);
        expect(popover.style.transform).toEqual("translateX(105px) translateY(0px)");

        popoverInstance.anchor(anchor, Point.TOP_CENTER, Point.BOTTOM_LEFT);
        expect(popover.style.transform).toEqual("translateX(130px) translateY(0px)");

        popoverInstance.anchor(anchor, Point.TOP_RIGHT, Point.BOTTOM_RIGHT);
        expect(popover.style.transform).toEqual("translateX(150px) translateY(0px)");

        popoverInstance.anchor(anchor, Point.TOP_RIGHT, Point.BOTTOM_LEFT);
        expect(popover.style.transform).toEqual("translateX(210px) translateY(0px)");

        // popovers on the right side of the anchor
        popoverInstance.anchor(anchor, Point.RIGHT_TOP, Point.LEFT_BOTTOM);
        expect(popover.style.transform).toEqual("translateX(210px) translateY(0px)");

        popoverInstance.anchor(anchor, Point.RIGHT_TOP, Point.LEFT_TOP);
        expect(popover.style.transform).toEqual("translateX(210px) translateY(60px)");

        popoverInstance.anchor(anchor, Point.RIGHT_CENTER, Point.LEFT_BOTTOM);
        expect(popover.style.transform).toEqual("translateX(210px) translateY(80px)");

        popoverInstance.anchor(anchor, Point.RIGHT_CENTER, Point.LEFT_CENTER);
        expect(popover.style.transform).toEqual("translateX(210px) translateY(105px)");

        popoverInstance.anchor(anchor, Point.RIGHT_CENTER, Point.LEFT_TOP);
        expect(popover.style.transform).toEqual("translateX(210px) translateY(130px)");

        popoverInstance.anchor(anchor, Point.RIGHT_BOTTOM, Point.LEFT_BOTTOM);
        expect(popover.style.transform).toEqual("translateX(210px) translateY(150px)");

        popoverInstance.anchor(anchor, Point.RIGHT_BOTTOM, Point.LEFT_TOP);
        expect(popover.style.transform).toEqual("translateX(210px) translateY(210px)");

        // popovers below the anchor
        popoverInstance.anchor(anchor, Point.BOTTOM_RIGHT, Point.TOP_LEFT);
        expect(popover.style.transform).toEqual("translateX(210px) translateY(210px)");

        popoverInstance.anchor(anchor, Point.BOTTOM_RIGHT, Point.TOP_RIGHT);
        expect(popover.style.transform).toEqual("translateX(150px) translateY(210px)");

        popoverInstance.anchor(anchor, Point.BOTTOM_CENTER, Point.TOP_LEFT);
        expect(popover.style.transform).toEqual("translateX(130px) translateY(210px)");

        popoverInstance.anchor(anchor, Point.BOTTOM_CENTER, Point.TOP_CENTER);
        expect(popover.style.transform).toEqual("translateX(105px) translateY(210px)");

        popoverInstance.anchor(anchor, Point.BOTTOM_CENTER, Point.TOP_RIGHT);
        expect(popover.style.transform).toEqual("translateX(80px) translateY(210px)");

        popoverInstance.anchor(anchor, Point.BOTTOM_LEFT, Point.TOP_LEFT);
        expect(popover.style.transform).toEqual("translateX(60px) translateY(210px)");

        popoverInstance.anchor(anchor, Point.BOTTOM_LEFT, Point.TOP_RIGHT);
        expect(popover.style.transform).toEqual("translateX(0px) translateY(210px)");

        // popovers on the left side of the anchor (some are covered already by above, so omitted)
        popoverInstance.anchor(anchor, Point.LEFT_BOTTOM, Point.BOTTOM_RIGHT);
        expect(popover.style.transform).toEqual("translateX(0px) translateY(150px)");

        popoverInstance.anchor(anchor, Point.LEFT_CENTER, Point.RIGHT_TOP);
        expect(popover.style.transform).toEqual("translateX(0px) translateY(130px)");

        popoverInstance.anchor(anchor, Point.LEFT_CENTER, Point.RIGHT_CENTER);
        expect(popover.style.transform).toEqual("translateX(0px) translateY(105px)");

        popoverInstance.anchor(anchor, Point.LEFT_CENTER, Point.RIGHT_BOTTOM);
        expect(popover.style.transform).toEqual("translateX(0px) translateY(80px)");

        popoverInstance.anchor(anchor, Point.LEFT_TOP, Point.TOP_RIGHT);
        expect(popover.style.transform).toEqual("translateX(0px) translateY(60px)");

    });

    afterEach(() => {
        document.getElementById("container").remove();
    });
});