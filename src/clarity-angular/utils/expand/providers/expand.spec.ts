/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Expand} from "./expand";

export default function(): void {
    describe("Expand provider", function() {
        beforeEach(function() {
            this.expand = new Expand();
        });

        it("starts with the correct default settings", function() {
            expect(this.expand.expandable).toBe(0, "not expandable");
            expect(this.expand.replace).toBe(false, "not replacing the row");
            expect(this.expand.loading).toBe(false, "already loaded");
            expect(this.expand.expanded).toBe(false, "collapsed");
        });

        it("implements LoadingListener", function() {
            this.expand.startLoading();
            expect(this.expand.loading).toBe(true);
            this.expand.doneLoading();
            expect(this.expand.loading).toBe(false);
        });

        it("prepares the animation before requesting to expand", function() {
            let listeners: string[] = [];
            this.expand.animate.subscribe(() => listeners.push("animate"));
            this.expand.expandChange.subscribe(() => listeners.push("expand"));
            this.expand.expanded = true;
            expect(listeners).toEqual(["animate", "expand"]);
        });

        it("re-triggers animation when done loading", function() {
            let animates = 0;
            this.expand.animate.subscribe(() => animates++);
            this.expand.startLoading();
            this.expand.expanded = true;
            expect(animates).toBe(1);
            this.expand.doneLoading();
            expect(animates).toBe(2);
        });
    });
};
