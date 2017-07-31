/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/*
 * This is a hack that we have to write for now because of bugs and limitations in Angular,
 * please do not use this as an example.
 */

import {Directive, ElementRef, Renderer2} from "@angular/core";

import {Expand} from "../../../utils/expand/providers/expand";
import {DomAdapter} from "../render/dom-adapter";
import {DatagridRenderOrganizer} from "../render/render-organizer";

@Directive({selector: "clr-dg-row"})
export class DatagridRowExpandAnimation {
    constructor(private el: ElementRef, private domAdapter: DomAdapter, private renderer: Renderer2,
                private expand: Expand, private renderOrganizer: DatagridRenderOrganizer) {
        expand.animate.subscribe(() => {
            // We already had an animation waiting, so we just have to run in, not prepare again
            if (this.oldHeight) {
                setTimeout(() => this.run());
            } else {
                this.animate();
            }
        });
    }

    private running: any;
    private oldHeight: number;

    /*
     * Dirty manual animation handling, but we have no way to use dynamic heights in Angular's current API.
     * They're working on it, but have no ETA.
     */
    private animate() {
        // Check if we do have web-animations available. If not, just skip the animation.
        if (!this.el.nativeElement.animate) {
            return;
        }

        // We had an animation running, we skip to the end
        if (this.running) {
            this.running.finish();
        }

        this.oldHeight = this.domAdapter.computedHeight(this.el.nativeElement);
        // We set the height of the element immediately to avoid a flicker before the animation starts.
        this.renderer.setStyle(this.el.nativeElement, "height", this.oldHeight + "px");
        this.renderer.setStyle(this.el.nativeElement, "overflow-y", "hidden");
        setTimeout(() => {
            if (this.expand.loading) {
                return;
            }
            this.run();
        });
    }

    private run() {
        this.renderer.setStyle(this.el.nativeElement, "height", null);
        // I don't like realigning the columns before the animation, since the scrollbar could appear or disappear
        // halfway, but that's a compromise we have to make for now. We can look into a smarter fix later.
        this.renderOrganizer.scrollbar.next();
        const newHeight = this.domAdapter.computedHeight(this.el.nativeElement);
        this.running = this.el.nativeElement.animate(
            {height: [this.oldHeight + "px", newHeight + "px"], overflowY: ["hidden", "hidden"], easing: "ease-in-out"},
            {duration: 200});
        this.running.onfinish = () => {
            this.renderer.setStyle(this.el.nativeElement, "overflow-y", null);
            delete this.running;
        };
        delete this.oldHeight;
    }
}
